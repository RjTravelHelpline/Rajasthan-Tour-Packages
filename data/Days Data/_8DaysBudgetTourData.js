import { FaCheckCircle, FaFileContract, FaTimesCircle } from 'react-icons/fa';
export const temp = {
  bold: (text) => `<span class='fw-bold'>${text}</span>`,
  link: (text, url) =>
    `<a class='text-web' target='_blank' href='${url}'>${text}</a>`,
};
// // Destination Covered by the tour
export const destinationCovered = {
  title: 'Destination Covered',
  destinations: [
    'Jaipur',
    'Pushkar',
    'Chittorgarh',
    'Udaipur',
    'Kumbhalgarh',
    'Jodhpur',
    'Jaisalmer',
    'Thar Desert',
  ],
};
export const tourOverview = {
  title: `tour <strong>overview</strong>`,
  content: [
    `Discover the majestic landscapes, rich history, and vibrant culture of Rajasthan with our ${temp.bold(
      `8 days Rajasthan Budget Tour`
    )}. This comprehensive itinerary is designed for travelers looking to experience the best of Rajasthan without straining their finances. Over ${temp.bold(
      `7 nights and 8 days`
    )}, you will visit iconic cities like Jaipur, Jodhpur, Udaipur, and Pushkar, immersing yourself in the local traditions and architectural wonders. Each town has its unique charm, from the pink hues of Jaipur's Hawa Mahal to the blue city of Jodhpur, making this journey memorable.`,
    `Our ${temp.bold(
      `budget Rajasthan tour packages`
    )} cater to various travelers, ensuring comfort and affordability. With our expertly crafted ${temp.bold(
      `08 days Rajasthan tour itinerary`
    )}, you will enjoy a perfect blend of sightseeing and leisure. From exploring the magnificent forts and palaces to immersing in the local markets and cuisine, this tour is tailored to provide a rich, culturally enriching experience without compromising quality. With comfortable housing and transportation included, you can unwind and douse in the magnificence of Rajasthan.`,
    `This ${temp.bold(
      `7 nights 8 days Rajasthan itinerary`
    )} also features guided tours, ensuring you can see all the key attractions. Engage with local culture, visit UNESCO World Heritage Sites, and witness breathtaking sunsets over lakes. Our tours are designed to offer maximum value for your money, making them ideal for solo travelers and families. Choose from a range of budget ${temp.link(
      `Rajasthan tour packages`,
      'https://www.rajasthantourpackage.in/'
    )} that fit your needs and preferences, and embark on a journey that will create memories for a lifetime.`,
  ],
};
export const tourHighlights = {
  title: `tour <strong>highlights</strong>`,
  content: [
    'Take a tour of Elephant Village, where you can feed these magnificent creatures and even go for a ride on their backs.',
    "Discover Udaipur's romantic ambiance and scenic beauty, also known as the City of Lakes.",
    'At Pratap Gaurav Kendra, witness the bravery and courage of Maharana Pratap.',
    "Visit Jodhpur, known as the 'Blue City,' to explore its rich history, culture, and architectural marvels.",
    'Experience a camel safari in the Thar Desert, exploring the dunes and witnessing mesmerizing sunsets.',
    'All sightseeing and transfers are provided by air-conditioned vehicles, and you will be accompanied by knowledgeable local guides throughout your journey.',
  ],
};

