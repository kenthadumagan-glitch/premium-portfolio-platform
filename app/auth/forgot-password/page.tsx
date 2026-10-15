import { AuthShell } from "@/components/auth/auth-shell";
import { AuthForm } from "@/components/contact-form";

export default function ForgotPasswordPage() {
  return (
    <AuthShell title="Reset password" subtitle="We will send a reset link to your email address.">
      <AuthForm mode="forgot" />
    </AuthShell>
  );
}
