import type { IconKey } from "../config/site";

export function Icon({ name }: { name: IconKey }) {
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