export const tourItinerary = {
  title: `tour <strong>itinerary</strong>`,
  content: [
    {
      day: 'Day 01',
      title: 'Jaipur: Arrival & Half-day Jaipur City Tour',
      content: `
          <span class='itinerary-pts'>Our representative will meet you upon your arrival and escort you to the hotel.</span>
          <span class='itinerary-pts'>As soon as the check-in process is complete, we'll embark on the Outer Jaipur City Tour, which includes visits to Patrika Gate, Birla Mandir, Albert Hall Museum, Hawa Mahal, and Jal Mahal.</span>
          <span class='itinerary-pts'>In the evening, enjoy a breathtaking view of Pinkcity and a stunning sunset from Nahargarh Fort, situated on the edge of the Aravali Hills.</span>
          <span class='itinerary-pts'>You will spend the night in Jaipur.</span>
        `,
    },
    {
      day: 'Day 02',
      title: 'Jaipur: Full Day Jaipur City Tour and Elephant Village Visit',
      content: `
          <span class='itinerary-pts'>On the second day of your 8-day Rajasthan Tour, you will start early in the morning with a delicious breakfast at the hotel.</span>
          <span class='itinerary-pts'>Our guide will join you in the morning for a full-day Jaipur City Tour, which covers the City Palace, Jantar Mantar, Walled Pinkcity, Amer Fort, Elephant Village (Hathi Gaon), and Local Markets.</span>
          <span class='itinerary-pts'>You will have the evening free for self-exploration.</span>
          <span class='itinerary-pts'>Overnight stay will be in Jaipur.</span>
        `,
    },
    {
      day: 'Day 03',
      title:
        'Udaipur: Jaipur to Udaipur Transfer, Marble Dumping Yard, Pushkar & Chittorgarh Visit',
      content: `
          <span class='itinerary-pts'>After an early breakfast, we will check out from the hotel and proceed towards Udaipur, which is a distance of 450 kilometers and takes approximately 7-8 hours to drive.</span>
          <span class='itinerary-pts'>On our way to Udaipur, we will visit the Marble Dumping Yard Kishangarh (also known as Rajasthan's Switzerland), the world's only Lord Brahma Temple at Holy Town Pushkar, and Chittorgarh Fort, one of India's largest forts.</span>
          <span class='itinerary-pts'>We will reach Udaipur by evening and check into our hotel.</span>
          <span class='itinerary-pts'>Overnight stay will be in Udaipur.</span>
        `,
    },
    {
      day: 'Day 04',
      title: 'Udaipur: Full Day Udaipur City Tour',
      content: `
          <span class='itinerary-pts'>After breakfast, we will begin our guided tour of Udaipur by visiting several popular attractions such as the majestic City Palace, serene Lake Pichola, the beautiful Jagdish Temple, and the picturesque Saheliyon Ki Bari garden.</span>
          <span class='itinerary-pts'>We will also visit Pratap Smark, Fateh Sagar Lake, and Pratap Gaurav Kendra to learn more about the history and culture of this lovely city.</span>
          <span class='itinerary-pts'>During the tour, you will have the opportunity to enjoy a scenic boat ride on Lake Pichola, passing by iconic landmarks such as Jag Mandir and the Lake Palace.</span>
          <span class='itinerary-pts'>In the evening, you are free to explore the city on your own.</span>
          <span class='itinerary-pts'>Overnight stay will be in Udaipur.</span>
        `,
    },
    {
      day: 'Day 05',
      title: 'Jodhpur: Udaipur to Jodhpur Transfer, Kumbhalgarh Fort Visit',
      content: `
          <span class='itinerary-pts'>After breakfast, check out of the hotel and transfer to Jodhpur (260 km / 6 Hours drive).</span>
          <span class='itinerary-pts'>En route, we visit Kumbhalgarh Fort, which offers a glimpse into Rajasthan's rich history, architectural brilliance, and natural beauty, making it a must-visit destination for history buffs, culture enthusiasts, and nature lovers alike.</span>
          <span class='itinerary-pts'>We will reach Jodhpur by late afternoon and check-in at the hotel.</span>
          <span class='itinerary-pts'>Soon after check-in, we visit Umaid Bhawan Palace, Museum, Clock Tower & Jodhpur Old City, also known as "Blue City."</span>
          <span class='itinerary-pts'>Overnight stay will be in Jodhpur.</span>
        `,
    },
    {
      day: 'Day 06',
      title: 'Jaisalmer: Half-day Jodhpur City Tour and Transfer to Jaisalmer',
      content: `
          <span class='itinerary-pts'>After breakfast, it's time to check out from the hotel and head to The Majestic Mehrangarh Fort and Jaswant Thada.</span>
          <span class='itinerary-pts'>Later, we will proceed towards Jaisalmer which is at a distance of 280 km and will take around 6 hours to reach.</span>
          <span class='itinerary-pts'>Once we reach Jaisalmer, we will check-in at the hotel.</span>
          <span class='itinerary-pts'>In the evening, we will visit War Museum, Gadisar Lake & Vyas Chattri.</span>
          <span class='itinerary-pts'>You will spend the night in Jaisalmer.</span>
        `,
    },
    {
      day: 'Day 07',
      title:
        'Desert, Jaisalmer: Half-day Jaisalmer City Tour, Camel Ride over Sand Dunes and Desert Camp Stay',
      content: `
          <span class='itinerary-pts'>After having breakfast, we will check out of the hotel and head towards Jaisalmer Fort to visit the Fort, Palace, Museum, Jain Temple (located inside the fort), Nathmal Haveli, and Patwa Haveli.</span>
          <span class='itinerary-pts'>Following the visit, we will have lunch and then proceed towards the desert for an unforgettable experience.</span>
          <span class='itinerary-pts'>In the evening, we will witness a picturesque sunset while riding on the back of a camel.</span>
          <span class='itinerary-pts'>We will stay overnight in tented accommodations over the dunes and enjoy cultural programs in the evening.</span>
          <span class='itinerary-pts'>The overnight stay will be at the Desert Camp.</span>
        `,
    },
    {
      day: 'Day 08',
      title: 'Jaipur: Transfer back to Jaipur and Departure',
      content: `
          <span class='itinerary-pts'>After breakfast, check out from the Desert Camp and transfer to Jaipur (550 km / 9 hours drive).</span>
          <span class='itinerary-pts'>End of the 8-day Rajasthan tour as we drop you at Jaipur Airport / Railway Station to connect your onward journey.</span>
        `,
    },
  ],
};

