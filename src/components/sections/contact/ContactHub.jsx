import { DynamicIcon } from '../../common/DynamicIcon';

export function ContactHub({ submittedQuotes, onClearQuotes }) {
  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold text-neutral-900 mb-6">
        Official Contact Hub
      </h3>
      
      {/* Info Cards */}
      <div className="space-y-4">
        <a
          href="mailto:maryamnawazdev7780@gmail.com"
          className="flex items-center gap-5 p-5 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200/50 rounded-2xl group transition-all"
        >
          <div className="w-12 h-12 rounded-xl bg-red-50 text-red-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
            <DynamicIcon name="Mail" className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest font-extrabold text-neutral-400 mb-0.5">
              Email Address
            </h4>
            <p className="text-sm sm:text-base font-bold text-neutral-900 group-hover:text-red-500 transition-colors break-all">
              maryamnawazdev7780@gmail.com
            </p>
          </div>
        </a>

        <a
          href="tel:+923027434569"
          className="flex items-center gap-5 p-5 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200/50 rounded-2xl group transition-all"
        >
          <div className="w-12 h-12 rounded-xl bg-red-50 text-red-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
            <DynamicIcon name="Phone" className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest font-extrabold text-neutral-400 mb-0.5">
              Phone / WhatsApp
            </h4>
            <p className="text-sm sm:text-base font-bold text-neutral-900 group-hover:text-red-500 transition-colors">
              +92 302 7434569
            </p>
          </div>
        </a>

        <div className="flex items-center gap-5 p-5 bg-neutral-50 border border-neutral-200/50 rounded-2xl">
          <div className="w-12 h-12 rounded-xl bg-red-50 text-red-500 flex items-center justify-center shrink-0">
            <DynamicIcon name="MapPin" className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest font-extrabold text-neutral-400 mb-0.5">
              Office Headquarters
            </h4>
            <p className="text-sm sm:text-base font-bold text-neutral-900">
              Lahore, Pakistan
            </p>
          </div>
        </div>
      </div>

      {/* Social Panel */}
      <div className="p-6 rounded-2xl border border-neutral-200/40 bg-neutral-50/40">
        <h4 className="text-sm font-bold text-neutral-900 mb-4">Connect with our directors</h4>
        <div className="flex gap-4">
          <a href="#" className="w-11 h-11 rounded-full bg-neutral-100 hover:bg-red-600 text-neutral-600 hover:text-white flex items-center justify-center border border-neutral-200/40 transition-all cursor-pointer">
            <DynamicIcon name="Facebook" className="w-5 h-5" />
          </a>
          <a href="#" className="w-11 h-11 rounded-full bg-neutral-100 hover:bg-red-600 text-neutral-600 hover:text-white flex items-center justify-center border border-neutral-200/40 transition-all cursor-pointer">
            <DynamicIcon name="Twitter" className="w-5 h-5" />
          </a>
          <a href="#" className="w-11 h-11 rounded-full bg-neutral-100 hover:bg-red-600 text-neutral-600 hover:text-white flex items-center justify-center border border-neutral-200/40 transition-all cursor-pointer">
            <DynamicIcon name="Linkedin" className="w-5 h-5" />
          </a>
          <a href="#" className="w-11 h-11 rounded-full bg-neutral-100 hover:bg-red-600 text-neutral-600 hover:text-white flex items-center justify-center border border-neutral-200/40 transition-all cursor-pointer">
            <DynamicIcon name="Instagram" className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Submitted History (Persisted) */}
      {submittedQuotes.length > 0 && (
        <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200/50 space-y-4">
          <div className="flex justify-between items-center">
            <h4 className="text-sm font-bold text-neutral-900 flex items-center gap-2">
              <DynamicIcon name="FileText" className="w-4 h-4 text-red-500" />
              <span>Your Submitted Quotes ({submittedQuotes.length})</span>
            </h4>
            <button
              onClick={onClearQuotes}
              className="text-[10px] text-red-500 hover:underline font-bold cursor-pointer uppercase text-left"
            >
              Clear History
            </button>
          </div>
          
          <div className="max-h-60 overflow-y-auto space-y-3 pr-2 scrollbar-thin">
            {submittedQuotes.map((q, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-white border border-neutral-200/60 rounded-xl flex justify-between items-start"
              >
                <div className="space-y-1">
                  <div className="text-xs font-bold text-neutral-900">
                    {q.serviceType}
                  </div>
                  <div className="text-[10px] text-neutral-500">
                    Budget: {q.budgetRange}
                  </div>
                  <div className="text-[10px] text-neutral-400 italic max-w-xs truncate">
                    "{q.message}"
                  </div>
                </div>
                <span className="text-[9px] font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded border border-green-200 uppercase tracking-widest">
                  Received
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
