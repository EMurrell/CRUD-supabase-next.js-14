"use client";
import { Auth } from "@supabase/auth-ui-react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import {
  // Import predefined theme
  ThemeSupa,
} from "@supabase/auth-ui-shared";

export default function AuthForm() {
  const supabase = createClientComponentClient();
  return (
    <Auth
      supabaseClient={supabase}
      view="magic_link"
      showLinks={false}
      providers={["google", "facebook", "twitter"]}
      redirectTo="https://crud-supabase-nextjs14.vercel.app/auth/callback"
      // appearance={{
      //   theme: ThemeSupa,
      //   variables: {
      //     default: {
      //       colors: {
      //         brand: "red",
      //         brandAccent: "darkred",
      //       },
      //     },
      //   },
      // }}
      appearance={{
        style: {
          button: {
            background: "#3f3f46",
            color: "white",
            borderRadius: "12px",
            padding: "8px 16px",
            border: "none",
          },
          anchor: { color: "blue" },
          input: {
            background: "#3f3f46",
            borderRadius: "12px",
            padding: "8px 16px", // Add padding to the button
            border: "none", // Remove border
          },
        },
      }}
    />
  );
}
