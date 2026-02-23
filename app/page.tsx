import Link from "next/link";
import { ArrowRight, Star, CheckCircle2, MapPin, Phone, Clock, Leaf, ShieldCheck, Heart } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 lg:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-8 text-center lg:text-left animate-in fade-in slide-in-from-left duration-700">
              <div className="inline-flex items-center space-x-2 bg-accent px-4 py-2 rounded-full border border-emerald-100">
                <Leaf className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">Eco-Friendly Dental Care</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.1]">
                Your Smile, <br />
                <span className="text-primary italic">Our Passion</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
                Professional dental care in a modern, comfortable environment. We blend advanced technology with a gentle, patient-first approach.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  href="/#contact"
                  className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl hover:shadow-primary/20 flex items-center justify-center space-x-2 group"
                >
                  <span>Book Appointment</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/services"
                  className="w-full sm:w-auto bg-white border-2 border-primary/20 hover:border-primary text-gray-700 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center"
                >
                  View Services
                </Link>
              </div>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-[10px] font-bold">U{i}</div>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 font-medium">Trusted by 2,000+ happy patients</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="flex-1 w-full relative group animate-in fade-in slide-in-from-right duration-700">
              <div className="aspect-[4/3] w-full bg-gray-50 rounded-3xl overflow-hidden relative shadow-2xl">
                <img
                  src="/images/Professional Clinic Image .jpeg"
                  alt="Professional Dental Clinic"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur px-6 py-4 rounded-2xl shadow-lg border border-emerald-50 max-w-[200px]">
                  <div className="flex items-center space-x-2 mb-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="font-bold text-gray-900">4.9/5 Rating</span>
                  </div>
                  <p className="text-xs text-gray-500">Based on Google Reviews</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-white divide-x divide-white/20">
            <div className="text-center px-4">
              <div className="text-4xl font-bold mb-1">15+</div>
              <div className="text-emerald-100 text-sm font-medium">Years Experience</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl font-bold mb-1">5k+</div>
              <div className="text-emerald-100 text-sm font-medium">Happy Smiles</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl font-bold mb-1">100%</div>
              <div className="text-emerald-100 text-sm font-medium">Safe Procedures</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl font-bold mb-1">Top</div>
              <div className="text-emerald-100 text-sm font-medium">Rated Clinic 2023</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Dr. Sarah Green */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 w-full">
            <div className="aspect-[3/4] bg-gray-50 rounded-3xl relative shadow-xl overflow-hidden group">
              <img
                src="/images/Dr. Sarah Green Photo .jpeg"
                alt="Dr. Sarah Green"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-emerald-50 transition-all group-hover:bg-primary group-hover:text-white group-hover:-translate-y-2">
                <h4 className="font-bold text-xl mb-1 transition-colors">Dr. Sarah Green, DDS</h4>
                <p className="text-gray-500 text-sm transition-colors group-hover:text-emerald-50">Chief Cosmetic Surgeon</p>
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">Expert Care with a <span className="text-primary tracking-tight">Personal Touch</span></h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Dr. Sarah Green has dedicated over 15 years to perfecting the art of cosmetic and restorative dentistry. Her focus is on minimally invasive techniques that prioritize patient comfort and long-term health.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Modern high-tech equipment",
                "Eco-friendly materials",
                "Gentle anesthesia options",
                "Advanced whitening tech",
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <span className="font-semibold text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <Link href="/services" className="inline-flex items-center space-x-2 text-primary font-bold hover:underline">
              <span>Read more about our approach</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="contact" className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">Find Our Office</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Conveniently located in the Medical District with easy parking and modern facilities.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 aspect-video bg-white rounded-3xl border-2 border-dashed border-emerald-100 flex items-center justify-center p-8 shadow-xl">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary/10 mx-auto mb-4" />
                <p className="text-gray-400 font-medium">Google Maps Embed Placeholder</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-emerald-50 space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent p-3 rounded-2xl">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Our Address</h4>
                    <p className="text-gray-600">123 Dental Plaza, Beverly Hills, CA 90210</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-accent p-3 rounded-2xl">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Call Us</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-accent p-3 rounded-2xl">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Open Hours</h4>
                    <p className="text-gray-600 text-sm">Mon-Fri: 8am - 6pm</p>
                    <p className="text-gray-600 text-sm">Sat: 9am - 2pm</p>
                  </div>
                </div>
                <button className="w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-xl font-bold shadow-lg transition-all hover:scale-[1.02]">
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
