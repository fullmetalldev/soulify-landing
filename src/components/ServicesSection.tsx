import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { 
  User, 
  BookOpen, 
  ShoppingCart, 
  Calendar, 
  Smile, 
  MessageSquare, 
  GraduationCap, 
  FileText, 
  Bot
} from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: <User className="w-8 h-8" />,
      title: "Personal Assistant Chatbot",
      description: "Smart AI assistant to help with daily tasks, scheduling, reminders, and personal productivity.",
      features: ["Task Management", "Calendar Integration", "Smart Reminders", "Voice Commands"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Story Maker",
      description: "Creative AI that generates engaging stories, narratives, and content for entertainment.",
      features: ["Creative Writing", "Story Generation", "Character Development", "Plot Creation"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-shopping",
      description: "Intelligent shopping assistant that helps users find products, compare prices, and make purchases.",
      features: ["Product Search", "Price Comparison", "Recommendations", "Order Tracking"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "E-booking",
      description: "Streamlined booking system for appointments, reservations, and event scheduling.",
      features: ["Appointment Booking", "Calendar Sync", "Automated Reminders", "Availability Check"],
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <Smile className="w-8 h-8" />,
      title: "Funny Chatbot",
      description: "Entertainment-focused bot that tells jokes, shares memes, and provides lighthearted conversation.",
      features: ["Joke Generator", "Meme Sharing", "Fun Facts", "Interactive Games"],
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "WhatsApp Chatbot",
      description: "Seamless integration with WhatsApp for business communication and customer support.",
      features: ["WhatsApp Integration", "Automated Responses", "Media Sharing", "Group Management"],
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Educational Coach",
      description: "Personalized learning assistant that provides tutoring, quizzes, and educational support.",
      features: ["Personalized Learning", "Quiz Generation", "Progress Tracking", "Study Plans"],
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Name Suggestion Chatbot",
      description: "Creative naming assistant for businesses, products, domains, and personal projects.",
      features: ["Business Names", "Product Naming", "Domain Suggestions", "Brand Identity"],
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "B Grade Chatbot",
      description: "Budget-friendly chatbot solution with essential features for small businesses.",
      features: ["Basic Responses", "FAQ Handling", "Simple Integration", "Cost Effective"],
      color: "from-gray-500 to-gray-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        {/*<div className="text-center mb-16">*/}
        {/*  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">*/}
        {/*    Our Chatbot Services*/}
        {/*  </h2>*/}
        {/*  <p className="text-xl text-gray-600 max-w-3xl mx-auto">*/}
        {/*    Discover our comprehensive range of AI-powered chatbot solutions designed to meet*/}
        {/*    every business need and enhance customer engagement.*/}
        {/*  </p>*/}
        {/*</div>*/}

        {/* Services Carousel */}
        {/*<div className="relative">*/}
        {/*  <Carousel*/}
        {/*    opts={{*/}
        {/*      align: "start",*/}
        {/*      loop: true,*/}
        {/*    }}*/}
        {/*    className="w-full"*/}
        {/*  >*/}
        {/*    <CarouselContent className="-ml-2 md:-ml-4">*/}
        {/*      {services.map((service, index) => (*/}
        {/*        <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">*/}
        {/*          <div className="h-full">*/}
        {/*            <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">*/}
        {/*              <CardHeader className="pb-4">*/}
        {/*                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>*/}
        {/*                  {service.icon}*/}
        {/*                </div>*/}
        {/*                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>*/}
        {/*                <CardDescription className="text-gray-600 leading-relaxed">*/}
        {/*                  {service.description}*/}
        {/*                </CardDescription>*/}
        {/*              </CardHeader>*/}
        {/*              <CardContent>*/}
        {/*                <div className="space-y-2">*/}
        {/*                  {service.features.map((feature, featureIndex) => (*/}
        {/*                    <div key={featureIndex} className="flex items-center text-sm text-gray-700">*/}
        {/*                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3`}></div>*/}
        {/*                      {feature}*/}
        {/*                    </div>*/}
        {/*                  ))}*/}
        {/*                </div>*/}
        {/*                <button className={`w-full mt-6 px-4 py-2 rounded-lg bg-gradient-to-r ${service.color} text-white font-medium hover:shadow-lg transition-all duration-300`}>*/}
        {/*                  Learn More*/}
        {/*                </button>*/}
        {/*              </CardContent>*/}
        {/*            </Card>*/}
        {/*          </div>*/}
        {/*        </CarouselItem>*/}
        {/*      ))}*/}
        {/*    </CarouselContent>*/}
        {/*    <CarouselPrevious className="left-4" />*/}
        {/*    <CarouselNext className="right-4" />*/}
        {/*  </Carousel>*/}
        {/*</div>*/}

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-8">
              Choose the perfect plan to bring your chats back to life
              and start interacting with your recreated characters today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
