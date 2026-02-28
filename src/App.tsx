/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Instagram,
  Facebook,
  Twitter,
  ArrowRight,
  Target,
  Compass,
  Zap,
  Heart,
  Calendar,
  User,
  BookOpen,
  Milestone,
  Rocket,
  Mail
} from 'lucide-react';
import CardStream from './components/CardStream';
import { AuroraButton } from './components/ui/aurora-button';

// --- Types ---
type Page = 'Home' | 'Philosophy' | 'Journey' | 'Future' | 'Join Me';

// --- Components ---

const Background = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden bg-[var(--color-background)]">
    <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#D9D9C3]/40 rounded-full blur-[120px] animate-float" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#E6E6DA]/40 rounded-full blur-[150px] animate-float-delayed" />
    <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-[#8C7851]/10 rounded-full blur-[100px] animate-float-slow" />
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-multiply pointer-events-none" />
  </div>
);

const Navbar = ({ activePage, setActivePage }: { activePage: Page, setActivePage: (p: Page) => void }) => {
  const tabs: Page[] = ['Home', 'Philosophy', 'Journey', 'Future', 'Join Me'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <div className="glass px-2 py-2 rounded-full flex items-center gap-1">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActivePage(tab)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative cursor-pointer ${activePage === tab ? 'text-[#1A1A1A]' : 'text-[#1A1A1A]/60 hover:text-[#1A1A1A]/90'
              }`}
          >
            {activePage === tab && (
              <motion.div
                layoutId="nav-pill"
                className="absolute inset-0 bg-black/5 rounded-full"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{tab}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

const Home = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="max-w-6xl mx-auto pt-32 px-6 pb-20"
  >
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-8 relative z-10">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-6xl md:text-7xl lg:text-8xl font-serif leading-tight"
        >
          Invest with <br />
          <span className="text-[#8C7851]">confidence.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-[#1A1A1A]/70 leading-relaxed font-light"
        >
          I'm a builder, thinker, and explorer of the digital frontier.
          My work sits at the intersection of human intuition and algorithmic precision.
        </motion.p>
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="space-y-4"
        >
          {['Passionate about minimalist design systems', 'Exploring the future of generative AI', 'Advocate for digital privacy and ethics'].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-[#1A1A1A]/90">
              <div className="w-1.5 h-1.5 rounded-full bg-[#8C7851]" />
              {item}
            </li>
          ))}
        </motion.ul>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="relative aspect-[4/5] rounded-3xl overflow-hidden glass group cursor-pointer"
      >
        <img
          src="https://picsum.photos/seed/portrait/800/1000"
          alt="Portrait"
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F5F5F0] via-transparent to-transparent opacity-60" />
        <div className="absolute bottom-8 left-8 right-8">
          <div className="glass p-4 rounded-2xl backdrop-blur-md">
            <p className="text-xs uppercase tracking-widest text-[#1A1A1A]/40 mb-1">Current Focus</p>
            <p className="text-sm font-medium">Building Ethereal Experiences</p>
          </div>
        </div>
      </motion.div>
    </div>

    {/* Injected Card Stream Component */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="mt-32 w-full"
    >
      <CardStream />
    </motion.div>
  </motion.div>
);

const Philosophy = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="max-w-2xl mx-auto pt-40 px-6 text-center"
  >
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="mb-12 inline-block p-4 rounded-full bg-[#8C7851]/10 text-[#8C7851]"
    >
      <Compass size={32} />
    </motion.div>
    <h2 className="text-4xl md:text-5xl font-serif mb-12">The Manifesto</h2>
    <div className="space-y-8 text-xl md:text-2xl leading-relaxed text-[#1A1A1A]/90 font-light">
      <p>
        I believe that technology should be a quiet companion, not a loud distraction.
        True innovation isn't about complexity; it's about the radical simplification of the human experience.
        I value depth over breadth, intentionality over impulse, and silence over noise.
      </p>
      <p>
        In a world of infinite scrolls, I strive to build finite moments of beauty.
        My drive comes from the belief that we can craft a digital world that feels as organic and essential as the physical one.
        Integrity is my compass, and curiosity is my engine.
      </p>
    </div>

    <div className="mt-16 flex justify-center">
      <AuroraButton
        className="w-auto px-10 py-4 rounded-2xl text-lg font-serif italic"
        glowClassName="from-[#D9D9C3] via-[#8C7851] to-[#D9D9C3]"
      >
        View My Work <ArrowRight className="ml-2" size={20} />
      </AuroraButton>
    </div>
  </motion.div>
);

const Journey = () => {
  const milestones = [
    { year: '2024', title: 'The Shift', desc: 'Transitioned from corporate engineering to independent creative research.' },
    { year: '2022', title: 'Deep Tech', desc: 'Led the development of a privacy-first communication protocol.' },
    { year: '2020', title: 'Genesis', desc: 'Launched my first major open-source project, reaching 10k stars.' },
    { year: '2018', title: 'The Spark', desc: 'Discovered the intersection of generative art and functional programming.' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-6xl mx-auto pt-40 px-6 pb-20"
    >
      <h2 className="text-4xl font-serif italic mb-16 text-center">The Timeline</h2>
      <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />
        <div className="space-y-12">
          {milestones.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`flex flex-col md:flex-row gap-8 items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="flex-1 text-center md:text-left">
                <div className={`glass p-8 rounded-3xl hover:bg-black/5 transition-colors duration-300 cursor-pointer ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <span className="text-[#8C7851] font-mono text-sm mb-2 block">{m.year}</span>
                  <h3 className="text-2xl font-serif mb-4">{m.title}</h3>
                  <p className="text-[#1A1A1A]/70 leading-relaxed">{m.desc}</p>
                </div>
              </div>
              <div className="relative z-10 w-4 h-4 rounded-full bg-[#8C7851] shadow-[0_0_15px_rgba(140,120,81,0.3)] hidden md:block" />
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Future = () => {
  const goals = [
    { icon: <Target />, title: 'Ethical AI', desc: 'Building frameworks for transparent and human-centric artificial intelligence.' },
    { icon: <Zap />, title: 'Sustainable Tech', desc: 'Reducing the carbon footprint of global computing infrastructure.' },
    { icon: <Heart />, title: 'Digital Wellness', desc: 'Creating tools that promote mental health in an always-on world.' },
    { icon: <Rocket />, title: 'Space Exploration', desc: 'Contributing to the software that will take us beyond our orbit.' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-5xl mx-auto pt-40 px-6 pb-20"
    >
      <h2 className="text-4xl font-serif italic mb-16 text-center">Vision Board</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {goals.map((g, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass p-8 rounded-[2rem] flex flex-col items-center text-center group hover:bg-black/5 transition-colors duration-300 cursor-pointer"
          >
            <div className="mb-6 p-4 rounded-2xl bg-black/5 text-[#8C7851] group-hover:text-[#8C7851]/80 transition-colors duration-300">
              {React.cloneElement(g.icon as React.ReactElement, { size: 32 })}
            </div>
            <h3 className="text-xl font-serif mb-4">{g.title}</h3>
            <p className="text-sm text-[#1A1A1A]/70 leading-relaxed">{g.desc}</p>
          </motion.div>
        ))}
      </div>
      <div className="mt-20 relative rounded-[3rem] overflow-hidden aspect-[21/9] glass">
        <img
          src="https://picsum.photos/seed/future/1600/900?blur=2"
          alt="Future Vision"
          className="w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 flex items-center justify-center p-12 text-center pointer-events-none">
          <p className="text-3xl md:text-5xl font-serif text-[#1A1A1A]/90">
            "The best way to predict the future is to invent it."
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const COUNTRIES = [
  { code: '+1', flag: '🇺🇸', name: 'USA' },
  { code: '+44', flag: '🇬🇧', name: 'UK' },
  { code: '+1', flag: '🇨🇦', name: 'Canada' },
  { code: '+61', flag: '🇦🇺', name: 'Australia' },
  { code: '+49', flag: '🇩🇪', name: 'Germany' },
  { code: '+33', flag: '🇫🇷', name: 'France' },
  { code: '+91', flag: '🇮🇳', name: 'India' },
  { code: '+81', flag: '🇯🇵', name: 'Japan' },
  { code: '+86', flag: '🇨🇳', name: 'China' },
  { code: '+55', flag: '🇧🇷', name: 'Brazil' },
  { code: '+52', flag: '🇲🇽', name: 'Mexico' },
  { code: '+34', flag: '🇪🇸', name: 'Spain' },
  { code: '+39', flag: '🇮🇹', name: 'Italy' },
  { code: '+7', flag: '🇷🇺', name: 'Russia' },
  { code: '+27', flag: '🇿🇦', name: 'South Africa' },
  { code: '+971', flag: '🇦🇪', name: 'UAE' },
  { code: '+65', flag: '🇸🇬', name: 'Singapore' },
  { code: '+82', flag: '🇰🇷', name: 'South Korea' },
];

const JoinMe = () => {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', birthday: '' });
  const [countryCode, setCountryCode] = useState('+1');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [phoneError, setPhoneError] = useState<string | null>(null);

  const validatePhone = (phone: string) => {
    // Only allow digits, spaces, and dashes
    const cleanPhone = phone.replace(/[ \-]/g, '');
    if (!/^\d+$/.test(cleanPhone)) {
      return "Phone number must contain only digits";
    }
    if (cleanPhone.length < 7 || cleanPhone.length > 15) {
      return "Please enter a valid phone number length";
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const error = validatePhone(formState.phone);
    if (error) {
      setPhoneError(error);
      return;
    }

    setPhoneError(null);
    setStatus('loading');

    // Combine country code and cleaned phone number
    const finalPhone = `${countryCode}${formState.phone.replace(/[ \-]/g, '')}`;
    const submissionData = {
      ...formState,
      phone: finalPhone
    };

    try {
      const response = await fetch('https://services.leadconnectorhq.com/hooks/ugg4v4G1WJMtqGcWFUp5/webhook-trigger/6wlTI5onYoTf2CJNVXUp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        setStatus('success');
        setFormState({ name: '', email: '', phone: '', birthday: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }

    setTimeout(() => {
      setStatus(prevStatus => prevStatus === 'loading' ? 'loading' : 'idle');
    }, 5000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-6xl mx-auto pt-40 px-6 pb-20"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-serif mb-6">Let's connect.</h2>
        <p className="text-[#1A1A1A]/70 text-lg">I'm always open to new ideas and collaborations.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-12">
          <div className="space-y-6">
            <h3 className="text-xl font-medium">Find me on</h3>
            <div className="flex gap-4">
              {[
                { icon: <Instagram />, label: 'Instagram', url: 'https://instagram.com' },
                { icon: <Facebook />, label: 'Facebook', url: 'https://facebook.com' },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6 fill-current">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                    </svg>
                  ),
                  label: 'X',
                  url: 'https://x.com'
                }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-[#1A1A1A]/70 hover:text-[#1A1A1A] hover:bg-black/5 transition-colors duration-300 cursor-pointer"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="glass p-8 rounded-3xl space-y-4">
            <div className="flex items-center gap-4 text-[#1A1A1A]/80">
              <Mail size={20} />
              <span>hello@ethereal.journey</span>
            </div>
            <p className="text-sm text-[#1A1A1A]/60">
              "Every great conversation starts with a simple hello."
            </p>
          </div>
        </div>

        <div className="glass p-8 md:p-10 rounded-[2.5rem]">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-[#1A1A1A]/40 ml-1">Name</label>
              <input
                type="text"
                required
                className="w-full bg-black/5 border border-black/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#8C7851]/50 transition-colors"
                placeholder="Your name"
                disabled={status === 'loading'}
                value={formState.name}
                onChange={e => setFormState({ ...formState, name: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-[#1A1A1A]/40 ml-1">Email</label>
              <input
                type="email"
                required
                className="w-full bg-black/5 border border-black/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#8C7851]/50 transition-colors"
                placeholder="your@email.com"
                disabled={status === 'loading'}
                value={formState.email}
                onChange={e => setFormState({ ...formState, email: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-[#1A1A1A]/40 ml-1">Date of Birth</label>
              <input
                type="date"
                required
                className="w-full bg-black/5 border border-black/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#8C7851]/50 transition-colors [color-scheme:light]"
                disabled={status === 'loading'}
                value={formState.birthday}
                onChange={e => setFormState({ ...formState, birthday: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-[#1A1A1A]/40 ml-1">Phone</label>
              <div className="flex gap-3">
                <div className="relative">
                  <select
                    className="appearance-none bg-black/5 border border-black/10 rounded-2xl px-4 py-4 pr-10 focus:outline-none focus:border-[#8C7851]/50 transition-colors cursor-pointer text-sm"
                    value={countryCode}
                    disabled={status === 'loading'}
                    onChange={e => setCountryCode(e.target.value)}
                  >
                    {COUNTRIES.map((c, i) => (
                      <option key={i} value={c.code} className="bg-[#F5F5F0] text-[#1A1A1A]">
                        {c.flag} {c.code}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-black/40">
                    <ArrowRight size={14} className="rotate-90" />
                  </div>
                </div>
                <input
                  type="tel"
                  required
                  className={`flex-1 bg-black/5 border ${phoneError ? 'border-rose-500/50' : 'border-black/10'} rounded-2xl px-6 py-4 focus:outline-none focus:border-[#8C7851]/50 transition-colors`}
                  placeholder="555-0000"
                  disabled={status === 'loading'}
                  value={formState.phone}
                  onChange={e => {
                    setFormState({ ...formState, phone: e.target.value });
                    if (phoneError) setPhoneError(null);
                  }}
                />
              </div>
              {phoneError && (
                <p className="text-[10px] text-rose-400 uppercase tracking-widest ml-1 animate-in fade-in slide-in-from-top-1">
                  {phoneError}
                </p>
              )}
            </div>

            <AuroraButton
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className={
                status === 'success'
                  ? "bg-emerald-950 text-emerald-400 border-emerald-500/50"
                  : status === 'error'
                    ? "bg-rose-950 text-rose-400 border-rose-500/50"
                    : ""
              }
              glowClassName={
                status === 'success'
                  ? "from-emerald-400 via-green-500 to-emerald-600"
                  : status === 'error'
                    ? "from-rose-400 via-red-500 to-rose-600"
                    : "from-[#D9D9C3] via-[#8C7851] to-[#D9D9C3]"
              }
            >
              {status === 'loading' ? 'Sending...' :
                status === 'success' ? 'Message Sent' :
                  status === 'error' ? 'Try Again' : 'Submit'}
              {status === 'idle' && <ArrowRight size={18} />}
            </AuroraButton>

            {status === 'error' && (
              <p className="text-[10px] text-center text-rose-400 uppercase tracking-widest mt-2">
                Something went wrong. Please try again later.
              </p>
            )}

            <p className="text-[10px] text-center text-[#1A1A1A]/50 uppercase tracking-widest mt-4">
              I’ll only use this to stay in touch—no spam.
            </p>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

// --- Main App ---

export default function App() {
  const [activePage, setActivePage] = useState<Page>('Home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  return (
    <div className="min-h-screen selection:bg-blue-500/30">
      <Background />
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      <main className="relative z-10">
        <AnimatePresence mode="wait">
          {activePage === 'Home' && <Home key="home" />}
          {activePage === 'Philosophy' && <Philosophy key="philosophy" />}
          {activePage === 'Journey' && <Journey key="journey" />}
          {activePage === 'Future' && <Future key="future" />}
          {activePage === 'Join Me' && <JoinMe key="joinme" />}
        </AnimatePresence>
      </main>

      <footer className="relative z-10 py-12 text-center text-[#1A1A1A]/20 text-xs uppercase tracking-[0.2em]">
        &copy; {new Date().getFullYear()} Ethereal Journey &bull; Crafted with Intention
      </footer>
    </div>
  );
}
