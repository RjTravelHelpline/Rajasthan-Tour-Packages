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
  // Tour & Travels Category
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
              spots like Jaipur, Udaipur, and Jodhpur.`,
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
              lovers. From the lively shores of Kovalam to the tranquil sands of Varkala.`,
  },

  // Food Category
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
              of the most exciting aspects of exploring this land of flavors.`,
  },
  {
    author: 'Amit Kumar',
    image: allCitiesImages.jaipur.jaipurAmber02.src,
    date: '2024-07-25',
    heading: 'Savoring Rajasthani Cuisine: A Culinary Journey',
    slug: generateSlug('Savoring Rajasthani Cuisine: A Culinary Journey'),
    description:
      'Rajasthani cuisine is as colorful as its culture. Explore the flavors of this royal cuisine, from spicy curries to sweet delicacies like ghevar and malpua.',
    category: 'Food',
    more: `Rajasthan's cuisine is rich in flavors, with each dish telling a story of the 
              state’s royal past. Dishes like dal baati churma and ker sangri are must-try experiences.`,
  },

  // History & Culture Category
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
              standing reminders of the country’s vibrant past and architectural prowess.`,
  },
  {
    author: 'Priya Sen',
    image: allStatesImages.hyderabad.hyderabad01.src,
    date: '2024-07-18',
    heading: 'The Rich Cultural Heritage of South India',
    slug: generateSlug('The Rich Cultural Heritage of South India'),
    description:
      'South India offers a unique blend of tradition, architecture, and art. Discover the rich cultural tapestry woven through its temples, festivals, and cuisine.',
    category: 'History & Culture',
    more: `From the intricate temple architecture in Tamil Nadu to the traditional dance 
              forms of Kerala, South India has preserved its heritage in captivating ways.`,
  },

  // Fair & Festivals Category
  {
    author: 'Rajesh Sharma',
    image: allCitiesImages.jaipur.jaipurAmber02.src,
    date: '2024-07-11',
    heading: 'The Vibrant Festivals of Rajasthan',
    slug: generateSlug('The Vibrant Festivals of Rajasthan'),
    description:
      'Experience the colorful festivals of Rajasthan, from Diwali to the Pushkar Camel Fair. These celebrations bring alive the vibrant culture of the state.',
    category: 'Fair & Festivals',
    more: `Rajasthan’s festivals are grand spectacles of color and culture. Each festival, 
              whether it’s Diwali or Teej, showcases the unique traditions of this royal land.`,
  },
  {
    author: 'Neha Kapoor',
    image: allStatesImages.kerala.kerala01.src,
    date: '2024-06-20',
    heading: 'Onam: Kerala’s Harvest Festival',
    slug: generateSlug('Onam Kerala Harvest Festival'),
    description:
      'Onam, the harvest festival of Kerala, is a time of joy and celebration. This guide explains the history, customs, and cultural significance of this beloved festival.',
    category: 'Fair & Festivals',
    more: `Onam is more than just a harvest festival; it’s a celebration of Kerala’s cultural 
              heritage. From the grand feast of Onasadya to the intricate flower designs, Onam brings 
              families together.`,
  },

  // News & Updates Category
  {
    author: 'John Doe',
    image: allStatesImages.kerala.kerala01.src,
    date: '2024-08-22',
    heading: 'Recent Developments in Indian Tourism',
    slug: generateSlug('Recent Developments in Indian Tourism'),
    description:
      'Stay updated on the latest trends and developments in Indian tourism, from eco-tourism initiatives to new travel regulations across the country.',
    category: 'News & Updates',
    more: `With growing interest in sustainable travel, India is focusing on eco-tourism 
              and responsible travel initiatives. New regulations are also in place to ensure 
              safe and enjoyable experiences for tourists.`,
  },
  {
    author: 'Amit Kumar',
    image: allCitiesImages.jaipur.jaipurAmber02.src,
    date: '2024-08-12',
    heading: 'Tourism Industry’s Recovery Post-Pandemic',
    slug: generateSlug('Tourism Industry Recovery Post-Pandemic'),
    description:
      'An in-depth look at how the tourism industry is bouncing back after the pandemic. This article covers the challenges faced and the new trends shaping the future of travel.',
    category: 'News & Updates',
    more: `The tourism industry has shown resilience as it rebounds from the pandemic’s 
              impact. Innovations in health and safety protocols and a focus on local tourism have 
              helped revive travel across regions.`,
  },

  // Wildlife Category
  {
    author: 'Rajesh Sharma',
    image: allCitiesImages.jaipur.jaipurJhalanaLeopard.src,
    date: '2024-07-30',
    heading: 'Exploring the Wildlife Sanctuaries of India',
    slug: generateSlug('Exploring the Wildlife Sanctuaries of India'),
    description:
      'India is home to numerous wildlife sanctuaries. Discover the top sanctuaries to visit, the wildlife you can spot, and tips for making the most of your wildlife adventure.',
    category: 'Wildlife',
    more: `India’s wildlife sanctuaries offer thrilling experiences for nature and wildlife 
              enthusiasts. From spotting the Bengal tiger in Ranthambhore to watching the one-horned 
              rhinoceros in Kaziranga.`,
  },
  {
    author: 'Sandeep Verma',
    image: allStatesImages.kerala.kerala01.src,
    date: '2024-06-25',
    heading: 'A Guide to Bird Watching in India',
    slug: generateSlug('A Guide to Bird Watching in India'),
    description:
      'India’s diverse habitats make it a paradise for bird watchers. This guide covers the best places to observe rare and exotic bird species across the country.',
    category: 'Wildlife',
    more: `From the migratory birds of Bharatpur to the rich bird life in Kerala’s forests, 
              India offers prime spots for bird watching enthusiasts to catch a glimpse of vibrant 
              and rare species.`,
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
