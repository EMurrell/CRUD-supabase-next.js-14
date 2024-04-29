"use client";
import { Auth } from "@supabase/auth-ui-react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { ThemeSupa } from "@supabase/auth-ui-shared";

export default function AuthForm() {
  const supabase = createClientComponentClient();
  return (
    <Auth
      supabaseClient={supabase}
      view="magic_link"
      showLinks={true}
      providers={["google", "facebook", "twitter"]}
      redirectTo="https://crud-supabase-nextjs14.vercel.app/auth/callback"
      appearance={{
        style: {
          button: {
            background: "#3f3f46",
            color: "white",
            borderRadius: "12px",
            padding: "12px 16px",
            margin: "6px 0",
            border: "none",
          },
          anchor: { color: "blue" },
          input: {
            background: "#3f3f46",
            borderRadius: "12px",
            padding: "12px 16px",
            margin: "6px 0",
            border: "none",
          },
        },
      }}
    />
  );
}
