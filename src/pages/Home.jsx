import React, { Suspense } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

// Lazy-loaded components
const Services = React.lazy(() => import('../components/Services'));
const Process = React.lazy(() => import('../components/Process'));
const ProjectHighlights = React.lazy(() => import('../components/ProjectHighlights'));
const CaseStudy = React.lazy(() => import('../components/CaseStudy'));
const Testimonials = React.lazy(() => import('../components/Testimonials'));
const Skills = React.lazy(() => import('../components/Skills'));
const Experience = React.lazy(() => import('../components/Experience'));
const AISpotlight = React.lazy(() => import('../components/AISpotlight'));
const SEOHighlights = React.lazy(() => import('../components/SEOHighlights'));
const CreativeWork = React.lazy(() => import('../components/CreativeWork'));
const DesignGallery = React.lazy(() => import('../components/DesignGallery'));
const FAQ = React.lazy(() => import('../components/FAQ'));
const About = React.lazy(() => import('../components/About'));
const Contact = React.lazy(() => import('../components/Contact'));

const LoadingFallback = () => (
    <div className="flex items-center justify-center py-20">
        <div className="w-10 h-10 border-4 border-slate-200 border-t-blue-500 rounded-full animate-spin"></div>
    </div>
);

const Home = () => {
    return (
        <>
            <Navbar />
            <main>
                {/* 1️⃣ Hero */}
                <Hero />

                <Suspense fallback={<LoadingFallback />}>

                    {/* 2️⃣ What you offer */}
                    <Services />

                    {/* 3️⃣ How you work (reduce client anxiety early) */}
                    <Process />

                    {/* 4️⃣ Proof of work */}
                    <ProjectHighlights />

                    {/* 8️⃣ Differentiation */}
                    <AISpotlight />

                    <CaseStudy />

                    {/* 5️⃣ Social proof */}
                    <Testimonials />

                    {/* 6️⃣ Skills snapshot (credibility, not bragging) */}
                    <Skills />

                    {/* 7️⃣ Background & experience */}
                    <Experience />

                    {/* 9️⃣ Optional performance proof */}
                    <SEOHighlights />

                    {/* 🔟 Visual / creative credibility */}
                    <CreativeWork />
                    <DesignGallery limit={10} />

                    {/* 1️⃣1️⃣ Objection handling */}
                    <FAQ />

                    {/* 1️⃣2️⃣ Personal story (only for those still scrolling) */}
                    <About />

                    {/* 1️⃣3️⃣ Strong CTA */}
                    <Contact />

                </Suspense>
            </main>
        </>
    );
};

export default Home;
