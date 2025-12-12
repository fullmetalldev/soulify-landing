import {ImageWithFallback} from './figma/ImageWithFallback';
import {Users, Award, TrendingUp, Shield} from 'lucide-react';
import {Slide, Fade} from 'react-awesome-reveal'

export default function AboutSection() {
    const stats = [
        {icon: <Users className="w-6 h-6"/>, value: "10,000+", label: "Happy Customers"},
        {icon: <Award className="w-6 h-6"/>, value: "#1", label: "Chat Recreation Platform"},
        {icon: <TrendingUp className="w-6 h-6"/>, value: "50M+", label: "Messages Processed"},
        {icon: <Shield className="w-6 h-6"/>, value: "100%", label: "Secured privacy"}
    ];

    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                    {/* Left content */}
                    <div className="mb-12 lg:mb-0">
                        <div className="mb-8">
                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                About Us
                            </h2>
                            <p className="text-xl text-gray-600 leading-relaxed mb-6">
                                We are pioneers in AI-powered chat recreation, dedicated to bringing your old
                                conversations back to life.
                                With expertise in artificial intelligence and machine learning, we create characters
                                that understand
                                and respond like your loved ones, friends, or past connections.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Our team of AI specialists, developers, and designers work tirelessly to ensure each
                                recreated chat
                                feels authentic and lifelike. We believe in the power of conversation and memory, giving
                                people a way
                                to relive meaningful moments and preserve voices and personalities through advanced AI
                                technology.
                            </p>
                        </div>

                        {/* Stats Grid */}

                        <div className="overflow-hidden grid grid-cols-2 gap-6">
                            <Slide direction="up" cascade>
                                {stats.map((stat, index) => (
                                    <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                                        <div
                                            className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-3">
                                            {stat.icon}
                                        </div>
                                        <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                                        <div className="text-sm text-gray-600">{stat.label}</div>
                                    </div>
                                ))}
                            </Slide>
                        </div>

                    </div>

                    {/* Right content - Image */}
                    <div className="relative">
                        <div className="relative z-10">
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1635317331227-1386b983558f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbW9kZXJufGVufDF8fHx8MTc1NjQ2OTI3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                alt="AI Technology"
                                className="w-full h-auto rounded-2xl shadow-2xl"
                            />
                        </div>

                        {/* Background decoration */}
                        <div
                            className="absolute -top-6 -right-6 w-full h-full bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl -z-10"></div>
                    </div>
                </div>

                {/* Mission Section */}
                <div id="mission" className="mt-20 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                            Our Mission
                        </h3>
                        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 lg:p-12">
                            <p className="text-xl text-gray-700 leading-relaxed mb-6">
                                To give soul to your old chats and make meaningful AI-powered conversation accessible to
                                everyone.
                                We envision a world where memories, relationships, and past connections can be revisited
                                and experienced
                                in a natural, lifelike way.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Through innovation, dedication, and a user-first approach, we’re building the future of
                                chat recreation — empowering
                                people to relive conversations, interact with past connections,
                                and preserve their voices and personalities with advanced AI technology.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
