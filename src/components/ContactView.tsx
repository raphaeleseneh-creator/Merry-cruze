import React, { useState } from 'react';
import { ArrowLeft, Mail, Phone, MapPin, MessageSquare, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { MERRYCRUZE_CONFIG, getGeneralWhatsAppLink } from '../data/config';

interface ContactViewProps {
  onBackToHome: () => void;
  onRequestQuote: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onBackToHome, onRequestQuote }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [organization, setOrganization] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-8 md:py-16 px-3 sm:px-6 bg-[#F5F5F5] min-h-screen">
      <div className="max-w-6xl mx-auto">
        
        <button
          type="button"
          onClick={onBackToHome}
          className="text-xs font-semibold text-[#606060] hover:text-[#171717] flex items-center gap-1 mb-6 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Homepage</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 bg-[#171717] text-white rounded-3xl md:rounded-[36px] p-6 sm:p-10 border border-neutral-800 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-[#F59A23] uppercase">
                Direct Procurement Desk
              </span>
              <h1 className="text-3xl sm:text-4xl font-black uppercase text-white mt-2 leading-tight">
                GET IN TOUCH <br />
                <span className="text-[#F59A23]">WITH MERRYCRUZE</span>
              </h1>
              <p className="mt-4 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Connect directly regarding commercial supplies, tender bills of quantities, single unit enquiries, or nationwide freight logistics.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-neutral-900 border border-neutral-800">
                  <MapPin className="w-5 h-5 text-[#F59A23] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase">Headquarters & Fulfillment</h4>
                    <p className="text-xs text-neutral-400 mt-0.5">{MERRYCRUZE_CONFIG.headquarters}</p>
                    <p className="text-[11px] text-neutral-500 mt-1">Fulfillment across Lagos, Abuja, Port Harcourt & Nationwide.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-neutral-900 border border-neutral-800">
                  <Mail className="w-5 h-5 text-[#F59A23] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase">Email Correspondence</h4>
                    <p className="text-xs text-neutral-400 mt-0.5">{MERRYCRUZE_CONFIG.corporateEmail}</p>
                    <p className="text-[11px] text-neutral-500">{MERRYCRUZE_CONFIG.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-neutral-900 border border-neutral-800">
                  <Phone className="w-5 h-5 text-[#F59A23] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase">Telephone & WhatsApp</h4>
                    <p className="text-xs text-neutral-400 mt-0.5">{MERRYCRUZE_CONFIG.phoneNumber}</p>
                    <p className="text-[11px] text-neutral-500">Configurable official procurement contact line</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-800">
              <a
                href={getGeneralWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#F59A23] hover:bg-[#D97706] text-white py-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Direct WhatsApp Conversation</span>
              </a>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl md:rounded-[36px] p-6 sm:p-10 border border-[#E7E7E7] shadow-sm">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#171717]">Message Received</h3>
                <p className="text-xs sm:text-sm text-[#606060] max-w-md mx-auto">
                  Thank you. Our procurement operations desk will review your submission and reply with the relevant product schedules.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="bg-[#171717] text-white px-6 py-2.5 rounded-full text-xs font-bold mt-2"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-[#E7E7E7] pb-4 mb-4">
                  <h3 className="text-lg font-bold uppercase text-[#171717]">
                    Send a Message or Request
                  </h3>
                  <p className="text-xs text-[#606060] mt-0.5">
                    We supply commercial facilities, educational centers, and private homes across Nigeria.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#171717] mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full text-xs p-3 rounded-xl border border-[#E7E7E7] bg-[#F5F5F5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F59A23]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#171717] mb-1">Organization / Home</label>
                    <input
                      type="text"
                      placeholder="Company or Estate Name"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      className="w-full text-xs p-3 rounded-xl border border-[#E7E7E7] bg-[#F5F5F5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F59A23]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#171717] mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="contact@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full text-xs p-3 rounded-xl border border-[#E7E7E7] bg-[#F5F5F5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F59A23]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#171717] mb-1">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      required
                      placeholder="+234..."
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full text-xs p-3 rounded-xl border border-[#E7E7E7] bg-[#F5F5F5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F59A23]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#171717] mb-1">Equipment Requirements / Inquiry Details</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about the items you need, unit quantities, delivery location, or timeline..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full text-xs p-3 rounded-xl border border-[#E7E7E7] bg-[#F5F5F5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F59A23]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#171717] hover:bg-[#F59A23] text-white py-3.5 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
