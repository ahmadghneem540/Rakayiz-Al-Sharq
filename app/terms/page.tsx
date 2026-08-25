import type { Metadata } from "next";
import { LegalPage } from "@/components/pages";
export const metadata:Metadata={title:"الشروط والأحكام",description:"شروط وأحكام استخدام موقع شركة ركائز الشرق."};
export default function Page(){return <LegalPage type="terms"/>}
