import React, { useState, useEffect, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, X, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

import ParticleBackground from '../components/afriverse/ParticleBackground';
import Header from '../components/afriverse/Header';
import Footer from '../components/afriverse/Footer';

// Lazily load sections for better performance
const StatsSection = lazy(() => import('../components/afriverse/StatsSection'));
const UserJourneySection = lazy(() => import('../components/afriverse/UserJourneySection'));
const BuildSection = lazy(() => import('../components/afriverse/BuildSection'));

const Loader = () => <div className="h-96 w-full" />;

export default function Home() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stats, setStats] = useState({ users: 0, tokens: 0, communities: 0 });
  const [showSuccess, setShowSuccess] = useState(false);

  // Animate stats on mount
  useEffect(() => {
    const animateStats = () => {
      const targetStats = { users: 1547, tokens: 68, communities: 234 };
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        const easeOut = 1 - Math.pow(1 - progress, 3);
        
        setStats({
          users: Math.floor(targetStats.users * easeOut),
          tokens: Math.floor(targetStats.tokens * easeOut),
          communities: Math.floor(targetStats.communities * easeOut),
        });

        if (step >= steps) clearInterval(timer);
      }, stepTime);
    };

    const timer = setTimeout(animateStats, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleWaitlistSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Store in localStorage for demo
    const waitlistEmails = JSON.parse(localStorage.getItem('afriverse_waitlist') || '[]');
    waitlistEmails.push({ email, timestamp: Date.now() });
    localStorage.setItem('afriverse_waitlist', JSON.stringify(waitlistEmails));
    
    setIsSubmitting(false);
    setShowSuccess(true);
    setEmail('');
    
    setTimeout(() => {
      setIsWaitlistOpen(false);
      setShowSuccess(false);
    }, 2000);
  };

  const journeySteps = [
    { title: "Join Afriverse", desc: "Enter the ecosystem" },
    { title: "Learn Skills", desc: "Web3 & AI mastery" },
    { title: "TRIP", desc: "Volume boost for tokens", highlight: true },
    { title: "Earn Rewards", desc: "$AFRI tokens & NFTs" },
    { title: "Treasure", desc: "AI-powered insights" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white overflow-x-hidden">
      <Suspense fallback={null}>
        <ParticleBackground />
      </Suspense>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 bg-gradient-to-r from-green-400 via-cyan-400 to-green-400 bg-clip-text text-transparent font-heading tracking-tight">
              Afriverse
            </h1>
            <div className="absolute inset-0 -z-10">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-green-400/10 blur-3xl font-heading tracking-tight">
                Afriverse
              </h1>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-6 mb-12"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-gray-200 font-heading">
              Real-world empowerment & Real-time opportunities
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Join the decentralized African innovation hub for community, assets, learning, and growth. 
              Building for Africa with Africa.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button 
              size="lg" 
              className="group bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/20"
              onClick={() => alert('Dapp launching soon! Join waitlist for early access.')}
            >
              Launch Dapp
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-400 hover:to-cyan-400 text-black px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20"
              onClick={() => setIsWaitlistOpen(true)}
            >
              <Sparkles className="mr-2 w-5 h-5" />
              Join Waitlist
            </Button>
          </motion.div>
        </div>
      </section>

      <Suspense fallback={<Loader />}>
        <StatsSection stats={stats} />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <UserJourneySection journeySteps={journeySteps} />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <BuildSection setIsWaitlistOpen={setIsWaitlistOpen} />
      </Suspense>

      <Footer />

      {/* Waitlist Modal */}
      <Dialog open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen}>
        <DialogContent className="sm:max-w-md bg-gray-900 border-gray-700">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent font-heading">
              Join the Future
            </DialogTitle>
          </DialogHeader>
          
          <AnimatePresence mode="wait">
            {showSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    ✓
                  </motion.div>
                </div>
                <h3 className="text-xl font-semibold text-green-400 mb-2 font-heading">You're In!</h3>
                <p className="text-gray-400">Check your email for exclusive updates on TRIP Bot, hackathons & AFRI rewards.</p>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <p className="text-gray-400 text-center mb-6">
                  Get early access to TRIP Bot, exclusive hackathons, and AFRI token rewards.
                </p>
                
                <form onSubmit={handleWaitlistSubmit} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-green-500"
                  />
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting || !email}
                    className="w-full bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-400 hover:to-cyan-400 text-black font-semibold py-3"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-black border-t-transparent mr-2"></div>
                        Joining Waitlist...
                      </div>
                    ) : (
                      'Join Waitlist'
                    )}
                  </Button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </div>
  );
}