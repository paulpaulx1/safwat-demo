// src/app/page.js
'use client';

import { useState } from 'react';
import Navigation from '../components/Navigation/Navigation';
import HeroCarousel from '../components/HeroCarousel/HeroCarousel';
import ProjectThumbnails from '../components/ProjectThumbnails/ProjectThumbnails';
import styles from './page.module.css';

export default function Home() {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  const handleSlideChange = (newIndex) => {
    setCurrentHeroIndex(newIndex);
  };

  const handleThumbnailClick = (projectIndex) => {
    setCurrentHeroIndex(projectIndex);
  };

  return (
    <div className={styles.page}>
      <Navigation />
      
      <main className={styles.main}>
        <section id="home" className={styles.heroSection}>
          <HeroCarousel 
            onSlideChange={handleSlideChange}
            currentSlide={currentHeroIndex}
          />
        </section>

        <section id="projects" className={styles.projectsSection}>
          <ProjectThumbnails 
            currentHeroIndex={currentHeroIndex}
            onThumbnailClick={handleThumbnailClick}
          />
        </section>

        {/* Placeholder sections for navigation */}
        <section id="about" className={styles.placeholderSection}>
          <div className={styles.placeholderContent}>
            <h2>About</h2>
            <p>Coming soon...</p>
          </div>
        </section>

        <section id="social" className={styles.placeholderSection}>
          <div className={styles.placeholderContent}>
            <h2>Social</h2>
            <p>Coming soon...</p>
          </div>
        </section>

        <section id="contact" className={styles.placeholderSection}>
          <div className={styles.placeholderContent}>
            <h2>Contact</h2>
            <p>Coming soon...</p>
          </div>
        </section>
      </main>
    </div>
  );
}