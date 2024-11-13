const temp = {
  bold: (text) => `<span class='fw-bold'>${text}</span>`,
  link: (text, url) =>
    `<a class='text-web fw-bold' target='_blank' href='${url}'>${text}</a>`,
};

export const overview = {
  heading: 'Jaisalmer: A Golden City in Rajasthan',
  content: [
    `Jaisalmer in general is said to be the  ${temp.bold(
      `golden city of Rajasthan`
    )} and is located in the middle of the Thar Forsake. Famous for its golden sandstone built structures named after Maharawal Jaisal Singh it is a city worth making a visit to, with eyes that always wonder in awe and curiosity. When it comes to forts, beautiful havelis and an ability to look back at history, Jaisalmer is indeed synonymous. It is a beautiful attraction that draws the attention of world travelers and presents a unique combination of historical sites, heritage of culture and marvelous scenery. Every nook and corner of the city of Jaisalmer whether you are visiting some of the sightseeing places in Jaisalmer or tasting some of the delicious Jaisalmer foods will take you back to the history of the city. For all those people who love to get a value added trip,  ${temp.link(
      `Rajasthan tour packages`,
      `https://www.rajasthantourpackages.in/`
    )} is one of the best ways to visit Jaisalmer and other famous places of Rajasthan.`,
  ],
};
export const about = {
  content: [
    `Located in the northwestern part of Rajasthan, Jaisalmer is close to the Pakistan border and nestled deep within the Thar Desert. The city thrives as a center of tourism, with its ${temp.bold(
      `majestic Jaisalmer Fort`
    )}, opulent palaces, and havelis built by wealthy merchants. Its desert landscape adds a unique flavor to the tourism experience, offering camel safaris and desert camping under the stars. One of the most prominent aspects of Jaisalmer is its distinct architectural style, where the yellow sandstone used in the buildings turns the city into a golden spectacle during sunset.`,
    `Tourists flock to Jaisalmer to witness the ${temp.bold(
      `glory of Rajasthan's desert culture`
    )}, experience the desert lifestyle, and visit the renowned ${temp.bold(
      `Sam Sand Dunes`
    )}, a popular destination for desert camping and camel rides.`,
  ],
};

export const sightseeing = {
  heading: `Jaisalmer is home to several iconic attractions, making it one of the top tourist destinations in Rajasthan. Below are some of the most significant landmarks and tourist attractions in Jaisalmer:`,
  content: [
    {
      day: 'Jaisalmer Fort (Sonar Quila)',
      title: 'a UNESCO World Heritage Site',
      content: `The ${temp.bold(
        `Jaisalmer Fort`
      )} is one of the largest forts in the world and a UNESCO World Heritage Site. Built in 1156 AD by Rawal Jaisal, this fort stands tall on the Trikuta Hill. Made from yellow sandstone, the post glimmers like gold amid the day, gaining it the title "Sonar Quila" (Brilliant Post). Inside the fort, you'll find palaces, Jain temples, and numerous ancient havelis that reflect the exquisite craftsmanship of the medieval period.`,
      highlights: {
        points: [],
      },
    },
    {
      day: 'Patwon Ki Haveli',
      title: 'most stunning haveli',
      content: `This is one of the most stunning havelis in Jaisalmer, known for its intricate carvings and fine architecture. Built in the early 19th century by a wealthy trader, it is a collection of five havelis. The detailed work on the balconies, walls, and corridors makes it a must-visit spot for anyone interested in Rajasthani architecture.`,
      highlights: {
        points: [],
      },
    },
    {
      day: 'Salim Singh Ki Haveli',
      title: 'Haveli, known for peacock-shaped roof',
      content: `Another structural magnum opus, ${temp.bold(
        `Salim Singh Ki Haveli`
      )}, is known for its peacock-shaped roof. The haveli stands out due to its arched balconies and beautiful stone carvings, a testament to Jaisalmer's rich architectural heritage.`,
      highlights: {
        points: [],
      },
    },
    {
      day: 'Nathmal Ki Haveli',
      title: 'Rajput and Islamic architecture',
      content: `Built in the late 19th century, this haveli blends Rajput and Islamic architecture. The intricate stonework and detailed designs reflect the expertise of the local artisans who constructed it. The interior is equally grand, with paintings and carvings that showcase the luxury enjoyed by the merchant class of the time.`,
      highlights: {
        points: [],
      },
    },
    {
      day: 'Gadisar Lake',
      title: "Jaisalmer's primary water source",
      content: `Built in the 14th century, ${temp.bold(
        `Gadisar Lake`
      )} is an artificial reservoir that served as Jaisalmer's primary water source. Today, it is a peaceful spot for boating and photography, surrounded by beautiful temples and ghats. It's lovely during the early morning hours or at sunset.`,
      highlights: {
        points: [],
      },
    },
  ],
};

