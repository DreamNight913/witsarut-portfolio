"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Locale = "th" | "en";

const caseContent = {
  th: {
    switchLabel: "เปลี่ยนภาษา",
    back: "กลับหน้าแรก",
    eyebrow: "Archive & Support",
    title: "Other Projects & Visual Support",
    subtitle:
      "รวมผลงานการออกแบบหน้าจอขนาดเล็ก, งานแคมเปญโปรโมชั่น, ภาพประกอบ และงานสนับสนุนทีมพัฒนา",
    meta: [
      ["Project", "Various Projects"],
      ["Role", "UX/UI / Graphic Design"],
      ["Focus", "Visual Assets, UI Support, Campaign"],
      ["Status", "Archive collection"],
    ],
    overviewTitle: "ภาพรวม",
    overview:
      "นอกจากโปรเจกต์หลักที่ต้องทำ Case Study แบบเต็มรูปแบบแล้ว ยังมีงานออกแบบอีกหลายส่วนที่มีความสำคัญไม่แพ้กัน เช่น การออกแบบหน้าจอ UI Component เพิ่มเติม, การทำแคมเปญการตลาดระยะสั้น, และการผลิต Visual Assets เพื่อสนับสนุนการทำงานของทีมพัฒนาและทีมธุรกิจ",
    challengeTitle: "ความท้าทายในงานส่วนนี้",
    challenge:
      "งานในส่วนนี้มักจะต้องการความรวดเร็วและความแม่นยำสูง (Fast-paced & High precision) สิ่งที่ท้าทายคือการต้องทำความเข้าใจ requirement ที่มาอย่างรวดเร็ว และสามารถส่งมอบงาน (Handoff) ให้กับทีมพัฒนาได้ทันทีโดยที่ยังคงรักษามาตรฐานของแบรนด์ไว้ได้",
    stepsTitle: "ขอบเขตการทำงาน",
    steps: [
      {
        title: "Campaign & Promotion UI",
        text: "ออกแบบหน้าจอสำหรับกิจกรรมและแคมเปญพิเศษ เน้นการดึงดูดสายตาและการสื่อสารเงื่อนไขที่รวดเร็ว",
      },
      {
        title: "Visual Assets & Illustrations",
        text: "สร้างสรรค์กราฟิกประกอบ ไอคอน และภาพวาดเพื่อใช้ในสื่อต่างๆ ของระบบ",
      },
      {
        title: "UI Component Support",
        text: "ช่วยทีมพัฒนาปรับปรุงหน้าจอ (UI Revision) และสร้าง Component ย่อยตาม requirement ใหม่ๆ",
      },
      {
        title: "Design QA",
        text: "ตรวจสอบและปรับแต่งดีไซน์บนหน้าจอจริงเพื่อให้มั่นใจว่าผลลัพธ์ตรงกับที่วางแผนไว้มากที่สุด",
      },
    ],
    deliverablesTitle: "ตัวอย่างผลลัพธ์",
    deliverables: ["Campaign UI", "Graphic Assets", "Iconography", "UI Components", "Design Specs"],
    learningTitle: "สิ่งที่ได้เรียนรู้",
    learning:
      "งานสนับสนุนเหล่านี้ช่วยฝึกฝนความคล่องตัวในการทำงาน (Agility) และตอกย้ำให้เห็นว่าทุกรายละเอียดของดีไซน์ ไม่ว่าจะเล็กแค่ไหน ล้วนส่งผลต่อประสบการณ์ใช้งานโดยรวมของ product เสมอ",
    contactTitle: "สนใจพูดคุยหรือดูผลงานเพิ่มเติม?",
    contactCta: "ติดต่อผ่านอีเมล",
  },
  en: {
    switchLabel: "Switch language",
    back: "Back to home",
    eyebrow: "Archive & Support",
    title: "Other Projects & Visual Support",
    subtitle:
      "A collection of smaller screen designs, promotional campaigns, visual assets, and developer support tasks.",
    meta: [
      ["Project", "Various Projects"],
      ["Role", "UX/UI / Graphic Design"],
      ["Focus", "Visual Assets, UI Support, Campaign"],
      ["Status", "Archive collection"],
    ],
    overviewTitle: "Overview",
    overview:
      "Beyond the main projects that require full case studies, there are numerous critical design tasks. These include designing additional UI components, creating short-term marketing campaigns, and producing visual assets to support the development and business teams.",
    challengeTitle: "Core challenge",
    challenge:
      "These tasks are typically fast-paced and require high precision. The challenge lies in quickly grasping incoming requirements and delivering design handoffs immediately while strictly maintaining brand standards.",
    stepsTitle: "Scope of work",
    steps: [
      {
        title: "Campaign & Promotion UI",
        text: "Designed screens for special events and campaigns, focusing on visual appeal and quick communication of terms.",
      },
      {
        title: "Visual Assets & Illustrations",
        text: "Created supporting graphics, icons, and illustrations for various touchpoints in the system.",
      },
      {
        title: "UI Component Support",
        text: "Assisted the development team with UI revisions and created minor components based on emerging requirements.",
      },
      {
        title: "Design QA",
        text: "Reviewed and tweaked designs on actual screens to ensure the final output perfectly matched the intended plans.",
      },
    ],
    deliverablesTitle: "Deliverables",
    deliverables: ["Campaign UI", "Graphic Assets", "Iconography", "UI Components", "Design Specs"],
    learningTitle: "Key takeaways",
    learning:
      "These support tasks cultivate agility and reinforce the understanding that every design detail, no matter how small, always impacts the overall user experience of a product.",
    contactTitle: "Interested in talking or seeing more work?",
    contactCta: "Contact by email",
  },
} satisfies Record<Locale, Record<string, unknown>>;

export default function OthersPage() {
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
          <p className="eyebrow">Scope</p>
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
          <p className="eyebrow">Output</p>
          <h2 id="deliverables-title">{t.deliverablesTitle as string}</h2>
        </div>
        <div className="deliverables deliverables--large" aria-label="Other Projects deliverables">
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
            href="mailto:de.witsarut@gmail.com?subject=Other%20Projects%20conversation"
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
