/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Sparkles, Zap, Rocket, ArrowRight, Menu } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-6 py-8 md:px-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <Sparkles className="text-black w-6 h-6" />
          </div>
          <span className="font-display font-bold text-xl tracking-tighter uppercase">RobotMagic</span>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:flex items-center gap-8"
        >
          <a href="#" className="text-sm font-medium hover:opacity-50 transition-opacity">How it works</a>
          <a href="#" className="text-sm font-medium hover:opacity-50 transition-opacity">Cool stuff</a>
          <a href="#" className="text-sm font-medium hover:opacity-50 transition-opacity">Prices</a>
          <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-opacity-90 transition-all">
            Start Now
          </button>
        </motion.div>

        <div className="md:hidden">
          <Menu className="w-6 h-6" />
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative pt-32 pb-20 px-6 md:px-12 flex flex-col items-center min-h-screen overflow-hidden">
        {/* Background Video Container */}
        <div className="absolute inset-0 w-full h-full -z-10">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-50"
            poster="https://images.pexels.com/photos/36598795/pexels-photo-36598795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          >
            {/* Using a more direct CDN link for the video to ensure it plays correctly in the browser */}
            <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-robotic-hand-31830-large.mp4" type="video/mp4" />
          </video>
          {/* Gradient Overlay for readability and depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />
        </div>

        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content - Big Text */}
          <div className="lg:col-span-8 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-block px-3 py-1 rounded-full border border-white/20 text-[10px] uppercase tracking-widest font-bold mb-6 bg-white/5">
                AI Magic is Here
              </span>
              <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tighter mb-8">
                WE BUILD <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/50 to-white/20">
                  ROBOT BRAIN
                </span> <br />
                WEBSITES.
              </h1>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-xl md:text-2xl text-white/60 max-w-xl mb-10 leading-relaxed"
            >
              Websites are hard. Robots make them easy. <br />
              We have the best robots. They work while you sleep. <br />
              No boring stuff. Just cool sites. Fast.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <button className="group relative bg-white text-black px-8 py-5 rounded-2xl text-lg font-bold flex items-center gap-3 overflow-hidden transition-all hover:pr-12">
                <span className="relative z-10">Make My Magic Site</span>
                <ArrowRight className="w-5 h-5 transition-all group-hover:translate-x-2" />
              </button>
              <button className="px-8 py-5 rounded-2xl text-lg font-bold border border-white/20 hover:bg-white/5 transition-all">
                See Examples
              </button>
            </motion.div>
          </div>

          {/* Right Content - Creative Positioning */}
          <div className="lg:col-span-4 relative h-[400px] md:h-[600px] flex items-center justify-center">
            {/* Floating Cards */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-0 w-48 h-64 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 rotate-12 z-20"
            >
              <div className="w-8 h-8 bg-white rounded-lg mb-4 flex items-center justify-center">
                <Zap className="text-black w-4 h-4" />
              </div>
              <div className="h-2 w-full bg-white/20 rounded-full mb-2" />
              <div className="h-2 w-2/3 bg-white/20 rounded-full mb-6" />
              <div className="h-20 w-full bg-white/10 rounded-xl" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-10 left-0 w-56 h-48 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 -rotate-6 z-10"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="space-y-2">
                <div className="h-2 w-full bg-white/20 rounded-full" />
                <div className="h-2 w-full bg-white/20 rounded-full" />
                <div className="h-2 w-3/4 bg-white/20 rounded-full" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="w-64 h-64 bg-gradient-to-br from-white/20 to-transparent rounded-full border border-white/10 flex items-center justify-center relative"
            >
               <Rocket className="w-20 h-20 text-white/40" />
               <div className="absolute inset-0 border border-white/5 rounded-full animate-ping opacity-20" />
            </motion.div>
          </div>
        </div>

        {/* Bottom Social Proof / Micro-labels */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-24 w-full max-w-7xl border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-8"
        >
          <div className="flex flex-col gap-2">
            <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Trusted by cool people</span>
            <div className="flex gap-6 grayscale opacity-50">
              <span className="font-display font-bold text-xl">PIZZA CO.</span>
              <span className="font-display font-bold text-xl">DOGGO</span>
              <span className="font-display font-bold text-xl">SKATE</span>
            </div>
          </div>
          
          <div className="flex gap-12">
            <div className="flex flex-col">
              <span className="text-3xl font-display font-bold">100%</span>
              <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Robot Brains</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-display font-bold">FAST</span>
              <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Like a Rocket</span>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Simple Footer */}
      <footer className="px-6 py-12 md:px-12 text-center text-white/20 text-xs uppercase tracking-widest font-bold">
        &copy; 2026 RobotMagic Agency. We love robots.
      </footer>
    </div>
  );
}
