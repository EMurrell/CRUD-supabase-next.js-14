"use client";
import { Auth } from "@supabase/auth-ui-react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { ThemeSupa } from "@supabase/auth-ui-shared";

export default function AuthForm() {
  const supabase = createClientComponentClient();
  return (
    <Auth
      supabaseClient={supabase}
      onlyThirdPartyProviders={true}
      showLinks={true}
      providers={["google", "github", "twitter"]}
      redirectTo="https://crud-supabase-nextjs14.vercel.app/auth/callback"
      // redirectTo="http://localhost:3000/auth/callback"

      appearance={{
        style: {
          button: {
            background: "#18181b",
            color: "#f4f4f5",
            borderRadius: "16px",
            padding: "12px 16px",
            margin: "3px 0",
            border: "none",
          },
          anchor: { color: "#a1a1aa" },
          label: { color: "#f4f4f5" },
          input: {
            background: "#18181b",
            borderRadius: "16px",
            padding: "12px 16px",
            margin: "3px 0",
            border: "none",
            color: "#f4f4f5",
          },
        },
      }}
    />
  );
}
