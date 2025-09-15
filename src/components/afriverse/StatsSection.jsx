import React from 'react';
import { motion } from 'framer-motion';
import { Users, Coins, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function StatsSection({ stats }) {
  const statItems = [
    { label: "Total Users", value: stats.users, icon: Users },
    { label: "Tokens Launched", value: stats.tokens, icon: Coins },
    { label: "Communities", value: stats.communities, icon: Globe }
  ];

  return (
    <section className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {statItems.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="group bg-gray-900/40 backdrop-blur-xl border-gray-700/50 hover:border-green-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-green-500 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-2 text-green-400 font-heading">
                    {/*{stat.value.toLocaleString()}0+*/}0+
                  </h3>
                  <p className="text-gray-400 font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}