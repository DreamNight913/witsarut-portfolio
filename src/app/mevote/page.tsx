"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Locale = "th" | "en";

const caseContent = {
  th: {
    switchLabel: "เปลี่ยนภาษา",
    back: "กลับหน้าแรก",
    eyebrow: "Case Study",
    title: "MeVote Government Voting System",
    subtitle:
      "การออกแบบระบบโหวตภาครัฐที่ต้องเปลี่ยน requirement หลายเงื่อนไขให้เป็น workflow, หน้าจอ และ handoff ที่ทีมทำงานต่อได้",
    meta: [
      ["Project", "Government voting platform"],
      ["Role", "UX/UI Designer"],
      ["Focus", "Voting flow, confirmation UI, backoffice, handoff"],
      ["Status", "Portfolio case summary"],
    ],
    overviewTitle: "ภาพรวมโปรเจกต์",
    overview:
      "MeVote เป็นระบบสำหรับการจัดการและเข้าร่วมการโหวตที่เกี่ยวข้องกับบริบทภาครัฐ โดยต้องรองรับทั้ง public/private voting, การเข้าสู่ระบบผ่านบริการภาครัฐ, flow การยืนยันก่อนลงคะแนน และ backoffice สำหรับจัดการข้อมูลการโหวต งานออกแบบจึงไม่ได้หยุดที่หน้าตา UI แต่ต้องทำให้ logic ของระบบและความเข้าใจของผู้ใช้ไปในทิศทางเดียวกัน",
    challengeTitle: "โจทย์หลัก",
    challenge:
      "ความท้าทายคือผู้ใช้แต่ละกลุ่มมีบริบทและสิทธิ์ไม่เหมือนกัน ระบบจึงต้องอธิบายขั้นตอนการลงคะแนนให้ชัด ลดความลังเลก่อนยืนยันผล และทำให้ทีมดูแลระบบเห็นโครงสร้างข้อมูลที่จำเป็นใน backoffice โดยไม่ทำให้ประสบการณ์ใช้งานหนักเกินไป",
    stepsTitle: "ขั้นตอนการทำงาน",
    steps: [
      {
        title: "รับบรีฟและแยก requirement",
        text: "เริ่มจากทำความเข้าใจ scope ของระบบ ประเภทการโหวต เงื่อนไข public/private voting การเข้าสู่ระบบ และข้อมูลที่ backoffice ต้องจัดการ",
      },
      {
        title: "วิเคราะห์ผู้ใช้และ workflow",
        text: "แยกบริบทของ voter, admin และ stakeholder ที่เกี่ยวข้อง แล้วจัดลำดับการใช้งานตั้งแต่เข้าระบบ เลือกหัวข้อ ตรวจสอบสิทธิ์ ไปจนถึงยืนยันการโหวต",
      },
      {
        title: "วาง screen flow และ state สำคัญ",
        text: "ออกแบบ flow ของหน้าหลัก หน้ารายละเอียดการโหวต หน้ายืนยัน ผลลัพธ์ และ edge state ที่ผู้ใช้อาจเจอ เช่น สิทธิ์ไม่ตรงหรือข้อมูลยังไม่ครบ",
      },
      {
        title: "ออกแบบ UX/UI สำหรับ user และ backoffice",
        text: "จัด interface ให้ผู้ใช้เห็นสิ่งที่ต้องตัดสินใจอย่างชัดเจน พร้อมออกแบบ backoffice structure ให้ทีมจัดการข้อมูล ตรวจสอบสถานะ และดูรายการได้เป็นระบบ",
      },
      {
        title: "เตรียม handoff ให้ทีมพัฒนา",
        text: "สรุป screen behavior, component states, flow explanation และ UI requirement เพื่อช่วยลดช่องว่างระหว่าง business requirement, UX decision และ implementation",
      },
    ],
    deliverablesTitle: "สิ่งที่ส่งมอบ",
    deliverables: ["Voting workflow", "User journey", "Screen flow", "Confirmation UI", "Backoffice UX/UI", "UI requirement notes"],
    learningTitle: "สิ่งที่โปรเจกต์นี้สะท้อน",
    learning:
      "งานนี้สะท้อนวิธีทำงานที่เริ่มจากการเข้าใจ requirement ก่อน แล้วค่อยแปลงเป็น flow และหน้าจอที่ทีมคุยต่อได้จริง จุดสำคัญคือการออกแบบให้ผู้ใช้มั่นใจในขั้นตอนสำคัญ พร้อมทำให้ทีมพัฒนาเห็น logic และ state ของระบบชัดเจนตั้งแต่ก่อนเริ่ม implement",
    contactTitle: "สนใจคุยเรื่อง UX/UI, workflow หรือ digital product?",
    contactCta: "ติดต่อผ่านอีเมล",
  },
  en: {
    switchLabel: "Switch language",
    back: "Back to home",
    eyebrow: "Case Study",
    title: "MeVote Government Voting System",
    subtitle:
      "A government voting system case where complex requirements were translated into workflows, screens, and implementation-ready handoff.",
    meta: [
      ["Project", "Government voting platform"],
      ["Role", "UX/UI Designer"],
      ["Focus", "Voting flow, confirmation UI, backoffice, handoff"],
      ["Status", "Portfolio case summary"],
    ],
    overviewTitle: "Project overview",
    overview:
      "MeVote is a voting platform for government-related contexts. It needed to support public/private voting, government identity login, confirmation flows, and backoffice management. The design work therefore went beyond UI visuals and focused on aligning system logic with user understanding.",
    challengeTitle: "Core challenge",
    challenge:
      "Different user groups had different contexts and permissions. The experience needed to explain the voting steps clearly, reduce uncertainty before confirmation, and help admins understand the required backoffice data structure without making the product feel heavy.",
    stepsTitle: "Working process",
    steps: [
      {
        title: "Brief intake and requirement breakdown",
        text: "Started by understanding the system scope, voting types, public/private conditions, login requirements, and the information the backoffice needed to manage.",
      },
      {
        title: "User and workflow analysis",
        text: "Mapped voter, admin, and stakeholder contexts, then ordered the experience from login and topic selection through eligibility checks and vote confirmation.",
      },
      {
        title: "Screen flow and key states",
        text: "Designed flows for main screens, voting details, confirmation, results, and important edge states such as permission mismatch or incomplete information.",
      },
      {
        title: "UX/UI for users and backoffice",
        text: "Structured the interface so users could see decisions clearly, while shaping backoffice screens for managing data, reviewing status, and scanning lists.",
      },
      {
        title: "Implementation handoff",
        text: "Prepared screen behavior, component states, flow explanations, and UI requirements to reduce ambiguity between business requirements, UX decisions, and implementation.",
      },
    ],
    deliverablesTitle: "Deliverables",
    deliverables: ["Voting workflow", "User journey", "Screen flow", "Confirmation UI", "Backoffice UX/UI", "UI requirement notes"],
    learningTitle: "What this case demonstrates",
    learning:
      "This project shows a working style that starts from requirement understanding, then translates it into flows and screens the team can discuss and build from. The key was designing confidence around critical voting steps while making system logic and states clear before implementation.",
    contactTitle: "Open to UX/UI, workflow, or digital product conversations",
    contactCta: "Contact by email",
  },
} satisfies Record<Locale, Record<string, unknown>>;

export default function MeVotePage() {
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
        <div className="deliverables deliverables--large" aria-label="MeVote deliverables">
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
            href="mailto:de.witsarut@gmail.com?subject=MeVote%20case%20conversation"
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
