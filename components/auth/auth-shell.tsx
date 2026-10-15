"use client";

import Link from "next/link";
import { ReactNode } from "react";

export function AuthShell({ title, subtitle, children }: { title: string; subtitle: string; children: ReactNode }) {
  return (
    <main className="auth-page">
      <div className="auth-shell">
        <div className="auth-backdrop" />
        <div className="auth-figure" aria-hidden="true">
          <div className="lamp-shade" />
          <div className="lamp-bulb" />
          <div className="lamp-stand" />
          <div className="lamp-base" />
          <div className="lamp-pull" />
        </div>

        <div className="auth-panel">
          <Link href="/" className="brand" style={{ marginBottom: 20 }}>
            <span className="brand-mark" />
            <span>Aster Quinn</span>
          </Link>

          <h1 className="auth-title">{title}</h1>
          <p className="auth-subtitle">{subtitle}</p>
          {children}
        </div>
      </div>
    </main>
  );
}
