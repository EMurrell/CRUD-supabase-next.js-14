import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-full h-full max-w-md p-8 m-2 rounded-lg shadow-lg shadow-black/70 bg-white/10 backdrop-blur-md">
        <h1 className="mb-4 text-3xl font-semibold text-white">
          CRUD with Next.js and Supabase
        </h1>
        <p className="mb-6 text-white">Please select a sign in method:</p>
        <AuthForm />
      </div>
    </div>
  );
}
