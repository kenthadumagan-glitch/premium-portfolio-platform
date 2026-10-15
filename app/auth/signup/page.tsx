import { AuthShell } from "@/components/auth/auth-shell";
import { AuthForm } from "@/components/contact-form";

export default function SignUpPage() {
  return (
    <AuthShell title="Create your account" subtitle="Unlock your portfolio, storage, and private workspaces.">
      <AuthForm mode="signup" />
    </AuthShell>
  );
}
