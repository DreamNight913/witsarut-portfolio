"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Locale = "th" | "en";

const caseContent = {
  th: {
    switchLabel: "เปลี่ยนภาษา",
    back: "กลับหน้าแรก",
    eyebrow: "Case Study",
    title: "Hospital Patient WebView & Queue Kiosk",
    subtitle:
      "แปลง service flow หน้างานโรงพยาบาลให้เป็น iPad WebView และ Queue Kiosk ที่ทุกคนเข้าใจร่วมกันได้",
    meta: [
      ["Project", "Hospital Service Platform"],
      ["Role", "UX/UI Designer"],
      ["Focus", "Kiosk UI, Patient WebView, Screen flow"],
      ["Status", "Portfolio case summary"],
    ],
    overviewTitle: "ภาพรวมโปรเจกต์",
    overview:
      "ระบบจัดการคิวและแสดงข้อมูลคนไข้ในโรงพยาบาล ประกอบด้วย Queue Kiosk สำหรับคนไข้กดรับคิว และ iPad WebView สำหรับพยาบาลและหมอใช้ตรวจสอบข้อมูลและสถานะคิว งานออกแบบเน้นความเรียบง่ายและ flow ที่ลดความสับสนหน้างานเพื่อรองรับผู้ใช้ที่หลากหลาย",
    challengeTitle: "โจทย์หลัก",
    challenge:
      "พยาบาลและหมอต้องทำงานแข่งกับเวลา ส่วนคนไข้ก็มีความกังวล การออกแบบ interface จึงต้องชัดเจน ไม่ซับซ้อน และสามารถแสดงข้อมูลที่จำเป็นต่อการตัดสินใจได้ทันทีบนอุปกรณ์ที่ต่างกัน เช่น Kiosk ที่ใช้งานในท่ายืน และ iPad ที่ใช้ในห้องตรวจ",
    stepsTitle: "ขั้นตอนการทำงาน",
    steps: [
      {
        title: "ลงพื้นที่และวิเคราะห์ปัญหา",
        text: "ร่วมกับ System Analyst ลงพื้นที่เพื่อดูพฤติกรรมการทำงานจริงของพยาบาล และขั้นตอนการรอคิวของคนไข้",
      },
      {
        title: "วาง Screen flow และ Service flow",
        text: "ออกแบบเส้นทางการใช้งานตั้งแต่คนไข้กดรับคิว จนถึงการเรียกคิวโดยพยาบาล ให้ทุกฝ่ายเห็นสถานะตรงกัน",
      },
      {
        title: "ออกแบบ UI สำหรับ Kiosk และ iPad",
        text: "ทำ UI สำหรับ Kiosk ที่ปุ่มใหญ่ ชัดเจน อ่านง่าย และ iPad WebView ที่แสดงรายการคิวให้พยาบาลจัดการได้สะดวก",
      },
      {
        title: "ปรับปรุง UI และทดสอบ",
        text: "นำ prototype ไปทดสอบกับผู้ใช้จริง นำ feedback มาปรับ revision ให้ตรงกับการใช้งานหน้างานมากที่สุด",
      },
      {
        title: "เตรียม handoff ให้ทีมพัฒนา",
        text: "สรุป screen flow, component states และ UI requirement เพื่อช่วยลดช่องว่างระหว่าง business requirement และ implementation",
      },
    ],
    deliverablesTitle: "สิ่งที่ส่งมอบ",
    deliverables: ["Service flow", "Screen flow", "Kiosk UI", "iPad WebView UI", "UI requirement notes"],
    learningTitle: "สิ่งที่โปรเจกต์นี้สะท้อน",
    learning:
      "การออกแบบสำหรับ healthcare ต้องคำนึงถึงบริบทหน้างานที่วุ่นวาย ความเรียบง่ายและความชัดเจนของข้อมูลคือสิ่งที่สำคัญที่สุด มากกว่าความสวยงามซับซ้อน และการลงพื้นที่จริงมีส่วนสำคัญมากในการออกแบบที่ตอบโจทย์",
    contactTitle: "สนใจคุยเรื่อง UX/UI, workflow หรือ digital product?",
    contactCta: "ติดต่อผ่านอีเมล",
  },
  en: {
    switchLabel: "Switch language",
    back: "Back to home",
    eyebrow: "Case Study",
    title: "Hospital Patient WebView & Queue Kiosk",
    subtitle:
      "Translated hospital service flows into an iPad WebView and Queue Kiosk experience that doctors, nurses, and patients could understand.",
    meta: [
      ["Project", "Hospital Service Platform"],
      ["Role", "UX/UI Designer"],
      ["Focus", "Kiosk UI, Patient WebView, Screen flow"],
      ["Status", "Portfolio case summary"],
    ],
    overviewTitle: "Project overview",
    overview:
      "A queue management and patient information system in a hospital setting, featuring a Queue Kiosk for patients and an iPad WebView for nurses and doctors to track queue status. The design prioritized simplicity and a clear flow to minimize confusion in a busy environment.",
    challengeTitle: "Core challenge",
    challenge:
      "Nurses and doctors work under time constraints, while patients often experience anxiety. Interfaces needed to be clear, uncomplicated, and capable of presenting essential decision-making information instantly across different devices (e.g., standing Kiosk vs. iPad in examination rooms).",
    stepsTitle: "Working process",
    steps: [
      {
        title: "On-site research & analysis",
        text: "Collaborated with a System Analyst to observe the actual working behaviors of nurses and the queuing steps of patients on-site.",
      },
      {
        title: "Screen flow & Service flow mapping",
        text: "Designed the user journey from patient ticket printing to nurse queue calling, ensuring all parties share the same status view.",
      },
      {
        title: "Kiosk & iPad UI design",
        text: "Created a Kiosk UI with large, clear, easily readable buttons, alongside an iPad WebView presenting an organized queue list for nurses.",
      },
      {
        title: "UI revision & testing",
        text: "Tested prototypes with actual users, incorporating feedback to refine revisions that best fit the real-world operational context.",
      },
      {
        title: "Implementation handoff",
        text: "Prepared screen flows, component states, and UI requirements to bridge the gap between business needs and development.",
      },
    ],
    deliverablesTitle: "Deliverables",
    deliverables: ["Service flow", "Screen flow", "Kiosk UI", "iPad WebView UI", "UI requirement notes"],
    learningTitle: "What this case demonstrates",
    learning:
      "Designing for healthcare requires careful consideration of the chaotic on-site context. Simplicity and data clarity take precedence over visual complexity. Direct observation on-site was crucial for creating a truly practical design.",
    contactTitle: "Open to UX/UI, workflow, or digital product conversations",
    contactCta: "Contact by email",
  },
} satisfies Record<Locale, Record<string, unknown>>;

