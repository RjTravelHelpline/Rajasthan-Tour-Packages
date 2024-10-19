import { allCitiesImages, allStatesImages } from './imageData';

// * consting the assets
const rajasthanImg = '/Images/Card/jalmahal.webp';
const hyderabadImg = '/Images/Card/hyderabad.webp';
const indianStreetFood = '/Images/Card/indian-streetfood.webp';
const kolkataStreetFood = '/Images/Card/kolkata-streetfood.webp';
const chennaiStreetFood = '/Images/Card/chennai-streetfood.webp';
const delhiStreetFood = '/Images/Card/delhi-streetfood.webp';
const bangaloreStreetFood = '/Images/Card/bangalore-streetfood.webp';

// * Blog data
export const blogs = [
  {
    author: 'John Doe',
    image: allCitiesImages.jaipur.jaipurAmber02.src,
    date: '2024-08-22',
    heading: 'Discover the Hidden Gems of Rajasthan',
    title: 'Hidden Gems of Rajasthan',
    description:
      'Explore the lesser-known attractions in Rajasthan that are off the beaten path. This blog reveals secret spots and hidden gems that offer a unique experience away from the usual tourist trails.',
    category: 'Tour & Travels',
  },
  {
    author: 'Jane Smith',
    image: allCitiesImages.jaipur.jaipurCulinary.src,
    date: '2024-08-15',
    heading: 'The Ultimate Guide to Indian Street Food',
    title: 'Guide to Indian Street Food',
    description:
      'Dive into the vibrant world of Indian street food. From spicy chaats to sweet delicacies, this guide covers the best street food experiences across various cities in India.',
    category: 'Food',
  },
  {
    author: 'Amit Kumar',
    image: allStatesImages.hyderabad.hyderabad01.src,
    date: '2024-08-10',
    heading: 'Top 10 Historical Monuments in India',
    title: 'Top Historical Monuments in India',
    description:
      "A comprehensive list of India's top 10 historical monuments that every traveler should visit. Learn about their history, architecture, and significance.",
    category: 'History & Culture',
  },
  {
    author: 'Riya Patel',
    image: allStatesImages.kerala.kerala01.src,
    date: '2024-08-05',
    heading: 'Planning Your Perfect Beach Vacation in Kerala',
    title: 'Beach Vacation in Kerala',
    description:
      'Kerala is renowned for its beautiful beaches. This blog offers tips on planning a beach vacation in Kerala, including the best beaches to visit and activities to enjoy.',
    category: 'Tour & Travels',
  },
  {
    author: 'Rajesh Sharma',
    image: allCitiesImages.jaipur.jaipurJhalanaLeopard,
    date: '2024-07-30',
    heading: 'Exploring the Wildlife Sanctuaries of India',
    title: 'Wildlife Sanctuaries of India',
    description:
      'India is home to numerous wildlife sanctuaries. Discover the top sanctuaries to visit, the wildlife you can spot, and tips for making the most of your wildlife adventure.',
    category: 'Wildlife',
  },
  {
    author: 'Rajesh Sharma',
    image: allCitiesImages.jaipur.jaipurJhalanaLeopard.src,
    date: '2024-08-23',
    heading: 'Exploring the Advanced Wildlife Sanctuaries of India',
    title: 'Advanced Wildlife Sanctuaries',
    description:
      'India is home to numerous wildlife sanctuaries. Discover the top sanctuaries to visit, the wildlife you can spot, and tips for making the most of your wildlife adventure.',
    category: 'Wildlife',
  },
  {
    author: 'Emily Johnson',
    image: indianStreetFood,
    date: '2024-08-20',
    heading: 'Must-Try Street Foods in Mumbai',
    title: 'Street Foods of Mumbai',
    description:
      "Mumbai's street food scene is legendary. Explore the must-try dishes, from spicy pav bhaji to crispy vada pav, and discover why Mumbai is a food lover's paradise.",
    category: 'Food',
  },
  {
    author: 'Carlos Hernandez',
    image: delhiStreetFood,
    date: '2024-08-18',
    heading: 'Exploring Authentic Street Food in Delhi',
    title: 'Authentic Street Food in Delhi',
    description:
      "Delhi's street food offers a rich tapestry of flavors and textures. This blog covers the best spots to enjoy classic dishes like chole bhature and paranthas.",
    category: 'Food',
  },
  {
    author: 'Priya Singh',
    image: kolkataStreetFood,
    date: '2024-08-12',
    heading: "A Culinary Tour of Kolkata's Street Food",
    title: 'Kolkata Street Food Tour',
    description:
      "Kolkata's street food is a celebration of unique flavors. Discover the delights of puchka, kathi rolls, and other beloved street eats in this vibrant city.",
    category: 'Food',
  },
  {
    author: 'Sophie Lee',
    image: chennaiStreetFood,
    date: '2024-08-08',
    heading: 'Savory and Sweet Street Foods of Chennai',
    title: 'Chennai Street Food Highlights',
    description:
      "Chennai offers a blend of savory and sweet street foods that are sure to satisfy. From spicy idlis to sweet jaggery treats, explore the best of Chennai's street food culture.",
    category: 'Food',
  },
  {
    author: 'Ravi Patel',
    image: bangaloreStreetFood,
    date: '2024-08-02',
    heading: 'Exploring the Best Street Food in Bangalore',
    title: 'Bangalore Street Food Guide',
    description:
      "Bangalore's street food scene is diverse and delicious. This blog highlights the top spots for enjoying street snacks like dosas, vadas, and much more.",
    category: 'Food',
  },
  {
    author: 'Nisha Rao',
    image: rajasthanImg,
    date: '2024-08-25',
    heading: 'Festivals of Rajasthan You Must Experience',
    title: 'Rajasthan Festivals',
    description:
      'Rajasthan is known for its colorful festivals. This blog covers the major festivals of Rajasthan, including unique traditions and cultural celebrations.',
    category: 'Fair & Festivals',
  },
  {
    author: 'Arjun Mehta',
    image: hyderabadImg,
    date: '2024-08-30',
    heading: 'Latest News in Indian Tourism',
    title: 'Indian Tourism Updates',
    description:
      'Stay updated with the latest news and developments in Indian tourism. This blog provides insights into new destinations, travel trends, and industry news.',
    category: 'News & Updates',
  },
];

//* functional assets
export const getLatestBlogs = (blogs, count = 5) => {
  return blogs
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, count)
    .map((blog) => ({
      ...blog,
      shortTitle: blog.heading.split(' ').slice(0, 5).join(' '),
    }));
};

//* Function to get popular blogs
export const getPopularBlogs = (blogs, count = 5) => {
  return blogs.slice(0, count);
};

//* Function to get blogs by category
export const getBlogsByCategory = (blogs, category) => {
  return blogs.filter(
    (blog) => blog.category.toLowerCase() === category.toLowerCase()
  );
};

// * Tour & Travels
// * Food
// * Wildlife
// * History & Culture
// * Fair & Festivals
// * News & Updates
