import Link from "next/link";
import { Leaf, Instagram, Facebook, Globe, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Col */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="bg-primary p-2 rounded-lg">
                                <Leaf className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-xl font-bold text-gray-900 tracking-tight">
                                Green<span className="text-primary">Dentist</span>
                            </span>
                        </Link>
                        <p className="text-gray-600 leading-relaxed">
                            Leading the way in eco-friendly dental care. Professional care in a modern, comfortable environment. Your smile, our passion.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="p-2 bg-accent rounded-lg text-primary hover:bg-primary hover:text-white transition-all">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="p-2 bg-accent rounded-lg text-primary hover:bg-primary hover:text-white transition-all">
                                <Facebook className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="p-2 bg-accent rounded-lg text-primary hover:bg-primary hover:text-white transition-all">
                                <Globe className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/" className="text-gray-600 hover:text-primary transition-colors">Home</Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-gray-600 hover:text-primary transition-colors">Our Services</Link>
                            </li>
                            <li>
                                <Link href="/pricing" className="text-gray-600 hover:text-primary transition-colors">Pricing Page</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-600 hover:text-primary transition-colors">Patient Portal</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                <span className="text-gray-600">123 Dental Plaza, Medical District, Beverly Hills, CA 90210</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <span className="text-gray-600">+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <span className="text-gray-600">hello@greendentist.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Opening Hours */}
                    <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-6">Working Hours</h4>
                        <ul className="space-y-3">
                            <li className="flex justify-between text-gray-600">
                                <span>Mon - Fri:</span>
                                <span className="font-semibold">8am - 6pm</span>
                            </li>
                            <li className="flex justify-between text-gray-600">
                                <span>Saturday:</span>
                                <span className="font-semibold">9am - 2pm</span>
                            </li>
                            <li className="flex justify-between text-gray-600">
                                <span>Sunday:</span>
                                <span className="text-primary font-bold italic">Closed</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-100 mt-16 pt-8 text-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} GreenDentist. All rights reserved. | Privacy Policy | Terms of Service</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