export default function HospitalPage() {
  const [locale, setLocale] = useState<Locale>("th");
  const t = useMemo(() => caseContent[locale], [locale]);
  const otherLocale: Locale = locale === "th" ? "en" : "th";

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <main className="case-page">
      <button
        className="language-toggle"
        type="button"
        onClick={() => setLocale(otherLocale)}
        aria-label={t.switchLabel as string}
      >
        {otherLocale.toUpperCase()}
      </button>

      <section className="case-hero" aria-labelledby="case-title">
        <Link className="text-link case-hero__back" href="/">
          {t.back as string}
        </Link>
        <p className="eyebrow">{t.eyebrow as string}</p>
        <h1 id="case-title">{t.title as string}</h1>
        <p>{t.subtitle as string}</p>
        <dl className="case-meta">
          {(t.meta as string[][]).map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="case-section case-section--intro" aria-labelledby="overview-title">
        <div>
          <p className="eyebrow">Overview</p>
          <h2 id="overview-title">{t.overviewTitle as string}</h2>
        </div>
        <p>{t.overview as string}</p>
      </section>

      <section className="case-section case-section--warm" aria-labelledby="challenge-title">
        <div>
          <p className="eyebrow">Challenge</p>
          <h2 id="challenge-title">{t.challengeTitle as string}</h2>
        </div>
        <p>{t.challenge as string}</p>
      </section>

      <section className="case-section case-section--steps" aria-labelledby="steps-title">
        <div className="section__heading">
          <p className="eyebrow">Process</p>
          <h2 id="steps-title">{t.stepsTitle as string}</h2>
        </div>
        <div className="case-timeline">
          {(t.steps as { title: string; text: string }[]).map((step, index) => (
            <article className="case-step" key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="case-section case-section--deliverables" aria-labelledby="deliverables-title">
        <div>
          <p className="eyebrow">Handoff</p>
          <h2 id="deliverables-title">{t.deliverablesTitle as string}</h2>
        </div>
        <div className="deliverables deliverables--large" aria-label="Hospital deliverables">
          {(t.deliverables as string[]).map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="case-section case-section--warm" aria-labelledby="learning-title">
        <div>
          <p className="eyebrow">Reflection</p>
          <h2 id="learning-title">{t.learningTitle as string}</h2>
        </div>
        <p>{t.learning as string}</p>
      </section>

      <section className="final-cta" id="contact" aria-labelledby="case-contact-title">
        <p className="eyebrow">Contact</p>
        <h2 id="case-contact-title">{t.contactTitle as string}</h2>
        <div className="final-cta__actions">
          <a
            className="button button--primary"
            href="mailto:de.witsarut@gmail.com?subject=Hospital%20case%20conversation"
          >
            {t.contactCta as string}
          </a>
          <Link className="button button--secondary" href="/">
            {t.back as string}
          </Link>
        </div>
      </section>
    </main>
  );
}
