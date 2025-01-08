export const temp = {
  bold: (text) => `<span class='fw-bold'>${text}</span>`,
  link: (text, url) =>
    `<a class='text-web' target='_blank' href='${url}'>${text}</a>`,
};
// // Destination Covered by the tour
export const destinationCovered = {
  title: 'Destination Covered',
  destinations: ['Jaipur', 'Pushkar', 'Udaipur', 'Jaisalmer'],
};

export const tourItinerary = {
  title: `tour <strong>itinerary</strong>`,
  content: [
    {
      day: 'Day 01',
      title: 'Arrival in Jaipur',
      content: `
          <span class='itinerary-pts'>They say, imagine that you are entering a spacious, colonial, very luxurious hotel.</span>
          <span class='itinerary-pts'>Amer Fort, City Palace and Hawa Mahal should be visited.</span>
          <span class='itinerary-pts'>Evening: A dinner in a restaurant with a rooftop.</span>
        `,
    },
    {
      day: 'Day 02',
      title: 'Jaipur to Pushkar',
      content: `
          <span class='itinerary-pts'>Go to the Holy Water of Pushkar Lake and the divine temple of Lord Brahma.</span>
          <span class='itinerary-pts'>Explore the local bazaars.</span>`,
    },
    {
      day: 'Day 03',
      title: 'Pushkar to Udaipur',
      content: `
          <span class='itinerary-pts'>After all, arrive in Udaipur and check into a hotel opposite the lake.</span>
          <span class='itinerary-pts'>Boat riding on the Pichola Lake and later visit Bagore ki Haveli.</span>
        `,
    },
    {
      day: 'Day 04',
      title: 'Udaipur Sightseeing',
      content: `
          <span class='itinerary-pts'>City Palace and Museum, Saheliyon Ki Bari, and Jag Mandir should be important visitor stops.</span>
          <span class='itinerary-pts'>Spend a romantic time by Fateh Sagar Lake.</span>
        `,
    },
    {
      day: 'Day 05',
      title: 'Udaipur to Jaisalmer',
      content: `
          <span class='itinerary-pts'>The arrival at Jaisalmer begins the tour- there promises to be an early check-in to an excellent camp in the desert.</span>
          <span class='itinerary-pts'>Evening: Camel ride and folk dance.</span>
        `,
    },
    {
      day: 'Day 06',
      title: 'Jaisalmer Sightseeing',
      content: `
          <span class='itinerary-pts'>Go to see Jaisalmer Fort, Patwon Ki Haveli and Gadisar Lake.</span>
          <span class='itinerary-pts'>See the sunset on the dunes.</span>
        `,
    },
    {
      day: 'Day 07',
      title: 'Departure',
      content: `
          <span class='itinerary-pts'>It is time to return to this city, choose another as your departure point, or stay here longer.</span>
        `,
    },
  ],
};

// export const tourFaq = {
//   questions: [
//     {
//       question: `What is included in the 8-Day Rajasthan Budget Tour?`,
//       answer: `The ${temp.bold(
//         `8 Days Rajasthan Budget Tour`
//       )} includes Accommodation in budget hotels, All transportation is in comfortable vehicles, Guided tours to major attractions and Selected meals. Entrance fees to monuments and activities mentioned in the itinerary are also covered.`,
//     },
//     {
//       question: `Which cities will we visit during the tour?`,
//       answer: `During the ${temp.bold(
//         `7 nights 8 days Rajasthan itinerary`
//       )}, you will explore vibrant cities, including Jaipur, known as the Pink City; Jodhpur, the Blue City; Udaipur, the City of Lakes; and Pushkar, celebrated for its sacrosanct lake and Brahma Temple. Each city offers a unique glimpse into Rajasthan's culture and heritage.`,
//     },
//     {
//       question: `Is this tour suitable for families?`,
//       answer: `Yes, our tour is designed to accommodate families. The itinerary is packed with a variety of activities and attractions that appeal to all age groups, ensuring an exciting and engaging experience for everyone. Comfortable transportation and family-friendly accommodations make it an ideal choice for family vacations.`,
//     },
//     {
//       question: `Can I customize my 8-day Rajasthan tour itinerary?`,
//       answer: `Absolutely! We get it that each voyager has special preferences. That's why our 8-day Rajasthan tour is fully customizable. You can add extra days, include specific attractions, or adjust the accommodation to meet your needs. Our team is here to help create your perfect, personalized itinerary.`,
//     },
//     {
//       question: `When is the best time to book a Rajasthan budget tour package?`,
//       answer: `The best time to visit Rajasthan is from ${temp.bold(
//         `October to March`
//       )} when the climate is lovely and appropriate for touring. Booking in advance during these months makes sure you are available and allows you to secure the best rates. Our tours are popular, but we always strive to accommodate our guests so you can book with confidence and enjoy the whole experience of Rajasthan.`,
//     },
//   ],
// };
