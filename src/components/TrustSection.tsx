import {Bot, HeartHandshake, Lock, Trash2} from 'lucide-react';

// Matches the safeguards built into the app (AI disclaimer, consent checkbox, owner-only access, full delete)
const principles = [
    {
        icon: <Bot size={20}/>,
        title: 'Always an AI',
        text: 'Every chat is clearly labelled as an AI simulation. It is never presented as the real person.',
    },
    {
        icon: <HeartHandshake size={20}/>,
        title: 'Consent first',
        text: 'You confirm you have the right to use the chat, photo and voice before anything is created.',
    },
    {
        icon: <Lock size={20}/>,
        title: 'Only for you',
        text: 'Your AI chats live in your account. Nobody else can open them.',
    },
    {
        icon: <Trash2 size={20}/>,
        title: 'Delete anytime',
        text: 'Deleting a chat removes its messages, uploaded files and the cloned voice.',
    },
];

export default function TrustSection() {
    return (
        <section className="section section--muted" id="trust">
            <div className="container">
                <div className="section__head">
                    <span className="eyebrow">Responsible AI</span>
                    <h2>Built with care for something personal</h2>
                    <p>Soulify keeps memories close without pretending to be someone it isn't.</p>
                </div>

                <div className="trust">
                    {principles.map((item) => (
                        <div className="trust__item" key={item.title}>
                            <span className="icon-tile">{item.icon}</span>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
