export type Lang = "ar" | "en";
export type Localized = { ar: string; en: string };

export const company = {
  name: { ar: "شركة ركائز الشرق", en: "Rakayiz Al Sharq" },
  legal: { ar: "شركة ركائز الشرق للمقاولات العامة", en: "Rakayiz Al Sharq General Contracting" },
  phone: "+966 56 266 9772",
  phoneRaw: "966562669772",
  location: { ar: "المنطقة الشرقية، المملكة العربية السعودية", en: "Eastern Province, Saudi Arabia" },
};

export const nav = [
  { href: "/", label: { ar: "الرئيسية", en: "Home" } },
  { href: "/about", label: { ar: "من نحن", en: "About" } },
  { href: "/services", label: { ar: "الخدمات", en: "Services" } },
  { href: "/projects", label: { ar: "المشاريع", en: "Projects" } },
  { href: "/sectors", label: { ar: "القطاعات", en: "Sectors" } },
  { href: "/why-us", label: { ar: "لماذا نحن", en: "Why us" } },
  { href: "/contact", label: { ar: "تواصل معنا", en: "Contact" } },
];

export const services = [
  { slug: "building-construction", icon: "structure", title: { ar: "الإنشاءات والمباني", en: "Building Construction" }, short: { ar: "تنفيذ متكامل للمباني التجارية والسكنية من الهيكل وحتى التسليم.", en: "Integrated commercial and residential construction from structure to handover." }, detail: { ar: "ندير أعمال الإنشاء ضمن نطاق واضح يبدأ بمراجعة المتطلبات والمخططات، ويشمل تنسيق فرق الموقع والموردين ومتابعة الجودة حتى الإقفال والتسليم.", en: "We manage construction through a clear scope—from requirements and drawing review to site coordination, quality control, closeout and handover." } },
  { slug: "civil-works", icon: "civil", title: { ar: "الأعمال المدنية", en: "Civil Works" }, short: { ar: "أعمال الخرسانة والمواقع الخارجية والأرصفة والساحات والبنية التحتية.", en: "Concrete, external works, pavements, yards and infrastructure packages." }, detail: { ar: "تنفيذ حزم الأعمال المدنية والموقع العام مع التركيز على دقة المناسيب، تكامل الخدمات، جودة الخرسانة والتنظيم الآمن للموقع.", en: "Civil and site packages focused on levels, utility coordination, concrete quality and safe site organization." } },
  { slug: "renovation", icon: "renovation", title: { ar: "الترميم وإعادة التأهيل", en: "Renovation & Rehabilitation" }, short: { ar: "رفع كفاءة المنشآت وتجديدها مع المحافظة على سلامة العناصر القائمة.", en: "Upgrading facilities while protecting existing structural integrity." }, detail: { ar: "نعالج احتياجات المباني القائمة بخطة تنفيذ تقلل التعطيل، وتوازن بين السلامة الإنشائية وتحسين الأداء الوظيفي والمظهر النهائي.", en: "We improve existing buildings through plans that minimize disruption while balancing structural safety, function and finish." } },
  { slug: "finishing", icon: "finish", title: { ar: "التشطيبات المعمارية", en: "Architectural Finishing" }, short: { ar: "تشطيبات داخلية وخارجية دقيقة تجمع الأداء بالهوية المعمارية.", en: "Precise interior and exterior finishes that unite performance and design." }, detail: { ar: "تنسيق وتنفيذ بنود التشطيبات ضمن تسلسل مدروس يضمن توافق المواد والألوان والتفاصيل مع الاستخدام المطلوب والمخططات المعتمدة.", en: "Coordinated finishing sequences align materials, colors and details with the intended use and approved drawings." } },
  { slug: "maintenance", icon: "maintenance", title: { ar: "الصيانة العامة", en: "General Maintenance" }, short: { ar: "صيانة وقائية وتصحيحية للحفاظ على جاهزية الأصول واستدامتها.", en: "Preventive and corrective maintenance that protects asset readiness." }, detail: { ar: "برامج صيانة مبنية على الأولوية والحالة التشغيلية، مع توثيق الملاحظات والأعمال المنفذة والتوصيات اللازمة.", en: "Priority-based maintenance programs with documented observations, completed work and recommendations." } },
  { slug: "project-management", icon: "management", title: { ar: "إدارة وتنفيذ المشاريع", en: "Project Delivery" }, short: { ar: "تخطيط ومتابعة وتنسيق واضح من الترسية وحتى الاستلام النهائي.", en: "Clear planning, coordination and control from award to final acceptance." }, detail: { ar: "منهجية تربط نطاق العمل والبرنامج والجودة والمخاطر والتواصل ضمن مسار واحد يساعد على اتخاذ القرار ومتابعة الإنجاز.", en: "A delivery method connecting scope, schedule, quality, risk and communication in one controlled workflow." } },
];

