import Link from 'next/link';
import { Footer, GallerySlider, Header } from './components';

const services = [
  ['01','House Wiring','Professional new wiring, rewiring and electrical upgrades.','⌂'],
  ['02','Tripping Plugs','Fast diagnosis and repair of unsafe or nuisance tripping plugs.','⊙'],
  ['03','Earth Leakage','Fault-finding for tripping earth leakage and protection systems.','ϟ'],
  ['04','Distribution Boards','DB board installations, upgrades, repairs and safety checks.','▦'],
  ['05','Lights Installation','Indoor, outdoor and security lighting installed neatly and safely.','✦'],
  ['06','Fault Finding','Accurate electrical fault detection and practical, lasting repairs.','⌕'],
  ['07','Generators','Generator installation, changeover systems and ongoing maintenance.','↻'],
  ['08','P.A. Systems','Clear, dependable public-address system installation.','◁'],
  ['09','Domestic & Industrial','Complete electrical installations for homes and industrial sites.','▥'],
  ['10','Solar Panels','Solar panel and supporting electrical system installations.','☀'],
  ['11','Gate Automation','Gate motor installation, wiring, fault-finding and repairs.','↔'],
  ['12','Industrial Maintenance','Planned and reactive electrical maintenance for operations.','⚙'],
  ['13','Sub Meters','Accurate sub-meter installations for better usage monitoring.','◫'],
  ['14','CCTV','Security camera system installation and setup.','◉'],
  ['15','Electric Fencing','Electric fence installation, energisers, maintenance and repairs.','⌁'],
  ['16','Backup Power','Reliable inverter and backup-power solutions for outages.','▰'],
  ['17','Cladding','Clean, durable cladding work for property improvements.','▤'],
  ['18','Tiling','Careful wall and floor tiling with a professional finish.','◇'],
  ['19','Paving','Practical, tidy paving for paths, driveways and outdoor areas.','▧'],
];

export default function Home() {
  return <><Header/><main>
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow"><span/> Available 24 hours</p>
        <h1>Power restored.<br/><em>Problems solved.</em></h1>
        <p className="hero-lead">Reliable electrical services for homes and businesses — from urgent power failures to complete installations.</p>
        <div className="hero-actions"><a className="button primary" href="tel:0814208815">Call 081 420 8815</a><Link className="button secondary" href="/gallery">View our work</Link></div>
        <div className="trust-row"><span>24/7 RESPONSE</span><span>QUALITY WORK</span><span>COC SERVICES</span></div>
      </div>
      <div className="hero-panel logo-panel"><div className="hero-logo-card"><img src="/adam-electrical-logo.png" alt="Adam Electrical Services — the service that you deserve" /></div><p>THE SERVICE THAT<br/>YOU DESERVE.</p><a href="tel:0768021369">24-hour call-out: 076 802 1369 →</a></div>
    </section>

    <section className="statement"><div className="statement-number">24<span>H</span></div><div><p className="eyebrow">ALWAYS ON CALL</p><h2>Electrical trouble doesn&apos;t keep office hours. <em>Neither do we.</em></h2><p>Whether it&apos;s a midnight power failure or a planned installation, Adam Electrical brings dependable service, practical expertise and straightforward communication to every job.</p></div></section>

    <section className="services" id="services"><div className="section-heading"><div><small>WHAT WE DO</small><h2>One trusted team. <em>More ways to help.</em></h2></div><p>Electrical, security, backup power and property improvement services for homes, businesses and industrial sites.</p></div>
      <div className="service-grid">{services.map(([n,title,body,icon]) => <article key={n}><span>{n}</span><div className="service-icon" aria-hidden="true">{icon}</div><h3>{title}</h3><p>{body}</p><a href="tel:0814208815" aria-label={`Call about ${title}`}>Enquire →</a></article>)}</div>
    </section>

    <section className="work-section"><div className="section-heading light"><div><small>RECENT WORK</small><h2>Built safely.<br/><em>Finished properly.</em></h2></div><div><p>Project photography will be added here soon. The slideshow and full gallery are ready.</p><Link href="/gallery">Explore the gallery →</Link></div></div><GallerySlider/></section>

    <section className="why"><div className="why-copy"><small>WHY ADAM ELECTRICAL</small><h2>Your trusted connection.</h2><p>Good workmanship should feel simple: clear advice, tidy work, and a result you can rely on.</p><a className="button primary" href="tel:0814208815">Speak to Adam</a></div><div className="why-list"><div><b>01</b><h3>Available 24/7</h3><p>Help when you need it, including urgent after-hours call-outs.</p></div><div><b>02</b><h3>Wide service range</h3><p>Electrical, security, energy and property work from one team.</p></div><div><b>03</b><h3>Domestic & industrial</h3><p>Practical solutions for homes, businesses and industrial sites.</p></div></div></section>
    <section className="connect-section"><div><small>FIND & FOLLOW US</small><h2>See more from Adam.</h2><p>Read our Google profile, follow our Facebook page or browse the latest WhatsApp catalogue.</p></div><div className="connect-links"><a href="https://g.page/adam-electrical-plumbing-and-air?gm" target="_blank" rel="noreferrer"><span>Google Business</span><b>View our profile →</b></a><a href="https://www.facebook.com/cal8409/?referrer=whatsapp" target="_blank" rel="noreferrer"><span>Facebook</span><b>Like our page →</b></a><a href="https://wa.me/c/27814208815" target="_blank" rel="noreferrer"><span>WhatsApp</span><b>Browse our catalogue →</b></a></div></section>
  </main><Footer/></>;
}
