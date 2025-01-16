'use client';

import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';

const ChatBot = dynamic(() => import('@/components/ChatBot'), { ssr: false });

export default function ChatBotWrapper() {
    const pathname = usePathname();

    // Add logic to exclude certain paths
    if (pathname === '/2days-jaipur-tour-package') {
        return null;
    }

    return <ChatBot />;
}
