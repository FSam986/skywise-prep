import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const plans = [
  {
    title: "Private Pilot License (PPL)",
    plans: [
      { duration: "Monthly", price: "R499", period: "month" },
      { duration: "Quarterly", price: "R1,349", period: "3 months", savings: "10%" },
      { duration: "Annual", price: "R4,799", period: "year", savings: "20%" }
    ],
    features: [
      "Access to PPL study material, exams, mock tests, and guides",
      "Exclusive tips and tricks for passing PPL exams"
    ]
  },
  {
    title: "Commercial Pilot License (CPL)",
    plans: [
      { duration: "Monthly", price: "R599", period: "month" },
      { duration: "Quarterly", price: "R1,619", period: "3 months", savings: "10%" },
      { duration: "Annual", price: "R5,749", period: "year", savings: "20%" }
    ],
    features: [
      "Access to CPL-specific study materials, question banks, and exams",
      "Regular updates and advanced study tips"
    ]
  },
  {
    title: "Airline Transport Pilot License (ATPL)",
    plans: [
      { duration: "Monthly", price: "R699", period: "month" },
      { duration: "Quarterly", price: "R1,889", period: "3 months", savings: "10%" },
      { duration: "Annual", price: "R6,699", period: "year", savings: "20%" }
    ],
    features: [
      "Full access to ATPL exams, study materials, and mock tests",
      "Advanced-level guides and resources"
    ]
  },
  {
    title: "Instrument Rating",
    plans: [
      { duration: "Monthly", price: "R399", period: "month" },
      { duration: "Quarterly", price: "R1,079", period: "3 months", savings: "10%" },
      { duration: "Annual", price: "R3,799", period: "year", savings: "20%" }
    ],
    features: [
      "Complete material for Instrument Rating preparation",
      "Mock tests and study guides"
    ]
  },
  {
    title: "Night Rating",
    plans: [
      { duration: "Monthly", price: "R399", period: "month" },
      { duration: "Quarterly", price: "R1,079", period: "3 months", savings: "10%" },
      { duration: "Annual", price: "R3,799", period: "year", savings: "20%" }
    ],
    features: [
      "Full access to Night Rating exams and study material",
      "Tips for night flight preparation"
    ]
  }
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-muted py-24">
      <div className="container">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
          Choose Your Plan
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card key={plan.title} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl text-center">{plan.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-6">
                  {plan.plans.map((pricing) => (
                    <div
                      key={pricing.duration}
                      className="p-4 rounded-lg bg-white shadow-sm"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold">{pricing.duration}</span>
                        <span className="text-lg font-bold text-primary">
                          {pricing.price}/{pricing.period}
                        </span>
                      </div>
                      {pricing.savings && (
                        <p className="text-sm text-green-600">
                          Save {pricing.savings}
                        </p>
                      )}
                      <Button className="w-full mt-2">Select Plan</Button>
                    </div>
                  ))}
                  <div className="mt-6">
                    <h4 className="font-semibold mb-2">Features:</h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="text-sm text-gray-600">
                          • {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;