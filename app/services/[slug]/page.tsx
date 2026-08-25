import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailPage } from "@/components/pages";
import { services } from "@/lib/content";
export function generateStaticParams(){return services.map(s=>({slug:s.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const{slug}=await params;const s=services.find(x=>x.slug===slug);if(!s)return{};return{title:s.title.ar,description:s.short.ar,openGraph:{title:s.title.ar,description:s.short.ar,images:[]},twitter:{images:[]}}}
export default async function Page({params}:{params:Promise<{slug:string}>}){const{slug}=await params;if(!services.some(s=>s.slug===slug))notFound();return <ServiceDetailPage slug={slug}/>}
