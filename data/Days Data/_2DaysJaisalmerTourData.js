import { FaCheckCircle, FaFileContract, FaTimesCircle } from 'react-icons/fa';
const temp = {
  bold: (text) => `<span class='fw-bold'>${text}</span>`,
  link: (text, url) =>
    `<a class='text-web' target='_blank' href='${url}'>${text}</a>`,
};
// Destination Covered by the tour
export const destinationCovered = {
  title: 'Destination Covered',
  destinations: ['Jaisalmer', 'Desert - Sand Dunes'],
};
// Tour Overview Data
export const tourOverview = {
  title: `Tour <strong>Overview</strong>`,
  content: [
    `Our ${temp.bold(
      `2-Day Jaisalmer Tour Package`
    )} offers visitors looking for a quick way to discover its idyllic desert landscape, historical landmarks, and vibrant culture in just 2 days. This itinerary is perfect as a weekend escape, allowing visitors to fully embrace Jaisalmer's unique charms.`,
    `Experience an exhilarating Jaisalmer Camel Safari ride through magnificent dunes where breathtaking sunsets meet tranquil desert landscapes! Don't miss the thrills and adventure on one of ${temp.bold(
      `Jaisalmer Camel Safari`
    )} rides through spectacular dunes for an incredible journey in Jaisalmer.`,
  ],
};
// Days Covered by the tour
export const tourItinerary = {
  title: `Tour <strong>Itinerary</strong>`,
  content: [
    {
      day: 'Day 01',
      title:
        'Desert, Jaisalmer: Arrival, Transfer to Desert Camp, Camel Ride over Sand Dunes & Stay in Swiss Tent',
      content: `
        <span class='itinerary-pts'>On arrival, you are greeted by our representative and transferred to Sam Sand Dunes.</span>
        <span class='itinerary-pts'>Upon arrival, Check-In and relaxation in Tent.</span>
        <span class='itinerary-pts'>In the evening, you will have a unique experience of the Desert-like Arabian night by making an overnight stay over dunes with tented accommodations and cultural programs, and also enjoy a photogenic sunset on camelback.</span>
        <span class='itinerary-pts'>Overnight at Desert Camp.</span>
        `,
    },
    {
      day: 'Day 02',
      title: 'Jaisalmer: Full-day Jaisalmer City Tour and Drop',
      content: `
        <span class='itinerary-pts'>After breakfast, we checkout from Desert Camp and visit Lodurva, Kuldhara, Amar Sagar, Badabagh, Jaisalmer Fort, Palace, Museum, Ancient Jain Temple (Inside Fort), Patwon Ki Haveli & Nathmal Ki Haveli.</span>
        <span class='itinerary-pts'>In the evening, you will be dropped off at Jaisalmer Airport or Railway Station to connect your onward journey.</span>
        <span class='itinerary-pts itinerary-end'>Your 02 Days Jaisalmer Tour Ends with Lifetime Happy Memories.......</span>
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
    'Enjoy an exhilarating camel ride across mesmerizing sand dunes to capture the spirit of the desert landscape.',
    'Experience a unique overnight stay in a desert camp, enjoying the charm of tented accommodations under the starry sky.',
    'Delight in traditional cultural programs during your desert stay, showcasing the rich heritage and vibrant traditions of Rajasthan.',
  ],
};
// More Info about the tour
export const packageData = [
  {
    title: 'Package Inclusions',
    icon: FaCheckCircle,
    content: `
              <span class='itinerary-pts'>01 Night Accommodation at Desert Camp.</span>
              <span class='itinerary-pts'>Breakfast.</span>
              <span class='itinerary-pts'>All Sightseeing and transfers by an Exclusive Air-Conditioned Vehicle.</span>
              <span class='itinerary-pts'>Driver Allowance, Fuel, Parking Charges, Toll Taxes and Interstate Taxes.</span>
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
    icon: FaTimesCircle,
    content: `
              <span class='itinerary-pts'>Anything not mentioned under ‘Package Inclusions’.</span>
              <span class='itinerary-pts'>Meals & drinks other than specified in inclusions.</span>
              <span class='itinerary-pts'>Expenses of personal nature such as travel insurance, portages, laundry expenses, etc.</span>
              <span class='itinerary-pts'>Monument tourist entrance & camera fees, guide & driver tippings.</span>
            `,
  },
  {
    title: 'Terms & Conditions',
    icon: FaFileContract,
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
// faq
export const tourFaq = {
  questions: [
    {
      question: `What constitutes a 2-Day Jaisalmer Tour Package?`,
      answer: `Our ${temp.bold(
        `2-Day Jaisalmer Tour Package`
      )} entails accommodation, transport, meals and guided visits of major sites such as Jaisalmer Fort and Sam Sand Dunes.`,
    },
    {
      question: `What are the top tourist spots in Jaisalmer?`,
      answer: `Jaisalmer boasts many must-visit spots such as ${temp.bold(
        `Jaisalmer Fort`
      )}, Patwon Ki Haveli, Sam Sand Dunes and Gadisar Lake; just some can be seen below!`,
    },
    {
      question: `Are your Jaisalmer Tour Packages suitable for families traveling with young children?`,
      answer: `Absolutely. We created the ${temp.bold(
        `Jaisalmer Tour Package`
      )} specifically with families in mind and feature engaging activities suitable for all age groups.`,
    },
    {
      question: `Do I have the option of personalizing my 2 Day Jaisalmer Tour Package?`,
      answer: `Absolutely. Our custom 2 Days Jaisalmer Tour Package can be tailored specifically to include attractions or experiences of interest for you - simply let us know which experiences speak to you the most and we'll include them all!`,
    },
    {
      question: `What Activities Will Be Offered on My Jaisalmer Tour? `,
      answer: `A two-Day Jaisalmer tour provides numerous exciting experiences, from ${temp.bold(
        `Jaisalmer Camel Safari`
      )} rides through the desert and cultural performances, to exploring its rich heritage and sightseeing tours of Jaisalmer itself.`,
    },
  ],
};
