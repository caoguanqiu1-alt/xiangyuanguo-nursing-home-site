"use client";

import { useState } from "react";
import { siteConfig } from "../config/site";

export function Header() {
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
