type IconProps = {
  className?: string;
};

export function ArrowUpRight({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function ArrowRight({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M4 12h16" />
      <path d="m14 6 6 6-6 6" />
    </svg>
  );
}

export function Layers({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12 9 5 9-5" />
      <path d="m3 16.5 9 5 9-5" />
    </svg>
  );
}

export function Smartphone({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <rect x="6" y="2.5" width="12" height="19" rx="3" />
      <path d="M10.5 18.5h3" />
    </svg>
  );
}

export function Cpu({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <rect x="4.5" y="4.5" width="15" height="15" rx="2.5" />
      <rect x="9" y="9" width="6" height="6" rx="1" />
      <path d="M9 2v2.5M15 2v2.5M9 19.5V22M15 19.5V22M2 9h2.5M2 15h2.5M19.5 9H22M19.5 15H22" />
    </svg>
  );
}

export function Chat({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M20.5 11.5a8.5 8.5 0 0 1-8.5 8.5H4l1.7-4A8.5 8.5 0 1 1 20.5 11.5Z" />
      <path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01" />
    </svg>
  );
}

export function Star({ className = "h-3.5 w-3.5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="m12 2.8 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.4l6.2-.9L12 2.8Z" />
    </svg>
  );
}

export function Verified({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="m12 2.8 2.4 1.7 2.9-.2 1 2.8 2.4 1.7-1 2.8 1 2.8-2.4 1.7-1 2.8-2.9-.2L12 21.2l-2.4-1.7-2.9.2-1-2.8L3.3 15l1-2.8-1-2.8 2.4-1.7 1-2.8 2.9.2L12 2.8Z" />
      <path d="m8.8 12.2 2.2 2.2 4.2-4.4" />
    </svg>
  );
}

export function Terminal({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <rect x="3" y="4" width="18" height="16" rx="3" />
      <path d="m7.5 9.5 3 2.5-3 2.5M13 15h4" />
    </svg>
  );
}

export function Mail({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function Send({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M21 3 10.5 13.5M21 3l-6.5 18-4-7.5L3 9.5 21 3Z" />
    </svg>
  );
}

export function GithubIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 5.02 3.26 9.28 7.79 10.78.57.1.78-.25.78-.55 0-.27-.01-1-.02-1.96-3.17.69-3.84-1.53-3.84-1.53-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.53-.29-5.19-1.27-5.19-5.63 0-1.24.44-2.26 1.17-3.06-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.14 1.17a10.9 10.9 0 0 1 2.86-.39c.97 0 1.94.13 2.86.39 2.18-1.48 3.14-1.17 3.14-1.17.62 1.58.23 2.75.11 3.04.73.8 1.17 1.82 1.17 3.06 0 4.37-2.67 5.34-5.21 5.62.41.36.77 1.06.77 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.2.66.79.55A11.03 11.03 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5Z" />
    </svg>
  );
}

export function LinkedinIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

export function MenuIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={className} aria-hidden>
      <path d="M4 7h16M4 12h16M4 17h10" />
    </svg>
  );
}

export function CloseIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={className} aria-hidden>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export function MapPin({ className = "h-3.5 w-3.5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M20 10c0 5.5-8 11-8 11s-8-5.5-8-11a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export function GraduationCap({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="m2.5 8.5 9.5-4.5 9.5 4.5-9.5 4.5-9.5-4.5Z" />
      <path d="M6.5 10.8V16c0 1.5 2.5 3 5.5 3s5.5-1.5 5.5-3v-5.2" />
      <path d="M21.5 9v5" />
    </svg>
  );
}

export function Briefcase({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <rect x="3" y="7" width="18" height="13" rx="2.5" />
      <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7M3 12h18" />
    </svg>
  );
}

export function Folder({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M3 7.5A2.5 2.5 0 0 1 5.5 5h3.2l2 2.5h7.8A2.5 2.5 0 0 1 21 10v7a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17V7.5Z" />
    </svg>
  );
}
