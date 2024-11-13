const temp = {
  bold: (text) => `<span class='fw-bold'>${text}</span>`,
  link: (text, url) =>
    `<a class='text-web fw-bold' target='_blank' href='${url}'>${text}</a>`,
};
export const overview = {
  heading: 'Udaipur: The Jewel of Rajasthan',
  content: [
    `Being proudly nicknamed the ${temp.bold(
      `City of Lakes`
    )}, Udaipur is a beautiful city in Rajasthan with numerous tiny lakes, upscale palaces, ornat temples, and colorful markets. Sometimes it is mentioned that it was founded by Maharana Udai Singh II in 1559, while earlier it was the capital of the Mewar Kingdom. As a city that has preserved its beauty and royal charm over the years, along with having some of the most scenic backdrops in India, it is one of the most important travel destinations in India. For further details about visiting Udaipur and other beautiful places of Rajasthan, you can visit our ${temp.link(
      `Rajasthan Tour Packages`,
      `https://rajasthantourpackages.in/`
    )}. In the coming sections, we will discuss in detail where you can go sightseeing, where the local markets are, what to eat, and everything you need to know about ${temp.bold(
      `Places to Visit in Udaipur`
    )}.`,
  ],
};
export const about = {
  content: [
    `Located in the southern region of the Aravalli hill range, ${temp.link(
      `Udaipur`,
      `https://www.jaipurtaxiservice.com/tourist-cities-of-rajasthan/udaipur.html`
    )} has widely become one of the favorite cities of Rajasthan. Its name as the Venice of the East is due to its five beautiful lakes out of which the famous one would be ${temp.bold(
      `Lake Pichola`
    )}, Fateh Sagar, Swaroop Sagar, Rangsagar and Doodh Talai. The city is ultra modern and yet it boasts of rich history; there are palaces, forts, museums, temples and everything else that a traveler could dream of seeing in this region of Rajasthan.`,
    `Udaipur is also undoubtedly a city that cherishes the traditions of India. Where ancient traditions meet the modern ways of living – at the same time, all visitors will have a great chance to enjoy the time of their lives.`,
  ],
};

export const sightseeing = {
  heading: `Udaipur is absolutely teeming with historical places and beautiful points of interest. Here are some of the ${temp.bold(
    `Top Places to Visit in Udaipur`
  )}:`,
  content: [
    {
      day: 'City Palace',
      title: "Udaipur's architectural marvel",
      content: `City Palace is actually an opulent ensemble of structures constructed for numerous decades by different Mewar kings. Lying on the shore of Lake Pichola this palace is a classic representation of Rajput style of architecture with finely carved balconies, courts as well as towers. We have Chhatris, ${temp.bold(
        `City Palace Museum`
      )} which has various armories and marvelous treasures that include artifacts, weapons, paintings etc.`,
      highlights: {
        points: [``],
      },
    },
    {
      day: 'Lake Pichola',
      title: 'one of the most beautiful lakes',
      content: `Lake Pichola is one of the most beautiful lakes in Udaipur, set in the midst of slopes, royal residences, and sanctuaries. A watercraft ride offers shocking views of City Royal residence and ${temp.bold(
        `Jag Mandir`
      )} Island whereas at dusk it turns into an charming sentimental elude spot pulling in both local people and guests.`,
      highlights: {
        points: [``],
      },
    },
    {
      day: 'Jag Mandir',
      title: 'Lake Garden Palace',
      content: `Jag Mandir, commonly referred to as the Lake Garden Palace, stands on an island in Lake Pichola and boasts exquisite architecture and lush gardens that visitors can take a leisurely boat ride around to reach. Once there they can explore its interiors with intricate marble work and eye-catching carvings.`,
      highlights: {
        points: [``],
      },
    },
    {
      day: 'Saheliyon-ki-Bari',
      title: 'Garden of the Maidens',
      content: `Garden of the Maidens, is an inviting garden with fountains, lotus pools and marble elephants that was constructed as an escape for royal ladies living nearby. Boasting a serene atmosphere and lush greenery make this garden ideal for relaxation as well as photography.`,
      highlights: {
        points: [``],
      },
    },
    {
      day: 'Fateh Sagar Lake',
      title: 'artificial lake of Udaipur',
      content: `Fateh Sagar is another artificial lake of Udaipur where boating is also available and there’s a view of mountains as well. It also has the Nehru Park, a beautiful garden, reachable by boat, and the ${temp.bold(
        `Udaipur Solar Observatory`
      )}is said to be the best site for solar observation in the entire continent of Asia.`,
      highlights: {
        points: [``],
      },
    },
    {
      day: 'Monsoon Palace',
      title: 'also known as Sajjangarh Palace',
      content: `Palace was constructed at a hill top by Maharana Sajjan Singh for his ${temp.bold(
        `monsoon palace`
      )} residence. Here then the people may look at commanding views of the Udaipur palaces, lakes, and countryside vistas.`,
      highlights: {
        points: [``],
      },
    },
  ],
};

export const museumsandart = {
  heading: `Culture and history-lovers will find lots to do in Udaipur; there are a number of museums and art galleries telling the story of Rajasthan’s history.`,
  content: [
    {
      day: 'Bagore Ki Haveli Museum',
      title: 'exhibiting traditional arts and crafts of Rajasthan',
      content: `This historic haveli also serves as a museum exhibiting traditional arts and crafts of Rajasthan including paintings, weapons, clothing and collections that allow visitors to appreciate its artistic heritage.`,
    },
    {
      day: 'Vintage Car Museum',
      title: 'housing classic and vintage vehicles',
      content: `Udaipur Auto enthusiasts will find Udaipur's Vintage Car Museum to be an interesting stop, housing classic and vintage vehicles once owned by royalty that can be enjoyed as you admire their beautiful designs and unique histories.`,
    },
    {
      day: 'Shilpgram',
      title: 'textiles and artwork by local artisans',
      content: `Shilpgram, located just outside Udaipur, is an arts and crafts complex featuring traditional handicrafts, textiles and artwork created by local artisans. Visitors are free to wander the complex's crafts village while meeting with artisans themselves as well as buying unique souvenirs.`,
    },
    {
      day: 'Crystal Gallery',
      title: 'crystal furniture, chandeliers & more',
      content: `This gallery is also located inside the City Palace complex, containing crystal furniture, chandeliers and other articles for which Maharana Sajjan Singh placed order in the mid nineteenth century. The artworks displayed in the gallery promote rich detailing of the reign of Mewar dynasty in India.`,
    },
  ],
};

