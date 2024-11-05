const temp = {
  bold: (text) => `<span class='fw-bold'>${text}</span>`,
  link: (text, url) =>
    `<a class='text-web' target='_blank' href='${url}'>${text}</a>`,
};

// Destination Covered by the tour
export const destinationCovered = {
  title: 'Destination Covered',
  destinations: ['Jaipur'],
};

// Days Covered by the tour
export const tourItinerary = {
  title: `Tour <strong>Itinerary</strong>`,
  content: [
    {
      day: 'Day 01',
      title:
        'Jaipur: Arrival at Jaipur, Half-Day Jaipur City Tour, and Rajasthani Dinner at Chokhi Dhani',
      content: `
            <span class='itinerary-pts'>On arrival at Jaipur Airport / Railway Station / Bus Stand, you are greeted by a Rajasthan Tour Packages representative and transferred to your Hotel.</span>
            <span class='itinerary-pts'>Immediately after finishing the check-in procedure and freshening up, we will start our 2 Days Jaipur Pushkar Tour itinerary.</span>
            <span class='itinerary-pts'>The first day of your tour will cover some of Jaipur's most popular attractions: City Palace, Observatory (Jantar Mantar), Hawa Mahal (Wind Palace), Walled Pink City, Albert Hall Museum, Birla Mandir, and Patrika Gate.</span>
            <span class='itinerary-pts'>In the evening, we enjoy an authentic Rajasthani dinner in an ethnic village for an enjoyable, relaxing dining experience and overnight at our hotel.</span>
            <span class='itinerary-pts'>Overnight stay in the Hotel.</span>
          
          `,
    },
    {
      day: 'Day 02',
      title:
        'Jaipur: Jhalana Leopard Safari, Full Day Jaipur City Tour, Elephant Village Visit, and Sunset from Nahargarh Fort',
      content: `
            <span class='itinerary-pts'>The Second Day of your 2 Days Jaipur Tour Package starts early in the morning when we wake up and go for Jungle Safari by Open Gypsy at Jhalana Leopard Safari Park, this is one of the best & different experiences of your Jaipur Stay.</span>
            <span class='itinerary-pts'>After coming back to Hotel, we will get ready and have our delicious breakfast.</span>
            <span class='itinerary-pts'>Later, checkout from Hotel and leave for Full Day Jaipur City Tour covering Jal Mahal (Water Palace), Amer Fort (Amber Fort), and Elephant Village (Hathi Gaon), Local Markets, Jaigarh Fort & Nahargarh Fort.</span>
            <span class='itinerary-pts'>In the evening, you will be dropped off at Jaipur Airport / Railway Station / Bus Stand to connect your onward journey.</span>
              <span class='itinerary-pts itinerary-end'>Your 02 Days Jaipur Tour Package Ends with Lifetime Happy Memories.</span>

          `,
    },
  ],
};

// Tour Overview Data
export const tourOverview = {
  title: `Tour <strong>Overview</strong>`,
  content: [
    `This 02-days Jaipur tour offers an expertly planned journey through its glory. This experience gives a peek at Rajasthan's vibrant essence, from majestic architecture and handicrafts to art, culinary treats, and much more. Jaipur is an international tourist destination with a spectacular blend of history, culture, and breathtaking natural beauty. Grand forts and ornate palaces serve as monuments of its past while giving travelers an unforgettable journey experience.`,
    `Jaipur's bustling markets make an ideal shopping paradise, where visitors can discover vivid printed fabrics, precious and semiprecious stones, intricate Kundan Meenakari jewellery pieces like Mojaris with embroidery designs on them, and exquisite blue pottery paintings by local master artists. Miniature paintings and handwoven carpets await them when exploring ${temp.bold(
      `Jaipur Tour package`
    )}. Book our ${temp.bold(
      `02-days Jaipur Tour package`
    )} to easily experience its fascinating traditions, art, and architectural glory guided by our experienced and knowledgeable team.`,
  ],
};

// Tour Highlights
export const tourHighlights = {
  title: `Tour <strong>Highlights</strong>`,
  content: [
    'Jaipur City Tour with Guide',
    'Visit Iconic Amber Fort - A UNESCO World Heritage Site.',
    'Panoramic View of Pinkcity & Sunset from Nahargarh Fort.',
    'Explore Walled Pink City & Stroll in Local Markets.',
    'See the Largest Wheeled Cannon at Jaigarh Fort.',
    'Leopard Safari at Jhalana Leopard Park.',
    'Fun & Adventure with Elephants at Elephant Village Jaipur.',
    'Experience the Rural Side of Rajasthan with Rajasthani Cuisine at Chokhi Dhani.',
  ],
};

// More Info about the tour
export const packageData = [
  {
    title: 'Package Inclusions',
    icon: 'FaCheckCircle',
    content: `
          <span class='itinerary-pts'>01 Night / 02 Days Air-Conditioned Accommodation in Deluxe Category Hotel.</span>
          <span class='itinerary-pts'>Daily Breakfast.</span>
          <span class='itinerary-pts'>All Sightseeing and transfers by an Exclusive Air-Conditioned Vehicle.</span>
          <span class='itinerary-pts'>Driver Allowance, Fuel, Parking Charges, Toll Taxes and Interstate Taxes.</span>
          <span class='itinerary-pts'>Local Guide Services during Jaipur Sightseeing.</span>
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
          <span class='itinerary-pts'>Expenses of personal nature such as travel insurance, portages, laundry expenses etc.</span>
          <span class='itinerary-pts'>Monument tourist entrance & camera fees, guide & driver tippings.</span>
          <span class='itinerary-pts'>Jhalana Leopard Safari, Elephant Village Visit & Chokhi Dhani Charges.</span>
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
          <span class='itinerary-pts'>Child Above 6 Years and Additional Adult sharing same room will cost 75% of Tour Cost, including Extra Bed, Transportation, and Meals.</span>
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
      question: `What Does Our 2-Day Jaipur Tour Package Encompass?`,
      answer: `Our ${temp.bold(
        `2-Day Jaipur Tour Package`
      )} covers accommodations, meals, transportation services and guided visits of popular attractions like Amber Fort and City Palace.`,
    },
    {
      question: `What must-see attractions can I visit while in Jaipur?`,
      answer: `Amber Fort, Hawa Mahal and ${temp.bold(
        `Jantar Mantar`
      )} should definitely make up your itinerary as well as traditional handicraft markets spread out around town.`,
    },
    {
      question: `Are the Jaipur Sightseeing Tours suitable for families? `,
      answer: `our family-oriented ${temp.bold(
        `Jaipur Sightseeing Tours`
      )} features many attractions for everyone to enjoy during their trip through Jaipur!`,
    },
    {
      question: `Can I customize the itinerary of my Two Days Jaipur Tour Package?`,
      answer: `You can tailor the itinerary and schedule according to your interests and add any attractions you desire.`,
    },
    {
      question: `What experiences should I anticipate on my Jaipur Tour Package?`,
      answer: `Your ${temp.bold(
        `Jaipur Tour Package`
      )} features cultural experiences, shopping opportunities and visits to historical sites so you can immerse yourself in its rich past.`,
    },
  ],
};
