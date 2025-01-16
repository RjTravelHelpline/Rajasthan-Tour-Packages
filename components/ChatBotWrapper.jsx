'use client';

import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';

const ChatBot = dynamic(() => import('@/components/ChatBot'), { ssr: false });

export default function ChatBotWrapper() {
    const pathname = usePathname();

    // Define an array of paths to exclude
    const excludedPaths = [
        '/2days-jaipur-tour-package',
        '/5days-golden-triangle-tour',
        '/3days-jaipur-ajmer-pushkar-tour',
    ];

    // Check if the current path is in the excluded paths
    if (excludedPaths.includes(pathname)) {
        return null;
    }

    return <ChatBot />;
}
