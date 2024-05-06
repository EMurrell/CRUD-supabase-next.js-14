export default function Button() {
  return (
    <button
      type={type}
      className="px-4 py-2 mt-4 transition duration-200 ease-in-out bg-sky-100 rounded-xl hover:shadow-md hover:shadow-black/95 hover:bg-sky-200 text-sky-700 hover:text-sky-950 sm:mt-0">
      {text}
    </button>
  );
}
