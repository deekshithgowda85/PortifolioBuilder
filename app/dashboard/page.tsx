"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageLayout from '@/components/shared/page-layout';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function DashboardPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Set initial state
      gsap.set(['.hero-title', '.hero-subtitle', '.hero-buttons', '.hero-stats'], { opacity: 0, y: 50 });
      gsap.set(['.features-title'], { opacity: 0, y: 30 });
      gsap.set(['.feature-card'], { opacity: 0, y: 40 });
      gsap.set(['.cta-section'], { opacity: 0, y: 30 });

      // Hero animations timeline
      const heroTl = gsap.timeline({ delay: 0.5 });
      heroTl
        .to('.hero-title', { duration: 1, opacity: 1, y: 0, ease: 'power3.out' })
        .to('.hero-subtitle', { duration: 0.8, opacity: 1, y: 0, ease: 'power3.out' }, '-=0.5')
        .to('.hero-buttons', { duration: 0.8, opacity: 1, y: 0, ease: 'power3.out' }, '-=0.3')
        .to('.hero-stats', { duration: 0.6, opacity: 1, y: 0, ease: 'power2.out' }, '-=0.2');

      // Features section
      ScrollTrigger.create({
        trigger: '.features-section',
        start: 'top 80%',
        onEnter: () => {
          gsap.to('.features-title', { duration: 0.8, opacity: 1, y: 0, ease: 'power3.out' });
          gsap.to('.feature-card', { 
            duration: 0.6, 
            opacity: 1, 
            y: 0, 
            ease: 'power2.out',
            stagger: 0.1 
          });
        }
      });

      // CTA section
      ScrollTrigger.create({
        trigger: '.cta-section',
        start: 'top 80%',
        onEnter: () => {
          gsap.to('.cta-section', { duration: 0.8, opacity: 1, y: 0, ease: 'power3.out' });
        }
      });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div className="hero-title"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              Build Stunning
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Portfolios
              </span>
            </h1>
          </motion.div>
          
          <motion.div className="hero-subtitle"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          >
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Create professional portfolios and landing pages with our intuitive visual editor. 
              No coding required, endless possibilities.
            </p>
          </motion.div>

          <motion.div className="hero-buttons flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
          >
            <Link href="/landing/edit">
              <motion.div whileHover={{ scale: 1.08 }}>
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg shadow-2xl hover:shadow-purple-500/25">
                  Start Building Your Page
                </Button>
              </motion.div>
            </Link>
            <Link href="/landing">
              <motion.div whileHover={{ scale: 1.08 }}>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg backdrop-blur-sm">
                  View Live Page
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          {/* Floating Stats */}
          <motion.div className="hero-stats grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
          >
            {[
              { number: "50K+", label: "Portfolios Created" },
              { number: "99.9%", label: "Uptime" },
              { number: "24/7", label: "Support" },
              { number: "0", label: "Coding Required" }
            ].map((stat, index) => (
              <motion.div key={index} className="text-center" whileHover={{ scale: 1.12 }}>
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-white/60 text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div className="features-title text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Everything You Need
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Professional tools and features to make your portfolio stand out
            </p>
          </motion.div>

          <div className="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Visual Editor",
                description: "Drag-and-drop interface with real-time preview. Build without limits.",
                icon: "🎨",
                gradient: "from-purple-600 to-blue-600"
              },
              {
                title: "Responsive Design",
                description: "Your portfolio looks perfect on every device, automatically.",
                icon: "📱",
                gradient: "from-pink-600 to-rose-600"
              },
              {
                title: "Fast Publishing",
                description: "Publish instantly with global CDN. Lightning-fast loading worldwide.",
                icon: "⚡",
                gradient: "from-cyan-600 to-teal-600"
              },
              {
                title: "Custom Domains",
                description: "Use your own domain name for a professional presence.",
                icon: "🌐",
                gradient: "from-emerald-600 to-green-600"
              },
              {
                title: "Analytics",
                description: "Track visitors and engagement with detailed insights.",
                icon: "📊",
                gradient: "from-orange-600 to-red-600"
              },
              {
                title: "SEO Optimized",
                description: "Built-in SEO tools to help you rank higher in search results.",
                icon: "🚀",
                gradient: "from-violet-600 to-purple-600"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: 'easeOut' }}
                whileHover={{ scale: 1.06 }}
              >
                <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 hover:scale-105 hover:border-white/20 group transition-all duration-300">
                  <CardHeader className="text-center pb-2">
                    <div className={`text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                      {feature.icon}
                    </div>
                    <CardTitle className="text-2xl text-white mb-2">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-white/70 text-center text-lg leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div className="cta-section bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-3xl p-12 border border-white/10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Ready to Build Your Dream Portfolio?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join thousands of creators who trust Portfolio Builder to showcase their work beautifully.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/landing/edit">
                <motion.div whileHover={{ scale: 1.08 }}>
                  <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-4 text-lg shadow-2xl hover:shadow-purple-500/25">
                    Start Building Now
                  </Button>
                </motion.div>
              </Link>
              <Link href="/pages">
                <motion.div whileHover={{ scale: 1.08 }}>
                  <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-12 py-4 text-lg backdrop-blur-sm">
                    Manage Pages
                  </Button>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}