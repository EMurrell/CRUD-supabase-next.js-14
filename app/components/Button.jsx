import clsx from "clsx";

export default function Button({ type, text, style, onClick }) {
  const buttonClasses = clsx(
    "px-4 py-2 mt-4 transition duration-200 ease-in-out rounded-xl",
    {
      "bg-sky-100 text-sky-700 hover:bg-sky-200 hover:text-sky-950":
        style === "primary",
      "bg-zinc-200 text-zinc-700 hover:bg-zinc-300 hover:text-zinc-800":
        style === "secondary",
      "bg-red-200 text-red-700 hover:bg-red-300 hover:text-red-800":
        style === "delete",
    }
  );

  return (
    <button type={type} className={buttonClasses} onClick={onClick}>
      {text}
    </button>
  );
}
