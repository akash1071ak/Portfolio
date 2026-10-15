import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { InteractivePhoneMockup } from './components/InteractivePhoneMockup';
import { Projects } from './components/Projects';
import { CaseStudyModal } from './components/CaseStudyModal';
import { DesignProcess } from './components/DesignProcess';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Achievements } from './components/Achievements';
import { ResumeModal } from './components/ResumeModal';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [activeCaseStudyId, setActiveCaseStudyId] = useState<string | null>(null);

  const handleOpenResume = () => setResumeOpen(true);
  const handleCloseResume = () => setResumeOpen(false);

  const handleOpenCaseStudy = (id: string) => setActiveCaseStudyId(id);
  const handleCloseCaseStudy = () => setActiveCaseStudyId(null);

  return (
    <div className="min-h-screen bg-[#0B0F19] text-[#F8FAFC] selection:bg-purple-600 selection:text-white">
      {/* Navigation */}
      <Navbar
        onOpenResume={handleOpenResume}
        onOpenCaseStudy={handleOpenCaseStudy}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero
          onOpenResume={handleOpenResume}
          onOpenCaseStudy={handleOpenCaseStudy}
        />

        {/* About Section */}
        <About />

        {/* Live Interactive Phone Simulator */}
        <InteractivePhoneMockup />

        {/* Featured Projects & Case Studies */}
        <Projects
          onOpenCaseStudy={handleOpenCaseStudy}
        />

        {/* Design Thinking Methodology */}
        <DesignProcess />

        {/* Comprehensive Skills Matrix */}
        <Skills />

        {/* Verified Internships (Login 360 & Codsoft) */}
        <Experience />

        {/* Formal Education (BCA St. Peter's) */}
        <Education />

        {/* Certifications & Training */}
        <Certifications />

        {/* Hackathon Honors & Extracurricular */}
        <Achievements />

        {/* Contact Form & Direct Channels */}
        <Contact
          onOpenResume={handleOpenResume}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenResume={handleOpenResume}
        onOpenCaseStudy={handleOpenCaseStudy}
      />

      {/* Modals */}
      <CaseStudyModal
        caseStudyId={activeCaseStudyId}
        onClose={handleCloseCaseStudy}
      />

      <ResumeModal
        isOpen={resumeOpen}
        onClose={handleCloseResume}
      />
    </div>
  );
};

export default App;
