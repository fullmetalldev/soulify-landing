import {Button} from './ui/button';
import {ImageWithFallback} from './figma/ImageWithFallback';
import {ArrowRight, Sparkles, MessageCircle, Volume2} from 'lucide-react';
// @ts-ignore
import Image from '../assets/images/ai_chat.png';
import {Fade, Slide} from "react-awesome-reveal";

export default function HeroSection() {
    return (

        <section id="home" className="relative pt-20 pb-16 lg:pt-24 lg:pb-20 overflow-hidden">

            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
            <div
                className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">

                <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
                    {/* Left content */}
                    <div className="lg:col-span-6">
                        <div className="mb-6">
                            <div
                                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-medium text-blue-700 mb-6">
                                <Sparkles className="w-4 h-4 mr-2"/>
                                #1 Chat Recreation Platform
                            </div>

                            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                                Bring Your Old Chats Back to Life with
                                <span
                                    className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}Soulify.chat
                </span>
                            </h1>

                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Soulify.chat gives soul to your old conversations. Import chats from WhatsApp or
                                Telegram and recreate interactions with loved ones, friends,
                                or past relationships — complete with text and voice. Relive memories and meaningful
                                conversations like never before.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <a href="http://app.soulify.chat">
                                <Button style={{width: '100%'}} size="lg"
                                        className="cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4">
                                    Start Free Trial
                                    <ArrowRight className="w-5 h-5 ml-2"/>
                                </Button>
                            </a>
                            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-2">
                                Watch Demo
                            </Button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6">
                            <Fade cascade>

                                <div className="text-center">
                                    <div className="text-3xl font-bold text-gray-900">10K+</div>
                                    <div className="text-sm text-gray-600">Active Bots</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-gray-900">99.9%</div>
                                    <div className="text-sm text-gray-600">Uptime</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-gray-900">24/7</div>
                                    <div className="text-sm text-gray-600">Support</div>
                                </div>

                            </Fade>
                        </div>
                    </div>

                    {/* Right content - Hero Image */}
                    <div className="lg:col-span-6 mt-12 lg:mt-0">
                        <div className="relative">
                            {/* Main hero image */}
                           <Fade>
                               <div className="relative z-10">
                                   <ImageWithFallback
                                       src={Image}
                                       alt="AI Chatbot Technology"
                                       className="w-full h-auto rounded-2xl shadow-2xl"
                                   />
                               </div>
                           </Fade>

                            {/* Floating cards */}
                            <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg p-4 z-20">
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                        <MessageCircle className="w-5 h-5 text-green-600"/>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-sm">Copy a person</div>
                                        <div className="text-xs text-gray-500">Based on imported chat</div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 z-20">
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                        <Volume2 className="w-5 h-5 text-blue-600"/>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-sm">Voice Clone</div>
                                        <div className="text-xs text-gray-500">Precise voice clone</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    );
}
