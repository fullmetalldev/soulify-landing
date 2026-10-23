import {FileArchive, UserRound, AudioLines, MessagesSquare} from 'lucide-react';

// Mirrors the 4 steps of the "New chat" wizard in the app
const steps = [
    {
        icon: <FileArchive size={20}/>,
        title: 'Export a chat',
        text: 'Export a conversation from WhatsApp on iPhone (.zip) or from Telegram Desktop (.json).',
    },
    {
        icon: <UserRound size={20}/>,
        title: 'Pick the person',
        text: 'Choose who the AI should become. Their messages teach it how they write.',
    },
    {
        icon: <AudioLines size={20}/>,
        title: 'Add a photo and voice',
        text: 'Upload a photo and a voice message of 10 seconds or more for spoken replies.',
    },
    {
        icon: <MessagesSquare size={20}/>,
        title: 'Start talking',
        text: 'Write like you used to. Replies come in their style, as text or voice messages.',
    },
];

export default function HowItWorksSection() {
    return (
        <section className="section section--muted" id="how">
            <div className="container">
                <div className="section__head">
                    <span className="eyebrow">How it works</span>
                    <h2>From an old chat to a new conversation in about two minutes</h2>
                    <p>No setup, no technical skills. Just the chat export you already have on your phone.</p>
                </div>

                <ol className="steps">
                    {steps.map((step, idx) => (
                        <li className="step" key={step.title}>
                            <span className="step__num">0{idx + 1}</span>
                            <span className={`icon-tile ${idx === 0 ? 'icon-tile--gradient' : ''}`}>{step.icon}</span>
                            <h3>{step.title}</h3>
                            <p>{step.text}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
