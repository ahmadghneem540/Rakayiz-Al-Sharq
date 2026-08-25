"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "./language-provider";
import { ButtonLink } from "./ui";

const slides = [
  {
    image: "/rsc-hero-signature-v4.webp",
    alt: { ar: "مشروع إنشائي حديث يعكس جودة التنفيذ", en: "Contemporary construction project showing delivery quality" },
    label: { ar: "الإنشاءات والمباني", en: "BUILDING CONSTRUCTION" },
  },
  {
    image: "/rsc-hero-infrastructure-v4.webp",
    alt: { ar: "أعمال مدنية وبنية تحتية متكاملة", en: "Integrated civil and infrastructure works" },
    label: { ar: "الأعمال المدنية والبنية التحتية", en: "CIVIL & INFRASTRUCTURE" },
  },
  {
    image: "/rsc-hero-interior-v4.webp",
    alt: { ar: "تشطيبات معمارية احترافية عالية الجودة", en: "High-quality professional architectural finishing" },
    label: { ar: "التشطيبات المعمارية", en: "ARCHITECTURAL FINISHING" },
  },
];

export function HomeHeroSlider() {
  const { lang } = useLanguage();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setActive((value) => (value + 1) % slides.length), 5000);
    return () => window.clearInterval(timer);
  }, [paused]);

  const move = (direction: number) => setActive((value) => (value + direction + slides.length) % slides.length);

  return <section className="home-hero" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={() => setPaused(false)}>
    <div className="hero-slides">
      {slides.map((slide, index) => <img key={slide.image} className={`home-hero-image ${index === active ? "is-active" : ""}`} src={slide.image} alt={index === active ? slide.alt[lang] : ""} aria-hidden={index !== active} fetchPriority={index === 0 ? "high" : "auto"}/>) }
    </div>
    <div className="home-hero-shade"/><div className="engineering-grid"/>
    <div className="home-hero-content">
      <span className="hero-index">RSC / 01</span>
      <p className="hero-kicker">{lang === "ar" ? "مقاولات عامة • المنطقة الشرقية" : "GENERAL CONTRACTING • EASTERN PROVINCE"}</p>
      <h1>{lang === "ar" ? <>نبني بثقة.<br/>ونُسلّم بمسؤولية.</> : <>Built with confidence.<br/>Delivered with accountability.</>}</h1>
      <p>{lang === "ar" ? "شركة مقاولات سعودية تقدّم حلول تنفيذ مدروسة للمباني والأعمال المدنية والتأهيل، بمنهجية تجمع وضوح التخطيط ودقة التنفيذ." : "A Saudi contractor delivering considered building, civil and rehabilitation solutions through clear planning and controlled execution."}</p>
      <div className="hero-actions"><ButtonLink href="/request-quote">{lang === "ar" ? "طلب عرض سعر" : "Request a quote"}</ButtonLink><ButtonLink href="/projects" variant="secondary">{lang === "ar" ? "استكشف مجالات أعمالنا" : "Explore our work"}</ButtonLink></div>
    </div>
    <div className="hero-slider-controls" aria-label={lang === "ar" ? "التحكم في صور الواجهة" : "Hero image controls"}>
      <button type="button" onClick={() => move(-1)} aria-label={lang === "ar" ? "الصورة السابقة" : "Previous image"}>‹</button>
      <div className="hero-slide-status">
        <span><b>0{active + 1}</b> / 0{slides.length}</span>
        <div className="hero-progress" key={`${active}-${paused}`}><i className={paused ? "is-paused" : ""}/></div>
        <strong aria-live="polite">{slides[active].label[lang]}</strong>
      </div>
      <button type="button" onClick={() => move(1)} aria-label={lang === "ar" ? "الصورة التالية" : "Next image"}>›</button>
    </div>
    <div className="hero-dots">{slides.map((slide, index) => <button type="button" className={index === active ? "active" : ""} key={slide.image} onClick={() => setActive(index)} aria-label={`${lang === "ar" ? "عرض" : "Show"} ${slide.label[lang]}`} aria-current={index === active ? "true" : undefined}/>)}</div>
    <div className="hero-rail"><span>{lang === "ar" ? "المنطقة الشرقية" : "EASTERN PROVINCE"}</span><i/></div>
  </section>;
}