export const fairandfestivals = {
  heading: `What makes Udaipur special are numerous festivals and fairs: visiting this place one can still see traditions of local people.`,
  content: [
    {
      day: 'Mewar Festival',
      title: 'an idol of Goddess Gangaur',
      content: `The ${temp.bold(
        `Mewar Celebration`
      )} takes place each April to commemorate spring. Bringing Udaipur's vibrant culture alive through music, dance, and colorful processions; its highlight being taking an idol of Goddess Gangaur all the way down Lake Pichola in grand style celebration.`,
    },
    {
      day: 'Shilpgram Crafts Fair',
      title: 'encompasses dance and music shows',
      content: `Organized annually in December, ${temp.bold(
        `Shilpgram Crafts Fair`
      )} is an amazing concept where artists from all over India gather to display their work. It encompasses common dance and music shows and is extremely lively to depict folk culture of India.`,
    },
    {
      day: 'Teej',
      title: 'festival of colors',
      content: `The ${temp.bold(
        `Teej Festival`
      )} is very popular and it is most enjoyable for the women of Udaipur, who wear colorful dresses, sing and dance on their teeth. This festival is celebrated in honor of Goddess Parvati and is turned into a very lively carnival of marital felicity and affluence.`,
    },
    {
      day: 'Gangaur Festival',
      title: 'annual festival dedicated to Goddess Gauri',
      content: `Women from Udaipur celebrate this significant annual festival dedicated to Goddess Gauri with traditional rituals, processions and cultural performances held each year to pay their homage. Women dress colorfully while enjoying this vibrant event!`,
    },
  ],
};

