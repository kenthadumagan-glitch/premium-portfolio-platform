import Link from "next/link";
import { AuthShell } from "@/components/auth/auth-shell";
import { AuthForm } from "@/components/contact-form";

export default function SignInPage() {
  return (
    <AuthShell title="Welcome back" subtitle="Access your private portfolio dashboard and workspace.">
      <AuthForm mode="signin" />
    </AuthShell>
  );
}
