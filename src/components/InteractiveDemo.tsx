import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  CreditCard,
  QrCode,
  Smartphone,
  Ticket,
  Plus,
  Check,
  Loader2,
} from "lucide-react";

const InteractiveDemo = () => {
  const [activeTab, setActiveTab] = useState("buy-ticket");
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [ticketType, setTicketType] = useState("");
  const [cardBalance, setCardBalance] = useState(250);
  const [topUpAmount, setTopUpAmount] = useState(100);

  const handleBuyTicket = () => {
    if (!ticketType) return;
    setShowPaymentDialog(true);
  };

  const handleTopUp = () => {
    setShowPaymentDialog(true);
  };

  const processPayment = () => {
    if (!paymentMethod) return;

    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);

      if (activeTab === "top-up") {
        setCardBalance(cardBalance + topUpAmount);
      }

      // Reset after showing success
      setTimeout(() => {
        setIsSuccess(false);
        setShowPaymentDialog(false);
        setPaymentMethod("");
      }, 2000);
    }, 2000);
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Try It Yourself
          </h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mb-4"></div>
          <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
            Experience how easy it is to use Frog8's transit payment solutions
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-100 p-4 rounded-lg mb-8 text-center">
            <div className="flex items-center justify-center mb-2">
              <CreditCard className="h-5 w-5 mr-2 text-green-500" />
              <h3 className="font-bold">NCMC Card Balance</h3>
            </div>
            <div className="text-3xl font-bold text-green-500">
              ₹{cardBalance}
            </div>
          </div>

          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="buy-ticket">
                <Ticket className="h-4 w-4 mr-2" />
                Buy Ticket
              </TabsTrigger>
              <TabsTrigger value="top-up">
                <Plus className="h-4 w-4 mr-2" />
                Top Up Card
              </TabsTrigger>
            </TabsList>

            <TabsContent value="buy-ticket" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="ticket-type">Select Ticket Type</Label>
                      <Select value={ticketType} onValueChange={setTicketType}>
                        <SelectTrigger id="ticket-type">
                          <SelectValue placeholder="Select ticket type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="single">
                            Single Journey (₹30)
                          </SelectItem>
                          <SelectItem value="return">
                            Return Journey (₹50)
                          </SelectItem>
                          <SelectItem value="day-pass">
                            Day Pass (₹100)
                          </SelectItem>
                          <SelectItem value="group">
                            Group Ticket - 5 People (₹120)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="from-station">From Station</Label>
                      <Select>
                        <SelectTrigger id="from-station">
                          <SelectValue placeholder="Select origin station" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="majestic">Majestic</SelectItem>
                          <SelectItem value="indiranagar">
                            Indiranagar
                          </SelectItem>
                          <SelectItem value="mg-road">MG Road</SelectItem>
                          <SelectItem value="whitefield">Whitefield</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="to-station">To Station</Label>
                      <Select>
                        <SelectTrigger id="to-station">
                          <SelectValue placeholder="Select destination station" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="majestic">Majestic</SelectItem>
                          <SelectItem value="indiranagar">
                            Indiranagar
                          </SelectItem>
                          <SelectItem value="mg-road">MG Road</SelectItem>
                          <SelectItem value="whitefield">Whitefield</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button
                      className="w-full"
                      onClick={handleBuyTicket}
                      disabled={!ticketType}
                    >
                      <Ticket className="h-4 w-4 mr-2" />
                      Buy Ticket
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="top-up" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="top-up-amount">Select Amount</Label>
                      <Select
                        value={topUpAmount.toString()}
                        onValueChange={(value) =>
                          setTopUpAmount(parseInt(value))
                        }
                      >
                        <SelectTrigger id="top-up-amount">
                          <SelectValue placeholder="Select amount" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="100">₹100</SelectItem>
                          <SelectItem value="200">₹200</SelectItem>
                          <SelectItem value="500">₹500</SelectItem>
                          <SelectItem value="1000">₹1000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="card-number">Card Number</Label>
                      <Input
                        id="card-number"
                        placeholder="NCMC Card Number"
                        value="4321 XXXX XXXX 1234"
                        disabled
                      />
                    </div>

                    <Button className="w-full" onClick={handleTopUp}>
                      <Plus className="h-4 w-4 mr-2" />
                      Top Up Card
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <Dialog open={showPaymentDialog} onOpenChange={setShowPaymentDialog}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  {isSuccess
                    ? "Payment Successful!"
                    : activeTab === "buy-ticket"
                      ? "Complete Your Purchase"
                      : "Top Up Your Card"}
                </DialogTitle>
                <DialogDescription>
                  {isSuccess
                    ? activeTab === "buy-ticket"
                      ? "Your ticket has been issued successfully."
                      : `Your card has been topped up with ₹${topUpAmount}.`
                    : "Select your preferred payment method."}
                </DialogDescription>
              </DialogHeader>

              {!isSuccess && (
                <div className="grid grid-cols-2 gap-4 py-4">
                  <Button
                    variant={paymentMethod === "upi" ? "default" : "outline"}
                    className="flex flex-col items-center justify-center h-24"
                    onClick={() => setPaymentMethod("upi")}
                  >
                    <QrCode className="h-8 w-8 mb-2" />
                    <span>UPI / QR</span>
                  </Button>
                  <Button
                    variant={paymentMethod === "card" ? "default" : "outline"}
                    className="flex flex-col items-center justify-center h-24"
                    onClick={() => setPaymentMethod("card")}
                  >
                    <CreditCard className="h-8 w-8 mb-2" />
                    <span>Credit / Debit Card</span>
                  </Button>
                  <Button
                    variant={paymentMethod === "wallet" ? "default" : "outline"}
                    className="flex flex-col items-center justify-center h-24"
                    onClick={() => setPaymentMethod("wallet")}
                  >
                    <Smartphone className="h-8 w-8 mb-2" />
                    <span>Mobile Wallet</span>
                  </Button>
                  <Button
                    variant={paymentMethod === "ncmc" ? "default" : "outline"}
                    className="flex flex-col items-center justify-center h-24"
                    onClick={() => setPaymentMethod("ncmc")}
                  >
                    <CreditCard className="h-8 w-8 mb-2" />
                    <span>NCMC Card Balance</span>
                  </Button>
                </div>
              )}

              <DialogFooter>
                {isSuccess ? (
                  <div className="w-full flex justify-center">
                    <Check className="h-8 w-8 text-green-500" />
                  </div>
                ) : (
                  <Button
                    onClick={processPayment}
                    disabled={!paymentMethod || isProcessing}
                    className="w-full"
                  >
                    {isProcessing ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      "Pay Now"
                    )}
                  </Button>
                )}
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>This is a demonstration of the Frog8 payment experience.</p>
          <p>
            In the real app, you would be able to complete actual transactions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;
