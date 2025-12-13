import {MessageSquare, Settings, Rocket, HeadphonesIcon} from 'lucide-react';
import {Slide, Fade} from 'react-awesome-reveal'

export default function HowWeWorkSection() {
    const steps = [
        {
            icon: <MessageSquare className="w-8 h-8"/>,
            title: "1. Import & Analyze",
            description: "We import your WhatsApp or Telegram chats and analyze conversations to understand personalities and context.",
            details: ["Secured Chat Import", "Conversation Analysis", "Personality Detection", "Style Extraction"],
        },
        {
            icon: <Settings className="w-8 h-8"/>,
            title: "2. Character Creation",
            description: "We recreate the character based on your chat data, training AI to respond like your loved one, friend, or past connection.",
            details: ["AI Personality Training", "Text Chat Recreation", "Voice Cloning (Optional)", "Context Preservation"]
        },
        {
            icon: <Rocket className="w-8 h-8"/>,
            title: "3. Interaction & Testing",
            description: "Interact with your recreated chat and ensure responses feel natural and lifelike.",
            details: ["Chat Testing", "Voice Message Interaction", "Experience Optimization", "Feedback Adjustment"]
        },
        {
            icon: <HeadphonesIcon className="w-8 h-8"/>,
            title: "4. Support & Updates",
            description: "Ongoing support and improvements to keep your chat characters authentic and engaging.",
            details: ["24/7 Support", "Regular Updates", "Continuous Improvement", "Performance Monitoring"]
        }
    ];

    return (
        <section id="how-we-work" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">How We Bring Your Old Chats Back
                        to Life</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Our 4-step process ensures your old conversations are recreated authentically,
                        giving you a seamless and meaningful experience with text and voice.
                        From importing chats to ongoing support, we’re with you every step of the way.
                    </p>
                </div>

                {/* Process Steps */}
                <div className="overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <Fade triggerOnce cascade>
                        {steps.map((step, index) => (
                            <div key={index} className="relative">
                                {/* Connector Line (hidden on mobile) */}
                                {index < steps.length - 1 && (
                                    <div
                                        className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-purple-300 z-0"></div>
                                )}

                                {/* Step Card */}
                                <div
                                    className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group z-10">
                                    {/* Icon */}
                                    <div
                                        className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                                        {step.icon}
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>

                                    {/* Details List */}
                                    <div className="space-y-2">
                                        {step.details.map((detail, detailIndex) => (
                                            <div key={detailIndex} className="flex items-center text-sm text-gray-700">
                                                <div
                                                    className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mr-3"></div>
                                                {detail}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Fade>
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white">
                        <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                            Ready to Bring Your Chats Back to Life?
                        </h3>
                        <p className="text-blue-100 mb-8 text-lg">
                            Start recreating meaningful conversations with your loved ones, friends, or past connections
                            today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="http://app.soulify.chat">
                                <button
                                    className="cursor-pointer px-8 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-all duration-300">
                                    Start Free Trial
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
