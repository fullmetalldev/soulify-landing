import { Card, CardContent } from './ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO",
      company: "TechStart Inc.",
      image: "https://images.unsplash.com/photo-1650784854945-264d5b0b6b07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjB0ZXN0aW1vbmlhbHxlbnwxfHx8fDE3NTY0NjkyNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      content: "The chatbot solution transformed our customer service. We've seen a 300% increase in customer satisfaction and 70% reduction in response time. Outstanding work!",
      rating: 5
    },
    {
      name: "Michael Chen",
      position: "Marketing Director",
      company: "Growth Labs",
      image: "https://images.unsplash.com/photo-1650784854945-264d5b0b6b07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjB0ZXN0aW1vbmlhbHxlbnwxfHx8fDE3NTY0NjkyNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      content: "Implementation was seamless and the results exceeded our expectations. Our lead generation increased by 250% within the first month. Highly recommended!",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      position: "Operations Manager",
      company: "RetailPro",
      image: "https://images.unsplash.com/photo-1650784854945-264d5b0b6b07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjB0ZXN0aW1vbmlhbHxlbnwxfHx8fDE3NTY0NjkyNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      content: "The e-shopping chatbot handles 90% of our customer inquiries automatically. It's like having a 24/7 sales team that never sleeps. Amazing technology!",
      rating: 5
    },
    {
      name: "David Thompson",
      position: "Founder",
      company: "BookingHub",
      image: "https://images.unsplash.com/photo-1650784854945-264d5b0b6b07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjB0ZXN0aW1vbmlhbHxlbnwxfHx8fDE3NTY0NjkyNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      content: "The booking chatbot streamlined our entire reservation process. Customers love the instant responses and we've reduced booking errors by 95%.",
      rating: 5
    },
    {
      name: "Lisa Park",
      position: "Head of Customer Success",
      company: "EduTech Solutions",
      image: "https://images.unsplash.com/photo-1650784854945-264d5b0b6b07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjB0ZXN0aW1vbmlhbHxlbnwxfHx8fDE3NTY0NjkyNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      content: "The educational coach chatbot has revolutionized how our students learn. Personalized assistance 24/7 has improved completion rates by 180%.",
      rating: 5
    },
    {
      name: "James Wilson",
      position: "IT Manager",
      company: "ConnectCorp",
      image: "https://images.unsplash.com/photo-1650784854945-264d5b0b6b07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjB0ZXN0aW1vbmlhbHxlbnwxfHx8fDE3NTY0NjkyNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      content: "Integration was flawless and the WhatsApp chatbot handles thousands of customer interactions daily. The ROI has been incredible - paid for itself in 2 months.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers 
            have to say about their experience with our chatbot solutions.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="h-full">
                    <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group bg-white">
                      <CardContent className="p-8">
                        {/* Quote Icon */}
                        <div className="mb-6">
                          <Quote className="w-10 h-10 text-blue-500 opacity-50" />
                        </div>

                        {/* Rating */}
                        <div className="flex items-center mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>

                        {/* Content */}
                        <p className="text-gray-700 leading-relaxed mb-6 italic">
                          "{testimonial.content}"
                        </p>

                        {/* Author */}
                        <div className="flex items-center">
                          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                            <ImageWithFallback
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">{testimonial.name}</div>
                            <div className="text-sm text-gray-600">{testimonial.position}</div>
                            <div className="text-sm text-blue-600">{testimonial.company}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        {/* Stats Section */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-center text-gray-900 mb-12">
              Trusted by Industry Leaders
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-gray-600">Customer Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">10K+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">50M+</div>
                <div className="text-gray-600">Messages Processed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}