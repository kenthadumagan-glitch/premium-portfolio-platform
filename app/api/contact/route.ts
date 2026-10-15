import { NextResponse } from "next/server";
import { z } from "zod";
import { supabaseAdmin } from "@/lib/supabase";

const contactSchema = z.object({
  name: z.string().min(2, "Your name is required."),
  email: z.string().email("Please enter a valid email."),
  subject: z.string().min(3, "Subject is required."),
  message: z.string().min(10, "Message must be at least 10 characters.")
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      const firstError = Object.values(fieldErrors)[0]?.[0] || "Please check your input and try again.";
      return NextResponse.json({ error: firstError }, { status: 400 });
    }

    const { data, error } = await supabaseAdmin.from("messages").insert([{ ...parsed.data, received_at: new Date().toISOString() }]);

    if (error) {
      console.error(error);
      return NextResponse.json({ error: "Could not save your message right now." }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
