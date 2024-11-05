"use client";
import { usePathname } from 'next/navigation';
import Footer from './Footer';
import BlogFooter from './BlogFooter';

export default function FooterSwitcher() {
    const pathname = usePathname();
    const isBlogRoute = pathname.startsWith('/blog');

    return isBlogRoute ? <BlogFooter /> : <Footer />;
}