export const excursions = {
  heading: `There are several places nearby Udaipur which are quite suitable for visit. Below is the list of sites suggested for sightseeing outside the city.`,
  content: [
    {
      day: 'Kumbhalgarh Fort',
      title: 'encompassing sees of Aravalli Extend Mountains',
      content: `The breathtaking Kumbhalgarh Fortification lies approximately 85 kilometers outside Udaipur and stands as an astonishing case of Rajput military engineering and is recorded on UNESCO's World Legacy list. Encased inside an gigantic divider and giving radiant all encompassing sees of Aravalli Extend Mountains, guests to Kumbhalgarh can investigate sanctuaries, royal residences and climbing trails inside its dividers`,
    },
    {
      day: 'Eklingji Temple',
      title: 'famous Hindu temple of Lord Shiva',
      content: `Sitting 22 km from Udaipur, ${temp.bold(
        `Eklingji Temple`
      )} is a .famous Hindu temple of Lord Shiva Erected at the beginning of the 8th century, its fine ornaments are expressed in stone and it hosts a black marble Lingam of Lord Shiva, four-faced.`,
    },
    {
      day: 'Chittorgarh Fort',
      title: 'a UNESCO World Heritage',
      content: `Chittorgarh Fort, situated approximately 120 kilometers outside Udaipur and listed as a UNESCO World Heritage is known for its exquisite architecture, grand palaces, and ancient temples as well as tales involving legendary queen Padmini who once reigned here at one point during her history making an invaluable historical landmark site.`,
    },
    {
      day: 'Ranakpur Jain Temple',
      title: 'devoted to Tirthankara Adinatha',
      content: `Situated approximately 90 kilometers outside Udaipur is ${temp.link(
        `Ranakpur`,
        'https://www.jaipurtaxiservice.com/tourist-cities-of-rajasthan/ranakpur.html'
      )}Jain Temple - an exquisite temple complex noted for its exquisite marble architecture and stunning carvings devoted to Tirthankara Adinatha for use as a haven of inner peace, it attracts spiritual seekers searching for inner calmness.`,
    },
  ],
};
export const shopping = {
  heading: `${temp.bold(
    `Shopping in Udaipur`
  )} is also easy going; Udaipur is flooded with lots of shops where people can get standard Rajasthani Handicrafts, Textile goods and souvenirs at cheap rates.`,
  content: [
    {
      day: 'Hathi Pol Bazaar',
      title: 'most marked shopping place',
      content: `That’s why Hathi Pol Bazaar is one of the most marked shopping places of Udaipur that offers the true samples of Rajasthani art such as miniatures, crafts, and fabrics. This is a good place to visit for souvenirs and art crafts.`,
    },
    {
      day: 'Bada Bazaar',
      title: 'jewelries, fabrics, leather products & more',
      content: `Purchases can be made here of jewelries, fabrics, leather products and traditional Rajasthani costumes among others. This busy market also has some of the conventional jewelry like Kundan and Polki as well.`,
    },
    {
      day: 'Shilpgram',
      title: 'jewelries, fabrics, leather products & more',
      content: `The Shilpgram is a marketplace for artists and hence a great place to shop for pottery, hand woven fabrics, crafts and more. The annual fair is visited by people from all over the country and it is the best time to buy the true gourmet of handmade works.`,
    },
    {
      day: 'Clock Tower Market',
      title: 'shopping for foods such as spices, teas & more',
      content: `The Clock Tower Market is also a good area for shopping for foods such as spices, teas and some weaving and carving art crafts. Famously associated with the atmosphere of bright colors, the market attracts both residents and guests of the city.`,
    },
  ],
};
export const restaurantsandmore = {
  heading: `Rajasthani foods are very spicy and the food found in Udaipur are a perfect reflection for the flavor of Rajasthan.`,
  content: [
    {
      day: 'Dal Baati Churma',
      title: 'authentic Rajasthani food and flavor',
      content: `To experience authentic Rajasthani food and flavor, don't miss Dal Baati Churma: round wheat balls called baati served alongside lentil curry known as daal, and a sweet dish made by milling crushed wheat into flour known as Churma. These mouthwatering bites should not be missed on any trip to Rajasthan! This delectably fulfilling dish adds zest and energy to any culinary adventure.`,
    },
    {
      day: 'Gatte Ki Sabzi',
      title: 'gram flour dumplings in a fragrant yogurt-based sauce',
      content: `Gatte Ki Sabzi is a tasty Rajasthani curry that features gram flour dumplings stewed in an aromatic yogurt-based sauce, offering maximum flavor. This dish is perfect as either a lunch or dinner option and gives a delicious taste of Rajasthani cuisine.`,
    },
    {
      day: 'Laal Maas/Lamb Curry',
      title: 'spicy lamb curry with red chilies and fragrant spices',
      content: `Laal Maas, also known as Lamb Curry, is an irresistibly spicy blend of lamb meatballs seasoned with red chilies and fragrant spices. Loved both locally and by visitors, Laal Maas is a must-try dish for anyone looking for an authentic taste of Rajasthani food while touring the region.`,
    },
    {
      day: 'Rajasthani Sweets',
      title: 'delicious and indulgent Rajasthani sweets',
      content: `Udaipur is well known for its irresistibly delicious Rajasthani sweets, such as Ghevar, Malpua, and Kaju Katli. These time-honored recipes cater to those with a sweet tooth and are a must-try for anyone visiting the region.`,
    },
    {
      day: 'Cultural Experiences',
      title: 'immerse yourself in local culture and traditions',
      content: `Udaipur offers guests numerous cultural experiences, allowing them to fully immerse themselves in the local way of life. Attend exhibitions by Ghoomar and Kathak dance groups at venues like Bagore Ki Haveli for a deeper exploration of Udaipur's rich heritage.`,
    },
  ],
};

export const howToReach = {
  heading: ``,
  content: [
    {
      day: 'By Air',
      title: '',
      content: `About 22 km from the city of Udaipur there is ${temp.bold(
        `Maharana Pratap Airport`
      )} providing flights to New Delhi, Mumbai, Ahmedabad, Lucknow, and  ${temp.link(
        `Jaipur`,
        'https://www.rajasthantourpackages.in/jaipur'
      )} among others.`,
    },
    {
      day: 'By Train',
      title: '',
      content: `Udaipur enjoys a rail network by the Udaipur City Railway Station, and other luxury trains like ${temp.bold(
        `Palace on Wheels`
      )} pass through Udaipur.`,
    },
    {
      day: 'By Road',
      title: '',
      content: `Local transportation is easily available by private cabs and buses, with many buses operating between Udaipur and other cities such as Jaipur, Jodhpur, and Ahmedabad.`,
    },
  ],
};
