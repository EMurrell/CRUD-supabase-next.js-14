import clsx from "clsx";

export default function Button({ type, text, style, onClick }) {
  const buttonClasses = clsx(
    "px-4 py-2 transition duration-300 ease-in-out rounded-xl capitalize font-medium hover:shadow-md hover:shadow-black/95",
    {
      "bg-sky-100 text-sky-800 hover:bg-sky-200 hover:text-sky-950":
        style === "primary",
      "bg-zinc-200 text-zinc-800 hover:bg-zinc-600 hover:text-white":
        style === "secondary",
      "bg-rose-100 text-rose-700 hover:bg-rose-600 hover:text-rose-50":
        style === "delete",
    }
  );

  return (
    <button type={type} className={buttonClasses} onClick={onClick}>
      {text}
    </button>
  );
}
