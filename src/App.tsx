/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Sparkles, Zap, Rocket, ArrowRight, Menu } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black overflow-x-hidden relative">
      {/* Background Video Layer */}
      <div className="fixed inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
          key="hero-video-v3"
        >
          {/* Attempting multiple common Pexels direct link formats */}
          <source src="https://videos.pexels.com/video-files/36598795/36598795-uhd_2560_1440_24fps.mp4" type="video/mp4" />
          <source src="https://videos.pexels.com/video-files/36598795/36598795-hd_1920_1080_24fps.mp4" type="video/mp4" />
          <source src="https://www.pexels.com/download/video/36598795/" type="video/mp4" />
        </video>
        {/* Dark Overlays for readability - adjusted for better visibility */}
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-6 py-8 md:px-12 bg-gradient-to-b from-black/90 to-transparent">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.5)] rotate-3">
            <Sparkles className="text-black w-7 h-7" />
          </div>
          <span className="font-display font-black text-2xl tracking-tighter uppercase italic">RobotMagic</span>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:flex items-center gap-10"
        >
          <a href="#" className="text-xs font-black hover:text-white/70 transition-colors uppercase tracking-[0.3em]">How it works</a>
          <a href="#" className="text-xs font-black hover:text-white/70 transition-colors uppercase tracking-[0.3em]">Cool stuff</a>
          <a href="#" className="text-xs font-black hover:text-white/70 transition-colors uppercase tracking-[0.3em]">Prices</a>
          <button className="bg-white text-black px-8 py-3 rounded-full text-sm font-black hover:scale-110 active:scale-95 transition-all uppercase tracking-tighter shadow-xl">
            Start Now
          </button>
        </motion.div>

        <div className="md:hidden">
          <Menu className="w-8 h-8" />
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative pt-40 pb-20 px-6 md:px-12 flex flex-col items-center min-h-screen" style={{ zIndex: 10 }}>
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Content - Big Text */}
          <div className="lg:col-span-8 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-block px-6 py-2 rounded-full border-4 border-white text-[14px] uppercase tracking-[0.4em] font-black mb-10 bg-black shadow-[8px_8px_0px_white]">
                ROBOTS ARE COOL
              </span>
              <h1 className="font-display text-7xl md:text-9xl lg:text-[12rem] font-black leading-[0.8] tracking-tighter mb-12">
                WE MAKE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/50 to-white/10">
                  MAGIC
                </span> <br />
                SITES.
              </h1>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-3xl md:text-5xl text-white font-black max-w-3xl mb-16 leading-none tracking-tight"
            >
              Websites are hard. <br />
              Robots make them easy. <br />
              You just watch. <br />
              Magic! 🪄
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-wrap gap-8"
            >
              <button className="group relative bg-white text-black px-12 py-8 rounded-[2rem] text-3xl font-black flex items-center gap-6 overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[12px_12px_0px_rgba(255,255,255,0.3)]">
                <span className="relative z-10">GIVE ME MAGIC</span>
                <ArrowRight className="w-10 h-10 transition-all group-hover:translate-x-4" />
              </button>
              <button className="px-12 py-8 rounded-[2rem] text-3xl font-black border-8 border-white hover:bg-white hover:text-black transition-all">
                SHOW ME
              </button>
            </motion.div>
          </div>

          {/* Right Content - Creative Positioning */}
          <div className="lg:col-span-4 relative h-[500px] md:h-[700px] flex items-center justify-center">
            {/* Floating Cards */}
            <motion.div
              animate={{ y: [0, -40, 0], rotate: [12, 18, 12] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 w-64 h-80 bg-white text-black rounded-[3rem] p-10 z-20 shadow-[20px_20px_0px_rgba(255,255,255,0.2)] flex flex-col justify-between border-4 border-black"
            >
              <div className="w-16 h-16 bg-black rounded-3xl flex items-center justify-center">
                <Zap className="text-white w-8 h-8" />
              </div>
              <div className="space-y-3">
                <div className="h-5 w-full bg-black/10 rounded-full" />
                <div className="h-5 w-2/3 bg-black/10 rounded-full" />
              </div>
              <div className="h-28 w-full bg-black rounded-3xl flex items-center justify-center font-black text-white text-sm uppercase tracking-[0.3em]">
                ROBOT BRAIN
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 40, 0], rotate: [-10, -15, -10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-0 left-0 w-72 h-64 bg-black/40 backdrop-blur-3xl border-8 border-white rounded-[3rem] p-10 z-10 shadow-2xl"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-5 h-5 rounded-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.8)]" />
                <div className="w-5 h-5 rounded-full bg-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.8)]" />
                <div className="w-5 h-5 rounded-full bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.8)]" />
              </div>
              <div className="space-y-4">
                <div className="h-4 w-full bg-white/20 rounded-full" />
                <div className="h-4 w-full bg-white/20 rounded-full" />
                <div className="h-4 w-3/4 bg-white/20 rounded-full" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="w-80 h-80 bg-white/5 rounded-full border-4 border-white/10 flex items-center justify-center relative"
            >
               <Rocket className="w-32 h-32 text-white/20 animate-pulse" />
               <div className="absolute inset-0 border-8 border-white rounded-full animate-ping opacity-5" />
            </motion.div>
          </div>
        </div>

        {/* Bottom Social Proof / Micro-labels */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-32 w-full max-w-7xl border-t-8 border-white pt-16 flex flex-col md:flex-row justify-between items-center gap-16"
        >
          <div className="flex flex-col gap-6">
            <span className="text-sm uppercase tracking-[0.5em] text-white font-black">COOL FRIENDS</span>
            <div className="flex gap-12">
              <span className="font-display font-black text-4xl italic tracking-tighter">PIZZA</span>
              <span className="font-display font-black text-4xl italic tracking-tighter">DOGGO</span>
              <span className="font-display font-black text-4xl italic tracking-tighter">SKATE</span>
            </div>
          </div>
          
          <div className="flex gap-20">
            <div className="flex flex-col">
              <span className="text-7xl font-display font-black">100%</span>
              <span className="text-sm uppercase tracking-widest text-white/40 font-black">ROBOTS</span>
            </div>
            <div className="flex flex-col">
              <span className="text-7xl font-display font-black">FAST</span>
              <span className="text-sm uppercase tracking-widest text-white/40 font-black">ZOOM!</span>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Simple Footer */}
      <footer className="relative z-10 px-6 py-24 md:px-12 text-center text-white/20 text-sm uppercase tracking-[1em] font-black">
        ROBOT MAGIC &copy; 2026 • WE LOVE YOU
      </footer>
    </div>
  );
}
