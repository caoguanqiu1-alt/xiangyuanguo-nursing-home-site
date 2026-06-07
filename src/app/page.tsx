import { ContactSection } from "../components/ContactSection";
import { Header } from "../components/Header";
import { Icon } from "../components/Icon";
import { siteConfig } from "../config/site";

const consultationTypes = ["入住咨询", "合作洽谈", "项目关注", "其他"];

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

function HiddenNetlifyForm() {
  return (
    <form name={siteConfig.contact.formName} data-netlify="true" netlify-honeypot="bot-field" hidden>
      <input type="hidden" name="form-name" value={siteConfig.contact.formName} />
      <input name="name" />
      <input name="phone" />
      <select name="type">
        {consultationTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <textarea name="message" />
      <input type="checkbox" name="privacy" />
    </form>
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
          <span className="status-pill" data-project-status>
            {siteConfig.projectStatus}
          </span>
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
          title="规划配置透明、可追溯的照护支持"
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

export default function Page() {
  return (
    <>
      <HiddenNetlifyForm />
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
