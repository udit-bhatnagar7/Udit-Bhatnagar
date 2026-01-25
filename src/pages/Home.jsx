import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

// Components
const About = React.lazy(() => import('../components/About'));
const Skills = React.lazy(() => import('../components/Skills'));
const Services = React.lazy(() => import('../components/Services'));
const Whatiwok = React.lazy(() => import('../components/Whatiwok'));
const ProjectHighlights = React.lazy(() => import('../components/ProjectHighlights'));
const AISpotlight = React.lazy(() => import('../components/AISpotlight'));

const CaseStudy = React.lazy(() => import('../components/CaseStudy'));
const Contact = React.lazy(() => import('../components/Contact'));
const CreativeWork = React.lazy(() => import('../components/CreativeWork'));
const Experience = React.lazy(() => import('../components/Experience'));
const Process = React.lazy(() => import('../components/Process'));
const SEOHighlights = React.lazy(() => import('../components/SEOHighlights'));
const Testimonials = React.lazy(() => import('../components/Testimonials'));
const DesignGallery = React.lazy(() => import('../components/DesignGallery'));
const FAQ = React.lazy(() => import('../components/FAQ'));


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
                <Hero />

                <Suspense fallback={<LoadingFallback />}>
                    <Services />
                    <Skills />
                    <AISpotlight />

                    <Whatiwok />

                    <ProjectHighlights />
                    <CaseStudy />

                    <SEOHighlights />
                    <Experience />
                    <About />

                    <CreativeWork />
                    <Process />
                    <Testimonials />

                    {/* Replaced Team with DesignGallery */}
                    <DesignGallery limit={10} />
                    {/* <Link to="/gallery" className="inline-block mt-4 text-sm text-blue-400 hover:underline">View All Designs</Link> */}
                    <FAQ />
                    <Contact />

                </Suspense>
            </main>
        </>
    );
};

export default Home;
