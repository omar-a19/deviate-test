import { useLocomotiveScroll } from '../hooks/useLocomotiveScroll';
import { useState } from 'react';
import Navigation from '../components/layout/Navigation';
import Footer from '../components/layout/Footer';
import CustomCursor from '../components/ui/CustomCursor';
import { SITE } from '../components/data/siteData';
import { splitChars } from '../components/ui/shared';

interface FormState {
  name: string;
  company: string;
  email: string;
  message: string;
}

export default function ContactPage() {
  const scrollRef = useLocomotiveScroll();
  const currentPath = '/contact';
  const [form, setForm] = useState<FormState>({ name: '', company: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with real API endpoint
    console.log('Form submitted:', form);
    setSubmitted(true);
  };

  return (
    <>
      <CustomCursor />
      <main className="main" data-barba="container" data-barba-namespace="contact">
        <div className="fixed-background dark"><div className="texture" /></div>
        <Navigation currentPath={currentPath} />
        <div className="main-wrap" data-scroll-container ref={scrollRef}>

          {/* ── Header ───────────────────────────────────────────── */}
          <header
            className="section contact-header"
            data-theme-section="dark"
            data-scroll-section=""
          >
            <div className="fixed-background dark"><div className="texture" /></div>
            <div className="overlay a-shape-pattern" />

            {/* Marquee across center */}
            <div className="contact-marquee">
              <div className="marquee-group">
                <div className="marquee" data-marquee-direction="left" data-marquee-status="normal" data-marquee-speed="15">
                  <div className="marquee-scroll">
                    <div className="marquee-content">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="marquee-item">
                          <h3>
                            Let's get deviated&nbsp;
                            <span>✦</span>
                            &nbsp;
                          </h3>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row row-credentials" style={{ paddingTop: '20vh' }}>
                <div className="col">
                  <div className="col-row col-row-border">
                    <h5>Head office</h5>
                  </div>
                  <div className="col-row"><p>{SITE.address}</p></div>
                </div>
                <div className="col">
                  <div className="col-row col-row-border">
                    <h5>New business</h5>
                  </div>
                  <div className="col-row">
                    <p><a href={`tel:${SITE.phone}`}>{SITE.phone}</a></p>
                  </div>
                </div>
                <div className="col">
                  <div className="col-row col-row-border">
                    <h5>Email</h5>
                  </div>
                  <div className="col-row">
                    <p><a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
                  </div>
                </div>
                <div className="col">
                  <div className="col-row col-row-border">
                    <h5>Connect</h5>
                  </div>
                  <div className="col-row">
                    <p><a href={SITE.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></p>
                  </div>
                  <div className="col-row">
                    <p><a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* ── Contact Form ────────────────────────────────────────── */}
          <section
            className="section"
            data-theme-section="dark"
            data-scroll-section=""
          >
            <div className="container">
              <div className="row split">
                <div className="col">
                  <h4>
                    <span data-cursor-gif-target="file://deviate-2">
                      Start a conversation
                    </span>
                  </h4>
                  
                </div>
                <div className="col">
                  {submitted ? (
                    <div style={{ paddingTop: '2em' }}>
                      <h4 style={{ color: 'var(--color-secondary)', marginBottom: '1em' }}>
                        Message received ✦
                      </h4>
                      <p>
                        We'll be in touch within 1–2 business days. In the meantime,
                        feel free to stalk our Instagram.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5em', paddingTop: '2em' }}>
                      {/* Name + Company */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5em' }}>
                        <div>
                          <label htmlFor="name" style={labelStyle}>Full name *</label>
                          <input
                            id="name" name="name" type="text" required
                            value={form.name} onChange={handleChange}
                            placeholder="Your name"
                            style={inputStyle}
                          />
                        </div>
                        <div>
                          <label htmlFor="company" style={labelStyle}>Company</label>
                          <input
                            id="company" name="company" type="text"
                            value={form.company} onChange={handleChange}
                            placeholder="Your company"
                            style={inputStyle}
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" style={labelStyle}>Email *</label>
                        <input
                          id="email" name="email" type="email" required
                          value={form.email} onChange={handleChange}
                          placeholder="your@email.com"
                          style={inputStyle}
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" style={labelStyle}>Tell us about your project *</label>
                        <textarea
                          id="message" name="message" required
                          value={form.message} onChange={handleChange}
                          placeholder="What are you working on? What do you need?"
                          rows={5}
                          style={{ ...inputStyle, resize: 'vertical' }}
                        />
                      </div>

                      {/* Submit */}
                      <div>
                        <div className="btn btn-primary" data-button-status="">
                          <button type="submit" className="btn-click" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, width: '100%' }}>
                            <div className="btn-content"><span>Send message</span></div>
                            <div className="btn-arrow">
                              {[0,1,2].map(i => (
                                <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                  <polyline points="14 19 21 12 14 5" fill="none" stroke="#000" strokeMiterlimit="10"/>
                                  <line x1="21" y1="12" x2="2" y2="12" fill="none" stroke="#000" strokeMiterlimit="10"/>
                                </svg>
                              ))}
                            </div>
                          </button>
                        </div>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </main>
    </>
  );
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  marginBottom: '0.5em',
  fontSize: '0.85em',
  color: 'rgba(255,255,255,0.6)',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.15)',
  borderRadius: '0.5em',
  padding: '0.8em 1em',
  color: 'var(--color-light)',
  fontSize: '1em',
  fontFamily: 'inherit',
  transition: 'border-color 0.2s',
  outline: 'none',
};





// const handleChange = (
//   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
// ) => {
//   const { name, value } = e.target;

//   if (name === 'phone') {
//     setForm(prev => ({
//       ...prev,
//       phone: formatEgyptPhone(value),
//     }));
//     return;
//   }

//   setForm(prev => ({ ...prev, [name]: value }));
// };

// const formatEgyptPhone = (value: string) => {
//   // keep digits only
//   let digits = value.replace(/\D/g, '');

//   // remove leading 20 if user types it
//   if (digits.startsWith('20')) digits = digits.slice(2);

//   // must start with 1 (Egypt mobile)
//   if (!digits.startsWith('1')) return digits;

//   // limit length
//   digits = digits.slice(0, 10);

//   // format: +20 1XX XXX XXXX
//   const parts = digits.match(/^(\d{1})(\d{0,2})(\d{0,3})(\d{0,4})$/);
//   if (!parts) return digits;

//   return `+20 ${parts[1]}${parts[2]} ${parts[3]} ${parts[4]}`.trim();
// };

// const isValidEgyptPhone = (value: string) => {
//   return /^(\+20\s?1\d{2}\s?\d{3}\s?\d{4})$/.test(value);
// };


{/* <div>
  <label style={labelStyle}>Phone</label>
  <input
    type="tel"
    name="phone"
    value={form.phone}
    onChange={handleChange}
    placeholder="+20 1XX XXX XXXX"
    style={inputStyle}
  />
</div> */}

// const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//   e.preventDefault();

//   try {
//     const response = await fetch('https://formspree.io/f/mqedleyy', {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//       },
//       body: new FormData(e.currentTarget),
//     });

//     if (response.ok) {
//       setSubmitted(true);
//       setForm({ name: '', company: '', email: '', message: '' });
//     } else {
//       alert('Failed to send message');
//     }
//   } catch (error) {
//     console.error(error);
//     alert('Network error. Try again later.');
//   }
// };