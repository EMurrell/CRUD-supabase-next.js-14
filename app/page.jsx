import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md px-6 py-8 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="mb-4 text-3xl font-semibold text-white">
          Welcome to Watch List
        </h1>
        <p className="mb-6 text-white">Sign in for watch stuff</p>
        <div>
          <AuthForm />
        </div>
      </div>
    </div>
  );
}
