import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DynamicIcon } from '../../common/DynamicIcon';
import { ContactHub } from './ContactHub';
import { ScrollAnimate } from '../../common/ScrollAnimate';

export function Contact({ selectedService }) {
  // Main form states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceType: 'Web Development',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedQuotes, setSubmittedQuotes] = useState([]);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  // Sync selected service pre-selection when triggered from parent component
  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, serviceType: selectedService }));
    }
  }, [selectedService]);

  // Load existing quotes from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('pms_quotes');
    if (saved) {
      try {
        setSubmittedQuotes(JSON.parse(saved));
      } catch (e) {
        // no-op
      }
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Simulate server POST submission delay
    setTimeout(() => {
      const newQuote = {
        name: formData.name,
        email: formData.email,
        serviceType: formData.serviceType,
        budgetRange: 'Standard',
        message: formData.message
      };

      const updated = [newQuote, ...submittedQuotes];
      setSubmittedQuotes(updated);
      localStorage.setItem('pms_quotes', JSON.stringify(updated));

      // Clear fields
      setFormData({
        name: '',
        email: '',
        serviceType: 'Web Development',
        message: ''
      });

      setIsSubmitting(false);
      setShowSuccessToast(true);

      // Auto-dismiss toast
      setTimeout(() => setShowSuccessToast(false), 5000);
    }, 1200);
  };

  const clearQuotes = () => {
    localStorage.removeItem('pms_quotes');
    setSubmittedQuotes([]);
  };

  return (
    <section
      id="contact"
      className="py-12 md:py-24 bg-white scroll-mt-20"
    >
      <div className="container mx-auto px-4 md:px-8">
        {/* Header Title */}
        <ScrollAnimate direction="up" delay={0.1} className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <span className="text-red-500 font-bold uppercase tracking-widest text-xs">Collaboration</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 mt-2 tracking-tight">
            Connect & Request a Quote
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mt-4 rounded-full" />
          <p className="text-neutral-600 mt-5 text-base sm:text-lg">
            Have an elite business plan or creative project idea? Get in touch with us today for a free consultation and project quote.
          </p>
        </ScrollAnimate>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct info panels */}
          <div className="lg:col-span-5">
            <ScrollAnimate direction="right" delay={0.1} className="w-full">
              <ContactHub
                submittedQuotes={submittedQuotes}
                onClearQuotes={clearQuotes}
              />
            </ScrollAnimate>
          </div>

          {/* Right Column: Unified Form Panel */}
          <div className="lg:col-span-7">
            <ScrollAnimate direction="left" delay={0.2} className="w-full">
              <div className="bg-neutral-50 border border-neutral-200/50 rounded-3xl p-6 sm:p-10 shadow-lg relative">
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-neutral-700 uppercase tracking-wider">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Kamil Ahmad"
                      className="w-full px-4 py-3 text-sm rounded-xl border border-neutral-200 bg-white text-neutral-950 focus:outline-hidden focus:ring-2 focus:ring-red-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-neutral-700 uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="khalilahmad.developer@gmail.com"
                      className="w-full px-4 py-3 text-sm rounded-xl border border-neutral-200 bg-white text-neutral-950 focus:outline-hidden focus:ring-2 focus:ring-red-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-neutral-700 uppercase tracking-wider">
                      Required Service
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 text-sm rounded-xl border border-neutral-200 bg-white text-neutral-950 focus:outline-hidden focus:ring-2 focus:ring-red-500 cursor-pointer"
                    >
                      <option value="Web Development">Web Development</option>
                      <option value="Mobile App Development">Mobile App Development</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="Backend Development">Backend Development</option>
                      <option value="E-commerce Solutions">E-commerce Solutions</option>
                      <option value="Custom Software Development">Custom Software Development</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-neutral-700 uppercase tracking-wider">
                      Message & Project Details
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Hello, I would like to schedule a consultation to discuss our project..."
                      className="w-full px-4 py-3 text-sm rounded-xl border border-neutral-200 bg-white text-neutral-950 focus:outline-hidden focus:ring-2 focus:ring-red-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 text-sm font-bold text-white bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-xl shadow-lg hover:shadow-red-600/20 transition-all duration-300 cursor-pointer flex items-center justify-center gap-3 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Submitting Request...</span>
                      </>
                    ) : (
                      <>
                        <DynamicIcon name="Send" className="w-4 h-4" />
                        <span>Submit Quote Request</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </div>

      {/* Success Submission Toast Banner */}
      <AnimatePresence>
        {showSuccessToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 bg-white border border-green-500/30 text-neutral-900 p-5 rounded-2xl shadow-2xl flex items-center gap-4 max-w-md"
          >
            <div className="w-10 h-10 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-500 shrink-0">
              <DynamicIcon name="CheckCircle" className="w-6 h-6" />
            </div>
            <div>
              <h5 className="font-extrabold text-sm text-neutral-900 mb-0.5">Quote Request Submitted!</h5>
              <p className="text-xs text-neutral-600">
                Your request has been successfully received. Our creative team will review your outline and get back to you shortly.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
