"use client"
import { useEffect } from 'react';

const SideNavigation = ({ sections, offset = 90, onClose, containerStyle, childStyle }) => {
  useEffect(() => {
    const handleScrollOffset = (event) => {
      const targetId = event.target.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const yOffset = -offset;
        const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: 'smooth' });
        event.preventDefault();

        if (onClose) onClose();
      }
    };
    // Attach event listeners to anchor links within this component
    const links = document.querySelectorAll('.side-nav a');
    links.forEach((link) => link.addEventListener('click', handleScrollOffset));

    // Cleanup event listeners on component unmount
    return () => {
      links.forEach((link) => link.removeEventListener('click', handleScrollOffset));
    };
  }, [offset, onClose]);

  return (
    <div className="sidebar-menu w-100 z-9999 mb-3 shadow-none">
      <ul className={`list-group list-group-flush w-100 ${containerStyle}`}>
        {sections.map((section) => (
          <li key={section.id} className={`list-group-item`}>
            <a className={` w-100 ${childStyle}`} href={`#${section.id}`}> <span className='color-tertary me-1'>{section.icon}</span> {section.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNavigation;
