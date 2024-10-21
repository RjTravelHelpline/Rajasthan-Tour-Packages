import { FaCheckCircle, FaTimesCircle, FaFileContract } from 'react-icons/fa';
import { temp } from './_8DaysBudgetTourData';
// data.js
// // Destination Covered by the tour
export const destinationCovered = {
  title: 'Destination Covered',
  destinations: [
    'Jaipur',
    'Ranthambhore',
    'Chittorgarh',
    'Udaipur',
    'Kumbhalgarh',
    'Jodhpur',
    'Jaisalmer',
    'Thar Desert',
    'Bikaner',
  ],
};

// Days Covered by the tour
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
        <span class='itinerary-pts'>Our guide will join you in the morning for a full-day Jaipur City Tour, which covers the City Palace, Jantar Mantar, Walled Pinkcity, Amer Fort Elephant Village (Hathi Gaon), and Local Markets.</span>
        <span class='itinerary-pts'>You will have the evening free for self-exploration.</span>
        <span class='itinerary-pts'>Overnight stay will be in Jaipur.</span>
      `,
    },
    {
      day: 'Day 03',
      title:
        'Ranthambhore: Jaipur to Ranthambhore Transfer, Fort Visit and Jungle Safari',
      content: `
        <span class='itinerary-pts'>After an early breakfast, you will check out from the hotel and transfer to Ranthambhore Tiger Reserve.</span>
        <span class='itinerary-pts'>Soon after Check In we visit Ranthambhore Fort & Trinetra Ganesh Temple (Inside Fort).</span>
        <span class='itinerary-pts'>After Lunch, we start an enthralling wildlife safari in the Ranthambhore National Park to spot some of the most exotic and fascinating wildlife species in their most natural habitats.</span>
        <span class='itinerary-pts'>Overnight stay will be in Ranthambhore Hotel / Resort.</span>
      `,
    },
    {
      day: 'Day 04',
      title: 'Udaipur: Jaipur to Udaipur Transfer & Chittorgarh Visit',
      content: `
        <span class='itinerary-pts'>After an early breakfast, we will check out from the hotel and proceed towards Udaipur, which is a distance of 450 kilometers and takes approximately 7-8 hours to drive.</span>
        <span class='itinerary-pts'>On our way to Udaipur, we will visit Chittorgarh Fort, which is one of India's largest forts.</span>
        <span class='itinerary-pts'>We will reach Udaipur by late afternoon and check into our hotel.</span>
        <span class='itinerary-pts'>Evening free for self-exploration.</span>
        <span class='itinerary-pts'>Overnight stay will be in Udaipur.</span>
      `,
    },
    {
      day: 'Day 05',
      title: 'Udaipur: Full Day Udaipur City Tour and Boat Ride',
      content: `
        <span class='itinerary-pts'>After breakfast, we will begin our guided tour of Udaipur by visiting several popular attractions such as the majestic City Palace, serene Lake Pichola, the beautiful Jagdish Temple, and the picturesque Saheliyon Ki Bari garden.</span>
        <span class='itinerary-pts'>We will also visit Pratap Smark, Fateh Sagar Lake, and Pratap Gaurav Kendra to learn more about the history and culture of this lovely city.</span>
        <span class='itinerary-pts'>During the tour, you will have the opportunity to enjoy a scenic boat ride on Lake Pichola, passing by iconic landmarks such as Jag Mandir and the Lake Palace.</span>
        <span class='itinerary-pts'>In the evening, you are free to explore the city on your own.</span>
        <span class='itinerary-pts'>Overnight stay will be in Udaipur.</span>
      `,
    },
    {
      day: 'Day 06',
      title: 'Jodhpur: Udaipur to Jodhpur Transfer, Kumbhalgarh Fort Visit',
      content: `
        <span class='itinerary-pts'>After breakfast, check out of the hotel and transfer to Jodhpur (260 km / 6 Hours drive).</span>
        <span class='itinerary-pts'>En route, we visit Kumbhalgarh Fort, which offers a glimpse into Rajasthan's rich history, architectural brilliance, and natural beauty, making it a must-visit destination for history buffs, culture enthusiasts, and nature lovers alike.</span>
        <span class='itinerary-pts'>We will reach Jodhpur by late afternoon and check-in at the hotel.</span>
        <span class='itinerary-pts'>Soon after Check, we visit Umaid Bhawan Palace, Museum, Clock Tower & Jodhpur Old City, also known as "Blue City."</span>
        <span class='itinerary-pts'>Overnight stay will be in Jodhpur.</span>
      `,
    },
    {
      day: 'Day 07',
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
      day: 'Day 08',
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
      day: 'Day 09',
      title: 'Bikaner: Half Day Jaisalmer City Tour and transfer to Bikaner',
      content: `
        <span class='itinerary-pts'>After breakfast, check out from the Desert Camp and transfer to visit Kuldhara - The Cursed Village, Amar Sagar & Bada Bagh.</span>
        <span class='itinerary-pts'>Later proceed to Bikaner (330 Kms / 5-6 Hours Drive).</span>
        <span class='itinerary-pts'>Soon after Check In we visit Asia's Largest Camel Breeding Farm and Karni Mata Temple also known as “Rat Temple.”</span>
        <span class='itinerary-pts'>Overnight stay in Bikaner.</span>
      `,
    },
    {
      day: 'Day 10',
      title: 'Jaipur: Half Day Bikaner City Tour and Transfer to Jaipur',
      content: `
        <span class='itinerary-pts'>After breakfast, check out from the Hotel and transfer to visit Junagarh Fort, Lallgarh Palace & Museum.</span>
        <span class='itinerary-pts'>Later proceed to Jaipur Airport / Railway Station (350 Kms / 5-6 Hours drive) to connect your onward journey.</span>
      `,
    },
  ],
};

// Overview Data
export const tourOverview = {
  title: `tour <strong>overview</strong>`,
  content: [
    `Set out on a select ${temp.bold(
      `Rajasthan Vacation Tour`
    )} that takes you through the heart of this magnificent state. Over 10 days, this bespoke ${temp.link(
      `Rajasthan Tour Package`,
      `https://www.rajasthantourpackages.in/`
    )} allows you to explore the vibrant culture, rich heritage, and stunning landscapes that Rajasthan is famous for. Your journey begins in the Pink City of Jaipur, where you will visit iconic landmarks like the Amber Fort and Hawa Mahal. Travel to the beautiful Udaipur, known for its picturesque lakes and royal palaces, from Jaipur before heading to Jodhpur, the Blue City. Each destination offers a unique glimpse into the regal history and traditions of Rajasthan.`,
    `Our carefully crafted ${temp.bold(
      `Rajasthan Tour Itinerary`
    )} includes guided city tours, local cuisine experiences, and opportunities to shop for traditional handicrafts. Whether you're interested in exploring forts and palaces or immersing yourself in local culture, this tour caters to all your travel desires. Plus, we offer some of the cheapest ${temp.bold(
      `tour packages for Rajasthan`
    )}, ensuring you get the best value without compromising on quality. With comfortable accommodations and expert guides, your Rajasthan adventure promises to be a memorable experience filled with stories of the past and the warmth of its people.`,
    `This ${temp.bold(
      `10-day Rajasthan Tour`
    )} will cater to numerous travelers, from families to solo globe-trotters and bunches. It provides a holistic view of Rajasthan's beauty and charm, ensuring that everyone can witness the grandeur of Rajasthan firsthand. Take advantage of this opportunity to make recollections that will last a lifetime. Whether it's the stunning architecture, the colorful bazaars, or the mesmerizing desert landscapes, Rajasthan awaits you with open arms. Book your ${temp.link(
      `Rajasthan Tour Packages`,
      `https://rajasthantourpackages.in/`
    )} now and plan for extraordinary travel.`,
  ],
};

// Tour Highlights
export const tourHighlights = {
  title: `tour <strong>highlights</strong>`,
  content: [
    'Explore the UNESCO World Heritage Site of Amber Fort, an iconic destination.',
    'Take a tour of Elephant Village, where you can feed these magnificent creatures and even go for a ride on their backs.',
    'Go on a Jungle Safari through the Ranthambhore Tiger Reserve and try to spot tigers, leopards, and other wildlife.',
    "Discover Udaipur's romantic ambiance and scenic beauty, also known as the City of Lakes.",
    'At Pratap Gaurav Kendra, witness the bravery and courage of Maharana Pratap.',
    "Visit Jodhpur, known as the 'Blue City,' to explore its rich history, culture, and architectural marvels.",
    'Experience a camel safari in the Thar Desert, exploring the dunes and witnessing mesmerizing sunsets.',
    'Visit Asia’s Largest Camel Breeding Farm at Bikaner.',
    'All sightseeing and transfers are provided by air-conditioned vehicles, and you will be accompanied by knowledgeable local guides during historical monuments visits.',
  ],
};

// More Info about the tour
export const packageData = [
  {
    title: 'Package Inclusions',
    icon: FaCheckCircle,
    content: `
      <span class='itinerary-pts'>09 Nights / 10 Days Air-Conditioned Accommodation in 3 Star Hotel.</span>
      <span class='itinerary-pts'>Daily Breakfast & Dinner.</span>
      <span class='itinerary-pts'>All Sightseeing and transfers by an Exclusive Air-Conditioned Vehicle.</span>
      <span class='itinerary-pts'>Driver Allowance, Fuel, Parking Charges, Toll Taxes and Interstate Taxes.</span>
      <span class='itinerary-pts'>Local Guide Services during Sightseeing.</span>
      <span class='itinerary-pts'>Packaged Drinking Water Bottles during Travel.</span>
      <span class='itinerary-pts'>Hi-Tea with Bonfire & Cultural Programs at Desert Camp.</span>
      <span class='itinerary-pts'>01 Jungle Safari by Canter at Ranthambhore Tiger Reserve.</span>
      <span class='itinerary-pts'>Camel Ride over Sand Dunes.</span>
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
      <span class='itinerary-pts'>Hotel Upgradation to Superior, Heritage & Luxury Category is possible at additional cost.</span>
      <span class='itinerary-pts'>All payments to be made by Cheque / Demand Draft / QR Code are only payable at Jaipur in name of our firm “Rajasthan Travel Helpline”.</span>
      <span class='itinerary-pts'>All disputes subject to jurisdiction of Jaipur Court only.</span>
      <span class='itinerary-pts'>E. & O. E.</span>
    `,
  },
];

export const tourFaq = {
  questions: [
    {
      question: `What destinations are included in the Rajasthan Vacation Tour?`,
      answer: `Embark on a ${temp.bold(
        `10 Days Rajasthan Tour`
      )} that takes you through the vibrant cities of Jaipur, Udaipur, Jodhpur, and other significant destinations, offering a rich tapestry of Rajasthan's culture and heritage.`,
    },
    {
      question: `Is transportation included in the Rajasthan Travel Package?`,
      answer: `Yes, all necessary transportation, including spacious and comfortable vehicles for local and intercity travel, is included in the ${temp.bold(
        `Rajasthan Tour Itinerary`
      )}. You can rest assured that your journey will be as comfortable as it is exciting.`,
    },
    {
      question: `Can I customize the itinerary?`,
      answer: `Our ${temp.bold(
        `Rajasthan Vacation Tour Packages`
      )} are designed with your preferences in mind, offering a range of options to customize your itinerary.`,
    },
    {
      question: `Are meals included in the cheapest tour packages for Rajasthan?`,
      answer: `Most packages include breakfast, and you will have opportunities to experience local cuisine during the tour.`,
    },
    {
      question: `What is the best time to book a Rajasthan Tour Package?`,
      answer: `The ideal time to visit Rajasthan is between ${temp.bold(
        `October and March`
      )}, when the weather is pleasant for sightseeing and outdoor activities.`,
    },
  ],
};
