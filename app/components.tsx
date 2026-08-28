'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { galleryItems } from './gallery-data';

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <Link className="brand brand-image-link" href="/" aria-label="Adam Electrical home"><img className="brand-logo" src="/adam-electrical-logo.png" alt="Adam Electrical Services" /></Link>
    <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">☰</button>
    <nav className={open ? 'open' : ''} aria-label="Main navigation"><Link href="/" onClick={() => setOpen(false)}>Home</Link><Link href="/#services" onClick={() => setOpen(false)}>Services</Link><Link href="/gallery" onClick={() => setOpen(false)}>Gallery</Link><a href="#contact" onClick={() => setOpen(false)}>Contact</a></nav>
    <a className="header-call" href="tel:0814208815"><span>24/7 CALL OUT</span>081 420 8815</a>
  </header>;
}

export function Placeholder({ item, index, compact = false }: { item: (typeof galleryItems)[number], index: number, compact?: boolean }) {
  const image = 'image' in item ? item.image : undefined;
  return <div className={`placeholder ${item.tone} ${image ? 'has-photo' : ''} ${compact ? 'compact' : ''}`}>
    {image && <img className="project-photo" src={image} alt={`${item.title} completed by Adam Electrical`} />}
    <span className="placeholder-number">{String(index + 1).padStart(2, '0')}</span>{!image && <span className="placeholder-icon">ϟ</span>}
    <div><small>{image ? 'COMPLETED PROJECT' : 'CLIENT PHOTO PLACEHOLDER'}</small><strong>{item.title}</strong><span>{item.category}</span></div>
  </div>;
}

export function GallerySlider() {
  const [current, setCurrent] = useState(0);
  useEffect(() => { const timer = setInterval(() => setCurrent(v => (v + 1) % galleryItems.length), 5000); return () => clearInterval(timer); }, []);
  const move = (direction: number) => setCurrent(v => (v + direction + galleryItems.length) % galleryItems.length);
  return <div className="slider-shell">
    <div className="slider-stage"><Placeholder item={galleryItems[current]} index={current} /></div>
    <div className="slider-controls">
      <div><b>{String(current + 1).padStart(2, '0')}</b><span>/ {String(galleryItems.length).padStart(2, '0')}</span></div>
      <div className="slider-dots">{galleryItems.map((_, i) => <button key={i} onClick={() => setCurrent(i)} className={i === current ? 'active' : ''} aria-label={`Show project ${i + 1}`} />)}</div>
      <div><button onClick={() => move(-1)} aria-label="Previous project">←</button><button onClick={() => move(1)} aria-label="Next project">→</button></div>
    </div>
  </div>;
}

export function Footer() {
  return <><section className="contact-band" id="contact"><div><small>NEED HELP WITH YOUR PROPERTY?</small><h2>Let&apos;s get the job sorted.</h2></div><div className="contact-numbers"><a href="tel:0814208815">081 420 8815</a><a href="tel:0768021369">076 802 1369</a></div></section>
  <footer><Link className="brand brand-image-link footer-brand" href="/"><img className="brand-logo footer-logo" src="/adam-electrical-logo.png" alt="Adam Electrical Services" /></Link><p>Electrical · Plumbing · Air-conditioning</p><p>© {new Date().getFullYear()} Adam Electrical</p></footer>
  <a className="whatsapp" href="https://wa.me/27814208815?text=Hi%20Adam%20Electrical%2C%20I%20need%20assistance." aria-label="Chat to Adam Electrical on WhatsApp" target="_blank" rel="noreferrer"><span>WhatsApp</span>◉</a></>;
}
