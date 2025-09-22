'use client';

import Image from 'next/image';
import styles from './ProjectThumbnails.module.css';

const projects = [
  { id: 4, title: "Lucia Alimentari", image: "/images/safwat_lucia_2.jpg", category: "Soho" },
  { id: 1, title: "Cedar Hottub",     image: "/images/safwat_hottub.jpg",   category: "Williamsburg" },
  { id: 2, title: "Ludlow Hottub",    image: "/images/safwat_hottub_ludlow.jpeg", category: "Tribeca" },
  { id: 3, title: "Lucia Almentari",  image: "/images/safwat_lucia.jpg",    category: "Soho" },
  { id: 5, title: "Custom Bedroom",   image: "/images/safwat_romansbed.jpg", category: "Interior Design" },
];

export default function ProjectThumbnails({ onThumbnailClick }) {
  const handleThumbnailClick = (index) => {
    if (onThumbnailClick) onThumbnailClick(index); // index is already the original index
  };

  return (
    <section className={styles.thumbnailSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Featured Projects</h2>
          <a href="#projects" className={styles.viewAllLink}>
            View All Featured Projects
          </a>
        </div>

        <div className={styles.thumbnailGrid}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={styles.card}
              onClick={() => handleThumbnailClick(index)}
            >
              <div className={styles.imageWrap}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={styles.image}
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
                <div className={styles.overlay} />
                <div className={styles.info}>
                  <div className={styles.left}>
                    <h3 className={styles.title}>{project.title}</h3>
                    <p className={styles.category}>{project.category}</p>
                  </div>
                  <div className={styles.right}>
                    <span className={styles.more}>MORE DETAILS</span>
                    <span className={styles.chev} aria-hidden>›</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
