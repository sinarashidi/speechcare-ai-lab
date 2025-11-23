import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Diagnostic Assistant",
      description: "Developing deep learning models to assist clinicians in early disease detection through medical imaging analysis.",
      tags: ["Deep Learning", "Medical Imaging", "Computer Vision"],
      status: "Active",
    },
    {
      title: "Speech Pattern Analysis for Neurological Disorders",
      description: "Using advanced NLP and speech recognition to identify early markers of neurological conditions through voice analysis.",
      tags: ["NLP", "Speech Recognition", "Neurology"],
      status: "Active",
    },
    {
      title: "Predictive Healthcare Analytics",
      description: "Building machine learning models to predict patient outcomes and optimize treatment pathways using EHR data.",
      tags: ["Machine Learning", "EHR", "Predictive Analytics"],
      status: "Active",
    },
    {
      title: "Multi-Modal Patient Monitoring System",
      description: "Integrating diverse data sources to create comprehensive patient monitoring solutions for ICU environments.",
      tags: ["IoT", "Real-time Analytics", "Critical Care"],
      status: "In Development",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 animate-fade-in">
            Research Projects
          </h1>
          <p className="text-lg text-muted-foreground mb-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Explore our ongoing research initiatives at the intersection of AI, deep learning, and medical informatics.
          </p>

          <div className="space-y-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-2xl font-heading">{project.title}</CardTitle>
                    <Badge variant={project.status === "Active" ? "default" : "secondary"}>
                      {project.status}
                    </Badge>
                  </div>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
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

export default Projects;
