"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Locale = "th" | "en";

const caseContent = {
  th: {
    switchLabel: "เปลี่ยนภาษา",
    back: "กลับหน้าแรก",
    eyebrow: "Case Study",
    title: "Singer Membership CRM",
    subtitle:
      "ปรับ CRM product เดิมให้เข้ากับ Singer พร้อม Rich Menu entry, login flow สำหรับลูกค้าเก่า และ visual concept แบบ glass-style",
    meta: [
      ["Project", "Singer Membership CRM"],
      ["Role", "UX/UI + Graphic Designer"],
      ["Focus", "Mobile CRM, JPoint login, Backoffice"],
      ["Status", "Portfolio case summary"],
    ],
    overviewTitle: "ภาพรวมโปรเจกต์",
    overview:
      "โปรเจกต์เริ่มจาก PM มอบหมายให้ศึกษาแบรนด์และ CI ของ Singer พร้อมศึกษาระบบ CRM เดิมที่บริษัทเคยทำให้ลูกค้าเจ้าอื่น เพื่อหาแนวทางปรับ product เดิมให้เข้ากับบริบทของ Singer โดยยังคง feature หลัก เช่น ระบบสมาชิก สะสมแต้มจากการซื้อสินค้า เก็บหรือแลกคูปอง และ backoffice ผู้ใช้เริ่มเข้าใช้งานจาก LINE Rich Menu แล้วเข้าสู่ login/registration flow ส่วนโจทย์สำคัญคือ Singer มีข้อมูลลูกค้าเก่าอยู่ใน database จึงต้องออกแบบ flow ที่รองรับทั้งลูกค้าใหม่และลูกค้าเก่าก่อนเชื่อมต่อกับ JPoint",
    challengeTitle: "โจทย์หลัก",
    challenge:
      "ปกติ CRM หลักของบริษัทจะเข้าสู่ระบบผ่าน JPoint ซึ่งเป็น point system หลัก แต่ Singer มีฐานข้อมูลลูกค้าเดิมที่สมัครหรือเคยใช้งานมาก่อน จึงต้องเพิ่มเคสตรวจสอบข้อมูลเดิมและเชื่อมต่อกับการสมัคร JPoint: ถ้าพบข้อมูลเดิมให้ดึงข้อมูลบางส่วนมาใช้ต่อได้ ถ้ายังขาดข้อมูลต้องให้ผู้ใช้กรอกเพิ่ม โดยยังต้องรักษา flow ของระบบ CRM เดิมให้ทีมพัฒนา reuse ได้มากที่สุด",
    uxScopeTitle: "ขอบเขตงาน UX/UI ที่ต้องแก้",
    uxScopeIntro:
      "ขอบเขตงานไม่ได้จบที่การทำหน้าจอใหม่ แต่ต้องเริ่มจากการเข้าใจแบรนด์ ระบบเดิม และ requirement ที่ค่อยๆ ชัดขึ้นระหว่างโปรเจกต์",
    uxScope: [
      ["Brand & CI study", "ศึกษา visual identity, tone และข้อจำกัดของ CI Singer เพื่อกำหนดทิศทาง UI ที่ไม่หลุดจากแบรนด์"],
      ["Existing CRM UX/UI audit", "ศึกษา UX/UI ของ CRM เดิมที่บริษัทเคยทำ เช่น member, point, coupon, reward, login และ backoffice"],
      ["First mockup exploration", "ขึ้น mockup แรกจากข้อมูลที่มี เพื่อใช้คุยภาพรวมร่วมกับทีม ก่อนเก็บ requirement รายละเอียดเพิ่มเติม"],
      ["Mobile membership flow", "ปรับ flow หลักบน mobile ก่อน เพราะเป็น touchpoint ที่ผู้ใช้เข้าจาก LINE Rich Menu และใช้งานสมาชิกจริง"],
      ["Backoffice flow", "เมื่อ mobile flow ชัดแล้วจึงออกแบบ backoffice สำหรับจัดการสมาชิก แคมเปญ คูปอง และข้อมูลที่เกี่ยวข้อง"],
      ["Handoff notes", "เตรียม screen flow, UI state, field rule, edge case และ visual assets ให้ทีมพัฒนานำไปต่อ"],
    ],
    flowTitle: "UX decision สำหรับเคสผู้ใช้",
    flowIntro:
      "จุดสำคัญคือการออกแบบ decision path ให้ทีมธุรกิจและทีมพัฒนาเห็นตรงกันว่าแต่ละเคสควรพาผู้ใช้ไปไหน",
    flowCases: [
      ["เริ่มจาก Rich Menu", "ผู้ใช้กดเมนูสมาชิกจาก LINE Rich Menu แล้วเข้าสู่หน้า login/registration โดยไม่ต้องค้นหาทางเข้าเอง"],
      ["พบลูกค้าเก่าและข้อมูลครบ", "พาผู้ใช้ยืนยันข้อมูลเดิม แล้วเชื่อมต่อเข้ากับ JPoint/member account โดยลดการกรอกซ้ำ"],
      ["พบลูกค้าเก่าแต่ข้อมูลไม่ครบ", "แสดง field ที่ต้องกรอกเพิ่มเท่านั้น เพื่อให้ผู้ใช้เข้าใจว่าทำไมต้องเติมข้อมูลก่อนสมัครต่อ"],
      ["ไม่พบข้อมูลเดิม", "เข้าสู่ flow สมัครสมาชิกใหม่ตามระบบ CRM หลัก โดยไม่ทำให้ผู้ใช้รู้สึกว่าตนเองเจอ error"],
      ["หลังเข้าสู่ระบบ", "พาผู้ใช้ไปยังพื้นที่สมาชิกที่สะสมแต้ม เก็บคูปอง แลกรางวัล และเข้าถึงบริการแจ้งซ่อมได้"],
      ["Backoffice จัดการข้อมูลต่อ", "ฝั่ง admin สามารถตรวจสอบและจัดการข้อมูลสมาชิก แคมเปญ คูปอง และสถานะที่เกี่ยวข้องจากระบบหลังบ้าน"],
    ],
    stepsTitle: "UX/UI process ที่ใช้ในโปรเจกต์",
    steps: [
      {
        title: "Study Singer Brand & CI",
        text: "เริ่มจาก brief ของ PM แล้วศึกษาแบรนด์ CI, visual identity, tone และข้อจำกัดด้านภาพลักษณ์ของ Singer เพื่อวางทิศทาง UI ให้เข้ากับแบรนด์และยังรองรับแนวคิด glass-style ที่ต้องการทดลองในช่วงนั้น",
      },
      {
        title: "Audit Existing CRM Flow",
        text: "ศึกษา UX/UI ของ CRM เดิมที่บริษัทเคยทำให้เจ้าอื่น เช่น member profile, point, coupon, reward, login และ backoffice เพื่อระบุว่าส่วนไหน reuse ได้ และส่วนไหนต้องปรับให้เข้ากับ Singer",
      },
      {
        title: "Create First Mockup",
        text: "ขึ้น mockup แรกจากข้อมูลที่มี เพื่อใช้เป็นภาพตั้งต้นในการคุยกับทีมและ stakeholder ระหว่างที่ requirement ยังถูกเก็บและปรับรายละเอียดเพิ่มเติม",
      },
      {
        title: "Collect Requirements & Iterate Mobile Flow",
        text: "เก็บ requirement ในแต่ละส่วนแล้วเริ่มปรับ mobile flow ก่อน ตั้งแต่ Rich Menu entry, login, JPoint registration, legacy customer data, point, coupon และ reward เพื่อให้ user journey หลักชัดก่อน",
      },
      {
        title: "Design Backoffice Flow",
        text: "หลัง mobile flow ชัดแล้วจึงออกแบบ backoffice สำหรับดูและจัดการข้อมูลสมาชิก แคมเปญ คูปอง reward และข้อมูลที่เกี่ยวข้อง โดยเชื่อม logic ให้สอดคล้องกับฝั่ง mobile",
      },
      {
        title: "Prepare UX/UI Handoff",
        text: "ส่งต่อ screen flow, UI states, field rules, edge cases, visual assets และ notes ให้ทีมพัฒนา โดยชี้ชัดว่าส่วนไหนเป็น behavior เดิมของ CRM และส่วนไหนเป็น requirement ใหม่ของ Singer",
      },
    ],
    deliverablesTitle: "สิ่งที่ส่งมอบ",
    deliverables: ["Brand & CI direction", "First mockup", "Mobile CRM flow", "Legacy customer flow", "JPoint registration flow", "Backoffice UX/UI", "Handoff specs"],
    learningTitle: "สิ่งที่โปรเจกต์นี้สะท้อน",
    learning:
      "โปรเจกต์นี้สะท้อนงาน UX/UI ในระบบจริงที่ brief และ requirement ค่อยๆ ชัดขึ้นระหว่างทาง การขึ้น mockup แรกช่วยให้ทีมเห็นภาพและคุยทิศทางร่วมกันได้เร็วขึ้น จากนั้นจึง iterate ตาม requirement โดยเริ่มจาก mobile experience ซึ่งเป็น touchpoint หลักของผู้ใช้ แล้วค่อยต่อ backoffice เมื่อ front flow ชัด ส่วน brand/CI และ glass-style concept ถูกใช้เพื่อกำหนดภาพรวม UI อย่างมีเหตุผล ไม่ใช่เป็นแค่การตกแต่ง",
    contactTitle: "สนใจคุยเรื่อง UX/UI, workflow หรือ digital product?",
    contactCta: "ติดต่อผ่านอีเมล",
  },
  en: {
    switchLabel: "Switch language",
    back: "Back to home",
    eyebrow: "Case Study",
    title: "Singer Membership CRM",
    subtitle:
      "Adapted an existing CRM product for Singer with LINE Rich Menu entry, legacy-customer login flow, and a glass-style visual concept.",
    meta: [
      ["Project", "Singer Membership CRM"],
      ["Role", "UX/UI + Graphic Designer"],
      ["Focus", "Mobile CRM, JPoint login, Backoffice"],
      ["Status", "Portfolio case summary"],
    ],
    overviewTitle: "Project overview",
    overview:
      "The project started with a PM brief to study Singer’s brand and CI, then review the existing CRM product the company had already delivered for other clients. The goal was to adapt the existing product to Singer’s context while keeping core features such as membership, points from purchases, free or redeemed coupons, rewards, and backoffice management. Users entered the experience from LINE Rich Menu before moving into login or registration. Singer also had existing customer records in the database, so the flow needed to support both new and legacy customers before connecting them to JPoint.",
    challengeTitle: "Core challenge",
    challenge:
      "The company’s CRM normally used JPoint as the main login and point system. Singer, however, had existing customer data from a previous project. The design needed to add a verification and data-linking case: if existing customer data was found, part of it could be reused; if required information was missing, the user needed to complete it. This had to work while keeping as much of the existing CRM flow reusable as possible for development.",
    uxScopeTitle: "UX/UI scope to redesign",
    uxScopeIntro:
      "The scope was not only about creating new screens. It started with understanding the brand, the existing CRM, and requirements that became clearer as the project moved forward.",
    uxScope: [
      ["Brand & CI study", "Studied Singer’s visual identity, tone, and CI constraints to define a UI direction that stayed aligned with the brand."],
      ["Existing CRM UX/UI audit", "Reviewed the CRM UX/UI previously created for other clients, including member, point, coupon, reward, login, and backoffice flows."],
      ["First mockup exploration", "Created an early mockup from the available information to align direction while detailed requirements were being refined."],
      ["Mobile membership flow", "Started with the mobile flow because users entered from LINE Rich Menu and used the membership experience from that touchpoint."],
      ["Backoffice flow", "Designed backoffice flows after the mobile journey became clear, covering member data, campaigns, coupons, and related management."],
      ["Handoff notes", "Prepared screen flows, UI states, field rules, edge cases, and visual assets for implementation."],
    ],
    flowTitle: "UX decisions for user cases",
    flowIntro:
      "The important UX task was making the decision path explicit so business and development teams could align on where each user case should go.",
    flowCases: [
      ["Start from Rich Menu", "Users tapped the membership entry from LINE Rich Menu and moved into login or registration without needing to search for the access point."],
      ["Existing customer with complete data", "Let the user confirm existing data and connect it to JPoint/member account with less repeated input."],
      ["Existing customer with missing fields", "Show only the required missing fields so the user understands why additional information is needed."],
      ["No existing record found", "Move into the standard new-member flow without making the user feel that an error occurred."],
      ["After login", "Lead users into a member area where they can collect points, save coupons, redeem rewards, and access repair service support."],
      ["Admin manages data in backoffice", "Admins can review and manage member data, campaigns, coupons, rewards, and related statuses from the backoffice."],
    ],
    stepsTitle: "UX/UI process used in the project",
    steps: [
      {
        title: "Study Singer Brand & CI",
        text: "Started from the PM brief, then studied Singer’s CI, visual identity, tone, and brand constraints to define a UI direction that matched the brand while allowing room for the glass-style concept.",
      },
      {
        title: "Audit Existing CRM Flow",
        text: "Reviewed the UX/UI of CRM projects the company had already built for other clients, such as member profile, points, coupons, rewards, login, and backoffice, then identified which parts could be reused or adapted.",
      },
      {
        title: "Create First Mockup",
        text: "Created an early mockup from the available information so the team and stakeholders could align on direction while detailed requirements were still being refined.",
      },
      {
        title: "Collect Requirements & Iterate Mobile Flow",
        text: "Collected requirements section by section and iterated on the mobile flow first, including Rich Menu entry, login, JPoint registration, legacy customer data, points, coupons, and rewards.",
      },
      {
        title: "Design Backoffice Flow",
        text: "After the mobile journey became clear, designed the backoffice for managing members, campaigns, coupons, rewards, and related data while keeping logic aligned with the mobile experience.",
      },
      {
        title: "Prepare UX/UI Handoff",
        text: "Prepared screen flows, UI states, field rules, edge cases, visual assets, and notes for implementation, making clear which behaviors came from the existing CRM and which were new Singer requirements.",
      },
    ],
    deliverablesTitle: "Deliverables",
    deliverables: ["Brand & CI direction", "First mockup", "Mobile CRM flow", "Legacy customer flow", "JPoint registration flow", "Backoffice UX/UI", "Handoff specs"],
    learningTitle: "What this case demonstrates",
    learning:
      "This project demonstrates UX/UI work in a real environment where the brief and requirements became clearer over time. Creating an early mockup helped the team align direction before the details were fully settled, then the design evolved through requirement-by-requirement iteration. The work started with the mobile experience because it was the primary user touchpoint, then moved into backoffice once the front flow was clear. Brand/CI research and the glass-style concept shaped the UI direction with purpose rather than decoration.",
    contactTitle: "Open to UX/UI, workflow, or digital product conversations",
    contactCta: "Contact by email",
  },
} satisfies Record<Locale, Record<string, unknown>>;

export default function SingerCRMPage() {
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

      <section className="case-section case-section--ux" aria-labelledby="ux-scope-title">
        <div>
          <p className="eyebrow">UX/UI Scope</p>
          <h2 id="ux-scope-title">{t.uxScopeTitle as string}</h2>
          <p>{t.uxScopeIntro as string}</p>
        </div>
        <div className="case-insight-grid">
          {(t.uxScope as string[][]).map(([label, description]) => (
            <article className="case-insight-card" key={label}>
              <span>{label}</span>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="case-section case-section--warm case-section--flow" aria-labelledby="flow-title">
        <div>
          <p className="eyebrow">Flow Decision</p>
          <h2 id="flow-title">{t.flowTitle as string}</h2>
          <p>{t.flowIntro as string}</p>
        </div>
        <div className="case-flow-list">
          {(t.flowCases as string[][]).map(([label, description], index) => (
            <article className="case-flow-item" key={label}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{label}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
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
        <div className="deliverables deliverables--large" aria-label="Singer CRM deliverables">
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
            href="mailto:de.witsarut@gmail.com?subject=Singer%20CRM%20case%20conversation"
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
