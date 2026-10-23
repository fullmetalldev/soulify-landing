import {MessageCircleHeart, BookHeart, AudioLines, Languages, History, Smartphone} from 'lucide-react';

// Only what the app actually does today
const features = [
    {
        icon: <MessageCircleHeart size={20}/>,
        title: 'Texts like them',
        text: 'Same slang, emoji, typos and message length. The AI copies how they really wrote to you.',
    },
    {
        icon: <BookHeart size={20}/>,
        title: 'Remembers what you shared',
        text: 'Before every reply it looks up related moments from your real chat, so answers feel familiar.',
    },
    {
        icon: <AudioLines size={20}/>,
        title: 'Voice messages',
        text: 'Get replies as voice messages in a voice cloned from a short recording of them.',
    },
    {
        icon: <Languages size={20}/>,
        title: '20 languages',
        text: 'Pick the language for replies. Grammar follows their gender where the language needs it.',
    },
    {
        icon: <History size={20}/>,
        title: 'Your conversation, saved',
        text: 'Every new message is kept, so you can come back and pick up where you left off.',
    },
    {
        icon: <Smartphone size={20}/>,
        title: 'Works on any device',
        text: 'Use it in the browser on your phone or computer. Nothing to install.',
    },
];

export default function FeaturesSection() {
    return (
        <section className="section" id="features">
            <div className="container">
                <div className="section__head">
                    <span className="eyebrow">Features</span>
                    <h2>It feels like them, because it learned from them</h2>
                    <p>Soulify doesn't invent a personality. It studies your real messages.</p>
                </div>

                <div className="features">
                    {features.map((feature) => (
                        <div className="feature" key={feature.title}>
                            <span className="icon-tile">{feature.icon}</span>
                            <h3>{feature.title}</h3>
                            <p>{feature.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
