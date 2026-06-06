import { FormEvent, useEffect, useState } from "react";
import { IconKey, siteConfig } from "./config/site";

const setMeta = (selector: string, content: string) => {
  const tag = document.head.querySelector<HTMLMetaElement>(selector);
  if (tag) tag.content = content;
};

const useDocumentMeta = () => {
  useEffect(() => {
    document.title = siteConfig.seo.title;
    setMeta('meta[name="description"]', siteConfig.seo.description);
    setMeta('meta[property="og:title"]', siteConfig.seo.title);
    setMeta('meta[property="og:description"]', siteConfig.seo.description);
    setMeta('meta[property="og:site_name"]', siteConfig.name);
    setMeta('meta[property="og:image"]', siteConfig.seo.ogImage);
  }, []);
};

const displayValue = (value: string) => value.trim() || "待正式公布";

function Icon({ name }: { name: IconKey }) {
  const common = {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
  };

  switch (name) {
    case "care":
      return (
        <svg {...common}>
          <path d="M14 23s-8-4.4-8-11a4.7 4.7 0 0 1 8-3.4A4.7 4.7 0 0 1 22 12c0 6.6-8 11-8 11Z" />
          <path d="M11 14h6M14 11v6" />
        </svg>
      );
    case "layers":
      return (
        <svg {...common}>
          <path d="m14 4 9 5-9 5-9-5 9-5Z" />
          <path d="m5 14 9 5 9-5M5 19l9 5 9-5" />
        </svg>
      );
    case "bowl":
      return (
        <svg {...common}>
          <path d="M6 13h16c0 5-3.3 9-8 9s-8-4-8-9Z" />
          <path d="M9 9c0-2 2-2 2-4M14 9c0-2 2-2 2-4M19 9c0-2 2-2 2-4" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M14 3 22 6v6c0 5.2-3.4 9-8 11-4.6-2-8-5.8-8-11V6l8-3Z" />
          <path d="m10 14 2.5 2.5L18 11" />
        </svg>
      );
    case "signal":
      return (
        <svg {...common}>
          <path d="M6 19a11 11 0 0 1 16 0M10 15a6 6 0 0 1 8 0M14 20h.01" />
          <path d="M6 8h16v14H6z" />
        </svg>
      );
    case "people":
      return (
        <svg {...common}>
          <path d="M10 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM18 13a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
          <path d="M3 23c.8-4.2 3.2-6.5 7-6.5s6.2 2.3 7 6.5M15 17c3.9.2 6.3 2.2 7 6" />
        </svg>
      );
    case "home":
      return (
        <svg {...common}>
          <path d="m4 13 10-8 10 8" />
          <path d="M7 12v11h14V12M11 23v-7h6v7" />
        </svg>
      );
    case "mind":
      return (
        <svg {...common}>
          <path d="M12 4a7 7 0 0 0-7 7c0 3.9 2.8 6.4 6 7v5h7v-4.6c2.7-1 5-3.5 5-7.1A7.2 7.2 0 0 0 15.8 4H12Z" />
          <path d="M11 10h6M10 14h8" />
        </svg>
      );
    case "recovery":
      return (
        <svg {...common}>
          <path d="M14 6v7l4 3" />
          <path d="M22 8a10 10 0 1 1-3.7-3.1" />
          <path d="M22 3v5h-5" />
        </svg>
      );
    case "community":
      return (
        <svg {...common}>
          <path d="M4 22V9l6-4 6 4v13" />
          <path d="M16 22V12l4-3 4 3v10M9 22v-6h3v6" />
        </svg>
      );
    case "hospital":
      return (
        <svg {...common}>
          <path d="M6 23V5h16v18" />
          <path d="M10 10h8M14 6v8M10 23v-5h8v5" />
        </svg>
      );
    case "route":
      return (
        <svg {...common}>
          <path d="M7 6h.01M21 22h.01" />
          <path d="M7 6c6 0 6 5 0 5s-6 5 0 5h14c-6 0-6 6 0 6" />
        </svg>
      );
    case "market":
      return (
        <svg {...common}>
          <path d="M5 11h18l-2 12H7L5 11Z" />
          <path d="M9 11a5 5 0 0 1 10 0M10 16h8" />
        </svg>
      );
    case "leaf":
      return (
        <svg {...common}>
          <path d="M23 5c-9-.7-16 3.7-16 10.5 0 3.6 2.6 6.5 6.2 6.5C19.5 22 23.5 14.8 23 5Z" />
          <path d="M7 23c3-7 8-10 14-12" />
        </svg>
      );
    case "call":
      return (
        <svg {...common}>
          <path d="M9 5h10v18H9z" />
          <path d="M12 19h4M14 9v5M11.5 11.5h5" />
        </svg>
      );
    case "record":
      return (
        <svg {...common}>
          <path d="M8 4h12v20H8z" />
          <path d="M11 9h6M11 14h6M11 19h4" />
        </svg>
      );
    case "family":
      return (
        <svg {...common}>
          <path d="M4 15 14 7l10 8" />
          <path d="M7 14v9h14v-9M11 23v-5h6v5" />
          <path d="M10 11a2 2 0 0 0 4 0 2 2 0 0 0 4 0" />
        </svg>
      );
    case "trace":
      return (
        <svg {...common}>
          <path d="M7 5h11l3 3v15H7z" />
          <path d="M18 5v4h4M10 13h8M10 17h6M10 21h4" />
        </svg>
      );
    default:
      return null;
  }
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="skip-link" href="#main">
        跳到主要内容
      </a>
      <nav className="nav-shell" aria-label="主导航">
        <a className="brand-mark" href="#home" onClick={() => setMenuOpen(false)}>
          <img className="brand-logo" src="/logo-xiangyuanguo-header.svg" alt={`${siteConfig.name}，河南南阳`} />
        </a>
        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span className="sr-only">切换导航菜单</span>
        </button>
        <div className={menuOpen ? "nav-links open" : "nav-links"} id="site-menu">
          {siteConfig.navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual" role="img" aria-label={siteConfig.hero.visualLabel}>
      <svg viewBox="0 0 620 560" aria-hidden="true">
        <defs>
          <linearGradient id="sky" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#fff7d8" />
            <stop offset="52%" stopColor="#e8f2d7" />
            <stop offset="100%" stopColor="#dfeeea" />
          </linearGradient>
          <linearGradient id="path" x1="0" x2="1">
            <stop offset="0%" stopColor="#f4d37b" />
            <stop offset="100%" stopColor="#d9a949" />
          </linearGradient>
        </defs>
        <rect width="620" height="560" rx="0" fill="url(#sky)" />
        <path d="M0 420c110-70 210-84 330-46 108 34 184 24 290-34v220H0Z" fill="#f7efe0" />
        <path d="M90 455c120-58 255-52 430 10" stroke="url(#path)" strokeWidth="52" strokeLinecap="round" />
        <path d="M122 210h220v170H122z" fill="#fffaf0" stroke="#8b8f7a" strokeWidth="5" />
        <path d="M98 211 232 116l134 95" fill="#eac45d" stroke="#766f48" strokeWidth="5" />
        <path d="M170 255h48v72h-48zM258 255h48v72h-48z" fill="#d7e6df" stroke="#7f8d86" strokeWidth="4" />
        <path d="M395 310c30-74 88-117 157-132 22 87-22 168-107 193" fill="#6d8f4c" />
        <path d="M442 365c18-61 56-103 104-139" stroke="#f7f1d1" strokeWidth="7" strokeLinecap="round" />
        <circle cx="452" cy="150" r="54" fill="#e3aa2f" />
        <circle cx="462" cy="141" r="15" fill="#f6d56f" opacity=".8" />
        <path d="M446 96c12-34 36-48 72-46-8 34-32 51-72 46Z" fill="#4f7d3b" />
        <g fill="none" stroke="#4f5d50" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7">
          <path d="M181 432v-55M181 377c-22-12-31-28-27-49 23 3 38 18 45 45" />
          <path d="M505 432v-64M505 368c-28-14-40-33-35-58 29 5 47 23 55 55" />
        </g>
      </svg>
      <div className="visual-caption">
        {siteConfig.hero.highlights.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero-section" id="home" aria-labelledby="hero-title">
      <div className="hero-content">
        <div className="hero-copy">
          <span className="status-pill">{siteConfig.projectStatus}</span>
          <h1 id="hero-title">{siteConfig.name}</h1>
          <p className="hero-subtitle">{siteConfig.subtitle}</p>
          <p className="hero-statement">{siteConfig.heroStatement}</p>
          <div className="hero-actions" aria-label="首屏操作">
            <a className="button primary" href={siteConfig.hero.primaryCta.href}>
              {siteConfig.hero.primaryCta.label}
            </a>
            <a className="button secondary" href={siteConfig.hero.secondaryCta.href}>
              {siteConfig.hero.secondaryCta.label}
            </a>
          </div>
          <ul className="principles" aria-label="项目公开口径">
            {siteConfig.planningPrinciples.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}

function BrandStory() {
  return (
    <section className="section band-light" id="story" aria-labelledby="story-title">
      <div className="content-grid story-grid">
        <SectionHeading eyebrow="品牌故事" title="四季相伴，有温度的照护家园" />
        <div className="story-copy">
          {siteConfig.story.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <blockquote>{siteConfig.story.value}</blockquote>
        </div>
      </div>
    </section>
  );
}

function AdvantageGrid() {
  return (
    <section className="section" id="advantages" aria-labelledby="advantages-title">
      <div className="container">
        <SectionHeading
          eyebrow="核心优势"
          title="围绕照护能力，而不是简单展示规模"
          description="第一版公开页面采用规划口径，突出医养、照护、空间、食养、智慧和人文六个方向。"
        />
        <div className="card-grid six-grid">
          {siteConfig.advantages.map((item) => (
            <article className="info-card" key={item.title}>
              <div className="icon-box">
                <Icon name={item.icon} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceSystem() {
  return (
    <section className="section band-green" id="services" aria-labelledby="services-title">
      <div className="container">
        <SectionHeading
          eyebrow="服务体系"
          title="规划建设多层次照护单元"
          description="以下为筹建方向，正式服务范围、入住条件和收费标准将以公告与签约文件为准。"
        />
        <div className="service-grid">
          {siteConfig.servicePlans.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-card__top">
                <div className="icon-box">
                  <Icon name={service.icon} />
                </div>
                <h3>{service.title}</h3>
              </div>
              <dl>
                <div>
                  <dt>适合人群</dt>
                  <dd>{service.audience}</dd>
                </div>
                <div>
                  <dt>主要服务</dt>
                  <dd>{service.services}</dd>
                </div>
                <div>
                  <dt>规划特色</dt>
                  <dd>{service.feature}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function LocationSection() {
  const hasFinalMap =
    siteConfig.addressIsFinal &&
    siteConfig.latitude !== null &&
    siteConfig.longitude !== null &&
    siteConfig.mapEmbedUrl.trim().length > 0;

  return (
    <section className="section" id="location" aria-labelledby="location-title">
      <div className="container location-layout">
        <div>
          <SectionHeading
            eyebrow="拟选区位"
            title={siteConfig.addressLabel}
            description={siteConfig.location.publicStatement}
          />
          <div className="district-list" aria-label="拟优先考虑区域">
            {siteConfig.districtCandidates.map((district) => (
              <span key={district}>{district}</span>
            ))}
          </div>
          <div className="location-cards">
            {siteConfig.locationAdvantages.map((item) => (
              <article className="mini-card" key={item.title}>
                <Icon name={item.icon} />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <aside className="map-panel" aria-label="区位展示">
          {hasFinalMap ? (
            <>
              <iframe
                title={`${siteConfig.name}地图位置`}
                src={siteConfig.mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="map-actions">
                <p>{siteConfig.fullAddress}</p>
                <a className="button primary" href={siteConfig.navigationUrl}>
                  一键导航
                </a>
              </div>
            </>
          ) : (
            <div className="map-placeholder">
              <Icon name="route" />
              <strong>{siteConfig.location.noteWhenPending}</strong>
              <p>当前仅展示南阳市中心城区选址方向，不展示虚构坐标或最终地址。</p>
            </div>
          )}
        </aside>
      </div>
    </section>
  );
}

function SmartCare() {
  return (
    <section className="section band-blue" id="smart-care" aria-labelledby="smart-care-title">
      <div className="container">
        <SectionHeading
          eyebrow="智慧养老"
          title="规划配置透明、可追踪的照护支持"
          description="智慧系统为拟建设方向，具体供应商、功能上线范围和开放时间以正式筹建进展为准。"
        />
        <div className="card-grid smart-grid">
          {siteConfig.smartCare.map((item) => (
            <article className="smart-item" key={item.title}>
              <Icon name={item.icon} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function LifestyleSection() {
  return (
    <section className="section lifestyle-section" aria-labelledby="lifestyle-title">
      <div className="container">
        <SectionHeading
          eyebrow="食养与活动"
          title="把规律生活做得更有滋味"
          description="食养和活动均为筹建期规划方向，实际菜单、活动频次和适用人群将根据运营筹备确定。"
        />
        <div className="lifestyle-grid">
          {[siteConfig.dining, siteConfig.activities].map((block) => (
            <article className="lifestyle-panel" key={block.title}>
              <h3>{block.title}</h3>
              <p>{block.description}</p>
              <ul>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const encodeForm = (data: FormData) =>
  Array.from(data.entries())
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
    .join("&");

const isLocalFormPreview = () => ["localhost", "127.0.0.1"].includes(window.location.hostname);

function ContactSection() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("form-name", siteConfig.contact.formName);
    setStatus("submitting");

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeForm(formData),
      });

      if (!response.ok && !isLocalFormPreview()) {
        throw new Error(`Netlify form response ${response.status}`);
      }
      form.reset();
      setStatus("success");
    } catch {
      if (isLocalFormPreview()) {
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    }
  };

  return (
    <section className="section contact-section" id="contact" aria-labelledby="contact-title">
      <div className="container contact-layout">
        <div>
          <SectionHeading
            eyebrow="联系咨询"
            title={siteConfig.contact.title}
            description={siteConfig.contact.description}
          />
          <div className="contact-list" aria-label="联系方式">
            <p>
              <span>电话</span>
              <strong>{displayValue(siteConfig.phone)}</strong>
            </p>
            <p>
              <span>微信</span>
              <strong>{displayValue(siteConfig.wechat)}</strong>
            </p>
            <p>
              <span>邮箱</span>
              <strong>{displayValue(siteConfig.email)}</strong>
            </p>
            <p>
              <span>咨询时间</span>
              <strong>{displayValue(siteConfig.consultationHours)}</strong>
            </p>
          </div>
        </div>
        <form
          className="consult-form"
          name={siteConfig.contact.formName}
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value={siteConfig.contact.formName} />
          <p className="hidden-field">
            <label>
              请勿填写
              <input name="bot-field" tabIndex={-1} autoComplete="off" />
            </label>
          </p>
          <label>
            姓名
            <input name="name" type="text" autoComplete="name" required placeholder="请输入姓名" />
          </label>
          <label>
            联系电话
            <input name="phone" type="tel" autoComplete="tel" required placeholder="请输入联系电话" />
          </label>
          <label>
            咨询类型
            <select name="type" required defaultValue="入住咨询">
              <option value="入住咨询">入住咨询</option>
              <option value="合作洽谈">合作洽谈</option>
              <option value="项目关注">项目关注</option>
              <option value="其他">其他</option>
            </select>
          </label>
          <label>
            留言
            <textarea name="message" rows={5} placeholder="可简单说明关注事项或家庭需求" />
          </label>
          <label className="checkbox-row">
            <input name="privacy" type="checkbox" value="confirmed" required />
            <span>{siteConfig.contact.privacyText}</span>
          </label>
          <button className="button primary form-button" type="submit" disabled={status === "submitting"}>
            {status === "submitting" ? "提交中..." : "提交咨询"}
          </button>
          <div className="form-status" aria-live="polite">
            {status === "success" ? <p className="success">{siteConfig.contact.successMessage}</p> : null}
            {status === "error" ? <p className="error">{siteConfig.contact.errorMessage}</p> : null}
          </div>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <strong>{siteConfig.name}</strong>
        <p>{siteConfig.footerNotice}</p>
      </div>
    </footer>
  );
}

export default function App() {
  useDocumentMeta();

  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <BrandStory />
        <ServiceSystem />
        <AdvantageGrid />
        <LocationSection />
        <SmartCare />
        <LifestyleSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
