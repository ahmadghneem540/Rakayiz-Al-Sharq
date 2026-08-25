import type { Metadata } from "next";
import { LegalPage } from "@/components/pages";
export const metadata:Metadata={title:"سياسة الخصوصية",description:"سياسة الخصوصية لموقع شركة ركائز الشرق."};
export default function Page(){return <LegalPage type="privacy"/>}
