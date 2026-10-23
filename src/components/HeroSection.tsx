import {ArrowRight, Bot, CheckCircle2, MessageCircleHeart, Play, AudioLines} from 'lucide-react';
import {APP_URL} from '../config';

// Fixed bar heights for the sample voice message
const waveform = [35, 60, 45, 80, 55, 95, 70, 50, 85, 40, 65, 90, 55, 75, 45, 60, 85, 50, 70, 40, 55, 30];

const ChatPreview = () => (
    <div className="mock" aria-hidden="true">
        <div className="mock__glow"/>

        <div className="mock__window">
            <div className="mock__head">
                <div className="mock__avatar">M</div>
                <div>
                    <div className="mock__name">Mom</div>
                    <div className="mock__status"><i/> AI clone of Mom</div>
                </div>
            </div>
            <div className="mock__notice">AI simulation, not the real person</div>

            <div className="mock__body">
                <div className="bubble bubble--user" style={{animationDelay: '0.2s'}}>Mom, guess who got the job?? 🎉
                </div>
                <div className="bubble" style={{animationDelay: '0.9s'}}>WHAT?! I knew it!! I'm so proud of you
                    sweetie ❤️ Did you call your dad yet?
                </div>
                <div className="bubble bubble--voice" style={{animationDelay: '1.6s'}}>
                    <span className="bubble__play"><Play size={14} fill="currentColor"/></span>
                    <span className="bubble__wave">
                        {waveform.map((height, idx) => <span key={idx} style={{height: `${height}%`}}/>)}
                    </span>
                    <span className="bubble__time">0:07</span>
                </div>
                <div className="bubble bubble--user" style={{animationDelay: '2.3s'}}>Calling him tonight! Wish you
                    could see the new office
                </div>
                <div className="mock__typing" style={{animationDelay: '3s'}}><i/><i/><i/></div>
            </div>
        </div>

        <div className="mock__float mock__float--top">
            <span className="icon-tile"><MessageCircleHeart size={18}/></span>
            <div><b>Learns their style</b><span>From your real chat history</span></div>
        </div>
        <div className="mock__float mock__float--bottom">
            <span className="icon-tile icon-tile--gradient"><AudioLines size={18}/></span>
            <div><b>Voice replies</b><span>In a voice like theirs</span></div>
        </div>
    </div>
);

export default function HeroSection() {
    return (
        <section className="hero" id="top">
            <div className="container hero__inner">
                <div>
                    <span className="hero__badge"><span>New</span> Voice replies in their voice</span>
                    <h1>Make your old chats <span className="gradient-text">talk again</span></h1>
                    <p className="hero__lead">
                        Upload a WhatsApp or Telegram chat and Soulify learns how someone texts: their words, their
                        humour and the memories you share. Then keep the conversation going, in text and in their
                        voice.
                    </p>

                    <div className="hero__ctas">
                        <a className="btn btn--primary btn--lg" href={`${APP_URL}/auth/signup`}>
                            Start for free <ArrowRight size={18}/>
                        </a>
                        <a className="btn btn--secondary btn--lg" href="#how">How it works</a>
                    </div>

                    <ul className="hero__points">
                        <li><CheckCircle2 size={16}/> Free plan, no credit card</li>
                        <li><CheckCircle2 size={16}/> WhatsApp &amp; Telegram</li>
                        <li><Bot size={16} color="var(--purple)"/> Clearly labelled as AI</li>
                    </ul>
                </div>

                <ChatPreview/>
            </div>
        </section>
    );
}
