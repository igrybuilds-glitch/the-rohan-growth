import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';

interface StrategyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StrategyModal: React.FC<StrategyModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: 'Rohan Sharma',
    phone: '+91 98290 XXXXX',
    email: 'studio@therohaninteriors.com',
    projectFocus: 'Commercial Showroom & Residential Turnkey',
    locality: 'Sardarpura / Pal Road, Jodhpur',
    notes: 'Discussing the 8-system growth engine around our current website portfolio.'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hi IGRYBUILDS team, I reviewed the Digital Growth Engine demo for The Rohan Interiors (Jodhpur). I would like to schedule a 15-minute strategic walkthrough regarding the WhatsApp funnel and local SEO systems.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#28151F]/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-[#FFF8F3] border border-[#28151F]/15 rounded-xl shadow-2xl p-6 sm:p-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle decorative marble hairline */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF7048] via-[#FF5C63] to-[#F43F7F]" />

        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-1 text-[#28151F]/60 hover:text-[#28151F] rounded-md transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="mb-6">
              <span className="text-[11px] font-mono tracking-wider uppercase text-[#A95C70]">
                Private Strategic Discussion
              </span>
              <h3 className="text-xl sm:text-2xl font-serif text-[#28151F] mt-1">
                Book a 15-Minute Strategy Call
              </h3>
              <p className="text-xs sm:text-sm text-[#28151F]/70 mt-1.5 leading-relaxed">
                A focused architectural walkthrough showing how these 8 digital systems integrate with your existing website and team workflow in Jodhpur.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-[#28151F] mb-1">
                    Your Name / Studio
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-white border border-[#28151F]/20 rounded-md focus:outline-none focus:border-[#FF7048]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#28151F] mb-1">
                    Direct Phone / WhatsApp
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-white border border-[#28151F]/20 rounded-md focus:outline-none focus:border-[#FF7048]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#28151F] mb-1">
                  Primary Growth Focus in Jodhpur
                </label>
                <select
                  value={formData.projectFocus}
                  onChange={(e) => setFormData({ ...formData, projectFocus: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-white border border-[#28151F]/20 rounded-md focus:outline-none focus:border-[#FF7048]"
                >
                  <option value="Commercial Showroom & Residential Turnkey">Commercial Showroom & Residential Turnkey</option>
                  <option value="High-Ticket Villa Interiors">High-Ticket Luxury Villa Interiors</option>
                  <option value="WhatsApp Lead Automation & CRM">WhatsApp Lead Automation & CRM Setup</option>
                  <option value="Local Jodhpur SEO & Google Maps Dominance">Local Jodhpur SEO & Google Maps Authority</option>
                  <option value="Complete 8-System Implementation">Complete 8-System Implementation</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#28151F] mb-1">
                  Locality / Studio Location
                </label>
                <input
                  type="text"
                  value={formData.locality}
                  onChange={(e) => setFormData({ ...formData, locality: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-white border border-[#28151F]/20 rounded-md focus:outline-none focus:border-[#FF7048]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#28151F] mb-1">
                  Preliminary Notes
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-white border border-[#28151F]/20 rounded-md focus:outline-none focus:border-[#FF7048]"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <button
                  type="submit"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[#28151F] hover:bg-[#FF7048] text-white text-xs font-medium rounded-md transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Confirm Strategy Session</span>
                </button>

                <a
                  href={`https://wa.me/919829000000?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 px-4 py-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-medium rounded-md transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <CheckCircle2 className="w-12 h-12 text-[#FF7048] mx-auto mb-3" />
            <h4 className="text-xl font-serif text-[#28151F]">Request Registered</h4>
            <p className="text-xs sm:text-sm text-[#28151F]/70 mt-2 max-w-sm mx-auto leading-relaxed">
              Thank you. The IGRYBUILDS engineering team has received your inquiry for <strong>The Rohan Interiors</strong>. We will coordinate a 15-minute briefing session.
            </p>

            <div className="mt-6 flex justify-center gap-3">
              <a
                href={`https://wa.me/919829000000?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 bg-[#25D366] text-white text-xs font-medium rounded-md transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Open Direct WhatsApp</span>
                <ArrowRight className="w-3 h-3" />
              </a>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="px-4 py-2 bg-[#FFE3D4] text-[#28151F] text-xs font-medium rounded-md hover:bg-[#FFE3D4]/80 transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
