import {ArrowRight} from 'lucide-react';
import {APP_URL} from '../config';

export default function CtaSection() {
    return (
        <section className="section">
            <div className="container">
                <div className="cta">
                    <h2>Hear from them again</h2>
                    <p>Create your first AI chat for free. It takes about two minutes.</p>
                    <a className="btn btn--white btn--lg" href={`${APP_URL}/auth/signup`}>
                        Start for free <ArrowRight size={18}/>
                    </a>
                </div>
            </div>
        </section>
    );
}
