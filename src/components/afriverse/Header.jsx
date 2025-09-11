
import React, { useState, memo } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Assets', href: '#assets' },
    { name: 'Growth', href: '#growth' },
    { name: 'Community', href: '#community' },
    { name: 'Build', href: '#build' },
    { name: 'Social', href: '#social' }
  ];

  const handleNavClick = (item) => {
    alert(`${item} page coming soon! Join our waitlist for updates.`);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <div className="flex items-center gap-3">
                <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68bce6bf4cc2235d2ded8c8a/b717b7f52_kyanicon.png" alt="Afriverse Logo" className="h-8 w-auto" />
                <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent font-heading">
                  Afriverse
                </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <div className="flex items-center bg-gray-900/60 backdrop-blur-md rounded-full p-1 border border-gray-700/50">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleNavClick(item.name)}
                  className="px-4 py-2 text-sm font-medium text-green-400 hover:text-white hover:bg-gray-700/50 rounded-full transition-all duration-200"
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </nav>

          {/* Desktop Login Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:block"
          >
            <Button
              variant="outline"
              onClick={() => alert('Login coming soon! Join waitlist for early access.')}
              className="bg-gray-800/60 border-gray-600 text-white hover:bg-green-500/20 hover:border-green-500/50 hover:text-green-400 transition-all duration-300"
            >
              Login
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-green-400 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 pb-4 border-t border-gray-700/50 pt-4"
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.name)}
                  className="text-left px-4 py-2 text-green-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all duration-200"
                >
                  {item.name}
                </button>
              ))}
              <Button
                variant="outline"
                onClick={() => {
                  alert('Login coming soon! Join waitlist for early access.');
                  setIsMenuOpen(false);
                }}
                className="mt-4 bg-gray-800/60 border-gray-600 text-white hover:bg-green-500/20 hover:border-green-500/50 hover:text-green-400"
              >
                Login
              </Button>
            </div>
          </motion.nav>
        )}
      </div>
    </header>
  );
}

export default memo(Header);
