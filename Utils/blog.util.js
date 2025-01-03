// blog categories
export const blogCategories = [
  {
    path: '/food',
    text: 'food',
  },
  {
    path: '/wildlife',
    text: 'wildlife',
  },
  {
    path: '/tour-and-travels',
    text: 'tour & travels',
  },
  {
    path: '/history-and-culture',
    text: 'history & culture',
  },
  {
    path: '/news-and-updates',
    text: 'News & Updates',
  },
  {
    path: '/fair-and-festivals',
    text: 'Fair & Festivals',
  },
];
export const blogArchives = [
  {
    path: '/november-2024',
    text: 'november 2024',
  },
  {
    path: '/december-2024',
    text: 'december 2024',
  },
  {
    path: '/january-2025',
    text: 'january 2025',
  },
];
//* To get blogs by category
export const getBlogsByCategory = (blogs, category) => {
  return blogs.filter(
    (blog) => blog.category.toLowerCase() === category.toLowerCase()
  );
};

//* Function to get blogs by archives
export const filterBlogsByMonth = (blogs, month, year) => {
  return blogs.filter((blog) => {
    const blogDate = new Date(blog.date);
    return blogDate.getMonth() + 1 === month && blogDate.getFullYear() === year;
  });
};

export const dateIso = (date) => {
  const formattedDate = new Date(date).toLocaleString('en-GB', {
    timeZone: 'Asia/Kolkata', // Set the desired timezone
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  const dateTimeParts = formattedDate.split(', ');
  const datePart = dateTimeParts[0].split('/').reverse().join('-');
  const timePart = dateTimeParts[1].split(':').join(':');

  return `${datePart}T${timePart}+05:30`; // Adjust to the required timezone offset
};
