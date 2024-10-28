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
const generateSlug = (heading) =>
  heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
export const blogs = [
  {
    author: 'John Doe',
    image: allCitiesImages.jaipur.jaipurAmber02.src,
    date: '2024-08-22',
    heading: 'Discover the Hidden Gems of Rajasthan',
    slug: generateSlug('Discover the Hidden Gems of Rajasthan'),
    description:
      'Explore the lesser-known attractions in Rajasthan that are off the beaten path. This blog reveals secret spots and hidden gems that offer a unique experience away from the usual tourist trails.',
    category: 'Tour & Travels',
    more: `Rajasthan is renowned for its rich heritage, stunning palaces, and vibrant culture, 
          but there’s more to this desert state than meets the eye. Beyond the well-trodden tourist 
          spots like Jaipur, Udaipur, and Jodhpur, Rajasthan has countless hidden gems waiting to 
          be discovered. Whether it's a quiet, lesser-known village with ancient temples, 
          a secluded fort with stunning architecture, or a unique natural formation tucked away 
          from bustling cities, Rajasthan offers many surprises. In this post, we take you through 
          some of these hidden treasures where you can soak in the real charm of Rajasthan, far from 
          the crowds. Explore lesser-known spots like the Bundi step wells, the remote Kumbhalgarh Fort, 
          and the mysterious ruins of Bhangarh. Experience the tranquil beauty of these places, 
          learn about their fascinating histories, and make unforgettable memories in Rajasthan's 
          most secluded and serene settings.`,
  },
  {
    author: 'Jane Smith',
    image: allCitiesImages.jaipur.jaipurCulinary.src,
    date: '2024-08-15',
    heading: 'The Ultimate Guide to Indian Street Food',
    slug: generateSlug('The Ultimate Guide to Indian Street Food'),
    description:
      'Dive into the vibrant world of Indian street food. From spicy chaats to sweet delicacies, this guide covers the best street food experiences across various cities in India.',
    category: 'Food',
    more: `India is known for its rich culinary diversity, and its street food culture is one 
          of the most exciting aspects of exploring this land of flavors. Each region of India offers 
          unique tastes and dishes that reflect the culture and history of the area. Whether you’re 
          trying spicy chaats in Delhi, buttery pav bhaji in Mumbai, or tangy puchkas in Kolkata, 
          every city has something delicious to offer. In this guide, we delve deep into India’s 
          street food, providing a curated list of must-try dishes, popular vendors, and tips 
          for enjoying street food safely. This guide also highlights street food’s cultural importance 
          and how it shapes the culinary landscape of India. Perfect for food lovers, this blog will 
          inspire your next gastronomic adventure through the bustling food streets of India.`,
  },
  {
    author: 'Amit Kumar',
    image: allStatesImages.hyderabad.hyderabad01.src,
    date: '2024-08-10',
    heading: 'Top 10 Historical Monuments in India',
    slug: generateSlug('Top 10 Historical Monuments in India'),
    description:
      "A comprehensive list of India's top 10 historical monuments that every traveler should visit. Learn about their history, architecture, and significance.",
    category: 'History & Culture',
    more: `India’s historical monuments are more than just tourist attractions; they are 
          standing reminders of the country’s vibrant past and architectural prowess. From the majestic 
          Taj Mahal in Agra to the intricate carvings of the Sun Temple in Konark, each monument offers 
          a glimpse into the artistry and culture of ancient India. In this blog post, we highlight 
          the top 10 historical monuments every history enthusiast should visit. Discover the awe-inspiring 
          forts, palaces, and temples, each with unique stories that reflect India’s rich heritage. 
          We provide detailed information about the historical significance, architectural styles, 
          and cultural importance of each monument, making this a must-read for anyone planning to 
          explore India’s historical marvels.`,
  },
  {
    author: 'Riya Patel',
    image: allStatesImages.kerala.kerala01.src,
    date: '2024-08-05',
    heading: 'Planning Your Perfect Beach Vacation in Kerala',
    slug: generateSlug('Planning Your Perfect Beach Vacation in Kerala'),
    description:
      'Kerala is renowned for its beautiful beaches. This blog offers tips on planning a beach vacation in Kerala, including the best beaches to visit and activities to enjoy.',
    category: 'Tour & Travels',
    more: `Kerala, with its serene backwaters and stunning beaches, is a paradise for beach 
          lovers. From the lively shores of Kovalam to the tranquil sands of Varkala, Kerala offers 
          a variety of beach experiences. In this blog, we help you plan the perfect beach vacation 
          in Kerala, covering everything from the best times to visit to essential packing tips. 
          Learn about the unique beach activities available, such as exploring local seafood delicacies, 
          engaging in water sports, and enjoying Ayurvedic spa treatments by the shore. Whether you 
          want a peaceful escape or an action-packed trip, Kerala’s beaches cater to every kind of 
          traveler.`,
  },
  {
    author: 'Rajesh Sharma',
    image: allCitiesImages.jaipur.jaipurJhalanaLeopard.src,
    date: '2024-07-30',
    heading: 'Exploring the Wildlife Sanctuaries of India',
    slug: generateSlug('Exploring the Wildlife Sanctuaries of India'),
    description:
      'India is home to numerous wildlife sanctuaries. Discover the top sanctuaries to visit, the wildlife you can spot, and tips for making the most of your wildlife adventure.',
    category: 'Wildlife',
    more: `India’s wildlife sanctuaries offer some of the most thrilling experiences for 
          nature and wildlife enthusiasts. With its diverse flora and fauna, India is home to 
          several well-known wildlife sanctuaries and national parks. From spotting the majestic 
          Bengal tiger in Ranthambhore to watching the one-horned rhinoceros in Kaziranga, each 
          sanctuary provides unique opportunities for wildlife sightings. In this blog, we explore 
          the best wildlife sanctuaries in India, provide information on their prominent species, 
          and share tips for planning a successful wildlife adventure. Whether you’re an avid 
          photographer, a family looking for an adventure, or a solo traveler, these sanctuaries 
          offer unforgettable experiences.`,
  },
];

//* functional assets
export const getLatestBlogs = (blogs, count = 5) => {
  return blogs
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, count);
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