export const sectors = [
  { key: "commercial", title: { ar: "المباني التجارية", en: "Commercial Buildings" }, text: { ar: "مكاتب، معارض، مباني خدمات ومساحات أعمال مصممة للتشغيل طويل الأمد.", en: "Offices, showrooms, service facilities and business spaces built for long-term operation." } },
  { key: "residential", title: { ar: "المشاريع السكنية", en: "Residential" }, text: { ar: "تنفيذ وتأهيل المشاريع السكنية بعناية في التفاصيل وجودة الاستخدام.", en: "Residential delivery and rehabilitation with attention to detail and usability." } },
  { key: "industrial", title: { ar: "المنشآت الصناعية", en: "Industrial Facilities" }, text: { ar: "أعمال مدنية ومساندة للمنشآت التشغيلية والمواقع الصناعية.", en: "Civil and supporting works for operating and industrial sites." } },
  { key: "government", title: { ar: "المشاريع الحكومية", en: "Government Projects" }, text: { ar: "تنفيذ منضبط وفق المتطلبات الفنية والإجرائية للمرافق العامة.", en: "Controlled execution aligned with public-facility technical requirements." } },
  { key: "infrastructure", title: { ar: "البنية التحتية", en: "Infrastructure" }, text: { ar: "أعمال المواقع والخدمات والطرق الداخلية والساحات وشبكاتها المساندة.", en: "Site works, utilities, internal roads, yards and supporting networks." } },
  { key: "engineering", title: { ar: "الأعمال الهندسية", en: "Engineering Works" }, text: { ar: "تنسيق فني وحلول تنفيذ تراعي السلامة والقابلية للبناء.", en: "Technical coordination and buildable, safety-led delivery solutions." } },
];

export const process = [
  { n: "01", title: { ar: "الاكتشاف والمعاينة", en: "Discover & Assess" }, text: { ar: "فهم الهدف، معاينة الموقع وتثبيت نطاق العمل.", en: "Understand the objective, assess the site and define scope." } },
  { n: "02", title: { ar: "التخطيط والعرض الفني", en: "Plan & Propose" }, text: { ar: "صياغة المنهجية والبرنامج والتكلفة بصورة واضحة.", en: "Set the method, schedule and cost with clarity." } },
  { n: "03", title: { ar: "التنفيذ والرقابة", en: "Build & Control" }, text: { ar: "إدارة الفرق والجودة والسلامة وتقدم الأعمال.", en: "Manage teams, quality, safety and progress." } },
  { n: "04", title: { ar: "الفحص والتسليم", en: "Inspect & Hand Over" }, text: { ar: "إقفال الملاحظات وتوثيق الأعمال والتسليم.", en: "Close observations, document works and hand over." } },
];

export const strengths = [
  { title: { ar: "قرار مبني على الوضوح", en: "Clarity-led decisions" }, text: { ar: "نطاق ومسؤوليات وتقارير واضحة من البداية.", en: "Clear scope, responsibilities and reporting from day one." } },
  { title: { ar: "جودة قابلة للتحقق", en: "Verifiable quality" }, text: { ar: "فحص مرحلي وتوثيق للنقاط المؤثرة في النتيجة.", en: "Stage inspections and documented quality points." } },
  { title: { ar: "سلامة في صميم التنفيذ", en: "Safety by design" }, text: { ar: "تنظيم للموقع وإدارة للمخاطر قبل بدء العمل وأثناءه.", en: "Site organization and risk controls before and during execution." } },
  { title: { ar: "تواصل مسؤول", en: "Accountable communication" }, text: { ar: "تحديثات عملية، تصعيد مبكر وحلول قابلة للتنفيذ.", en: "Practical updates, early escalation and actionable solutions." } },
];

export function pick(value: Localized, lang: Lang) { return value[lang]; }
