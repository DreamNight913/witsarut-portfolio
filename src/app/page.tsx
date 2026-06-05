"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Locale = "th" | "en";

import {
  HomeIcon,
  CheckSquare,
  HeartPulse,
  Gift,
  Layers,
  Code,
  Mail,
  Search,
  Route,
  PanelTop,
  Send,
} from "lucide-react";

const navTiles = [
  { label: "Home", href: "#home", icon: HomeIcon },
  { label: "MeVote", href: "#work", icon: CheckSquare },
  { label: "Hospital", href: "#hospital", icon: HeartPulse },
  { label: "Singer", href: "#singer-crm", icon: Gift },
  { label: "Process", href: "#process", icon: Layers },
  { label: "Skills", href: "#skills", icon: Code },
  { label: "Contact", href: "#contact", icon: Mail },
];

const projectStepIcons = [Search, Route, PanelTop, Send];

function ProjectProcess({
  label,
  steps,
}: {
  label: string;
  steps: string[][];
}) {
  return (
    <div className="project-process" aria-label={label}>
      <span className="project-process__heading">{label}</span>
      <div className="project-process__list">
        {steps.map(([title, text], index) => {
          const Icon = projectStepIcons[index] ?? CheckSquare;
          return (
            <article className="project-process__item" key={title}>
              <div className="project-process__icon" aria-hidden="true">
                <Icon size={18} strokeWidth={2.4} />
              </div>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

const content = {
  th: {
    langLabel: "TH",
    switchLabel: "เปลี่ยนภาษา",
    role: "Witsarut Pawanna · Digital Product / UX/UI / Graphic",
    heroLines: [
      "พอร์ตของนักออกแบบ",
      "ที่เข้าใจความต้องการ",
      "และเป้าหมายธุรกิจ",
    ],
    lead:
      "วิศรุต ปะวันนา ออกแบบประสบการณ์ดิจิทัลจากโจทย์จริง เชื่อมเป้าหมายธุรกิจ workflow และรายละเอียดที่ทีมพัฒนานำไปใช้ต่อได้",
    primaryCta: "ดูผลงานที่คัดมา",
    secondaryCta: "ติดต่อพูดคุย",
    imageSlotLabel: "พื้นที่วางรูปงาน",
    snapshot: [
      ["Role", "Digital Product / UX/UI / Graphic"],
      ["Tools", "Figma, Notion, Jira, Illustrator, Photoshop"],
      ["Work type", "เปิดกว้างกับงาน Digital Product, UX/UI, Workflow และ Graphic"],
      ["Focus", "Requirement, workflow, screen flow, developer handoff"],
    ],
    workEyebrow: "Featured Case Study",
    workTitle: "MeVote Government Voting System",
    workIntro:
      "งานออกแบบระบบโหวตภาครัฐที่ต้องทำให้ requirement ซับซ้อนกลายเป็น flow ที่ผู้ใช้เข้าใจได้ และทีมพัฒนานำไปทำต่อได้อย่างชัดเจน",
    featured: {
      context:
        "ระบบสำหรับจัดการและเข้าร่วมการโหวตภาครัฐ รองรับทั้ง public/private voting, การเข้าสู่ระบบผ่านบริการภาครัฐ, confirmation flow และ backoffice management",
      challenge:
        "โจทย์สำคัญคือการทำให้ผู้ใช้หลายกลุ่มเข้าใจขั้นตอนการลงคะแนนอย่างมั่นใจ พร้อมจัดโครงสร้าง backoffice ให้ทีมดูแลระบบตรวจสอบและจัดการข้อมูลได้",
      role:
        "รับผิดชอบ UX/UI, voting flow, confirmation UI, backoffice screen structure และการเตรียมรายละเอียดสำหรับส่งต่อให้ทีม implementation",
      metaRole: "UX/UI Designer",
      process:
        "เริ่มจากแยกประเภทผู้ใช้และเงื่อนไขการโหวต แล้วจัด workflow, screen flow, state สำคัญ และ UI requirement สำหรับหน้าที่เกี่ยวข้อง",
      outcome:
        "ได้ flow และหน้าจอที่อธิบายขั้นตอนการโหวตได้เป็นระบบ ลดความคลุมเครือระหว่าง business requirement, UX decision และ developer handoff",
      deliverables: ["Voting flow", "User journey", "Confirmation UI", "Backoffice UX/UI", "Developer handoff"],
      steps: [
        ["Brief", "ทำความเข้าใจโจทย์ ระบบโหวต และผู้ใช้หลายกลุ่ม"],
        ["Map requirement", "แยกเงื่อนไข public/private vote และ permission สำคัญ"],
        ["Design flow/UI", "จัด voting flow, confirmation UI และ state ที่ต้องใช้"],
        ["Backoffice handoff", "ส่งต่อ screen structure และ note ให้ทีมพัฒนา"],
      ],
      tags: ["Government", "Voting System", "UX/UI", "Backoffice", "Workflow"],
      detailCta: "ดูรายละเอียดโปรเจกต์",
      mockLabel: "MeVote screen mockup placeholder",
      mockImage:
        "https://placehold.co/1200x760/F3EFE7/111110/png?text=MeVote+Government+Voting+System",
    },
    projectProcessLabel: "ขั้นตอนการทำงาน",
    featuredLabels: [
      ["Challenge", "challenge"],
      ["Outcome", "outcome"],
    ],
    contributionLabel: "Contribution",
    moreProjects: [
      {
        title: "Hospital Patient WebView & Queue Kiosk",
        role: "UX/UI Designer",
        context: "Healthcare / Service Flow / Kiosk",
        description:
          "แปลง service flow หน้างานโรงพยาบาลให้เป็น iPad WebView และ Queue Kiosk ที่หมอ พยาบาล และคนไข้เข้าใจร่วมกันได้",
        contribution:
          "ลงพื้นที่ร่วมกับ System Analyst, จัด screen flow, ปรับ UI revision และเตรียมรายละเอียดให้ทีมพัฒนานำไปต่อ",
        steps: [
          ["ลงพื้นที่ศึกษา", "ดู service flow จริงกับ System Analyst และทีมหน้างาน"],
          ["Map service flow", "จัดลำดับ patient journey, queue และ touchpoint สำคัญ"],
          ["Design WebView/Kiosk", "ออกแบบ mobile WebView และ kiosk UI ให้ใช้งานง่าย"],
          ["Revision & handoff", "ปรับ UI ตาม feedback และส่งต่อรายละเอียดให้ทีมพัฒนา"],
        ],
        tags: ["Healthcare", "Kiosk UI", "Screen flow"],
        mockLabel: "Hospital kiosk and patient WebView mockup placeholder",
        mockImage:
          "https://placehold.co/1200x760/111110/F7F7F2/png?text=Hospital+Patient+WebView+%26+Queue+Kiosk",
      },
      {
        title: "Singer Membership CRM",
        role: "Graphic Designer UX/UI",
        context: "CRM Product Adaptation / JPoint / Rewards",
        description:
          "ปรับ CRM product เดิมของบริษัทให้เข้ากับ Singer โดยคง feature หลักด้านแต้ม คูปอง และ backoffice พร้อมเพิ่ม entry ผ่าน LINE Rich Menu และ login flow ที่รองรับลูกค้าเก่าในฐานข้อมูลเดิมก่อนเชื่อมต่อ JPoint",
        contribution:
          "จัด flow จาก Rich Menu สู่ login/สมัครสมาชิก, เชื่อมข้อมูลลูกค้าเก่า, และวาง UI concept แบบ glass-style ให้เข้ากับช่วงที่เทรนด์ interface โปร่งใสกำลังเด่น",
        steps: [
          ["ศึกษา brand/CI", "ทำความเข้าใจ CI, tone และ visual direction ของ Singer"],
          ["Audit CRM เดิม", "เทียบ flow ระบบ CRM เดิมที่บริษัทเคยทำให้เจ้าอื่น"],
          ["Iterate mobile CRM", "ปรับ Rich Menu, login, JPoint และ legacy customer flow"],
          ["Backoffice handoff", "ออกแบบ backoffice และส่งต่อ UI state/note ให้ทีมพัฒนา"],
        ],
        tags: ["Rich Menu entry", "JPoint login", "Glass-style UI"],
        mockLabel: "Singer membership CRM mockup placeholder",
        mockImage:
          "https://placehold.co/1200x760/F3EFE7/111110/png?text=Singer+Membership+CRM",
      },
      {
        title: "Other Projects & Visual Support",
        role: "UX/UI / Graphic Design",
        context: "Various / UI Support / Graphic",
        description:
          "รวมผลงานการออกแบบหน้าจอขนาดเล็ก, งานแคมเปญโปรโมชั่น, ภาพประกอบ (Visual Assets) และงานสนับสนุนทีมพัฒนาอื่นๆ ที่ไม่ได้จัดทำเป็น Case Study เต็มรูปแบบ",
        contribution:
          "ออกแบบกราฟิก, จัดทำ UI Component เพิ่มเติม, และทำหน้าที่ Design QA เพื่อให้ผลลัพธ์ตรงกับที่วางแผนไว้",
        steps: [
          ["รับ visual brief", "ทำความเข้าใจ mood, channel และข้อจำกัดของงาน"],
          ["Support UI/graphic", "ออกแบบ asset, component หรือ screen ย่อยตามโจทย์"],
          ["Design QA", "ตรวจความถูกต้องของ visual, spacing และ component state"],
          ["Delivery support", "เตรียมไฟล์และ note ให้ทีมใช้งานต่อได้ทันที"],
        ],
        tags: ["Visual Assets", "UI Support", "Campaign"],
        mockLabel: "Other projects and visual support mockup",
        mockImage:
          "https://placehold.co/1200x760/111110/F7F7F2/png?text=Other+Projects+%26+Visual+Support",
      },
    ],
    processEyebrow: "How I Work",
    processTitle: "วิธีทำงานที่ทำให้โจทย์ชัดก่อนกลายเป็นหน้าจอ",
    processIntro:
      "หลังจากเข้าใจบริบทธุรกิจ ผมจะจัดลำดับข้อมูลให้ทีมเห็นภาพเดียวกันก่อนออกแบบหน้าจอและส่งต่อรายละเอียดที่ใช้งานได้จริง",
    process: [
      ["Understand", "ทำความเข้าใจเป้าหมาย ผู้ใช้ เงื่อนไขของระบบ และข้อจำกัดที่ส่งผลต่อการออกแบบ"],
      ["Structure", "จัดข้อมูลให้เป็น flow, screen map และลำดับการใช้งานที่ทีมตรวจสอบร่วมกันได้"],
      ["Design", "ออกแบบหน้าจอ prototype และ state สำคัญให้สัมพันธ์กับ logic ของ product"],
      ["Handoff", "สรุป behavior, component state และ note ที่ช่วยให้ทีมพัฒนาเดินงานต่อได้"],
    ],
    processOutputLabel: "Practical output",
    processOutputs: ["Flow ที่ทีมเห็นตรงกัน", "UI ที่อธิบาย logic ได้", "รายละเอียดสำหรับส่งต่อ development"],
    skillsEyebrow: "Capabilities",
    skillsTitle: "ความสามารถที่ช่วยให้ทีมตัดสินใจและพัฒนาได้เร็วขึ้น",
    skills: [
      ["UX/UI & Product Flow", ["User journey", "Screen flow", "Prototype"]],
      ["Workflow & Requirement", ["Brief clarification", "Use case mapping", "Scope alignment"]],
      ["System / Backoffice UI", ["Admin structure", "Data-heavy screens", "Status and state design"]],
      ["Graphic & Handoff", ["UI notes", "Visual assets", "Developer collaboration"]],
    ],
    capabilitiesIntro:
      "สรุปทักษะที่ใช้บ่อยในงานจริง ตั้งแต่การจัด flow ไปจนถึงการเตรียมรายละเอียดที่ช่วยให้ทีมตัดสินใจและพัฒนาได้ต่อเนื่อง",
    contactEyebrow: "Contact",
    contactTitle: "คุยเรื่องโอกาสงานหรือโปรเจกต์ด้าน UX/UI และ Digital Product",
    jobCta: "ส่งอีเมล",
    linkedinCta: "ดู LinkedIn",
  },
  en: {
    langLabel: "EN",
    switchLabel: "Switch language",
    role: "Witsarut Pawanna · Digital Product / UX/UI / Graphic",
    heroLines: [
      "Design work shaped by",
      "real needs, business goals,",
      "and practical handoff",
    ],
    lead:
      "Witsarut Pawanna designs digital experiences from real requirements, connecting business goals, workflows, and implementation-ready details.",
    primaryCta: "View selected work",
    secondaryCta: "Start a conversation",
    imageSlotLabel: "Image placeholder",
    snapshot: [
      ["Role", "Digital Product / UX/UI / Graphic"],
      ["Tools", "Figma, Notion, Jira, Illustrator, Photoshop"],
      ["Work type", "Open to digital product, UX/UI, workflow, and graphic work"],
      ["Focus", "Requirements, workflow, screen flow, developer handoff"],
    ],
    workEyebrow: "Featured Case Study",
    workTitle: "MeVote Government Voting System",
    workIntro:
      "A government voting system case that shows how complex requirements became understandable user flows and implementation-ready UX/UI.",
    featured: {
      context:
        "A government voting platform supporting public/private voting, government identity login, confirmation flows, and backoffice management.",
      challenge:
        "The core challenge was helping different user groups understand the voting steps with confidence while giving admins a clear structure for managing voting data.",
      role:
        "Responsible for UX/UI, voting flow, confirmation UI, backoffice screen structure, and implementation handoff details.",
      metaRole: "UX/UI Designer",
      process:
        "Mapped user types and voting conditions, then structured workflow, screen flow, key states, and UI requirements for related screens.",
      outcome:
        "Created a clearer voting experience and backoffice structure that reduced ambiguity between business requirements, UX decisions, and developer handoff.",
      deliverables: ["Voting flow", "User journey", "Confirmation UI", "Backoffice UX/UI", "Developer handoff"],
      steps: [
        ["Brief", "Clarified the voting context, system goals, and user groups."],
        ["Map requirement", "Mapped public/private vote conditions and key permissions."],
        ["Design flow/UI", "Structured voting flow, confirmation UI, and important states."],
        ["Backoffice handoff", "Prepared screen structure and notes for development."],
      ],
      tags: ["Government", "Voting System", "UX/UI", "Backoffice", "Workflow"],
      detailCta: "View project detail",
      mockLabel: "MeVote screen mockup placeholder",
      mockImage:
        "https://placehold.co/1200x760/F3EFE7/111110/png?text=MeVote+Government+Voting+System",
    },
    projectProcessLabel: "Working steps",
    featuredLabels: [
      ["Challenge", "challenge"],
      ["Outcome", "outcome"],
    ],
    contributionLabel: "Contribution",
    moreProjects: [
      {
        title: "Hospital Patient WebView & Queue Kiosk",
        role: "UX/UI Designer",
        context: "Healthcare / Service Flow / Kiosk",
        description:
          "Translated hospital service flows into an iPad WebView and Queue Kiosk experience that doctors, nurses, and patients could understand.",
        contribution:
          "Worked with a System Analyst on-site, structured screen flows, revised UI, and prepared implementation-ready details.",
        steps: [
          ["On-site study", "Observed the real service flow with the System Analyst and staff."],
          ["Map service flow", "Structured patient journey, queue steps, and key touchpoints."],
          ["Design WebView/Kiosk", "Designed mobile WebView and kiosk UI for clear usage."],
          ["Revision & handoff", "Revised UI from feedback and prepared developer details."],
        ],
        tags: ["Healthcare", "Kiosk UI", "Screen flow"],
        mockLabel: "Hospital kiosk and patient WebView mockup placeholder",
        mockImage:
          "https://placehold.co/1200x760/111110/F7F7F2/png?text=Hospital+Patient+WebView+%26+Queue+Kiosk",
      },
      {
        title: "Singer Membership CRM",
        role: "Graphic Designer UX/UI",
        context: "CRM Product Adaptation / JPoint / Rewards",
        description:
          "Adapted the company’s existing CRM product for Singer, keeping the core point, coupon, and backoffice features while adding LINE Rich Menu entry and a login flow that handled existing customer records before connecting them to JPoint.",
        contribution:
          "Structured the Rich Menu-to-login journey, legacy-customer linking flow, and a glass-style UI concept inspired by the transparent interface direction that was gaining attention at the time.",
        steps: [
          ["Study brand/CI", "Studied Singer CI, tone, and visual direction."],
          ["Audit CRM flow", "Reviewed existing CRM flows built for other clients."],
          ["Iterate mobile CRM", "Adjusted Rich Menu, login, JPoint, and legacy customer flow."],
          ["Backoffice handoff", "Designed backoffice flow and prepared UI states/notes."],
        ],
        tags: ["Rich Menu entry", "JPoint login", "Glass-style UI"],
        mockLabel: "Singer membership CRM mockup placeholder",
        mockImage:
          "https://placehold.co/1200x760/F3EFE7/111110/png?text=Singer+Membership+CRM",
      },
      {
        title: "Other Projects & Visual Support",
        role: "UX/UI / Graphic Design",
        context: "Various / UI Support / Graphic",
        description:
          "A collection of smaller screen designs, promotional campaigns, visual assets, and other developer support tasks that are not formatted as full case studies.",
        contribution:
          "Designed graphics, created additional UI components, and performed Design QA to ensure the final output matched the intended design.",
        steps: [
          ["Visual brief", "Clarified mood, channel, and production constraints."],
          ["UI/graphic support", "Designed assets, components, or smaller screens."],
          ["Design QA", "Checked visual accuracy, spacing, and component states."],
          ["Delivery support", "Prepared files and notes for team usage."],
        ],
        tags: ["Visual Assets", "UI Support", "Campaign"],
        mockLabel: "Other projects and visual support mockup",
        mockImage:
          "https://placehold.co/1200x760/111110/F7F7F2/png?text=Other+Projects+%26+Visual+Support",
      },
    ],
    processEyebrow: "How I Work",
    processTitle: "A working method that clarifies the brief before screens",
    processIntro:
      "After understanding the business context, I structure information so the team can align before design decisions move into screens and implementation details.",
    process: [
      ["Understand", "Clarify goals, users, system conditions, and constraints that affect the experience."],
      ["Structure", "Turn information into flows, screen maps, and usage sequences the team can review."],
      ["Design", "Create screens, prototypes, and important states that match product logic."],
      ["Handoff", "Summarize behavior, component states, and notes that help development continue."],
    ],
    processOutputLabel: "Practical output",
    processOutputs: ["Aligned team flow", "UI that explains logic", "Development-ready details"],
    skillsEyebrow: "Capabilities",
    skillsTitle: "Capabilities that help teams decide and build faster",
    skills: [
      ["UX/UI & Product Flow", ["User journey", "Screen flow", "Prototype"]],
      ["Workflow & Requirement", ["Brief clarification", "Use case mapping", "Scope alignment"]],
      ["System / Backoffice UI", ["Admin structure", "Data-heavy screens", "Status and state design"]],
      ["Graphic & Handoff", ["UI notes", "Visual assets", "Developer collaboration"]],
    ],
    capabilitiesIntro:
      "A concise view of practical skills used in real projects, from flow structure to details that help teams decide and build continuously.",
    contactEyebrow: "Contact",
    contactTitle: "Open to roles or projects around UX/UI and digital product",
    jobCta: "Send email",
    linkedinCta: "View LinkedIn",
  },
} satisfies Record<Locale, Record<string, unknown>>;

export default function Home() {
  const [locale, setLocale] = useState<Locale>("th");
  const t = useMemo(() => content[locale], [locale]);
  const otherLocale: Locale = locale === "th" ? "en" : "th";
  const featured = t.featured as typeof content.th.featured;
  const featuredLabels = t.featuredLabels as [string, keyof typeof content.th.featured][];
  const moreProjects = t.moreProjects as typeof content.th.moreProjects;
  const processOutputs = t.processOutputs as string[];
  const projectProcessLabel = t.projectProcessLabel as string;
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <button
        className="language-toggle"
        type="button"
        onClick={() => setLocale(otherLocale)}
        aria-label={t.switchLabel as string}
      >
        {otherLocale.toUpperCase()}
      </button>

      <nav className="preview-rail" aria-label="Section navigation">
        {navTiles.map((tile) => {
          const Icon = tile.icon;
          return (
            <a
              className={`preview-tile${activeSection === tile.href ? " preview-tile--active" : ""}`}
              href={tile.href}
              key={tile.href}
              title={tile.label}
            >
              <Icon size={22} strokeWidth={2.5} />
              <span className="sr-only">{tile.label}</span>
            </a>
          );
        })}
      </nav>

      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="hero__copy">
          <div className="hero__topline">
            <p className="role-label">{t.role as string}</p>
          </div>
          <h1 id="hero-title">
            {(t.heroLines as string[]).map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
          <p className="hero__lead">{t.lead as string}</p>
          <div className="hero__actions" aria-label="Primary links">
            <a className="button button--primary" href="#work">
              {t.primaryCta as string}
            </a>
            <a
              className="button button--secondary"
              href="mailto:de.witsarut@gmail.com?subject=Portfolio%20conversation"
            >
              {t.secondaryCta as string}
            </a>
          </div>
        </div>

        <div className="hero__portrait">
          <Image
            src="/image/profile-portrait.png"
            alt="Witsarut Pawanna portrait in warm studio light"
            width={1086}
            height={1448}
            priority
          />
        </div>

      </section>

      <section className="snapshot" aria-label="Profile snapshot">
        {(t.snapshot as string[][]).map(([label, value]) => (
          <article className="snapshot__item" key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </article>
        ))}
      </section>

      <section className="section section--project section--warm" id="work">
        <div className="section__heading project-heading">
          <p className="eyebrow">Project 01 · {t.workEyebrow as string}</p>
          <h2>{t.workTitle as string}</h2>
          <p>{t.workIntro as string}</p>
        </div>
        <article className="project-showcase project-showcase--featured" aria-label="MeVote featured case study">
          <div className="project-showcase__main">
            <div className="case-card__meta">
              <span>{featured.metaRole}</span>
              <span>Real project</span>
            </div>
            <div className="project-showcase__mock project-showcase__mock--featured" aria-label={featured.mockLabel}>
              <span>{t.imageSlotLabel as string}</span>
              <Image src={featured.mockImage} alt={featured.mockLabel} width={1200} height={760} />
            </div>
            <p>{featured.context}</p>
            <div className="deliverables" aria-label="MeVote deliverables">
              {featured.deliverables.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="tag-list" aria-label="MeVote project tags">
              {featured.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <Link className="button button--primary project-showcase__cta" href="/mevote">
              {featured.detailCta}
            </Link>
          </div>

          <div className="project-showcase__side">
            <dl className="project-facts">
              {featuredLabels.map(([label, key]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{featured[key]}</dd>
                </div>
              ))}
            </dl>
            <ProjectProcess label={projectProcessLabel} steps={featured.steps} />
          </div>
        </article>
      </section>

      {moreProjects.map((project, index) => {
        const isWarm = index === 1;

        return (
          <section
            className={`section section--project ${isWarm ? "section--warm" : "section--dark"}`}
            id={index === 0 ? "hospital" : index === 1 ? "singer-crm" : "others"}
            key={project.title}
          >
            <div className="section__heading project-heading">
              <p className="eyebrow">Project {String(index + 2).padStart(2, "0")}</p>
              <h2>{project.title}</h2>
              <p>{project.context}</p>
            </div>
            <article className="project-showcase">
              <div className="project-showcase__main">
                <div className="case-card__meta">
                  <span>{project.role}</span>
                  <span>Real project</span>
                </div>
                <div
                  className={`project-showcase__mock project-showcase__mock--${index === 0 ? "kiosk" : index === 1 ? "crm" : "campaign"}`}
                  aria-label={project.mockLabel}
                >
                  <span>{t.imageSlotLabel as string}</span>
                  <Image src={project.mockImage} alt={project.mockLabel} width={1200} height={760} />
                </div>
                <p>{project.description}</p>
                <div className={`tag-list ${isWarm ? "" : "tag-list--dark"}`} aria-label={`${project.title} tags`}>
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <Link className="button button--primary project-showcase__cta" href={index === 0 ? "/hospital" : index === 1 ? "/singer-crm" : "/others"}>
                  {featured.detailCta}
                </Link>
              </div>
              <div className="project-showcase__side">
                <span>{t.contributionLabel as string}</span>
                <p>{project.contribution}</p>
                <ProjectProcess label={projectProcessLabel} steps={project.steps} />
              </div>
            </article>
          </section>
        );
      })}

      <section className="section section--dark" id="process">
        <div className="work-method">
          <div className="work-method__intro">
            <p className="eyebrow">{t.processEyebrow as string}</p>
            <h2>{t.processTitle as string}</h2>
            <p>{t.processIntro as string}</p>
            <div className="output-list" aria-label={t.processOutputLabel as string}>
              <span>{t.processOutputLabel as string}</span>
              {processOutputs.map((item) => (
                <strong key={item}>{item}</strong>
              ))}
            </div>
          </div>
          <div className="method-steps">
            {(t.process as string[][]).map(([title, text], index) => (
              <article className="method-step" key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--warm" id="skills">
        <div className="section__heading section__heading--split">
          <div>
            <p className="eyebrow">{t.skillsEyebrow as string}</p>
            <h2>{t.skillsTitle as string}</h2>
          </div>
          <p>{t.capabilitiesIntro as string}</p>
        </div>
        <div className="capability-grid">
          {(t.skills as [string, string[]][]).map(([title, items]) => (
            <article className="capability-card" key={title}>
              <h3>{title}</h3>
              <ul>
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="final-cta" id="contact" aria-labelledby="final-cta-title">
        <p className="eyebrow">{t.contactEyebrow as string}</p>
        <h2 id="final-cta-title">{t.contactTitle as string}</h2>
        <div className="final-cta__actions">
          <a
            className="button button--primary"
            href="mailto:de.witsarut@gmail.com?subject=Portfolio%20conversation"
          >
            {t.jobCta as string}
          </a>
          <a
            className="button button--secondary"
            href="https://www.linkedin.com/in/witsarut-pawanna-92153031a/"
          >
            {t.linkedinCta as string}
          </a>
        </div>
      </section>

      <footer className="footer section section--dark">
        <div className="footer__content">
          <p>© {new Date().getFullYear()} Witsarut Pawanna. All rights reserved.</p>
          <div className="footer__links">
            <a href="mailto:de.witsarut@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
            <a href="https://www.linkedin.com/in/witsarut-pawanna-92153031a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <a href="#home" className="footer__back-to-top">
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}
