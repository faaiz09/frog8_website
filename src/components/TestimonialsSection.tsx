import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  image?: string;
}

const Testimonial = ({ quote, name, title, image }: TestimonialProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Card className="h-full">
        <CardContent className="p-6 flex flex-col h-full">
          <div className="mb-4 text-green-500">
            <Quote className="h-8 w-8 rotate-180" />
          </div>
          <p className="text-lg mb-6 flex-grow">{quote}</p>
          <div className="flex items-center mt-auto">
            {image && (
              <div className="mr-4">
                <img
                  src={image}
                  alt={name}
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>
            )}
            <div>
              <h4 className="font-bold">{name}</h4>
              <p className="text-sm text-muted-foreground">{title}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  const testimonials: TestimonialProps[] = [
    {
      quote:
        "Since Frog8's kiosks came in, lines at the counter are half what they used to be. The WhatsApp ticketing has been a game-changer for our commuters.",
      name: "Rajesh Kumar",
      title: "Station Manager, BMRCL",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    },
    {
      quote:
        "The integration with Federal Bank for NCMC cards has been seamless. Frog8's technical expertise and understanding of transit payment needs is exceptional.",
      name: "Meera Iyer",
      title: "VP of Partnerships, Federal Bank",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    },
    {
      quote:
        "As a daily commuter, Frog8's app has simplified my metro travel. I can buy tickets, top up my card, and even get offers from nearby stores all in one place.",
      name: "Arjun Nair",
      title: "Daily Metro Commuter",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    },
    {
      quote:
        "The data analytics provided by Frog8 has given us unprecedented insights into commuter patterns, helping us optimize our operations and improve service.",
      name: "Sunita Reddy",
      title: "Operations Director, BMRCL",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&q=80",
    },
    {
      quote:
        "Implementing Frog8's payment infrastructure has increased our throughput by 30% during peak hours. Their technology is robust and reliable.",
      name: "Vikram Desai",
      title: "CTO, Metro Transit Authority",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80",
    },
    {
      quote:
        "The customer support from Frog8 has been exceptional. Any issues are resolved quickly, and they're always looking for ways to improve the system.",
      name: "Priya Sharma",
      title: "Customer Service Manager, BMRCL",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
    },
  ];

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
            What People Say
          </h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mb-4"></div>
          <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
            Hear from our partners, transit authorities, and commuters
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
