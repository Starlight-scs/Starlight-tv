 "use client"// Ensures this is a Client Component

import Image from "next/image";
import Logo from "../../public/starlight_logo.png";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Bell, Search } from "lucide-react";
import UserNav from "./UserNav";


interface LinkProps {
  name: string;
  href: string;
}

const links: LinkProps[] = [
  { name: "Home", href: "/home" },
  { name: "Tv Shows", href: "/home/shows" },
  { name: "Shorts", href: "/home/movies" },
  { name: "Mini Docs", href:"/home/minidoc" }, 
  { name: "Recently Added", href: "/home/recently" },
  { name: "My List", href: "/home/user/list" },
];

export default function Navbar() {
  const pathname = usePathname(); // Get current page path

  return (
    <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-6 lg:px-8">
      {/* Left Section - Logo and Navigation */}
      <div className="flex items-center">
        {/* Logo */}
        <Link href="/home" className="flex items-center">
  <Image
    src={Logo}
    alt="Starlight Logo"
    width={170} // ✅ Set explicit width
    height={120} // ✅ Set explicit height
    className="object-contain" // ✅ Ensures proper aspect ratio
    priority // ✅ Loads faster
  />
</Link>


        {/* Navigation Links */}
        <ul className="lg:flex gap-x-4 ml-14 hidden">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm ${
                  pathname === link.href
                    ? "text-white font-semibold underline"
                    : "text-gray-300 font-normal"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section - Search, Notifications, and UserNav */}
      <div className="flex items-center gap-x-8">
        <Search className="w-5 h-5 text-gray-300 cursor-pointer" />
        <Bell className="h-5 w-5 text-gray-300 cursor-pointer" />
        <UserNav />
      </div>
    </div>
  );
}
