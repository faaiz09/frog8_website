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
      name: "Vinayak Prasad",
      title: "Founder & Director",
      bio: "Vinayak, until recently was the CEO and MD of Forbes Technosys a leading provider of self-service automation and FINTECH based solutions. He is a payment expert with nearly 25 years in Financial Services & Fintech domains. His experience spans emerging and mature markets.",
      image:
        "/team/vinayak_prasad.jpg",
      linkedin: "#",
      twitter: "#",
      email: "vinayak@frog8.com",
    },
    {
      name: "Sunil Kulkarni",
      title: "Director",
      bio: "Sunil has 35 years of cross-industry experience in technology-led businesses. In his last assignment, he was the Joint Managing Director for Oxigen Services, a Financial Inclusion, Mobile Wallet & Retail Payment Solution company he helped build over 15 years.",
      image:
        "/team/sunil_kulkarni.jpg",
      linkedin: "#",
      email: "sunil@frog8.com",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the Team</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mb-4"></div>
          <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
            The leadership behind Frog8's innovative transit payment solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Our leadership team combines decades of expertise in fintech, payment systems, 
            and technology infrastructure to revolutionize transit payment solutions in India.
          </p>
          <Button variant="outline">Contact Our Team</Button>
        </div>
      </div>
    </section>
  );
};

export default FounderTeamSection;
