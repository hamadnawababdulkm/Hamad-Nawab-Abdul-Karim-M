import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Sparkles, CheckCircle2 } from 'lucide-react';
import { Navbar } from '@/src/components/Navbar.tsx';
import { DashboardPreview } from '@/src/components/DashboardPreview.tsx';
import { Button } from '@/src/components/ui/button.tsx';

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [demoSubmitted, setDemoSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setDemoSubmitted(true);
      setTimeout(() => {
        setIsDemoModalOpen(false);
        setDemoSubmitted(false);
        setEmail('');
      }, 1800);
    }
  };

  return (
    <div className="h-screen flex flex-col bg-background overflow-hidden relative select-auto">
      {/* Navbar */}
      <Navbar onCtaClick={() => setIsDemoModalOpen(true)} />

      {/* Hero Section */}
      <main className="flex-1 relative flex flex-col items-center justify-start overflow-hidden w-full">
        {/* Background Video: Fullscreen muted autoplay loop video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-90"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260319_015952_e1deeb12-8fb7-4071-a42a-60779fc64ab6.mp4"
            type="video/mp4"
          />
        </video>

        {/* All content wrapped in relative z-10 flex flex-col items-center w-full */}
        <div className="relative z-10 flex flex-col items-center w-full px-4 md:px-6 pt-2 md:pt-4">
          {/* 1. Badge (top) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-1.5 text-sm text-muted-foreground font-body shadow-xs"
          >
            <span>Now with GPT-5 support ✨</span>
          </motion.div>

          {/* 2. Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center font-display text-5xl md:text-6xl lg:text-[5rem] leading-[0.95] tracking-tight text-foreground max-w-xl"
          >
            The Future of <span className="italic font-normal">Smarter</span> Automation
          </motion.h1>

          {/* 3. Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-center text-base md:text-lg text-muted-foreground max-w-[650px] leading-relaxed font-body"
          >
            Automate your busywork with intelligent agents that learn, adapt, and execute—so your team can focus on what matters most.
          </motion.p>

          {/* 4. CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-5 flex items-center gap-3 font-body"
          >
            {/* Primary button: rounded-full px-6 py-5 text-sm font-medium font-body — text "Book a demo" */}
            <Button
              onClick={() => setIsDemoModalOpen(true)}
              className="rounded-full px-6 py-5 text-sm font-medium font-body bg-primary text-primary-foreground hover:bg-primary/90 shadow-md h-auto cursor-pointer"
            >
              Book a demo
            </Button>

            {/* Play button: ghost variant, h-11 w-11 rounded-full border-0 bg-background shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:bg-background/80 with a Play icon (lucide) h-4 w-4 fill-foreground */}
            <Button
              variant="ghost"
              onClick={() => setIsVideoModalOpen(true)}
              className="h-11 w-11 rounded-full border-0 bg-background shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:bg-background/80 p-0 flex items-center justify-center cursor-pointer shrink-0"
              aria-label="Watch video demo"
            >
              <Play className="h-4 w-4 fill-foreground text-foreground ml-0.5" />
            </Button>
          </motion.div>

          {/* 5. Dashboard Preview (custom coded, NOT an image) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 w-full max-w-5xl"
          >
            <DashboardPreview />
          </motion.div>
        </div>
      </main>

      {/* Interactive Demo Booking Modal */}
      <AnimatePresence>
        {isDemoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDemoModalOpen(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-xs"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-md bg-background rounded-2xl p-6 shadow-2xl border border-border font-body z-10"
            >
              <button
                type="button"
                onClick={() => setIsDemoModalOpen(false)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {demoSubmitted ? (
                <div className="py-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Demo request received!
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Our team will reach out to you within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-5 h-5 text-accent" />
                    <h3 className="text-lg font-semibold text-foreground">
                      Experience Nexora Live
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    See how our intelligent automation agents streamline your financial operations in under 15 minutes.
                  </p>
                  <form onSubmit={handleDemoSubmit} className="flex flex-col gap-3">
                    <div>
                      <label htmlFor="demo-email" className="block text-xs font-medium text-foreground mb-1">
                        Work email address
                      </label>
                      <input
                        id="demo-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="jane@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-secondary/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="mt-2 w-full rounded-full py-2.5 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      Confirm Demo Request
                    </Button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Interactive Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/20 z-10 aspect-video"
            >
              <button
                type="button"
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 cursor-pointer"
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </button>
              <video
                controls
                autoPlay
                className="w-full h-full object-cover"
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260319_015952_e1deeb12-8fb7-4071-a42a-60779fc64ab6.mp4"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
