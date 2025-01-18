import { Link } from "@/Utils/util";

export const page_titles = [
  {
    subheading: '01 night • 02 days',
    heading: "02 days jaipur tour package",
  },
];

// Constructing the WhatsApp link with the encoded text
export const whatsapp_link = `https://api.whatsapp.com/send/?phone=919166555888&text=${page_titles[0].heading}&type=phone_number&app_absent=0`;

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
      title: 'Jaipur',
      content: `
            <span class='itinerary-pts'>On arrival at Jaipur Airport / Railway Station / Bus Stand, you are greeted by a Rajasthan Tour Packages representative and transferred to your Hotel.</span>
            <span class='itinerary-pts'>Immediately after finishing the check-in procedure and freshening up, we will start our 2 Days Jaipur Pushkar Tour itinerary.</span>
            <span class='itinerary-pts'>The first day of your tour will cover some of Jaipur's most popular attractions: City Palace, Observatory (Jantar Mantar), Hawa Mahal (Wind Palace), Walled Pink City, Albert Hall Museum, Birla Mandir, and Patrika Gate.</span>
            <span class='itinerary-pts'>In the evening, we enjoy an authentic Rajasthani dinner in an ethnic village for an enjoyable, relaxing dining experience.</span>
            <span class='itinerary-pts'>Overnight stay in the Hotel.</span>
          
          `,
    },
    {
      day: 'Day 02',
      title: 'Jaipur',
      content: `
            <span class='itinerary-pts'>The Second Day of your 2 Days Jaipur Tour Package starts early in the morning when we wake up and go for Jungle Safari by Open Gypsy at Jhalana Leopard Safari Park, this is one of the best & different experiences of your Jaipur Stay.</span>
            <span class='itinerary-pts'>After coming back to Hotel, we will get ready and have our delicious breakfast.</span>
            <span class='itinerary-pts'>Later, checkout from Hotel and leave for Full Day Jaipur City Tour covering Jal Mahal (Water Palace), Amer Fort (Amber Fort), and Elephant Village (Hathi Gaon), Local Markets, Jaigarh Fort & Nahargarh Fort.</span>
            <span class='itinerary-pts'>In the evening, you will be dropped off at Jaipur Airport / Railway Station / Bus Stand to connect your onward journey.</span>
              <span class='itinerary-end'>Your 02 Days Jaipur Tour Package Ends with Lifetime Happy Memories.</span>

          `,
    },
  ],
};

// Tour Overview Data
export const tour_overview = {
  title: (
    <>
      Tour <strong>Overview</strong>
    </>
  ),
  content: (
    <>
      <p>Discover the vibrant charm of Jaipur with our exclusive <strong>02-Day Jaipur Tour Package</strong>, perfect for those looking for an unforgettable experience in Rajasthan&apos;s capital city. This Jaipur sightseeing tour has been designed to showcase the {Link('best places in Jaipur', 'https://www.rajasthantourpackages.in/jaipur')} that offer a blend of rich history, stunning architecture, and vibrant culture.</p>
      <p>Visit famous attractions like Amber Fort - a grand fort on a hill, the beautiful Hawa Mahal (Palace of Winds), and the peaceful Jal Mahal - which sits in the middle of Mansagar Lake. This tour also takes you to the City Palace - a unique mix of Mughal and Rajasthani styles, and the amazing Jantar Mantar - a UNESCO World Heritage Site with ancient astronomical instruments.</p>
      <p>This <strong>02 day Jaipur tour</strong> ensures that you don&apos;t miss any highlights and makes your short trip truly unforgettable. Book now to explore Jaipur&apos;s rich heritage and breathtaking beauty in just 2 days and experience the royal essence of Jaipur like never before.</p>
    </>)
};

