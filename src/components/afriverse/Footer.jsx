
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Twitter, Send, Github, BookOpen } from 'lucide-react';

function Footer() {
  const footerLinks = [
    { name: 'About', href: '#', external: false },
    { name: 'Community', href: '#', external: false },
    { name: 'Terms', href: '#', external: false },
    { name: 'Privacy', href: '#', external: false },
    { name: 'Contact', href: '#', external: false },
    { name: 'Docs', href: 'https://afriverse.gitbook.io/afriverse-docs/', external: true }
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://x.com/globalafriverse?s=21&t=bfQCrmhV29cLFss7zh1S5A' },
    { name: 'Telegram', icon: Send, href: 'https://t.me/Afriverse_io/1' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/AfriverseGlobal' },
    { name: 'Docs', icon: BookOpen, href: 'https://afriverse.gitbook.io/afriverse-docs/' }
  ];

  const handleLinkClick = (name) => {
    alert(`${name} page coming soon!`);
  };

  return (
    <footer className="relative bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
                <div className="flex items-center gap-4">
                    <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68bce6bf4cc2235d2ded8c8a/b717b7f52_kyanicon.png" alt="Afriverse Logo" className="h-10 w-auto" />
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent font-heading">
                        Afriverse
                    </h3>
                </div>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                Building for Africa with Africa. Join the decentralized innovation hub empowering 
                the next generation of African Web3 creators.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>🌍 Pan-African</span>
                <span>•</span>
                <span>🚀 2025 Hackathon Series</span>
                <span>•</span>
                <span>💎 $AFRI Ready</span>
              </div>
            </motion.div>
          </div>

          {/* Links Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <h4 className="text-white font-semibold text-lg font-heading">Platform</h4>
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : { onClick: (e) => { e.preventDefault(); handleLinkClick(link.name); } })}
                      className="text-gray-400 hover:text-green-400 transition-colors flex items-center group"
                    >
                      {link.name}
                      {link.external && (
                        <ExternalLink className="ml-1 w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Social Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <h4 className="text-white font-semibold text-lg font-heading">Connect</h4>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-gray-800/50 hover:bg-gradient-to-r hover:from-green-500/20 hover:to-cyan-500/20 rounded-xl border border-gray-700/50 hover:border-green-500/30 transition-all duration-300 group"
                  >
                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors" />
                    <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="border-t border-gray-800 pt-8 mt-12"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2025 Afriverse — Empowering Africa's Future
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>Made with 💚 in Africa</span>
              <span>•</span>
              <span>Powered by Web3</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
    </footer>
  );
}

export default memo(Footer);
