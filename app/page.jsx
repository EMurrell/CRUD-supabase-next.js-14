import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-700">
      <div className="w-full h-full max-w-md px-6 py-8 m-2 rounded-lg bg-zinc-900 ">
        <h1 className="mb-4 text-3xl font-semibold text-white">
          Welcome to my CRUD app
        </h1>
        <p className="mb-6 text-white">Sign in to get CRUD'n</p>
        <div className="m-2">
          <AuthForm />
        </div>
      </div>
    </div>
  );
}
