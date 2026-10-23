import {useEffect, useState} from 'react';
import {Menu, X, Sparkles} from 'lucide-react';
import {APP_URL} from '../config';

const navItems = [
    {name: 'How it works', href: '#how'},
    {name: 'Features', href: '#features'},
    {name: 'Pricing', href: '#pricing'},
    {name: 'FAQ', href: '#faq'},
];

export const Logo = () => (
    <a href="#top" className="logo" aria-label="Soulify home">
        <span className="icon-tile icon-tile--gradient"><Sparkles size={18}/></span>
        Soulify
    </a>
);

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener('scroll', onScroll, {passive: true});
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
            <div className="container header__inner">
                <Logo/>

                <nav className="header__nav" aria-label="Main">
                    {navItems.map((item) => (
                        <a key={item.name} href={item.href}>{item.name}</a>
                    ))}
                </nav>

                <div className="header__actions">
                    <a className="btn btn--ghost" href={`${APP_URL}/auth`}>Sign in</a>
                    <a className="btn btn--primary" href={`${APP_URL}/auth/signup`}>Get started</a>
                </div>

                <button type="button" className="header__burger" aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={20}/> : <Menu size={20}/>}
                </button>
            </div>

            {isMenuOpen && (
                <nav className="header__mobile" aria-label="Mobile">
                    {navItems.map((item) => (
                        <a key={item.name} href={item.href} onClick={() => setIsMenuOpen(false)}>{item.name}</a>
                    ))}
                    <a className="btn btn--secondary" href={`${APP_URL}/auth`}>Sign in</a>
                    <a className="btn btn--primary" href={`${APP_URL}/auth/signup`}>Get started free</a>
                </nav>
            )}
        </header>
    );
}
