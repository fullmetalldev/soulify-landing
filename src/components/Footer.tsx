import {Logo} from './Header';
import {APP_URL, CONTACT_EMAIL} from '../config';

const columns = [
    {
        title: 'Product',
        links: [
            {name: 'How it works', href: '#how'},
            {name: 'Pricing', href: '#pricing'},
            {name: 'FAQ', href: '#faq'},
            {name: 'Sign in', href: `${APP_URL}/auth`},
        ],
    },
    {
        title: 'Company',
        links: [
            {name: 'Responsible AI', href: '#trust'},
            {name: 'Terms of Service', href: `${APP_URL}/terms`},
            {name: 'Privacy Policy', href: `${APP_URL}/privacy`},
            {name: 'Contact', href: `mailto:${CONTACT_EMAIL}`},
        ],
    },
];

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__top">
                    <div className="footer__brand">
                        <Logo/>
                        <p>Turn your old WhatsApp and Telegram chats into an AI that talks like someone you miss.</p>
                    </div>

                    <div className="footer__cols">
                        {columns.map((column) => (
                            <div key={column.title}>
                                <h4>{column.title}</h4>
                                <ul>
                                    {column.links.map((link) => (
                                        <li key={link.name}><a href={link.href}>{link.name}</a></li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="footer__bottom">
                    <span>© {new Date().getFullYear()} Soulify. All rights reserved.</span>
                    <button type="button" className="footer__cookies"
                            onClick={() => (window as any).soulifyCookieSettings?.()}>
                        Cookie settings
                    </button>
                    <span>Soulify creates AI simulations, not real people.</span>
                </div>
            </div>
        </footer>
    );
}
