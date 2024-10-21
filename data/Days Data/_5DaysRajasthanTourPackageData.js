const temp = {
  bold: (text) => `<span class='fw-bold'>${text}</span>`,
  link: (text, url) =>
    `<a class='text-web' target='_blank' href='${url}'>${text}</a>`,
};

// Tour Overview Data
export const tourOverview = {
  title: `Tour <strong>Overview</strong>`,
  content: [
    `Embark on a captivating ${temp.bold(
      `5-day Rajasthan Tour Package`
    )}, where you will experience the royal charm and cultural richness of Rajasthan. This meticulously planned tour covers key destinations like Jaipur, Udaipur, and Pushkar, providing a perfect blend of history, architecture, and scenic beauty. Whether you're looking to explore Jaipur's vibrant streets or Udaipur's romantic city, this ${temp.bold(
      `Rajasthan Tour Itinerary 5 Days`
    )} promises an unforgettable experience for families and travelers alike`,
    `Starting your journey in Jaipur, the Pink City, you'll witness the grandeur of Amber Fort, City Palace, and the iconic Hawa Mahal. As you move forward to Udaipur, the City of Lakes, you will enjoy breathtaking boat rides on Lake Pichola and explore the architectural marvels of City Palace and Jagdish Temple. The ${temp.bold(
      `Jaipur to Udaipur 5-Day Tour`
    )} is designed for those seeking a compact yet fulfilling travel experience, making it ideal for busy travelers. This ${temp.bold(
      `Rajasthan Travel Package for 5 Days`
    )} immerses you in Rajasthan's culture, heritage, and natural beauty.`,
    `For families and groups, the ${temp.bold(
      `5-Day Golden Triangle Tour Rajasthan`
    )} also includes visiting Pushkar, where the sacred Brahma Temple and the serene Pushkar Lake await. If you're looking for ${temp.bold(
      `Rajasthan Family Tour Packages`
    )}, this travel package offers a diverse mix of adventure, history, and relaxation, ensuring a memorable time for all ages. By choosing this ${temp.link(
      `Rajasthan Tour Package`,
      `https://www.rajasthantourpackages.in/`
    )}, you will explore the best of Rajasthan in just five days, leaving you with a treasure trove of memories of India's royal state.`,
  ],
};

export const tourFaq = {
  questions: [
    {
      question: `What is included in the 5 Days Rajasthan Tour Package?`,
      answer: `The ${temp.bold(
        `5 Days Rajasthan Tour Package`
      )} includes well-planned accommodation in premium hotels, daily breakfast, local sightseeing with a professional guide, and transportation in a private air-conditioned vehicle. Entrance fees to major attractions and monuments may also be included depending on the package details.`,
    },
    {
      question: `Which cities are covered in the Rajasthan Tour Itinerary for 5 days?`,
      answer: `This ${temp.bold(
        `Rajasthan Tour Itinerary 5 Days`
      )} typically covers three iconic cities: Jaipur (the Pink City), Udaipur (the City of Lakes), and Pushkar (famous for its spiritual and cultural significance). Each city offers a unique experience, from Jaipur's majestic forts to Udaipur's serene lakes and Pushkar's sacred temples.`,
    },
    {
      question: `Is this tour suitable for families?`,
      answer: `Yes, the ${temp.bold(
        `Rajasthan Family Tour Packages`
      )} are designed with family-friendly activities and accommodations. The itinerary offers something for every member, including fun activities for children, cultural exploration for adults, and comfortable travel throughout the trip, making it an ideal choice for a family vacation.`,
    },
    {
      question: `What is the best time to book a 5-day Rajasthan tour?`,
      answer: `The best time to book the ${temp.bold(
        `5 Days Rajasthan Tour Package`
      )} is from ${temp.bold(
        `October to March`
      )}, when the weather is pleasant and perfect for sightseeing. This period ensures you can explore the desert landscapes and historical sites without the extreme heat of summer.`,
    },
    {
      question: `Can I customize the 5 Days Golden Triangle Tour Rajasthan?`,
      answer: `Yes, this tour package is flexible and can be customized according to your preferences. Whether you want to add more days, visit additional cities, or focus on specific experiences, the itinerary can be adjusted to meet your travel needs and schedule.`,
    },
  ],
};
