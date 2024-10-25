import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop2 = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const handleLinkClick = (event) => {
      if (
        event.target.tagName === 'A' ||
        event.target.closest('a') ||
        event.target.tagName === 'LINK' ||
        event.target.closest('link')
      ) {
        window.scrollTo(0, 0);
      }
    };

    document.body.addEventListener('click', handleLinkClick);

    return () => {
      document.body.removeEventListener('click', handleLinkClick);
    };
  }, [pathname]);

  return null; // No need to render anything
};

