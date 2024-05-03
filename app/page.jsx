import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-full h-full max-w-md p-8 rounded-lg shadow-lg shadow-black/70 bg-white/10 backdrop-blur-md">
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
