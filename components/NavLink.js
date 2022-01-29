import Link from "next/link";

export default function NavLink({ children, to, label, IconComponent }) {
  return (
    <Link href={to}>
      <a className=" flex flex-row gap-4">
        {children}
        {IconComponent && (
          <i>
            <IconComponent className="text-3xl" />
          </i>
        )}
        {label || ""}
      </a>
    </Link>
  );
}
