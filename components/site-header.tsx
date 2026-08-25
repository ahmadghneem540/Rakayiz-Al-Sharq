"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { company, nav, pick } from "@/lib/content";
import { useLanguage } from "./language-provider";

export function SiteHeader(){
  const {lang,toggle}=useLanguage(); const path=usePathname(); const [open,setOpen]=useState(false); const [scrolled,setScrolled]=useState(false);
  useEffect(()=>{const onScroll=()=>setScrolled(scrollY>24);onScroll();addEventListener("scroll",onScroll,{passive:true});return()=>removeEventListener("scroll",onScroll)},[]);
  return <header className={`site-header ${scrolled?"is-scrolled":""}`}>
    <div className="header-inner">
      <Link className="brand" href="/" aria-label={pick(company.legal,lang)}><span className="logo-crop"><img src="/rsc-emblem-only-v5.webp" alt="شعار شركة ركائز الشرق"/></span><span className="brand-type"><strong>{pick(company.name,lang)}</strong><small>{lang==="ar"?"للمقاولات العامة":"GENERAL CONTRACTING"}</small></span></Link>
      <nav className={`desktop-nav ${open?"is-open":""}`} aria-label={lang==="ar"?"التنقل الرئيسي":"Main navigation"}>{nav.map(item=><Link className={path===item.href?"active":""} href={item.href} key={item.href} onClick={()=>setOpen(false)}>{pick(item.label,lang)}</Link>)}</nav>
      <div className="header-actions"><button className="language-switch" onClick={toggle} aria-label={lang==="ar"?"English":"العربية"}>{lang==="ar"?"EN":"ع"}</button><Link className="header-cta" href="/request-quote">{lang==="ar"?"طلب عرض سعر":"Request a quote"}</Link><button className={`menu-toggle ${open?"is-open":""}`} onClick={()=>setOpen(!open)} aria-expanded={open} aria-label={lang==="ar"?"فتح القائمة":"Open menu"}><i/><i/></button></div>
    </div>
    <div className={`mobile-panel ${open?"is-open":""}`}><nav>{nav.map((item,i)=><Link href={item.href} key={item.href} onClick={()=>setOpen(false)}><span>0{i+1}</span>{pick(item.label,lang)}</Link>)}</nav><Link className="button primary" href="/request-quote" onClick={()=>setOpen(false)}>{lang==="ar"?"ابدأ مشروعك":"Start your project"}</Link></div>
  </header>
}
