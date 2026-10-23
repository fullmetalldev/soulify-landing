import {Check} from 'lucide-react';
import {APP_URL} from '../config';

// Keep in sync with FREE_PLAN (soulify-backend/server/services/plan_services.ts) and the Stripe product metadata
const plans = [
    {
        name: 'Free',
        description: 'Try it with one person.',
        price: '$0',
        features: ['1 AI chat', '30 messages / month', '3 voice replies / month', 'WhatsApp & Telegram import'],
        cta: 'Start for free',
        featured: false,
    },
    {
        name: 'Plus',
        description: 'For the conversations you come back to.',
        price: '$9.99',
        features: ['3 AI chats', '1,000 messages / month', '50 voice replies / month', 'Everything in Free'],
        cta: 'Get Plus',
        featured: true,
    },
];

export default function PricingSection() {
    return (
        <section className="section" id="pricing">
            <div className="container">
                <div className="section__head">
                    <span className="eyebrow">Pricing</span>
                    <h2>Start free. Upgrade when it matters.</h2>
                    <p>No credit card needed for the free plan.</p>
                </div>

                <div className="pricing">
                    {plans.map((plan) => (
                        <div className={`plan ${plan.featured ? 'plan--featured' : ''}`} key={plan.name}>
                            {plan.featured && <span className="plan__badge">Recommended</span>}
                            <h3>{plan.name}</h3>
                            <p className="plan__desc">{plan.description}</p>
                            <div className="plan__price"><b>{plan.price}</b><span>/ month</span></div>
                            <ul>
                                {plan.features.map((feature) => (
                                    <li key={feature}>
                                        <span className="plan__check"><Check size={14}/></span>{feature}
                                    </li>
                                ))}
                            </ul>
                            <a className={`btn ${plan.featured ? 'btn--primary' : 'btn--secondary'}`}
                               href={`${APP_URL}/auth/signup`}>{plan.cta}</a>
                        </div>
                    ))}
                </div>

                <p className="pricing__note">Prices in USD. Message and voice limits reset at the start of every
                    month.</p>
            </div>
        </section>
    );
}