// Tour Highlights
export const tour_highlights = {
  title: (
    <>
      Tour <strong>Highlights</strong>
    </>
  ),
  content: [
    {
      point: (
        <>
          Jaipur City Tour with Guide
        </>
      )
    },
    {
      point: (
        <>
          Visit Iconic Amber Fort - A UNESCO World Heritage Site.
        </>
      )
    },
    {
      point: (
        <>
          Panoramic View of Pinkcity & Sunset from Nahargarh Fort.
        </>
      )
    },
    {
      point: (
        <>
          Explore Walled Pink City & Stroll in Local Markets.
        </>
      )
    },
    {
      point: (
        <>
          See the Largest Wheeled Cannon at Jaigarh Fort.
        </>
      )
    },
    {
      point: (
        <>
          Leopard Safari at Jhalana Leopard Park.
        </>
      )
    },
    {
      point: (
        <>
          Fun & Adventure with Elephants at Elephant Village Jaipur.
        </>
      )
    },
    {
      point: (
        <>
          Experience the Rural Side of Rajasthan with Rajasthani Cuisine at Chokhi Dhani.
        </>
      )
    }
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
export const tour_faqs = [
  {
    question: (
      <>
        What are the best places to visit in Jaipur in 2 days?
      </>
    ),
    answer: (
      <>
        In 2 days, you can explore some of the top attractions in Jaipur that highlight the city&apos;s rich history, culture, and architecture. The {Link('Amber Fort', 'https://www.rajasthantourpackages.in/jaipur')}, Hawa Mahal, Jal Mahal, City Palace, Jantar Mantar, Albert Hall Museum and the picturesque Nahargarh Fort, from where you can get a breathtaking view of the pink city at sunset, are some of the must-visit places on your trip to Jaipur.

      </>
    )
  },
  {
    question: (
      <>
        What is the cost of a 2-day Jaipur tour package?
      </>
    ),
    answer: (
      <>
        The cost of a <strong>2-day Jaipur tour package</strong> usually ranges between ₹5,000 and ₹15,000 per person, depending on factors such as accommodation, transport, and included activities. Luxury packages can cost more, while there are also budget options with basic services. Prices may vary depending on customization and season.

      </>
    )
  },
  {
    question: (
      <>
        Is a 2-day tour enough to explore Jaipur?
      </>
    ),
    answer: (
      <>
        Yes, a 2-day tour is enough to explore the major sights of Jaipur, including iconic landmarks like Amber Fort, Hawa Mahal, City Palace, and Jantar Mantar. While you may not be able to visit every single place, this duration allows you to experience the rich history, culture, and architecture of the city.

      </>
    )
  },
  {
    question: (
      <>
        What is the best time to visit Jaipur?
      </>
    ),
    answer: (
      <>
        The best time to visit Jaipur is from <strong>October to March</strong> when the weather is pleasant for sightseeing and outdoor activities. Avoid visiting Jaipur in the peak summer months of May, June, and July as the temperature can rise to over 40°C, and it is then uncomfortable to travel. However, the evenings in April, August, and September offer a more pleasant climate and you may find good deals on accommodation and tours. These months offer a great opportunity to explore Jaipur with fewer crowds and better value for money, making them ideal for a memorable trip.

      </>
    )
  },
  {
    question: (
      <>
        What are the top activities to do during a 2-day trip to Jaipur?
      </>
    ),
    answer: (
      <>
        During a 2-day excursion to Jaipur, you can enjoy a mix of cultural and adventurous activities. Visit Chokhi Dhani, an ethnic village, and experience traditional Rajasthani culture with folk performances, dance and cuisine. Enjoy an elephant ride at Amber Fort, a royal experience that takes you to the entrance of the fort. Get a unique view of the city on a thrilling hot air balloon ride. Don&apos;t miss the Sound & Light Show at Amber Fort, which brings the history of the fort to life. And if you love nature, you should go on a {Link('Jhalana Leopard Safari', 'https://www.rajasthantourpackages.in/blog/jhalana-leopard-safari-wildlife-sanctuary-jaipur')} to spot wild animals.

      </>
    )
  },
];
