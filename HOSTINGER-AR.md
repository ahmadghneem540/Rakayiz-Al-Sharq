# رفع موقع ركائز الشرق على Hostinger

## الخيار الموصى به: Hostinger Web Apps

1. ادخل إلى hPanel ثم **Websites → Add Website → Deploy Web App**.
2. اختر رفع ملف ZIP وارفع الحزمة.
3. اختر **Node.js 22.x أو 24.x**.
4. استخدم إعدادات التشغيل التالية:
   - Install command: `npm ci`
   - Build command: `npm run build`
   - Start command: `npm start`
5. أضف متغير البيئة:
   - الاسم: `NEXT_PUBLIC_SITE_URL`
   - القيمة: `https://your-domain.com`
6. ابدأ النشر وانتظر نجاح عملية Build.

## ربط الدومين

بعد نجاح النشر، افتح إعدادات التطبيق في hPanel واختر ربط Domain. إذا كان الدومين داخل Hostinger فسيتم إعداد السجلات غالبًا تلقائيًا. إذا كان عند مزود آخر، انسخ سجلات DNS التي يعرضها Hostinger وأضفها لدى مزود الدومين.

بعد ربط الدومين غيّر قيمة `NEXT_PUBLIC_SITE_URL` إلى رابط الدومين الحقيقي ثم نفّذ Redeploy حتى تعمل روابط Sitemap وOpen Graph بالدومين الجديد.

## التجربة محليًا

يتطلب المشروع Node.js 22.13 أو أحدث:

```bash
npm ci
copy .env.example .env.local
npm run dev
```

ثم افتح `http://localhost:3000`.

على macOS أو Linux استخدم `cp .env.example .env.local` بدل `copy`.

## تجربة نسخة الإنتاج قبل الرفع

```bash
npm run build
npm start
```

ثم افتح `http://localhost:3000`.

## ملاحظة

زر واتساب والنماذج لا يحتاجان قاعدة بيانات؛ يتم تجهيز الرسالة وفتح واتساب مباشرة على رقم المؤسسة.
