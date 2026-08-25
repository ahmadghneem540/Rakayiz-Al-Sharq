"use client";
import { company } from "@/lib/content";
import { useLanguage } from "./language-provider";
import { WhatsAppIcon } from "./icons";
export function WhatsAppFloat(){const{lang}=useLanguage();const text=lang==="ar"?"السلام عليكم، أرغب في الاستفسار عن خدمات شركة ركائز الشرق للمقاولات العامة.":"Hello, I would like to enquire about Rakayiz Al Sharq services.";return <a className="whatsapp-float" href={`https://wa.me/${company.phoneRaw}?text=${encodeURIComponent(text)}`} target="_blank" rel="noopener noreferrer" aria-label={lang==="ar"?"تواصل عبر واتساب":"Chat on WhatsApp"}><WhatsAppIcon/><span>{lang==="ar"?"تواصل عبر واتساب":"WhatsApp"}</span></a>}
