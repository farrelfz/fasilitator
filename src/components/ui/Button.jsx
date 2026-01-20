import Link from "next/link";
import clsx from "clsx";

export default function Button({ href, children, variant = "primary", className, ...props }) {
  const styles =
    variant === "outline"
      ? "btn-outline"
      : variant === "ghost"
      ? "text-skbm-blue hover:text-skbm-green"
      : "btn-primary";

  if (href) {
    return (
      <Link href={href} className={clsx(styles, className)} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={clsx(styles, className)} {...props}>
      {children}
    </button>
  );
}
