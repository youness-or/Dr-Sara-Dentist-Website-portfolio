import Link from "next/link";
import { ArrowRight, Leaf, Shield, Heart, Sparkles, Zap, Smartphone, Search, CheckCircle2 } from "lucide-react";

const services = [
    {
        title: "Professional Cleaning",
        description: "Gentle removal of plaque and tartar to maintain your gum health and prevent cavities.",
        icon: Sparkles,
        image: "/images/Professional Cleaning.jpeg",
    },
    {
        title: "Eco-Friendly Fillings",
        description: "BPA-free, tooth-colored composite materials for a natural look and sustainable health.",
        icon: Leaf,
        image: "/images/Eco-Friendly Fillings .jpeg",
    },
    {
        title: "Teeth Whitening",
        description: "Advanced laser whitening for a brighter smile in just one visit, using safe gel formulas.",
        icon: Zap,
        image: "/images/Teeth Whitening .jpeg",
    },
    {
        title: "Digital X-Rays",
        description: "90% less radiation than traditional x-rays with immediate high-resolution results.",
        icon: Smartphone,
        image: "/images/Digital X-Rays .jpeg",
    },
    {
        title: "Gum Therapy",
        description: "Advanced treatment for periodontal health using minimally invasive techniques.",
        icon: Heart,
        image: "/images/Gum Therapy .jpeg",
    },
    {
        title: "Cosmetic Veneers",
        description: "Custom-made porcelain shells to transform the appearance of your teeth beautifully.",
        icon: Shield,
        image: "/images/Cosmetic Veneers.jpeg",
    },
];

export default function Services() {
    return (
        <div className="space-y-24">
            {/* Services Hero */}
            <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gray-900">
                    <img
                        src="/images/service hero.jpeg"
                        alt="Dental Services Hero"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80" />
                </div>
                <div className="relative z-10 text-center space-y-4 px-4">
                    <h1 className="text-4xl lg:text-6xl font-bold text-white tracking-tight">Our Dental Services</h1>
                    <p className="text-emerald-50 text-xl max-w-2xl mx-auto">Providing comprehensive, sustainable care for every stage of your dental journey.</p>
                </div>
            </section>

            {/* Services Header */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
                <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">Preventative & <span className="text-primary italic">Restorative</span> Care</h2>
                <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                    From routine checkups to complex transformations, our team uses the latest technology to ensure your visit is comfortable, efficient, and effective.
                </p>
            </section>

            {/* Services Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <div key={i} className="group bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
                            <div className="bg-accent w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                                <service.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                {service.description}
                            </p>
                            <div className="aspect-video w-full bg-gray-50 rounded-2xl overflow-hidden mb-6">
                                <img
                                    src={(service as any).image}
                                    alt={service.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <Link href="/#contact" className="inline-flex items-center space-x-2 text-primary font-bold hover:underline">
                                <span>Learn More</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-primary py-20 px-4">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-4xl lg:text-6xl font-bold text-white">Ready for a <span className="italic text-emerald-200">Brighter</span> Smile?</h2>
                    <p className="text-emerald-50 text-xl leading-relaxed">
                        Take the first step towards better oral health. Join our eco-friendly practice today and experience the future of dentistry.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Link
                            href="/#contact"
                            className="w-full sm:w-auto bg-white text-primary px-10 py-4 rounded-xl font-bold text-lg shadow-xl hover:bg-emerald-50 transition-all flex items-center justify-center space-x-2 group"
                        >
                            <span>Book Appointment</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/pricing"
                            className="w-full sm:w-auto bg-primary border-2 border-emerald-400/50 hover:border-white text-white px-10 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center"
                        >
                            Check Pricing
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
