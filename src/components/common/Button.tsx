interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

export default function Button({ text, onClick, variant = "primary" }: ButtonProps) {
  const base = "px-6 py-2 rounded-full font-medium transition-all duration-200";
  const styles =
    variant === "primary"
      ? "bg-orange-500 text-white hover:bg-orange-600"
      : "border border-gray-400 text-gray-700 hover:bg-gray-100";

  return (
    <button onClick={onClick} className={`${base} ${styles}`}>
      {text}
    </button>
  );
}
