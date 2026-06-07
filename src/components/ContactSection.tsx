"use client";

import { type FormEvent, useState } from "react";
import { siteConfig } from "../config/site";

const consultationTypes = ["入住咨询", "合作洽谈", "项目关注", "其他"];

const displayValue = (value: string) => value.trim() || "待正式公布";

const encodeForm = (data: FormData) =>
  Array.from(data.entries())
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
    .join("&");

const isLocalFormPreview = () => ["localhost", "127.0.0.1"].includes(window.location.hostname);

export function ContactSection() {
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
          <div className="section-heading">
            <span>联系咨询</span>
            <h2 id="contact-title">{siteConfig.contact.title}</h2>
            <p>{siteConfig.contact.description}</p>
          </div>
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
            <select name="type" required defaultValue={consultationTypes[0]}>
              {consultationTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
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
