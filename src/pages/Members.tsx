import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, Github } from "lucide-react";

const Members = () => {
  const members = [
    {
      name: "Dr. Jane Smith",
      role: "Principal Investigator",
      expertise: ["Medical Informatics", "Deep Learning", "Healthcare AI"],
      bio: "Leading researcher with 15+ years of experience in medical AI and clinical informatics.",
      email: "jane.smith@speechcare.org",
    },
    {
      name: "Dr. Alex Johnson",
      role: "Senior Research Scientist",
      expertise: ["Computer Vision", "Medical Imaging", "Neural Networks"],
      bio: "Specializes in applying deep learning to medical imaging analysis and diagnostic systems.",
      email: "alex.johnson@speechcare.org",
    },
    {
      name: "Dr. Maria Garcia",
      role: "Research Scientist",
      expertise: ["NLP", "Speech Recognition", "Clinical NLP"],
      bio: "Expert in natural language processing for healthcare applications and clinical text analysis.",
      email: "maria.garcia@speechcare.org",
    },
    {
      name: "Dr. David Chen",
      role: "Research Scientist",
      expertise: ["Machine Learning", "Predictive Analytics", "EHR Systems"],
      bio: "Focuses on predictive modeling and analytics using electronic health records.",
      email: "david.chen@speechcare.org",
    },
    {
      name: "Sarah Williams",
      role: "PhD Candidate",
      expertise: ["Deep Learning", "Signal Processing", "Biosensors"],
      bio: "Researching real-time patient monitoring systems using multi-modal biosensor data.",
      email: "sarah.williams@speechcare.org",
    },
    {
      name: "Michael Brown",
      role: "PhD Candidate",
      expertise: ["Reinforcement Learning", "Clinical Decision Support", "AI Ethics"],
      bio: "Developing ethical AI frameworks for clinical decision support systems.",
      email: "michael.brown@speechcare.org",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 animate-fade-in">
            Our Team
          </h1>
          <p className="text-lg text-muted-foreground mb-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Meet the researchers and scientists driving innovation in medical informatics and AI at SpeechCARE.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {members.map((member, index) => (
              <Card
                key={index}
                className="shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <CardTitle className="text-2xl font-heading mb-1">{member.name}</CardTitle>
                      <Badge className="mb-3">{member.role}</Badge>
                    </div>
                  </div>
                  <CardDescription className="text-base">{member.bio}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold mb-2">Areas of Expertise</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((area, areaIndex) => (
                          <Badge key={areaIndex} variant="outline" className="text-xs">
                            {area}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-4 pt-2">
                      <a
                        href={`mailto:${member.email}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Email"
                      >
                        <Mail className="h-4 w-4" />
                      </a>
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                      <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="GitHub"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
