type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export default function Button({ children, variant = "primary", ...props }: Props) {
  const base =
    "px-4 py-2 rounded-lg font-medium focus:outline-none transition-colors";
  const styles =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : "bg-gray-200 text-gray-800 hover:bg-gray-300";

  return (
    <button className={`${base} ${styles}`} {...props}>
      {children}
    </button>
  );
}
