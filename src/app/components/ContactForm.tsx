import { motion, AnimatePresence } from "motion/react";
import { X, Send, Loader2, CheckCircle } from "lucide-react";
import { useState } from "react";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mnjkvdzo";

export function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email: userEmail, message }),
      });

      if (res.ok) {
        setStatus("success");
        setUserEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleClose = () => {
    setStatus("idle");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-background border border-border shadow-2xl z-[101] max-h-[90vh] overflow-y-auto"
            style={{ borderRadius: '2px' }}
          >
            {/* Header */}
            <div className="px-8 py-6 border-b border-border flex justify-between items-center">
              <h2
                className="text-foreground"
                style={{
                  fontFamily: 'var(--font-lato)',
                  fontSize: '18px',
                  fontWeight: 900,
                  letterSpacing: '0.1em'
                }}
              >
                CONTACT ME
              </h2>
              <button
                onClick={handleClose}
                className="text-foreground hover:text-[#e67ce4] transition-colors duration-200"
                aria-label="Close"
              >
                <X size={24} />
              </button>
            </div>

            {/* Success State */}
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="px-8 py-16 flex flex-col items-center text-center gap-4"
              >
                <CheckCircle size={48} className="text-[#e67ce4]" />
                <p
                  className="text-foreground"
                  style={{ fontFamily: 'var(--font-lato)', fontSize: '18px', fontWeight: 700, letterSpacing: '0.05em' }}
                >
                  Message sent!
                </p>
                <p className="text-muted-foreground" style={{ fontFamily: '"EB Garamond", Georgia, serif', fontSize: '16px' }}>
                  Thanks for reaching out — I'll get back to you soon.
                </p>
                <motion.button
                  onClick={handleClose}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-4 px-8 py-3 bg-[#e67ce4] text-white hover:bg-[#d66bd3] transition-colors duration-200"
                  style={{ fontFamily: 'var(--font-lato)', fontSize: '14px', fontWeight: 700, letterSpacing: '0.05em', borderRadius: '2px' }}
                >
                  CLOSE
                </motion.button>
              </motion.div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit} className="px-8 py-8">
                <div className="space-y-6">
                  {/* To Field (Read-only) */}
                  <div>
                    <label
                      htmlFor="to"
                      className="block mb-2 text-foreground/60"
                      style={{ fontFamily: 'var(--font-lato)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}
                    >
                      To
                    </label>
                    <input
                      type="text"
                      id="to"
                      value="roxannemustafa@gmail.com"
                      readOnly
                      className="w-full px-4 py-3 bg-muted/30 border border-border text-foreground/60 cursor-not-allowed"
                      style={{ fontFamily: '"EB Garamond", Georgia, serif', fontSize: '16px' }}
                    />
                  </div>

                  {/* Subject Field (Read-only) */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block mb-2 text-foreground/60"
                      style={{ fontFamily: 'var(--font-lato)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value="Re: Let's Connect"
                      readOnly
                      className="w-full px-4 py-3 bg-muted/30 border border-border text-foreground/60 cursor-not-allowed"
                      style={{ fontFamily: '"EB Garamond", Georgia, serif', fontSize: '16px' }}
                    />
                  </div>

                  {/* Date Field (Read-only) */}
                  <div>
                    <label
                      htmlFor="date"
                      className="block mb-2 text-foreground/60"
                      style={{ fontFamily: 'var(--font-lato)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}
                    >
                      Date
                    </label>
                    <input
                      type="text"
                      id="date"
                      value={currentDate}
                      readOnly
                      className="w-full px-4 py-3 bg-muted/30 border border-border text-foreground/60 cursor-not-allowed"
                      style={{ fontFamily: '"EB Garamond", Georgia, serif', fontSize: '16px' }}
                    />
                  </div>

                  {/* From/Your Email Field */}
                  <div>
                    <label
                      htmlFor="userEmail"
                      className="block mb-2 text-foreground/80"
                      style={{ fontFamily: 'var(--font-lato)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}
                    >
                      Your Email <span className="text-[#e67ce4]">*</span>
                    </label>
                    <input
                      type="email"
                      id="userEmail"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      required
                      disabled={status === "submitting"}
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 bg-background border border-border text-foreground focus:border-[#e67ce4] focus:outline-none transition-colors duration-200 disabled:opacity-50"
                      style={{ fontFamily: '"EB Garamond", Georgia, serif', fontSize: '16px' }}
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block mb-2 text-foreground/80"
                      style={{ fontFamily: 'var(--font-lato)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}
                    >
                      Message <span className="text-[#e67ce4]">*</span>
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      disabled={status === "submitting"}
                      rows={8}
                      placeholder="Share your thoughts, questions, or project ideas..."
                      className="w-full px-4 py-3 bg-background border border-border text-foreground focus:border-[#e67ce4] focus:outline-none transition-colors duration-200 resize-vertical disabled:opacity-50"
                      style={{ fontFamily: '"EB Garamond", Georgia, serif', fontSize: '16px', lineHeight: '1.6' }}
                    />
                  </div>

                  {/* Error message */}
                  {status === "error" && (
                    <p
                      className="text-destructive"
                      style={{ fontFamily: 'var(--font-lato)', fontSize: '13px' }}
                    >
                      Something went wrong — please try again or email me directly at roxannemustafa@gmail.com.
                    </p>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-4 justify-end mt-8 pt-6 border-t border-border">
                  <motion.button
                    type="button"
                    onClick={handleClose}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 text-foreground hover:text-foreground/60 transition-colors duration-200"
                    style={{ fontFamily: 'var(--font-lato)', fontSize: '14px', fontWeight: 700, letterSpacing: '0.05em' }}
                  >
                    CANCEL
                  </motion.button>
                  <motion.button
                    type="submit"
                    disabled={status === "submitting"}
                    whileHover={{ scale: status === "submitting" ? 1 : 1.02 }}
                    whileTap={{ scale: status === "submitting" ? 1 : 0.98 }}
                    className="px-8 py-3 bg-[#e67ce4] text-white hover:bg-[#d66bd3] transition-colors duration-200 flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    style={{ fontFamily: 'var(--font-lato)', fontSize: '14px', fontWeight: 700, letterSpacing: '0.05em', borderRadius: '2px' }}
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        SENDING...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        SEND EMAIL
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
