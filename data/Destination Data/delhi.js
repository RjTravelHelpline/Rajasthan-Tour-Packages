const temp = {
  bold: (text) => `<span class='fw-bold'>${text}</span>`,
  link: (text, url) =>
    `<a class='text-web fw-bold' target='_blank' href='${url}'>${text}</a>`,
};

export const overview = {
  heading: 'Delhi: The Heart of India',
  content: [
    `New Delhi is the capital city of India and it is a fast growing city where the old and the new blend seamlessly. Also referred to as the capital of India; ${temp.bold(
      `Delhi`
    )} is one of the biggest cities that have been characterized by a blend of historical buildings and structures and modern world facilities. Delhi has many attractions to both the foreign visitors and locals; starting from The Red Fort, Qutub Minar to the markets of Chandni Chowk. It has been considered not only as the political capital of India, but also the cultural and historical city which pulls in million visitors every year.`,
  ],
};

export const about = {
  heading: ``,
  content: [
    `New Delhi is the capital city of India and it is a fast growing city where the old and the new blend seamlessly. Also referred to as the capital of India; Delhi is one of the biggest cities that have been characterized by a blend of historical buildings and structures and modern world facilities. Delhi has many attractions to both the foreign visitors and locals; starting from The Red Fort, Qutub Minar to the markets of Chandni Chowk. It has been considered not only as the political capital of India, but also the cultural and historical city which pulls in million visitors every year.`,
    `New Delhi and Old Delhi both are complementary to each other and provide travelers time to have a look at ruins, gardens, temples and historic buildings and at the same time enjoy new age cuisine, shopping markets and commercially developed areas. The city is divided into two parts: Old Delhi, which is an ancient city with major historical monuments, belonging to the Mughals; New Delhi which was developed more recently by the British.`,
    `It could be stated that New Delhi is the center of the Indian administration, the residence of the President, the Parliament and many ministries and departments are located in New Delhi. Old Delhi is a crowded, colorful residential area consisting of small lanes, bazaars, mosques and temples; it gives the traditional texture of Delhi.`,
  ],
};
export const sightseeing = {
  heading: `Delhi houses a number of historical places, architectural marvels and concluded cultural monuments. Here is a quick reference guide to some of the most popular sites that you need to consider visiting when in the city.`,
  content: [
    {
      day: 'Red Fort (Lal Qila)',
      title: 'Symbol of India’s Mughal Heritage',
      content: `Symbolizing India’s historical germ from the Mughal era, the Red Fort is a UNESCO World Heritage site. Constructed by Emperor Shah Jahan, this fort is made entirely of red sandstone and features notable edifices such as Diwan-i-Am (Hall of Public Audience) and Diwan-i-Khas (Hall of Private Audience). The fort also hosts a light and sound show depicting the history of both the fort and Delhi.`,
      highlights: {
        points: [``],
      },
    },
    {
      day: 'Qutub Minar',
      title: 'World’s Tallest Brick Minaret',
      content: `The 73-meter high Qutub Minar is another UNESCO-listed site and the world’s tallest brick minaret. This red sandstone structure is a masterpiece of Indo-Islamic Afghan architecture, marking the beginning of Muslim rule in India.`,
      highlights: {
        points: [``],
      },
    },
    {
      day: 'India Gate',
      title: 'War Memorial of India',
      content: `India Gate stands as a memorial for Indian soldiers who lost their lives in World War I. Located amidst a sprawling green park, it’s a popular spot for picnics and evening walks. The structure is especially stunning at night when it’s illuminated.`,
      highlights: {
        points: [``],
      },
    },
    {
      day: 'Humayun’s Tomb',
      title: 'A Marvel of Mughal Architecture',
      content: `Built in the 16th century, Humayun’s Tomb is an outstanding example of Mughal architecture and the final resting place of the second Mughal emperor, Humayun. The structure holds UNESCO status and features the beautiful Lahore Gate.`,
      highlights: {
        points: [``],
      },
    },
    {
      day: 'Jama Masjid',
      title: 'Magnificent Mosque by Shah Jahan',
      content: `One of India’s largest and most magnificent mosques, Jama Masjid was constructed by Shah Jahan. It features beautiful courtyards, arches, and minarets. Visitors can enjoy a panoramic view of Old Delhi from the top of the minaret.`,
      highlights: {
        points: [``],
      },
    },
    {
      day: 'Lotus Temple',
      title: 'House of Worship and Tranquility',
      content: `Famous for its lotus-shaped structure, the Lotus Temple is a Bahá'í House of Worship open to all. Its serene atmosphere invites visitors of all backgrounds to meditate and find peace.`,
      highlights: {
        points: [``],
      },
    },
    {
      day: 'Akshardham Temple',
      title: 'Blend of Modern and Traditional Architecture',
      content: `Akshardham Temple is an impressive example of contemporary Indian architecture. The complex includes an IMAX theater, a musical fountain, and a boat ride showcasing India’s history and culture.`,
      highlights: {
        points: [``],
      },
    },
    {
      day: 'Raj Ghat',
      title: 'Memorial to Mahatma Gandhi',
      content: `Raj Ghat is a black marble platform marking the cremation site of Mahatma Gandhi. A peaceful and reflective site, it draws visitors who wish to pay respects to the Father of the Nation.`,
      highlights: {
        points: [``],
      },
    },
    {
      day: 'Chandni Chowk',
      title: 'Bustling Market with Historic Charm',
      content: `Chandni Chowk is one of Delhi's largest markets, known for its narrow streets, historic buildings, and vibrant atmosphere. Here, you can find everything from clothes to spices, with key attractions like Red Fort and Jama Masjid nearby.`,
      highlights: {
        points: [``],
      },
    },
  ],
};
export const museumsandart = {
  heading: `New Delhi has several museums and art galleries that offer the tourist and visitor the best insight into the Indian historial, cultural and ${temp.bold(
    `Delhi Heritage Tour`
  )} past. Here are some notable museums and galleries you should visit:`,
  content: [
    {
      day: 'National Museum',
      title: 'India’s largest museum near India Gate',
      content: `Located near India Gate, the National Museum is one of India's largest museums. It houses an extensive collection of sculptures, paintings, coins, textiles, and artifacts from thousands of years of Indian history.`,
    },
    {
      day: 'Indira Gandhi Memorial Museum',
      title: 'Life of India’s first female Prime Minister',
      content: `Set in the home where Indira Gandhi was born and raised, this museum provides a glimpse into the life of India’s first female Prime Minister. It features her personal belongings, photographs, and items related to her career.`,
    },
    {
      day: 'National Gallery of Modern Art',
      title: 'Modern Indian art near India Gate',
      content: `Situated near India Gate, the National Gallery of Modern Art showcases Indian art from the 19th century to the contemporary period. The collection includes works by renowned artists like Raja Ravi Verma, Amrita Sher-Gil, and M.F. Husain.`,
    },
    {
      day: 'Gandhi Smriti',
      title: 'Memorial of Mahatma Gandhi’s life',
      content: `Gandhi Smriti is a significant museum displaying Mahatma Gandhi's life and legacy. Located at the site where Gandhi spent his last days, it includes photographs, letters, and other personal effects of the Mahatma.`,
    },
    {
      day: 'National Rail Museum',
      title: 'Journey through India’s railway history',
      content: `A must-visit for railway enthusiasts, the National Rail Museum displays India’s railway heritage with historic train models, railway trophies, and memorabilia. It offers a unique perspective on the evolution of Indian railways.`,
    },
  ],
};
export const fairandfestivals = {
  heading: `It will be noticed that Delhi is a city where many types of fairs and festivals are enjoyed throughout the year. Some of the most prominent festivals include:`,
  content: [
    {
      day: 'Diwali',
      title: 'festival of lights in Delhi',
      content: `Diwali, the festival of lights, is widely celebrated across Delhi with illuminated homes, streets, and markets. The city comes alive with firecrackers, beautifully decorated temples, and festive events, making it a wonderful time to visit.`,
    },
    {
      day: 'Holi',
      title: 'festival of colors',
      content: `Holi, the vibrant festival of colors, is celebrated enthusiastically in Delhi with colorful powders, music, and dancing. The streets are alive with people joyously welcoming spring, creating a lively and cheerful atmosphere.`,
    },
    {
      day: 'Durga Puja',
      title: 'celebration by Delhi’s Bengali community',
      content: `Durga Puja is celebrated by Delhi's Bengali community with beautifully decorated pandals, traditional folk dances, and cultural performances. The festivities are marked by reverence, joy, and the artistic expression of Bengali culture.`,
    },
    {
      day: 'Qutub Festival',
      title: 'cultural festival at Qutub Minar',
      content: `Held at the historic Qutub Minar complex in October, the Qutub Festival celebrates Indian classical music and dance. The event showcases India's rich cultural heritage and attracts enthusiasts of traditional arts from across the region.`,
    },
    {
      day: 'Dussehra',
      title: 'celebration of Lord Rama’s victory',
      content: `Dussehra in Delhi commemorates the victory of Lord Rama over the demon king Ravana with processions, dramatic enactments of the Ramayana, and the burning of Ravana’s effigy. The celebrations reflect themes of good triumphing over evil.`,
    },
  ],
};
export const excursions = {
  heading: `One day traveling areas that can be visited from Delhi are numerous and they depict cultural history and ethnic diversity. Here are some of the top excursions you can enjoy ${temp.link(
    `Rajasthan Tour from Delhi`
  )}`,
  content: [
    {
      day: 'Agra',
      title: 'home of the Taj Mahal',
      content: `Only 3-4 hrs drive from Delhi is Agra, famously known for the wonder of the world – Taj Mahal. That is why, apart from ${temp.link(
        `Agra`,
        `https://www.rajasthantourpackages.in/rajasthan-tour-from-delhi`
      )} Fort and Fatehpur Sikri among other historical places, the city is a must-visit destination for historians.`,
    },
    {
      day: 'Jaipur',
      title: 'the Pink City',
      content: `The largest city of Rajasthan is Jaipur also known as the Pink city is also on the list of UNESCO World Heritage sites famous for royal Palaces, forts and temples. Tourist places including the Amer Fort, Hawa Mahal and the City Palace make ${temp.link(
        `Jaipur`,
        `https://www.rajasthantourpackages.in/jaipur`
      )} an important Best ${temp.bold(`Places to Visit in Delhi`)}.`,
    },
    {
      day: 'Mathura and Vrindavan',
      title: 'holy cities of Lord Krishna',
      content: `Located around 180 km from Delhi, Mathura and Vrindavan are significant holy places, especially for Hindus. Known as the birthplace and childhood home of Lord Krishna, the cities feature numerous temples, ghats, and landmarks.`,
    },
    {
      day: 'Haridwar and Rishikesh',
      title: 'spiritual and adventure hubs',
      content: `A 5-6 hour drive from Delhi, Haridwar and Rishikesh are celebrated for spirituality, temples, and yoga. Haridwar is famous for the Ganges aarti, while Rishikesh is a gateway to the Himalayas and offers various adventure sports.`,
    },
  ],
};
export const shopping = {
  heading: `New Delhi is a shoppers’ haven, and it is very common to find anything starting from the branded clothing to accessory wears as well as spices and little trinkets. Here are some of the best places to shop in the city:`,
  content: [
    {
      day: 'Connaught Place',
      title: 'commercial hub of New Delhi',
      content: `Connaught Place is New Delhi's commercial hub, featuring a mix of traditional markets and branded store outlets. It’s an ideal destination for fashion, accessories, books, and limited-edition merchandise.`,
    },
    {
      day: 'Chandni Chowk',
      title: 'authentic street shopping',
      content: `For a traditional shopping experience, Chandni Chowk is perfect. This bustling market is famous for jewelry, sarees, spices, and street food, with a variety of small shops offering affordable products.`,
    },
    {
      day: 'Dilli Haat',
      title: 'artisan and handmade items',
      content: `Dilli Haat is an exposition-style market showcasing handicrafts, textiles, ornaments, home decor, and unique handmade accessories from all over India, making it ideal for special finds.`,
    },
    {
      day: 'Karol Bagh',
      title: 'fabrics and designer wear',
      content: `Known for its vibrant selection of fabrics, designer bridal sarees, and lehengas, Karol Bagh is also great for leather items and ornaments, making it a popular shopping spot.`,
    },
  ],
};
export const restaurantsandmore = {
  heading: `La dèlglish cuisine is incredibly diverse and a diner is sure to get a meal that suits their taste. Its cuisine ranges from street foods to credible restaurants to gourmet meals. Some of the must-try dishes include:`,
  content: [
    {
      day: 'Chole Bhature',
      title: 'famous North Indian dish',
      content: `Chole Bhature is a popular North Indian dish featuring spicy chickpeas (chole) and deep-fried bread (bhature), often enjoyed with pickles and yogurt.`,
    },
    {
      day: 'Paratha',
      title: 'stuffed flatbread delicacy',
      content: `Paratha is a favorite in Delhi, with Paranthe Wali Gali in Chandni Chowk being the go-to spot. These stuffed flatbreads come with fillings like potato, paneer, cauliflower, and more.`,
    },
    {
      day: 'Kebabs',
      title: 'Mughlai grilled meat specialty',
      content: `Delhi is famous for Mughlai dishes, especially kebabs. Visit Karim's or Al Jawahar in Old Delhi for authentic and flavorful kebabs.`,
    },
    {
      day: 'Butter Chicken',
      title: 'iconic Delhi-origin dish',
      content: `Butter Chicken, originating from Delhi, is a creamy, buttery gravy dish best paired with naan or rice— a must-try for visitors.`,
    },
  ],
};
export const howToReach = {
  heading: `Delhi is well-connected by air, rail, and road:`,
  content: [
    {
      day: 'By Air',
      title: '',
      content: `Delhi's Indira Gandhi International Airport (IGI) is one of India's largest airports, handling both domestic and international flights. Taxis, metro, and buses are easily available from the airport to reach the city center.`,
    },
    {
      day: 'By Train',
      title: '',
      content: `Delhi has multiple railway stations, including New Delhi Railway Station, Hazrat Nizamuddin, and Old Delhi Railway Station. These stations are well-connected, allowing travelers to reach Delhi from major cities across India.`,
    },
    {
      day: 'By Road',
      title: '',
      content: `Delhi is surrounded by various national highways, making road travel convenient. The city is well-connected to Uttar Pradesh, Haryana, and Rajasthan via public transport, including buses, private cars, and taxis.`,
    },
  ],
};
