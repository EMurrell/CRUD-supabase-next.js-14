import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-full h-full max-w-md px-4 py-8 m-2 shadow-lg rounded-xl sm:p-8 shadow-black/70 bg-white/10 backdrop-blur-md">
        <h1 className="text-3xl font-semibold text-white">
          CRUD with Next.js and Supabase
        </h1>
        <p className="mt-4 text-white">Please select a sign in method:</p>
        <AuthForm />
      </div>
      <a
        href="/tos"
        className="mt-6 transition duration-200 ease-in-out text-zinc-400 hover:text-white">
        View Terms Of Service & Privacy Policy
      </a>
    </div>
  );
}
