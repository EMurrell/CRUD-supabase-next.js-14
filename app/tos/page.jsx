export default function TermsOfService() {
  const terms = [
    {
      headline: "Acceptance of Terms",
      term: "By accessing and using this application, you accept and agree to be bound by the terms and provision of this agreement.",
    },
    {
      headline: "User Responsibilities",
      term: "Users are responsible for maintaining the confidentiality of their login information and for all activities that occur under their account.",
    },
    {
      headline: "Information We Collect",
      term: "We collect standard login information (email address, social media account details) for the purpose of providing login functionality.",
    },
    {
      headline: "How We Use Your Information",
      term: "We do not use your information for any purpose other than to facilitate your use of the application.",
    },
    {
      headline: "Information Security",
      term: "We implement a variety of security measures to maintain the safety of your personal information.",
    },
    {
      headline: "Changes to This Policy",
      term: "We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes.",
    },
    {
      headline: "Limitation of Liability",
      term: "In no event shall the Developer, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center w-full min-h-screen p-4 lg:p-12">
      <div className="max-w-2xl px-4 py-8 mx-auto shadow-lg rounded-xl sm:p-8 shadow-black/70 bg-white/10 backdrop-blur-md">
        <h1 className="text-2xl text-center">
          Terms of Service & Privacy Policy
        </h1>
        {terms.map((item, index) => (
          <div key={index} className="my-6">
            <span className="text-lg ">{item.headline}</span>
            <p className="mt-2 text-sm ">{item.term}</p>
          </div>
        ))}
      </div>
      <a
        href="/"
        className="flex mt-6 transition duration-200 ease-in-out text-zinc-400 hover:text-white">
        Back to Login Screen
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
    </section>
  );
}
