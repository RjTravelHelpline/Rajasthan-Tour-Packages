//* Function to get blogs by archives
export const filterBlogsByMonth = (blogs, month, year) => {
  return blogs.filter((blog) => {
    const blogDate = new Date(blog.date);
    return blogDate.getMonth() + 1 === month && blogDate.getFullYear() === year;
  });
};

// Get Items by latest date

export const getLatestItems = (items) => {
  return items.sort((a, b) => {
    const aDate = new Date(a.date);
    const bDate = new Date(b.date);
    return bDate - aDate;
  });
};

// get link any text
export const Link = (text, url) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="anchor text-web fw-bold"
    >
      {text}
    </a>
  );
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  });
};

