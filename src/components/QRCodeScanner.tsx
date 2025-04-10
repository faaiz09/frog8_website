import React, { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, Camera, QrCode, X } from "lucide-react";

interface QRCodeScannerProps {
  onScanSuccess?: (result: string) => void;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const QRCodeScanner = ({
  onScanSuccess = (result) => console.log("QR Code scanned:", result),
  isOpen = true,
  onOpenChange = () => {},
}: QRCodeScannerProps) => {
  const [activeTab, setActiveTab] = useState<string>("camera");
  const [scanning, setScanning] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [cameraPermission, setCameraPermission] = useState<boolean | null>(
    null,
  );
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scanIntervalRef = useRef<number | null>(null);

  // Mock function to simulate QR code detection
  const mockScanQRCode = () => {
    // Simulate processing time
    setTimeout(() => {
      setScanning(false);
      onScanSuccess("https://investor.frog8.com/login?ref=QR123");
      onOpenChange(false);
    }, 2000);
  };

  const startCamera = async () => {
    setError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setCameraPermission(true);
        setScanning(true);

        // In a real implementation, we would scan the video frames for QR codes
        // For this UI scaffolding, we'll use a mock function
        mockScanQRCode();
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
      setCameraPermission(false);
      setError(
        "Camera access denied. Please grant permission to use your camera.",
      );
      setScanning(false);
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }

    if (scanIntervalRef.current) {
      clearInterval(scanIntervalRef.current);
      scanIntervalRef.current = null;
    }

    setScanning(false);
  };

  const handleUploadQRCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        // In a real implementation, we would process the image to detect QR codes
        // For this UI scaffolding, we'll use a mock function
        setScanning(true);
        mockScanQRCode();
      };
      img.src = reader.result as string;
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    if (isOpen && activeTab === "camera") {
      startCamera();
    }

    return () => {
      stopCamera();
    };
  }, [isOpen, activeTab]);

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-background">
        <DialogHeader>
          <DialogTitle>Scan QR Code</DialogTitle>
          <DialogDescription>
            Scan the QR code to access the investor portal
          </DialogDescription>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="camera">Camera</TabsTrigger>
            <TabsTrigger value="upload">Upload Image</TabsTrigger>
          </TabsList>

          <TabsContent value="camera" className="mt-4">
            <Card className="bg-muted">
              <CardContent className="p-0 relative overflow-hidden rounded-md aspect-video">
                {error && (
                  <Alert variant="destructive" className="m-4">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <div className="relative w-full h-full bg-black flex items-center justify-center">
                  <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    muted
                    className="w-full h-full object-cover"
                  />

                  {scanning && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <div className="relative">
                        <div className="w-48 h-48 border-2 border-primary rounded-lg"></div>
                        <Loader2 className="w-8 h-8 text-primary animate-spin absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                      </div>
                    </div>
                  )}

                  {!scanning && cameraPermission === false && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                      <Camera className="w-12 h-12 text-muted-foreground mb-2" />
                      <p className="text-muted-foreground mb-4">
                        Camera access is required to scan QR codes
                      </p>
                      <Button onClick={startCamera}>Grant Camera Access</Button>
                    </div>
                  )}
                </div>

                <canvas ref={canvasRef} className="hidden" />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="upload" className="mt-4">
            <Card>
              <CardContent className="pt-6 flex flex-col items-center">
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 w-full flex flex-col items-center justify-center">
                  <QrCode className="w-12 h-12 text-muted-foreground mb-4" />
                  <p className="text-center text-muted-foreground mb-4">
                    Upload an image containing a QR code
                  </p>

                  <div className="relative">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleUploadQRCode}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <Button variant="outline" className="relative z-10">
                      Select Image
                    </Button>
                  </div>

                  {scanning && (
                    <div className="mt-4 flex items-center">
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      <span>Processing image...</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="flex justify-between mt-4">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            <X className="w-4 h-4 mr-2" />
            Cancel
          </Button>

          {activeTab === "camera" &&
            !scanning &&
            cameraPermission !== false && (
              <Button onClick={startCamera}>
                <Camera className="w-4 h-4 mr-2" />
                Start Scanning
              </Button>
            )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QRCodeScanner;
