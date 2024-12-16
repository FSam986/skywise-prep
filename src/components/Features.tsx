import { CheckCircle } from "lucide-react";

const features = [
  "Interactive quizzes with instant feedback",
  "Comprehensive study materials",
  "Progress tracking and analytics",
  "Expert-verified content",
  "Mobile-friendly interface",
  "Regular content updates",
];

export const Features = () => {
  return (
    <section className="py-24">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature} className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0" />
              <span className="text-lg">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};