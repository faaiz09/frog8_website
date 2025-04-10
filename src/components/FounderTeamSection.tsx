import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TeamMemberProps {
  name: string;
  title: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
}

const TeamMember = ({
  name,
  title,
  bio,
  image,
  linkedin,
  twitter,
  email,
}: TeamMemberProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col items-center text-center"
    >
      <div className="relative mb-4 group">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-green-500/20 transition-all duration-300 group-hover:border-green-500">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background text-primary hover:text-primary-foreground hover:bg-primary rounded-full p-1.5 shadow-md transition-colors duration-200"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          )}
          {twitter && (
            <a
              href={twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background text-primary hover:text-primary-foreground hover:bg-primary rounded-full p-1.5 shadow-md transition-colors duration-200"
            >
              <Twitter className="w-4 h-4" />
            </a>
          )}
          {email && (
            <a
              href={`mailto:${email}`}
              className="bg-background text-primary hover:text-primary-foreground hover:bg-primary rounded-full p-1.5 shadow-md transition-colors duration-200"
            >
              <Mail className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-sm text-muted-foreground mb-2">{title}</p>
      <p className="text-sm max-w-xs">{bio}</p>
    </motion.div>
  );
};

const FounderTeamSection = () => {
  const teamMembers: TeamMemberProps[] = [
    {
      name: "Rahul Sharma",
      title: "CEO & Co-Founder",
      bio: "Ex-Paytm, IIT Delhi. 10+ years in fintech and transit solutions. Led multiple successful payment infrastructure projects.",
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&q=80",
      linkedin: "#",
      twitter: "#",
      email: "rahul@frog8.com",
    },
    {
      name: "Priya Patel",
      title: "CTO & Co-Founder",
      bio: "Ex-Google, IIT Bombay. Expert in scalable payment systems and transit tech. Led engineering teams at multiple startups.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
      linkedin: "#",
      twitter: "#",
      email: "priya@frog8.com",
    },
    {
      name: "Vikram Mehta",
      title: "COO",
      bio: "Ex-BMRCL, IIM Ahmedabad. Deep expertise in transit operations and public-private partnerships in the transportation sector.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
      linkedin: "#",
      email: "vikram@frog8.com",
    },
    {
      name: "Ananya Singh",
      title: "Head of Product",
      bio: "Ex-PhonePe, IIIT Hyderabad. Specializes in UX design for fintech products with focus on accessibility and user adoption.",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
      linkedin: "#",
      twitter: "#",
      email: "ananya@frog8.com",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mb-4"></div>
          <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
            Meet the visionaries behind Frog8's revolutionary transit payment
            solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Our team combines expertise from fintech, transit operations, and
            technology to create India's most innovative transit payment
            infrastructure.
          </p>
          <Button variant="outline">Meet the Full Team</Button>
        </div>
      </div>
    </section>
  );
};

export default FounderTeamSection;
