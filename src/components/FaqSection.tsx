import {Plus} from 'lucide-react';
import {CONTACT_EMAIL} from '../config';

const faqs = [
    {
        q: 'Which chats can I import?',
        a: 'WhatsApp chats exported from an iPhone or an Android phone (Export chat → Without media, which gives a .zip or .txt file) and Telegram chats exported from Telegram Desktop as "Machine-readable JSON".',
    },
    {
        q: 'Am I talking to the real person?',
        a: 'No. Soulify is an AI that learned how someone writes from your chat history. Replies are generated and can be inaccurate or say things the real person never would. Every chat is labelled as an AI simulation.',
    },
    {
        q: 'How does the voice work?',
        a: 'Upload a voice message of the person that is at least 10 seconds long, with little background noise. Replies can then be sent as voice messages in a cloned voice. The Free plan includes 3 voice replies a month, Plus includes 50.',
    },
    {
        q: 'Who can see my chats?',
        a: 'Only you, in your account. To generate replies, messages are processed by our AI providers. You can delete a chat at any time, which removes its messages, files and cloned voice.',
    },
    {
        q: 'Which languages are supported?',
        a: 'Replies can be written in 20 languages, including English, Spanish, French, German, Russian, Ukrainian, Turkish, Arabic, Hindi, Chinese, Japanese and Korean.',
    },
    {
        q: 'Do I need a credit card to start?',
        a: 'No. The Free plan needs only an email address. You can upgrade to Plus whenever you want more chats, messages or voice replies.',
    },
    {
        q: 'How do I cancel Plus?',
        a: 'Plus is a monthly subscription with no minimum term. Cancel anytime in Settings → Manage subscription; you keep Plus until the end of the month you paid for.',
    },
];

export default function FaqSection() {
    return (
        <section className="section" id="faq">
            <div className="container">
                <div className="section__head">
                    <span className="eyebrow">FAQ</span>
                    <h2>Questions, answered</h2>
                    <p>Something else on your mind? Write to <a href={`mailto:${CONTACT_EMAIL}`}
                                                              className="gradient-text">{CONTACT_EMAIL}</a>.</p>
                </div>

                <div className="faq">
                    {faqs.map((item, idx) => (
                        <details key={item.q} open={idx === 0}>
                            <summary>{item.q}<Plus size={20}/></summary>
                            <p>{item.a}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
