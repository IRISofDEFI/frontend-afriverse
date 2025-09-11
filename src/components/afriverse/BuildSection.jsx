import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, ArrowRight } from 'lucide-react';

export default function BuildSection({ setIsWaitlistOpen }) {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent font-heading">
            Build Your Own Future
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Empower yourself with cutting-edge tools to create real-world solutions for Africa. 
            Join thousands building the future of Web3 innovation.
          </p>
          <Button 
            size="lg" 
            onClick={() => setIsWaitlistOpen(true)}
            className="group bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-400 hover:to-cyan-400 text-black px-10 py-5 text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/30"
          >
            <Mail className="mr-3 w-5 h-5" />
            Join Early Access Waitlist
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}