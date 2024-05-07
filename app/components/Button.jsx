import clsx from "clsx";

export default function Button({ type, text, style, onClick }) {
  const buttonClasses = clsx(
    "px-6 py-2 transition transform duration-300 ease-in-out rounded-xl capitalize font-semibold hover:shadow-md hover:shadow-black lg:text-lg motion-safe:hover:-translate-y-px motion-reduce:hover:transform-none opacity-90 hover:opacity-100 text-opacity-100",
    {
      "bg-sky-100 text-sky-800 ": style === "primary",
      "bg-zinc-200 text-zinc-800 ": style === "secondary",
      "bg-red-200 text-red-800 ": style === "delete",
    }
  );

  return (
    <button type={type} className={buttonClasses} onClick={onClick}>
      {text}
    </button>
  );
}
