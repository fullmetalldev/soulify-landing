import { Check, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

export default function PricingSection() {
  const plans = [
    {
      name: "Basic",
      price: "$10",
      period: "/month",
      description: "Create and interact with a character based on WhatsApp or Telegram chats",
      features: [
        "1 Character creation from chat",
        "1,000 messages/month",
        "Text chat interaction"
      ],
      popular: true,
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "Pro",
      price: "$20",
      period: "/month",
      description: "Advanced interaction with voice cloning and more messages",
      features: [
        "3 Character creation from chat",
        "3,000 messages/month",
        "Voice cloning",
        "Voice message interaction"
      ],
      popular: false,
      color: "from-blue-500 to-purple-500"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select the perfect plan to bring your chat characters to life.
            All plans include character creation from your chats and interaction features, with options for more messages and voice capabilities.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center py-2">
                    <Badge className="bg-white text-blue-600">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                </div>
              )}
              
              <CardHeader className={`text-center ${plan.popular ? 'pt-12' : 'pt-8'}`}>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </CardHeader>

              <CardContent>
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center mr-3`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`cursor-pointer w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-lg' 
                    : `bg-gradient-to-r ${plan.color} text-white hover:shadow-lg`
                }`}>
                  Get Started
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Note */}

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            All plans include a 14-day free trial.
          </p>
        </div>

      </div>
    </section>
  );
}
