import {Heart, Plane, Users} from 'lucide-react';
import Image from '../assets/images/ai_chat.webp';

const uses = [
    {icon: <Heart size={18}/>, title: 'Someone you miss', text: 'Hear "goodnight" in the way only they said it.'},
    {icon: <Plane size={18}/>, title: 'Family far away', text: 'Keep the everyday small talk going between calls.'},
    {icon: <Users size={18}/>, title: 'Old friendships', text: 'Revisit the inside jokes from a chat you still treasure.'},
];

export default function StorySection() {
    return (
        <section className="section section--muted">
            <div className="container story">
                <div className="story__image">
                    <img src={Image} alt="A person chatting with an AI on a laptop" loading="lazy"/>
                </div>

                <div>
                    <span className="eyebrow">Why people use Soulify</span>
                    <h2>Some conversations deserve a little more time</h2>
                    <p>
                        Old chats hold years of jokes, nicknames and everyday moments. Soulify turns them into a
                        conversation you can return to, gently and on your own terms.
                    </p>

                    <ul className="story__list">
                        {uses.map((use) => (
                            <li key={use.title}>
                                <span className="icon-tile">{use.icon}</span>
                                <div><b>{use.title}</b><span>{use.text}</span></div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
