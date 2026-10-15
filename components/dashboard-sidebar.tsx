"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/dashboard/files", label: "My Files" },
  { href: "/dashboard/notes", label: "My Notes" },
  { href: "/dashboard/messages", label: "Messages" },
  { href: "/dashboard/profile", label: "Profile" },
  { href: "/dashboard/settings", label: "Settings" }
];

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="dashboard-sidebar">
      <div className="dashboard-brand">
        <span className="brand-mark" />
        <strong>Aster Panel</strong>
      </div>

      <nav className="sidebar-nav" aria-label="Dashboard navigation">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className={pathname === item.href ? "sidebar-link active" : "sidebar-link"}>
            {item.label}
          </Link>
        ))}

        <Link href="/" className="sidebar-link">Back to portfolio</Link>
      </nav>
    </aside>
  );
}
