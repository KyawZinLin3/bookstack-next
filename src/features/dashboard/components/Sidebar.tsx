import Link from "next/link";

const menu = [
  { href: "/dashboard", label: "Overview" },
  { href: "/dashboard/reports", label: "Reports" },
  { href: "/dashboard/settings", label: "Settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen p-6 space-y-6">
      <h1 className="text-2xl font-bold">Bookstack</h1>
      <nav className="space-y-2">
        {menu.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block px-3 py-2 rounded-lg hover:bg-gray-800"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
