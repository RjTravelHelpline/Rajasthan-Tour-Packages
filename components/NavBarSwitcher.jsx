"use client";
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import BlogNavbar from './BlogNavbar';

export default function NavbarSwitcher() {
    const pathname = usePathname();
    const isBlogRoute = pathname.startsWith('/blog');

    return isBlogRoute ? <BlogNavbar /> : <Navbar />;
}