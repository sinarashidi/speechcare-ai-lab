import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const Publications = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const publications = [
    {
      title: "Deep Learning Approaches for Early Alzheimer's Detection from Speech Patterns",
      authors: "Smith, J., Johnson, A., & Williams, B.",
      venue: "Journal of Medical Informatics",
      year: 2024,
      type: "Journal Article",
      abstract: "This study presents novel deep learning architectures for detecting early signs of Alzheimer's disease through analysis of speech patterns. Our model achieves 92% accuracy in identifying subtle linguistic and acoustic markers associated with early-stage cognitive decline.",
    },
    {
      title: "Multi-Modal Fusion for Improved Medical Image Diagnosis",
      authors: "Johnson, A., Smith, J., & Davis, M.",
      venue: "International Conference on Medical AI",
      year: 2024,
      type: "Conference Paper",
      abstract: "We propose a novel multi-modal fusion framework that combines CT, MRI, and PET scan data to enhance diagnostic accuracy. Our approach demonstrates significant improvements over single-modality methods across multiple disease categories.",
    },
    {
      title: "Attention-Based Models for Clinical Note Generation",
      authors: "Williams, B., & Chen, L.",
      venue: "arXiv preprint",
      year: 2024,
      type: "Preprint",
      abstract: "This work introduces an attention-based transformer model for automated clinical note generation from patient-physician conversations. The model reduces documentation time while maintaining clinical accuracy and completeness.",
    },
    {
      title: "Predictive Analytics for ICU Patient Outcomes Using EHR Data",
      authors: "Davis, M., Johnson, A., & Lee, K.",
      venue: "Journal of Healthcare Technology",
      year: 2023,
      type: "Journal Article",
      abstract: "We develop machine learning models that leverage electronic health record data to predict ICU patient outcomes with high precision. Our approach identifies key risk factors and provides actionable insights for clinical decision-making.",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 animate-fade-in">
            Publications
          </h1>
          <p className="text-lg text-muted-foreground mb-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Our latest research papers, preprints, and conference proceedings in medical informatics and AI.
          </p>

          <div className="space-y-4">
            {publications.map((pub, index) => (
              <Collapsible
                key={index}
                open={openItems.includes(index)}
                onOpenChange={() => toggleItem(index)}
              >
                <Card
                  className="shadow-card hover:shadow-hover transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CollapsibleTrigger className="w-full text-left">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className="text-xs">
                              {pub.type}
                            </Badge>
                            <Badge variant="secondary" className="text-xs">
                              {pub.year}
                            </Badge>
                          </div>
                          <CardTitle className="text-xl font-heading mb-2">{pub.title}</CardTitle>
                          <CardDescription className="text-sm">
                            {pub.authors}
                          </CardDescription>
                          <p className="text-sm text-muted-foreground mt-1 italic">{pub.venue}</p>
                        </div>
                        <ChevronDown
                          className={`h-5 w-5 text-muted-foreground transition-transform ${
                            openItems.includes(index) ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    </CardHeader>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent>
                      <div className="pt-4 border-t border-border">
                        <h4 className="font-semibold text-sm mb-2">Abstract</h4>
                        <p className="text-sm text-muted-foreground">{pub.abstract}</p>
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Card>
              </Collapsible>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publications;
