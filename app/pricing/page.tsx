import Link from "next/link";
import { Check, ArrowRight, Minus, Plus, HelpCircle, Star } from "lucide-react";

const pricingPlans = [
    {
        name: "Basic Care",
        price: "99",
        description: "Essential preventative care for a healthy smile.",
        features: [
            "Professional Dental Cleaning",
            "Full Oral Examination",
            "Digital Bitewing X-Rays",
            "Fluoride Treatment",
            "Eco-friendly Oral Care Kit",
        ],
        cta: "Select Basic",
        featured: false,
    },
    {
        name: "Advanced Care",
        price: "249",
        description: "Comprehensive restoration and protection.",
        features: [
            "Everything in Basic Care",
            "Deep Root Scaling",
            "Eco-Composite Filling (x1)",
            "Oral Cancer Screening",
            "24/7 Emergency Support",
        ],
        cta: "Get Started",
        featured: true,
    },
    {
        name: "Premium Smile",
        price: "599",
        description: "Complete transformation and aesthetics.",
        features: [
            "Everything in Advanced Care",
            "In-Office Laser Whitening",
            "Cosmetic Consultation",
            "Night Guard Fitting",
            "Priority Appointment Booking",
        ],
        cta: "Go Premium",
        featured: false,
    },
];

const faqs = [
    {
        question: "Do you accept dental insurance?",
        answer: "Yes, we accept most major PPO dental insurance plans. Our team will handle all the paperwork and help you maximize your benefits.",
    },
    {
        question: "Do you offer payment plans?",
        answer: "Absolutely. We provide flexible 0% interest financing through CareCredit and our in-house payment membership for those without insurance.",
    },
    {
        question: "Is the emerald green brand significant?",
        answer: "Our brand color represents our commitment to eco-friendly dentistry, using sustainable materials and minimally invasive techniques.",
    },
    {
        question: "How long does a whitening session take?",
        answer: "A standard professional whitening session takes about 60 to 90 minutes and can brighten your smile by several shades in one go.",
    },
];

export default function Pricing() {
    return (
        <div className="space-y-24 pb-24">
            {/* Pricing Hero */}
            <section className="pt-20 text-center space-y-6 px-4">
                <div className="inline-flex items-center space-x-2 bg-accent px-4 py-2 rounded-full border border-emerald-100">
                    <Star className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-primary uppercase tracking-wider">Transparent Pricing</span>
                </div>
                <h1 className="text-4xl lg:text-7xl font-bold text-gray-900 leading-tight">
                    Pricing for Your <span className="text-primary italic">Best Smile</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    No hidden fees. Just professional, sustainable dental care tailored to your needs and budget.
                </p>
            </section>

            {/* Pricing Cards Container */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                    {pricingPlans.map((plan, i) => (
                        <div
                            key={i}
                            className={`relative bg-white rounded-[2.5rem] p-10 border transition-all hover:shadow-2xl hover:-translate-y-2 ${plan.featured
                                ? "border-primary shadow-2xl ring-4 ring-primary/5 lg:scale-105 z-10"
                                : "border-gray-100 shadow-xl"
                                }`}
                        >
                            {plan.featured && (
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-black uppercase tracking-widest px-6 py-2 rounded-full shadow-lg">
                                    Most Popular
                                </div>
                            )}
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{plan.description}</p>
                                </div>
                                <div className="flex items-baseline space-x-1">
                                    <span className="text-4xl font-black text-gray-900">$</span>
                                    <span className="text-6xl font-black text-gray-900 tracking-tight">{plan.price}</span>
                                    <span className="text-gray-500 font-medium">/visit</span>
                                </div>
                                <Link
                                    href="/#contact"
                                    className={`block w-full text-center py-4 rounded-2xl font-bold transition-all ${plan.featured
                                        ? "bg-primary text-white hover:bg-primary-dark shadow-xl hover:shadow-primary/30"
                                        : "bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200"
                                        }`}
                                >
                                    {plan.cta}
                                </Link>
                                <div className="space-y-4 pt-4 border-t border-gray-100">
                                    <p className="text-sm font-bold text-gray-900 uppercase tracking-widest">What's included:</p>
                                    <ul className="space-y-3">
                                        {plan.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center space-x-3 text-gray-600 text-sm font-medium">
                                                <Check className="w-5 h-5 text-primary shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-accent/30 py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">Support & <span className="text-primary tracking-tight">FAQ</span></h2>
                        <p className="text-gray-600">Everything you need to know about our dental plans and insurance.</p>
                    </div>
                    <div className="space-y-6">
                        {faqs.map((faq, i) => (
                            <div key={i} className="bg-white rounded-3xl p-8 shadow-md border border-gray-50 group hover:border-primary transition-all">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="bg-accent p-2 rounded-lg group-hover:bg-primary transition-colors">
                                        <HelpCircle className="w-5 h-5 text-primary group-hover:text-white" />
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-900">{faq.question}</h4>
                                </div>
                                <p className="text-gray-600 leading-relaxed pl-11">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-16 text-center">
                        <p className="text-gray-500 mb-6">Still have questions? We're here to help.</p>
                        <Link href="/#contact" className="inline-flex items-center space-x-2 text-primary font-black text-lg hover:underline transition-all">
                            <span>Contact our support team</span>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
