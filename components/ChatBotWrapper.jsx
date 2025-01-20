'use client';

import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';

const ChatBot = dynamic(() => import('@/components/ChatBot'), { ssr: false });

export default function ChatBotWrapper() {
    const pathname = usePathname();

    // array of paths to exclude
    const excludedPaths = [
        '/2days-jaipur-tour-package',
        '/2days-jaisalmer-tour-package',
        '/5days-golden-triangle-tour',
        '/3days-jaipur-ajmer-pushkar-tour',
        '/3days-jaisalmer-desert-safari-tour',
        '/4days-jaipur-udaipur-tour',
        '/10days-rajasthan-vacation-tour',
        '/8days-rajasthan-budget-tour',
    ];

    // current path is in the excluded paths
    if (excludedPaths.includes(pathname)) {
        return null;
    }

    return <ChatBot />;
}
