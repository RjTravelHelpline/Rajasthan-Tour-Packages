import { FaCheckCircle, FaFileContract, FaTimesCircle } from 'react-icons/fa';
const temp = {
  bold: (text) => `<span class='fw-bold'>${text}</span>`,
  link: (text, url) =>
    `<a class='text-web' target='_blank' href='${url}'>${text}</a>`,
};

export const destinationCovered = {
  title: 'Destination Covered',
  destinations: ['Jaipur', 'Pushkar', 'Chittorgarh', 'Udaipur'],
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
      `5-Day Golden Triangle Tour`
    )}  Rajasthan also includes visiting Pushkar, where the sacred Brahma Temple and the serene Pushkar Lake await. If you're looking for ${temp.bold(
      `Rajasthan Family Tour Packages`
    )}, this travel package offers a diverse mix of adventure, history, and relaxation, ensuring a memorable time for all ages. By choosing this ${temp.link(
      `Rajasthan Tour Package`,
      `https://www.rajasthantourpackages.in/`
    )}, you will explore the best of Rajasthan in just five days, leaving you with a treasure trove of memories of India's royal state.`,
  ],
};

// Tour Highlights
export const tourHighlights = {
  title: `tour <strong>highlights</strong>`,
  content: [
    'Explore the UNESCO World Heritage Site of Amber Fort, an iconic destination.',
    'Take a tour of Elephant Village, where you can feed these magnificent creatures and even go for a ride on their backs.',
    "Discover Udaipur's ambiance and scenic beauty, also known as the City of Lakes.",
    'At Pratap Gaurav Kendra, witness the bravery and courage of Maharana Pratap.',
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
      title: 'Agra: Delhi to Agra Transfer, Half-day Agra Tour',
      content: `
          <span class='itinerary-pts'>On the second day of your 5-day Golden Triangle Tour, we will check out from the Delhi hotel and transfer to Agra (240 kms / 4 hours drive).</span>
          <span class='itinerary-pts'>En route, we will visit Sikandra – the burial place of Akbar and Itimad Ud Daulah.</span>
          <span class='itinerary-pts'>Upon arrival, check in at the hotel.</span>
          <span class='itinerary-pts'>In the evening, we visit Agra Fort along with a guide.</span>
          <span class='itinerary-pts'>Overnight stay will be in Agra.</span>
        `,
    },
    {
      day: 'Day 03',
      title:
        'Jaipur: Taj Mahal Visit, Agra to Jaipur Transfer, Fatehpur Sikri and Abhaneri Visit',
      content: `
          <span class='itinerary-pts'>Early morning, along with a guide, we visit the Taj Mahal – the symbol of love.</span>
          <span class='itinerary-pts'>After breakfast, check out from the hotel and transfer to Jaipur (250 kms / 5 hours drive).</span>
          <span class='itinerary-pts'>En route, we will visit Fatehpur Sikri – the dream city of Akbar and Abhaneri Stepwell, also known as Chand Baori.</span>
          <span class='itinerary-pts'>We reach Jaipur by evening and check in at the hotel.</span>
          <span class='itinerary-pts'>Evening free for self-exploration.</span>
          <span class='itinerary-pts'>Overnight stay will be in Jaipur hotel.</span>
        `,
    },
    {
      day: 'Day 04',
      title: 'Jaipur: Full Day Jaipur City Tour and Elephant Village Visit',
      content: `
          <span class='itinerary-pts'>On the second day of your 8-day Rajasthan Tour, you will start early in the morning with a delicious breakfast at the hotel.</span>
          <span class='itinerary-pts'>Our guide will join you in the morning for a full-day Jaipur City Tour, which covers the City Palace, Jantar Mantar, Walled Pinkcity, Amer Fort, Elephant Village (Hathi Gaon), and local markets.</span>
          <span class='itinerary-pts'>In the evening, enjoy a breathtaking view of Pinkcity and a stunning sunset from Nahargarh Fort, situated on the edge of the Aravali Hills.</span>
          <span class='itinerary-pts'>Overnight stay will be in Jaipur.</span>
        `,
    },
    {
      day: 'Day 05',
      title: 'Jaipur: Half-day Jaipur City Tour and Drop',
      content: `
          <span class='itinerary-pts'>After breakfast, check out from the hotel and visit Galta Ji (Monkey Temple), Albert Hall Museum, Birla Temple, & Patrika Gate.</span>
          <span class='itinerary-pts'>After lunch, drop at Jaipur Airport / Railway Station to connect your onward journey.</span>
        `,
    },
  ],
};

// More Info about the tour
export const packageData = [
  {
    title: 'Package Inclusions',
    icon: FaCheckCircle,
    content: `
        <span class='itinerary-pts'>04 Nights / 05 Days Air-Conditioned Accommodation.</span>
        <span class='itinerary-pts'>Daily Breakfast & Dinner.</span>
        <span class='itinerary-pts'>All Sightseeing and transfers by an Exclusive Air-Conditioned Vehicle.</span>
        <span class='itinerary-pts'>Driver Allowance, Fuel, Parking Charges, Toll Taxes and Interstate Taxes.</span>
        <span class='itinerary-pts'>Local Guide Services during Sightseeing.</span>
        <span class='itinerary-pts'>Packaged Drinking Water Bottles during Travel.</span>
        <span class='itinerary-pts'>Farewell Gift on Departure.</span>
        <span class='itinerary-pts'>Child below 5 years is complimentary (without extra bed & seat).</span>
        <span class='itinerary-pts'>All Taxes.</span>
      `,
  },
  {
    title: 'Package Exclusions',
    icon: FaTimesCircle,
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
    icon: FaFileContract,
    content: `
        <span class='itinerary-pts'>Tour Prices are Per Person.</span>
        <span class='itinerary-pts'>Package Costs may change during the Weekends, Festivals & New Year Period.</span>
        <span class='itinerary-pts'>Above Tour Rates are in Indian Rupees.</span>
        <span class='itinerary-pts'>With Single Occupancy Room, package cost will be 50% additional.</span>
        <span class='itinerary-pts'>Child above 6 years and additional adult sharing same room will cost 75% of Tour Cost, including Extra Bed, Transportation, and Meals.</span>
        <span class='itinerary-pts'>All payments to be made by Cheque / Demand Draft / QR Code are only payable at Jaipur in name of our firm “Rajasthan Travel Helpline”.</span>
        <span class='itinerary-pts'>All disputes subject to jurisdiction of Jaipur Court only.</span>
        <span class='itinerary-pts'>E. & O. E.</span>
      `,
  },
];

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
