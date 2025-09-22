// src/components/HeroCarousel/HeroCarousel.js
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./HeroCarousel.module.css";

const projects = [
  {
    id: 4,
    title: "Lucia Alimentari",
    image: "/images/safwat_lucia_2.jpg",
    category: "Soho",
  },
  {
    id: 1,
    title: "Cedar Hottub",
    image: "/images/safwat_hottub.jpg",
    category: "Williamsburg",
  },
  {
    id: 2,
    title: "Ludlow Hottub",
    image: "/images/safwat_hottub_ludlow.jpeg",
    category: "Tribeca",
  },
  {
    id: 3,
    title: "Lucia Almentari",
    image: "/images/safwat_lucia.jpg",
    category: "Soho",
  },
  
  
  {
    id: 5,
    title: "Custom Bedroom",
    image: "/images/safwat_romansbed.jpg",
    category: "Interior Design",
  },
];

export default function HeroCarousel({ onSlideChange }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => {
        const nextSlide = (prev + 1) % projects.length;
        if (onSlideChange) {
          onSlideChange(nextSlide);
        }
        return nextSlide;
      });
    }, 6000);

    return () => clearInterval(timer);
  }, [onSlideChange]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    if (onSlideChange) {
      onSlideChange(index);
    }
  };

  const nextSlide = () => {
    const next = (currentSlide + 1) % projects.length;
    setCurrentSlide(next);
    if (onSlideChange) {
      onSlideChange(next);
    }
  };

  const prevSlide = () => {
    const prev = (currentSlide - 1 + projects.length) % projects.length;
    setCurrentSlide(prev);
    if (onSlideChange) {
      onSlideChange(prev);
    }
  };

  return (
    <div className={styles.carousel}>
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`${styles.slide} ${
            index === currentSlide ? styles.active : ""
          }`}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className={styles.image}
            priority={index === 0}
          />
          <div className={styles.overlay} />
        </div>
      ))}

      {/* Logo Overlay */}
      <div className={styles.logoOverlay}>
        <h1 className={styles.logo}>SAFWAT | DESIGN - BUILD | NYC</h1>
      </div>

      {/* Project Info Bottom Left */}
      <div className={styles.projectInfo}>
        <h3 className={styles.projectTitle}>{projects[currentSlide].title}</h3>
        <p className={styles.projectCategory}>
          {projects[currentSlide].category}
        </p>
        <div className={styles.bottomAlign}>
          <a href="#projects" className={styles.learnMore}>
            <span>View Project</span>
            <svg
              className={styles.learnMoreIcon}
              aria-hidden="true"
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Navigation Arrows */}
      {/* <button
        className={`${styles.arrow} ${styles.prevArrow}`}
        onClick={prevSlide}
        aria-label="Previous project"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M15 18L9 12L15 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <button
        className={`${styles.arrow} ${styles.nextArrow}`}
        onClick={nextSlide}
        aria-label="Next project"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M9 18L15 12L9 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button> */}

      {/* Breadcrumbs */}
      <div className={styles.breadcrumbs}>
        {projects.map((_, index) => (
          <button
            key={index}
            className={`${styles.breadcrumb} ${
              index === currentSlide ? styles.breadcrumbActive : ""
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
