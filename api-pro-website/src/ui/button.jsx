export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