export const packageData = [
  {
    title: 'Package Inclusions',
    icon: 'FaCheckCircle',
    content: `
        <span class='itinerary-pts'>07 Nights / 08 Days Air-Conditioned Accommodation.</span>
        <span class='itinerary-pts'>Daily Breakfast & Dinner.</span>
        <span class='itinerary-pts'>All Sightseeing and transfers by an Exclusive Air-Conditioned Vehicle.</span>
        <span class='itinerary-pts'>Driver Allowance, Fuel, Parking Charges, Toll Taxes and Interstate Taxes.</span>
        <span class='itinerary-pts'>Local Guide Services during Sightseeing.</span>
        <span class='itinerary-pts'>Packaged Drinking Water Bottles during Travel.</span>
        <span class='itinerary-pts'>Hi-Tea with Bonfire & Cultural Programs at Desert Camp.</span>
        <span class='itinerary-pts'>Camel Ride over Sand Dunes.</span>
        <span class='itinerary-pts'>Farewell Gift on Departure.</span>
        <span class='itinerary-pts'>Child below 5 years is complimentary (without extra bed & seat).</span>
        <span class='itinerary-pts'>All Taxes.</span>
      `,
  },
  {
    title: 'Package Exclusions',
    icon: 'FaTimesCircle',
    content: `
        <span class='itinerary-pts'>Anything not mentioned under ‘Package Inclusions’.</span>
        <span class='itinerary-pts'>Meals & drinks other than specified in inclusions.</span>
        <span class='itinerary-pts'>Expenses of personal nature such as travel insurance, portages, laundry expenses etc.</span>
        <span class='itinerary-pts'>Monument tourist entrance & camera fees, guide & driver tippings.</span>
        <span class='itinerary-pts'>Elephant Village Visit and Boat Ride Charges.</span>
      `,
  },
  {
    title: 'Terms & Conditions',
    icon: 'FaFileContract',
    content: `
        <span class='itinerary-pts'>Tour Prices are Per Person.</span>
        <span class='itinerary-pts'>Package Costs may change during the Weekends, Festivals & New Year Period.</span>
        <span class='itinerary-pts'>Above Tour Rates are in Indian Rupees.</span>
        <span class='itinerary-pts'>With Single Occupancy Room, package cost will be 50% Additional.</span>
        <span class='itinerary-pts'>Child Above 6 Years and Additional Adult sharing same room will cost 75% of Tour Cost, including Extra Bed, Transportation, and Meals.</span>
        <span class='itinerary-pts'>All payments to be made by Cheque / Demand Draft / QR Code are only payable at Jaipur in name of our firm “Rajasthan Travel Helpline”.</span>
        <span class='itinerary-pts'>All disputes subject to jurisdiction of Jaipur Court only.</span>
        <span class='itinerary-pts'>E. & O. E.</span>
      `,
  },
];

export const tourFaq = {
  questions: [
    {
      question: `What is included in the 8-Day Rajasthan Budget Tour?`,
      answer: `The ${temp.bold(
        `8 Days Rajasthan Budget Tour`
      )} includes Accommodation in budget hotels, All transportation is in comfortable vehicles, Guided tours to major attractions and Selected meals. Entrance fees to monuments and activities mentioned in the itinerary are also covered.`,
    },
    {
      question: `Which cities will we visit during the tour?`,
      answer: `During the ${temp.bold(
        `7 nights 8 days Rajasthan itinerary`
      )}, you will explore vibrant cities, including Jaipur, known as the Pink City; Jodhpur, the Blue City; Udaipur, the City of Lakes; and Pushkar, celebrated for its sacrosanct lake and Brahma Temple. Each city offers a unique glimpse into Rajasthan's culture and heritage.`,
    },
    {
      question: `Is this tour suitable for families?`,
      answer: `Yes, our tour is designed to accommodate families. The itinerary is packed with a variety of activities and attractions that appeal to all age groups, ensuring an exciting and engaging experience for everyone. Comfortable transportation and family-friendly accommodations make it an ideal choice for family vacations.`,
    },
    {
      question: `Can I customize my 8-day Rajasthan tour itinerary?`,
      answer: `Absolutely! We get it that each voyager has special preferences. That's why our 8-day Rajasthan tour is fully customizable. You can add extra days, include specific attractions, or adjust the accommodation to meet your needs. Our team is here to help create your perfect, personalized itinerary.`,
    },
    {
      question: `When is the best time to book a Rajasthan budget tour package?`,
      answer: `The best time to visit Rajasthan is from ${temp.bold(
        `October to March`
      )} when the climate is lovely and appropriate for touring. Booking in advance during these months makes sure you are available and allows you to secure the best rates. Our tours are popular, but we always strive to accommodate our guests so you can book with confidence and enjoy the whole experience of Rajasthan.`,
    },
  ],
};
