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
      providers={[]}
      redirectTo="https://crud-supabase-nextjs14.vercel.app/auth/callback"
      appearance={{
        theme: ThemeSupa,
        button: {
          className: "bg-blue-600 text-white hover:bg-blue-700",
        },
        input: {
          className: "bg-gray-700 border-gray-600 text-white",
        },
      }}
    />
  );
}
