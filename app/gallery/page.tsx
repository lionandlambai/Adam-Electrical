import { Footer, Header, Placeholder } from '../components';
import { allGalleryPhotos } from '../gallery-all';
import { galleryItems } from '../gallery-data';

export const metadata = { title: 'Gallery | Adam Electrical', description: 'Browse completed Adam Electrical installations, repairs, wiring and compliance work.' };

export default function GalleryPage() {
  return <><Header/><main>
    <section className="page-hero"><p className="eyebrow"><span/> Our work</p><h1>Quality you can <em>see.</em></h1><p>Explore completed electrical, solar, security, automation and maintenance work delivered by Adam Electrical.</p></section>
    <section className="gallery-wrap">
      <div className="gallery-intro"><div><small>PROJECT GALLERY</small><h2>Work done right.</h2></div><p>From clean distribution boards to complete residential installations, every project is approached with care and attention to detail.</p></div>
      <div className="gallery-grid">{galleryItems.map((item, index) => <Placeholder item={item} index={index} key={item.title}/>)}</div>
    </section>
    <section className="full-gallery">
      <div className="gallery-intro"><div><small>COMPLETE PHOTO GALLERY</small><h2>More from the field.</h2></div><p>A wider look at our team, installations and completed work across residential and commercial projects.</p></div>
      <div className="full-gallery-grid">{allGalleryPhotos.map((photo, index) => <figure className="full-gallery-card" key={photo.src}><img src={photo.src} alt={photo.alt} loading="lazy"/><figcaption><small>ADAM ELECTRICAL</small><span>{String(index + 1).padStart(2, '0')}</span></figcaption></figure>)}</div>
    </section>
    <section className="gallery-note"><span>+</span><div><small>REAL PROJECTS</small><h2>Work across every scale.</h2><p>Solar, electrical, lighting, security and maintenance projects completed with care by Adam Electrical.</p></div></section>
  </main><Footer/></>;
}