export const museumsandart = {
  heading: `For culture and history enthusiasts, Jaisalmer offers an array of museums and art galleries. These places provide a deep dive into the rich cultural heritage of the city:`,
  content: [
    {
      day: 'Jaisalmer War Museum',
      title: 'bravery of Indian soldiers',
      content: `Situated on the Jaisalmer-Jodhpur Highway, this museum is dedicated to the Indian Army and showcases the bravery of Indian soldiers. It exhibits a collection of tanks, military vehicles, and memorabilia from various wars, including the Indo-Pak conflicts.`,
    },
    {
      day: 'Desert Culture Centre & Museum',
      title: 'A hub for Rajasthani folk art',
      content: `A hub for Rajasthani folk art, this museum offers an insight into the region's cultural diversity. It displays ancient manuscripts, artifacts, textiles, and musical instruments used in Rajasthan over the centuries.`,
    },
    {
      day: 'Thar Heritage Museum',
      title: 'The Thar Heritage Museum',
      content: `The ${temp.bold(
        `Thar Heritage Museum`
      )} is an excellent place to explore the history, culture, and traditions of the Thar Desert. It houses a collection of fossils, ancient coins, weapons, and tribal costumes that narrate the region's past.`,
    },
  ],
};

export const fairandfestivals = {
  heading: `The fairs and festivals in Jaisalmer are vibrant and grand, reflecting the city's rich cultural tapestry. Some of the major events celebrated in the region include:`,
  content: [
    {
      day: 'Desert Festival',
      title: 'desert adventures like camel safaris',
      content: `Held annually in February, the ${temp.bold(
        `Jaisalmer Desert Festival`
      )} is a three-day extravaganza highlighting the region's folk culture. From camel races and turban-tying competitions to folk music performances and puppet shows, this festival is a colorful celebration of Jaisalmer's cultural heritage. It's the perfect opportunity to experience the local traditions and indulge in desert adventures like camel safaris.`,
    },
    {
      day: 'Ramdevra Fair',
      title: 'honor of Baba Ramdev',
      content: `This fair is held in honor of Baba Ramdev, a local saint, and attracts devotees across Rajasthan. The fair showcases Rajasthani folk culture through music, dance, and religious performances.`,
    },
    {
      day: 'Makar Sankranti',
      title: 'harvest season in Jaisalmer.',
      content: `Celebrated with great enthusiasm, ${temp.bold(
        `Makar Sankranti`
      )} marks the harvest season in Jaisalmer. The skies of Jaisalmer are filled with colorful kites as locals engage in kite flying competitions, adding to the festive atmosphere.`,
    },
  ],
};

export const excursions = {
  heading: `In addition to the magnificent attractions within the city, there are several excursion spots near Jaisalmer that offer unique experiences:`,
  content: [
    {
      day: 'Khuri Sand Dunes',
      title: 'alternative to the famous Sam Sand Dunes',
      content: `A quieter alternative to the famous ${temp.bold(
        `Sam Sand Dunes`
      )}, ${temp.bold(
        `Khuri Sand Dunes`
      )} offers a peaceful and less crowded experience, perfect for those seeking relaxation and tranquility. Visitors can embark on camel rides and enjoy a night of camping amidst the golden sands.`,
    },
    {
      day: 'Kuldhara Village',
      title: 'village: believed to be haunted',
      content: `Located just 18 kilometers from Jaisalmer, ${temp.bold(
        `Kuldhara`
      )} is an abandoned village that is believed to be haunted. Concurring with neighborhood legends, the villagers cleared out overnight due to a curse. Today, it is an intriguing destination for those interested in exploring eerie yet fascinating ruins.`,
    },
    {
      day: 'Lodhruva',
      title: 'wonderful Jain sanctuaries',
      content: `This old town was once the capital of the Bhatti tradition and is known for its wonderful Jain sanctuaries. The temples are adorned with intricate carvings and provide a serene atmosphere for visitors seeking spiritual solace.`,
    },
  ],
};

