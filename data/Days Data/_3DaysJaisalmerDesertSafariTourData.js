import { FaCheckCircle, FaFileContract, FaTimesCircle } from 'react-icons/fa';
const temp = {
  bold: (text) => `<span class='fw-bold'>${text}</span>`,
  link: (text, url) =>
    `<a class='text-web' target='_blank' href='${url}'>${text}</a>`,
};
// Destination Covered by the tour
export const destinationCovered = {
  title: 'Destination Covered',
  destinations: [
    'Jaisalmer',
    'Desert - Sand Dunes',
    'Longewala',
    'Tanot Mata Temple',
    'India-Pak Border',
  ],
};
// Tour Overview Data
export const tourOverview = {
  title: `Tour <strong>Overview</strong>`,
  content: [
    `Join our ${temp.bold(
      `Jaisalmer Tour Package`
    )} on an extraordinary journey into the heart of Thar Desert to witness its stunning architecture - staggering designs, golden fortifications and vibrant leaf culture are hallmarks of Jaisalmer architecture; explore historic monuments combined with desert landscape beauty on our ${temp.bold(
      `03 Days Jaisalmer Desert Safari Tour`
    )}; marvel at Jaisalmer Fort before embarking on camel safari - discover everything Jaisalmer has to offer during one unforgettable journey!`,
    `As part of your Jaisalmer Tour Package, start exploring its iconic Jaisalmer Fort - an ancient fortress built of golden sandstone that dates back to 1156 AD - before visiting places, temples and intricately designed havelis that showcase Rajasthani royal history - stroll its narrow streets for views of Patwon Ki Haveli or ${temp.bold(
      `Salim Singh Ki Haveli`
    )} that boast exquisite architecture with intricate carvings or visit vibrant markets for souvenir shopping opportunities!`,
    `Jaisalmer tour packages provide visitors with an exhilarating camel safari ride through the ${temp.bold(
      `Thar Desert's`
    )} vast dunes for unforgettable sunset views! Experience its magic up close on camelback; its power enthralls visitors! Spend an evening reveling in traditional Rajasthani music and vibrant exhibitions under a starlit sky at one of our overnight camps, then visit ${temp.bold(
      `Sam Sand Dunes`
    )} to experience cultural programs as well as authentic Rajasthani cuisine! Don't forget...! This three-day tour promises an authentic desert experience while offering comfortable accommodations and expert-guided tours that won't miss any wonders in Jaisalmer. Book the Jaisalmer Tour Package now to discover its captivating combination of history, culture, and adventure - or explore additional ${temp.link(
      `Rajasthan Tour Packages`,
      'https://www.rajasthantourpackages.in/'
    )} options available online.`,
  ],
};
// Days Covered by the tour
export const tourItinerary = {
  title: `Tour <strong>Itinerary</strong>`,
  content: [
    {
      day: 'Day 01',
      title: 'Jaisalmer: Arrival & Half-day Jaisalmer City Tour',
      content: `
      <span class='itinerary-pts'>On arrival, you are greeted by our representative and transferred to your Hotel.</span>
      <span class='itinerary-pts'>After finishing the check-in procedure and freshening up, your 3-Day Jaisalmer Desert Tour will start with our Tour Guide covering – Jaisalmer Fort, Palace, Museum, Ancient Jain Temple (Inside Fort), Patwon Ki Haveli & Nathmal Ki Haveli.</span>
      <span class='itinerary-pts'>In the evening we visit Gadisar Lake & Vyas Chattri.</span>
      <span class='itinerary-pts'>Overnight at Jaisalmer Hotel.</span>
      `,
    },
    {
      day: 'Day 02',
      title:
        'Desert, Jaisalmer: Tanot Mata Temple & India - Pak Border Visit, Camel Ride over Sand Dunes & Stay in Desert Camp',
      content: `
      <span class='itinerary-pts'>After breakfast Checkout from Hotel & transfer to visit Tanot Mata Temple and India - Pak Border.</span>
      <span class='itinerary-pts'>We also visit Longewala - The Battle Field of 1971 India - Pakistan War & Army War Museum.</span>
      <span class='itinerary-pts'>By the late afternoon, we reach Desert Camp for a unique experience of the Desert-like Arabian night by making overnight stay over dunes with tented accommodations and cultural programs and also enjoy a photogenic sunset on camelback.</span>
      <span class='itinerary-pts'>Overnight at Desert Camp.</span>
      `,
    },
    {
      day: 'Day 03',
      title: 'Jaisalmer: Outer Jaisalmer Sightseeing and Drop',
      content: `
      <span class='itinerary-pts'>After breakfast we checkout from Desert Camp and explore Lodurva, Kuldhara, Amar Sagar & Badabagh.</span>
      <span class='itinerary-pts'>At the time of onwards journey, you will be transferred to Railway Station.</span>
      <span class='itinerary-pts itinerary-end'>Your 03 Days Jaisalmer Desert Safari Tour Ends with Lifetime Happy Memories.......</span>
      `,
    },
  ],
};
// Tour Highlights
export const tourHighlights = {
  title: `Tour <strong>Highlights</strong>`,
  content: [
    'Discover the iconic Jaisalmer Fort, a UNESCO World Heritage Site celebrated for its breathtaking architecture and vibrant culture.',
    'Take in picturesque views of Gadisar Lake, an idyllic sanctuary of temples and ghats ideal for an evening stroll.',
    'Visit Tanot Mata Temple near the India-Pakistan border for divine blessings and pay your obeisance at its sacred site.',
    'Journey back in time at Longewala Battlefield, where an important clash took place during the 1971 Indo-Pak War; visit its Army War Museum for added insight!',
    'Enjoy an exhilarating camel ride across mesmerizing sand dunes to capture the spirit of the desert landscape.',
    'Experience a unique overnight stay in a desert camp, enjoying the charm of tented accommodations under the starry sky.',
    'Delight in traditional cultural programs during your desert stay, showcasing the rich heritage and vibrant traditions of Rajasthan.',
  ],
};
// More Info about the tour
export const packageData = [
  {
    title: 'Package Inclusions',
    icon: 'FaCheckCircle',
    content: `
            <span class='itinerary-pts'>01 Night Air-Conditioned Accommodation in Deluxe Category Hotel.</span>
            <span class='itinerary-pts'>01 Night Accommodation at Desert Camp.</span>
            <span class='itinerary-pts'>Daily Breakfast.</span>
            <span class='itinerary-pts'>All Sightseeing and transfers by an Exclusive Air-Conditioned Vehicle.</span>
            <span class='itinerary-pts'>Driver Allowance, Fuel, Parking Charges, Toll Taxes, and Interstate Taxes.</span>
            <span class='itinerary-pts'>Desert Camp Stay includes Camel Ride, Hi-Tea, Bonfire, Cultural Programs & Veg Dinner.</span>
            <span class='itinerary-pts'>Local Guide Services during Jaisalmer Fort & Haveli Visits.</span>
            <span class='itinerary-pts'>Packaged Drinking Water Bottles during Travel.</span>
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
            <span class='itinerary-pts'>Expenses of personal nature such as travel insurance, portages, laundry expenses, etc.</span>
            <span class='itinerary-pts'>Monument tourist entrance & camera fees, guide & driver tippings.</span>
          `,
  },
  {
    title: 'Terms & Conditions',
    icon: 'FaFileContract',
    content: `
            <span class='itinerary-pts'>Tour Prices are Per Person.</span>
            <span class='itinerary-pts'>Package Costs may change during the Weekends, Festivals & New Year Period.</span>
            <span class='itinerary-pts'>Above Tour Rates are in Indian Rupees.</span>
            <span class='itinerary-pts'>Hotel Upgradation is available at Additional Cost.</span>
            <span class='itinerary-pts'>With Single Occupancy Room, package cost will be 50% additional.</span>
            <span class='itinerary-pts'>Child Above 6 Years and Additional Adult sharing the same room will cost 75% of Tour Cost, including Extra Bed, Transportation, and Meals.</span>
            <span class='itinerary-pts'>All payments to be made by Cheque / Demand Draft / QR Code are only payable at Jaipur in the name of our firm “Rajasthan Travel Helpline”.</span>
            <span class='itinerary-pts'>All disputes subject to jurisdiction of Jaipur Court only.</span>
            <span class='itinerary-pts'>E. & O. E.</span>
          `,
  },
];

export const tourFaq = {
  questions: [
    {
      question: 'What does the 3-day Jaisalmer Desert Safari Tour include?',
      answer: `Our ${temp.bold(
        `3-day Jaisalmer Desert Safari Tour`
      )} includes guided tours of ${temp.bold(`Jaisalmer Fort`)}, ${temp.bold(
        `Patwon Ki Haveli`
      )}, and ${temp.bold(
        `Sam Sand Dunes`
      )}. The package covers transportation, camel safari, cultural performances, desert camping, and meals during the desert stay.`,
    },
    {
      question: 'What is the best time to book the Jaisalmer Tour Package?',
      answer: `The ideal time to book the ${temp.bold(
        `Jaisalmer Tour Package`
      )} is ${temp.bold(
        `October and March`
      )}. The climate is wonderful amid these months, culminating in investigating the ${temp.bold(
        `Thar Desert`
      )} and getting a charge out of a camel safari.`,
    },
    {
      question:
        'Is camel safari included in the  Jaisalmer Desert Safari Tour?',
      answer: `Yes, the ${temp.bold(
        `3 Days Jaisalmer Desert Safari Tour`
      )} includes a thrilling camel safari. You will ride camels across the Sam Sand Dunes for approximately insert duration, witness stunning desert landscapes, and experience a beautiful sunset over the dunes.`,
    },
    {
      question: 'Can I customize my Jaisalmer Desert Safari Tour?',
      answer: `Yes, the ${temp.bold(
        `Jaisalmer Tour Package`
      )} is designed to accommodate your preferences. Whether you want to extend your stay or add more sightseeing options, our team will work with you to create the perfect itinerary.`,
    },
    {
      question: 'How do I book the 3-day Jaisalmer Desert Safari Tour?',
      answer: `Booking the 3-Day Jaisalmer Desert Safari Tour is a simple and straightforward process. Just visit our ${temp.link(
        `Rajasthan Tour Packages`,
        'https://www.rajasthantourpackages.in/'
      )}. Just fill out the booking form, and our team will confirm your reservation within 24 hours.`,
    },
  ],
};
