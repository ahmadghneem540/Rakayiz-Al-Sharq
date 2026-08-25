import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/language-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";

export const metadata: Metadata = {
  metadataBase: new URL("https://rakayiz-al-sharq.estalamkan.chatgpt.site"),
  title: { default: "شركة ركائز الشرق للمقاولات العامة", template: "%s | ركائز الشرق" },
  description: "شركة مقاولات عامة في المنطقة الشرقية تقدم خدمات الإنشاءات والأعمال المدنية والتأهيل والتشطيبات والصيانة وإدارة التنفيذ.",
  openGraph: { title: "شركة ركائز الشرق للمقاولات العامة", description: "نبني بثقة. ونُسلّم بمسؤولية.", type: "website", locale: "ar_SA", images: [{ url: "/og.webp", width: 1200, height: 630, alt: "شركة ركائز الشرق" }] },
  twitter: { card: "summary_large_image", title: "شركة ركائز الشرق للمقاولات العامة", description: "نبني بثقة. ونُسلّم بمسؤولية.", images: ["/og.webp"] },
  icons: { icon: "/rsc-emblem-only-v5.webp", shortcut: "/rsc-emblem-only-v5.webp" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="ar" dir="rtl"><body><LanguageProvider><SiteHeader/><div className="site-page">{children}</div><SiteFooter/><WhatsAppFloat/></LanguageProvider></body></html> }