export const shopping = {
  heading: `Shopping in Jaisalmer is an absolute delight for those interested in authentic Rajasthani handicrafts. The vibrant markets in the city offer a wide variety of items, including:`,
  content: [
    {
      day: 'Embroidered Garments and Fabrics',
      title: 'Famous for affluent materials',
      content: `Jaisalmer is known for its rich textiles, including embroidered garments, bandhani fabrics, and mirror work textiles. These vibrant items are perfect souvenirs and reflect the craftsmanship of local artisans.`,
    },
    {
      day: 'Camel Leather Products',
      title: 'Famous for affluent materials',
      content: `From bags and wallets to shoes, ${temp.bold(
        `camel leather goods`
      )} are a popular purchase in Jaisalmer. The intricate detailing on these items makes them unique and sought after by tourists.`,
    },
    {
      day: 'Jewellery: Rajasthani silver jewelry',
      title: "Jaisalmer's bustling bazaars",
      content: `Rajasthani silver jewelry is widely available in Jaisalmer's bustling bazaars, particularly items adorned with gemstones. These pieces are culminated for those who need to take a bit of the regal style of Rajasthan.`,
    },
    {
      day: 'Handicrafts',
      title: 'mirror work handicrafts, puppets',
      content: ` Wooden items, mirror work handicrafts, and decorative items like puppets and wall hangings can be found in the local markets. These make excellent gifts or home décor items.`,
    },
  ],
};

export const restaurantsandmore = {
  heading: `Jaisalmer offers a rich and flavorful culinary experience. The city's cuisine is a reflection of Rajasthan’s traditional food culture, characterized by a unique blend of spices and preparation techniques that cater to the arid desert climate.`,
  content: [
    {
      day: 'Dal Baati Churma',
      title: 'quintessential Rajasthani dish',
      content: `This quintessential Rajasthani dish is a must-try when visiting Jaisalmer. The baati is a baked dough ball, typically served with dal (lentils) and churma (a sweet mixture of flour, sugar, and ghee)`,
    },
    {
      day: 'Ker Sangri',
      title: 'flavors of the desert',
      content: `This dish contains dried leaves, capers, and beans. It's a spicy and tangy dish that perfectly encapsulates the flavors of the desert.`,
    },
    {
      day: 'Laal Maas',
      title: 'non-vegetarian dishes',
      content: `${temp.bold(
        `Laal Maas`
      )} is a fiery mutton curry prepared with abundant red chilies and local spices for meat lovers. The rich flavor makes it a popular dish for those who enjoy robust Rajasthani flavors.`,
    },
    {
      day: 'Ghotua Ladoo',
      title: 'delicious Rajasthani meal',
      content: `Regarding desserts, ${temp.bold(
        `Ghotua Ladoo`
      )} is a local specialty made from gram flour, ghee, and sugar. It is rich and melts in the mouth, offering a sweet end to a delicious Rajasthani meal.`,
    },
  ],
};

export const howToReach = {
  heading: ``,
  content: [
    {
      day: 'By Air',
      title: '',
      content: `There is an airport in Jaisalmer, located about 15 km from the city center. However, only a few flights are available, most of which cover the route between Jaisalmer and Delhi. Many travelers pass through Jodhpur Airport, which is 285 km away, and then continue by road.`,
    },
    {
      day: 'By Train',
      title: '',
      content: `Jaisalmer Railway Station is one of the most preferred and accessible stations for train travel. It is well-connected to Delhi, Jodhpur, and Jaipur, with both daily and weekly services available. Notable trains include the Golden Temple Mail and the Jaisalmer Express.`,
    },
    {
      day: 'By Road',
      title: '',
      content: `Jaisalmer is connected to nearby cities like Jodhpur, Jaipur, and Ahmedabad through a network of roads. You can reach Jaisalmer by a self-owned vehicle or a long-distance bus. The scenic journey through the desert adds a unique richness to the experience.`,
    },
  ],
};
