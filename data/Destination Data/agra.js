const temp = {
  bold: (text) => `<span class='fw-bold'>${text}</span>`,
  link: (text, url) =>
    `<a class='text-web fw-bold' target='_blank' href='${url}'>${text}</a>`,
};

export const overview = {
  heading: 'Discover Agra: The Land of the Taj Mahal',
  content: [
    `All the following could be associated with the city of history and the building design, Agra is a city situated in Uttar Pradesh on the right bank of the Yamuna River. Agra is renowned worldwide as the home of ‘Taj Mahal’, one of marvels of the world; It can correctly be said that Agra was, is and will always remain, as a place of art and culture as well as archaeological interest. That was at its zenith during the Mughal reigns and every traveler can observe and watch the majestic monumental and monumental green structures it produced. Agra of today is a place of common pilgrimage for travelers from different parts of the world in order to view and enjoy the Popular  ${temp.bold(
      `Attractions in Agra`
    )} and its rich historical heritage.`,
  ],
};

export const about = {
  heading: ``,
  content: [
    `Built on the banks of the river Yamuna it grew to become a significant city during the period of Mughals, The city was chosen as capital of the Mughal rule by emperor Akbar. Agra was fortunate enough to be blessed with the finest of the Mughals work notably the Taj Mahal, Agra Fort and Fatehpur Sikri; everything reeks of the splendid Mughal Dynasty. It has become one of the popular destinations of attractions within the Tourist map of India’s ever popular ${temp.link(
      `Golden Triangle tourist`,
      `https://www.rajasthantourpackages.in/5days-golden-triangle-tour`
    )} attraction circuit. Plethora of Jewellers, marble inlay work, rugs and leather goods also make this city alluring along with being a strong historical evidence.`,
  ],
};
export const sightseeing = {
  heading: `Taj Mahal and three monuments all erected in Agra have made the city famous for its architectural treasures; Besides, Agra has beautiful gardens and interesting bazaars. Here’s a look at the top sights to explore:`,
  content: [
    {
      day: 'Taj Mahal',
      title: 'monument of love and architectural brilliance',
      content: `Equated with Agra, Taj Mahal is one of the most famous monuments of Love and an example of architectural brilliance. This white marble tomb was constructed by Shah Jahan in memory of his beloved wife, Mumtaz Mahal; everyone can admire artistic inlay-work and its excellent symmetry of ${temp.link(
        `Taj Mahal Day Tour`,
        `https://www.jaipurtaxiservice.com/jaipur-agra-same-day-tour.html`
      )}.`,
      highlights: {
        points: [``],
      },
    },
    {
      day: 'Agra Fort',
      title: 'massive red sandstone fort',
      content: `${temp.bold(
        `Agra Fort`
      )} is another world heritage site, built by emperor Akbar and made of red sandstone which is very large. Also famous for its gates, courtyards and palaces, tourists are introduced to the Mughal structure and culture among other ${temp.bold(
        `attractions in Agra Tours`
      )}.`,
      highlights: {
        points: [``],
      },
    },
    {
      day: 'Fatehpur Sikri',
      title: 'former Mughal capital',
      content: `Located 35 km from Agra, Fatehpur Sikri was once the Mughal capital. It showcases a collection of palaces, mosques, and official buildings, making it a masterpiece of Mughal architecture and urban planning.`,
      highlights: {
        points: [``],
      },
    },
    {
      day: 'Mehtab Bagh',
      title: 'Mughal garden with sunset views',
      content: `Situated across the Yamuna River from the Taj Mahal, Mehtab Bagh is a picturesque garden known for its breathtaking views of the Taj, especially at sunset. It's an ideal spot for photography and leisurely walks.`,
      highlights: {
        points: [``],
      },
    },
    {
      day: 'Itimad-ud-Daulah’s Tomb',
      title: 'the "Baby Taj"',
      content: `Often called the "Baby Taj," this tomb was built by Empress Nur Jahan for her father. It features intricate marble carving and Persian-inspired architecture, foreshadowing the craftsmanship of the Taj Mahal.`,
      highlights: {
        points: [``],
      },
    },
    {
      day: 'Jama Masjid',
      title: 'one of India’s largest mosques',
      content: `Built in 1648 by Shah Jahan’s daughter, Jama Masjid is one of India’s largest mosques. It features impressive domes and a vast courtyard, capable of accommodating thousands of worshippers.`,
      highlights: {
        points: [``],
      },
    },
    {
      day: 'Akbar’s Tomb, Sikandra',
      title: 'blend of Hindu and Mughal architecture',
      content: `Located on the outskirts of Agra, Akbar’s Tomb is set in lush gardens and is a beautiful example of Hindu and Mughal architectural styles, symbolizing Akbar’s commitment to religious tolerance.`,
      highlights: {
        points: [``],
      },
    },
  ],
};
export const museumsandart = {
  heading: `Agra’s ${temp.bold(
    `museums and art galleries`
  )} showcase its cultural heritage, Mughal artifacts, and unique artworks:`,
  content: [
    {
      day: 'Taj Museum',
      title: 'historical artifacts within the Taj Mahal',
      content: `Located inside the Taj Mahal complex, the Taj Museum showcases artifacts such as royal weapons, architectural drawings, and construction plans related to the monument. It provides fascinating insights into the creation and history of this world-renowned structure.`,
    },
    {
      day: 'Agra Museum (Shah Jahan Garden)',
      title: 'historical and artistic collections',
      content: `Situated in Shah Jahan Garden, the Agra Museum is a blend of historical and artistic heritage. It features a vast collection of Mughal-era coins, sculptures, clothing, and weapons that once belonged to emperors, offering a glimpse into Mughal life and culture.`,
    },
    {
      day: 'Spiritual Museum',
      title: 'cultural and religious history',
      content: `The Spiritual Museum explores the cultural and religious development of Agra and India as a whole. Visitors can engage with displays that highlight religious beliefs and philosophies, creating a tranquil environment for reflection on the region's spiritual heritage.`,
    },
    {
      day: 'Kalakriti Cultural and Convention Center',
      title: 'theater, art, and cultural programs',
      content: `Known for its live performances, exhibitions, and art displays, the Kalakriti Cultural and Convention Center also hosts the popular show ${temp.bold(
        `Mohabbat the Taj`
      )}, which depicts the love story of Shah Jahan and Mumtaz Mahal through music and dance. It’s a vibrant venue for experiencing Agra's cultural scene.`,
    },
  ],
};
export const fairandfestivals = {
  heading: `Festivals celebrated in Agra present the cultural richness, tradition and energetic pulse of the city. Here are some of the city’s most celebrated events:`,
  content: [
    {
      day: 'Taj Mahotsav',
      title: 'celebration of Indian art and culture',
      content: `Held every February near the Taj Mahal, the ten-day Taj Mahotsav festival celebrates Indian art, craft, music, and dance. Visitors can enjoy cultural performances, artistic displays, and a vibrant food bazaar showcasing delicious local cuisine.`,
    },
    {
      day: 'Ram Barat',
      title: 'grand wedding procession of Lord Rama',
      content: `Ram Barat is a grand celebration featuring a magnificent wedding procession of Lord Rama, Lakshman, and Sita. This event is part of Agra's Ramlila tradition, and it includes elaborate decor, music, and performances that attract both locals and tourists.`,
    },
    {
      day: 'Kailash Fair',
      title: 'religious fair at Kailash Temple',
      content: `This religious fair, held at the Kailash Temple near Agra, attracts pilgrims and tourists who come to worship Lord Shiva. The fair features music, dancing, handicrafts, and a variety of food stalls, creating a festive atmosphere.`,
    },
    {
      day: 'Diwali',
      title: 'festival of lights',
      content: `Celebrated in October or November, Diwali lights up Agra with beautiful illuminations, festive events, and joyous gatherings. The city comes alive with lights, fireworks, and celebrations in homes and temples.`,
    },
    {
      day: 'Holi',
      title: 'festival of colors',
      content: `In March, Agra celebrates Holi with vibrant colors and festive spirit. People come together to splash colors, enjoy music, and celebrate the arrival of spring, creating a colorful and lively environment throughout the city.`,
    },
  ],
};
export const excursions = {
  heading: `Agra’s location makes it an ideal base for excursions to nearby historical and cultural sites:`,
  content: [
    {
      day: 'Mathura and Vrindavan',
      title: 'birthplace of Lord Krishna',
      content: `Mathura and Vrindavan, located 55 km from Agra, are important religious cities for Hindus. These towns are famous as the birthplace of Lord Krishna and the site of his many frolics. They attract thousands of devotees, especially during festivals like Janmashtami and Holi.`,
    },
    {
      day: 'Bharatpur Bird Sanctuary (Keoladeo National Park)',
      title: 'UNESCO World Heritage bird sanctuary',
      content: `Located about 60 km from Agra, Bharatpur Bird Sanctuary, also known as Keoladeo National Park, is a ${temp.bold(
        `UNESCO World Heritage site`
      )}. It is home to over 600 bird species, making it a paradise for bird watchers, especially during the migration season.`,
    },
    {
      day: 'Gwalior Fort',
      title: 'historical fort with temples and palaces',
      content: `Situated two hours from Agra, Gwalior Fort is famous for its impressive architecture and rich history. The fort complex houses temples, palaces, and rock paintings, making it a fascinating historical site to visit.`,
    },
    {
      day: 'Sikandra',
      title: 'Akbar’s Tomb and architectural marvels',
      content: `Sikandra, located about 10 km from Agra, is home to the tomb of Emperor Akbar. The site features a blend of Hindu and Islamic architectural styles, with a magnificent garden surrounding the tomb, making it a must-visit historical site.`,
    },
  ],
};
export const shopping = {
  heading: `Agra’s bustling markets and bazaars offer unique handicrafts and souvenirs that reflect its cultural heritage:`,
  content: [
    {
      day: 'Sadar Bazaar',
      title: 'famous for leather goods and local products',
      content: `Sadar Bazaar is famous for leather goods, including shoes, bags, belts, and other items available at affordable prices. The market also offers a variety of local products such as arts, crafts, fabrics, and other merchandise.`,
    },
    {
      day: 'Kinari Bazaar',
      title: 'jewelry, fabrics, and bridal wear',
      content: `Located off Jama Masjid, ${temp.bold(
        `Kinari Bazaar`
      )} is one of Agra's oldest markets, known for its specialty in jewelry, clothes, and fabrics. It’s a lively market for shopping occasions, offering bridal wear, exquisite embroidery, and handcrafted goods.`,
    },
    {
      day: 'TDI Mall',
      title: 'modern shopping experience',
      content: `TDI Mall is a newly developed shopping center that offers a wide variety of brand shops, a food court, and entertainment options. It’s ideal for those seeking a modern shopping experience in Agra.`,
    },
    {
      day: 'Subhash Emporium',
      title: 'marble art and intricate carvings',
      content: `Subhash Emporium specializes in marble art, offering intricately carved marble items such as table tops, cutlery, vases, and other souvenirs that showcase the region’s craftsmanship.`,
    },
    {
      day: 'Shahganj Bazaar',
      title: 'home appliances, furniture, and electronics',
      content: `Shahganj Bazaar is known for its wide variety of home appliances, furniture, clothing textiles, and electronics. The market also has stalls offering affordable local arts, crafts, and mementos.`,
    },
  ],
};
export const restaurantsandmore = {
  heading: `The fact is that Aga is a city of Mughlai dishes, street food, and the famous traditional sweetmeats Here one could be accompanied by a ${temp.bold(
    `Local Tour Guide in Agra`
  )}.`,
  content: [
    {
      day: 'Mughlai Cuisine',
      title: 'Indo-Afghan and Mughlai specialties',
      content: `Agra is renowned for its Mughlai cuisine, offering delicious kebabs, barbeque chicken, fish, tandoori chicken, and flavorful biryanis. Famous restaurants such as Pinch of Spice and Peshawri are known for their exceptional Mughlai dishes.`,
    },
    {
      day: 'Petha',
      title: 'specialty sweet of Agra',
      content: `Petha, Agra's famous sweet, is made from ash gourd or lauki and sugar. It comes in various flavors, including plain, almond, and tutti frutti. Panchhi Petha is one of the best-known shops offering this delicacy.`,
    },
    {
      day: 'Chaat',
      title: 'mouth-watering street food',
      content: `Agra is famous for its delicious chaat, with Sadar Bazaar being a prime spot for indulging in golgappas, aloo tikki, and bhalla, among other street food delights.`,
    },
    {
      day: 'Dasaprakash',
      title: 'South Indian vegetarian cuisine',
      content: `For those on a vegetarian diet, Dasaprakash is a popular South Indian restaurant in Agra, serving a variety of authentic South Indian dishes that tourists often flock to for a taste of regional cuisine.`,
    },
  ],
};
export const howToReach = {
  heading: `Agra is easily accessible by air, rail, and road:`,
  content: [
    {
      day: 'By Air',
      title: '',
      content: `Agra is served by the Pandit Deen Dayal Upadhyay Airport, located 11.8 km from the city center. It is an international airport, and travelers can also use Indira Gandhi Airport in Delhi, from which they can drive or take a train to Agra.`,
    },
    {
      day: 'By Train',
      title: '',
      content: `Agra is well-connected by train with three major railway stations: Raja ki Mandi, Agra Cantt, and Agra Fort. Several Rajdhani, Shatabdi, and other superfast trains run regularly connecting Agra with cities like Delhi, Jaipur, and other major destinations.`,
    },
    {
      day: 'By Road',
      title: '',
      content: `Agra is easily accessible by road, with the Yamuna Expressway connecting it to Delhi. The road is well-maintained, and there are regular buses and taxis available. The scenic drive adds to the charm of traveling to Agra.`,
    },
  ],
};
