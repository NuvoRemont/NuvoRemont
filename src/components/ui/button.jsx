export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 px-4 rounded-2xl shadow ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}