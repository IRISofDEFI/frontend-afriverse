import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function UserJourneySection({ journeySteps }) {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent font-heading">
            Your Journey Awaits
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From learning to earning, discover the path to Web3 mastery in Africa
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
          {journeySteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              <Card className={`h-full transition-all duration-500 ${
                step.highlight 
                  ? 'bg-gradient-to-br from-green-500/20 to-cyan-500/20 border-green-500/50 shadow-lg shadow-green-500/20' 
                  : 'bg-gray-900/40 border-gray-700/50 hover:border-green-500/30'
              } backdrop-blur-xl group-hover:shadow-xl group-hover:shadow-green-500/10`}>
                <CardContent className="p-6 text-center h-full flex flex-col justify-between">
                  <div>
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center text-xl font-bold ${
                      step.highlight 
                        ? 'bg-gradient-to-r from-green-500 to-cyan-500 text-black' 
                        : 'bg-gray-700 text-green-400 group-hover:bg-gradient-to-r group-hover:from-green-500 group-hover:to-cyan-500 group-hover:text-black'
                    } transition-all duration-300`}>
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-white group-hover:text-green-400 transition-colors font-heading">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {step.desc}
                    </p>
                  </div>
                  {step.highlight && (
                    <Badge className="mt-4 bg-green-500/20 text-green-400 border-green-500/50">
                      Volume Bot
                    </Badge>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}