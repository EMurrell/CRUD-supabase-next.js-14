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
        className="flex mt-6 transition duration-200 ease-in-out text-zinc-400 hover:text-white">
        View Terms Of Service & Privacy Policy
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 mt-0.5 ml-2">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
          />
        </svg>
      </a>
    </div>
  );
}
