import type { MetadataRoute } from "next";
import { services } from "@/lib/content";
const base=process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
export default function sitemap():MetadataRoute.Sitemap{const routes=["","/about","/services","/projects","/sectors","/why-us","/quality-safety","/contact","/request-quote","/privacy","/terms"];return[...routes.map(route=>({url:`${base}${route}`,lastModified:new Date(),changeFrequency:"monthly" as const,priority:route===""?1:.7})),...services.map(s=>({url:`${base}/services/${s.slug}`,lastModified:new Date(),changeFrequency:"monthly" as const,priority:.7}))]}
