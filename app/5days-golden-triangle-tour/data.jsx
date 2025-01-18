import { Link } from "@/Utils/util";

export const page_titles = [
    {
        heading: '05 Days Golden Triangle Tour',
        subheading: '04 nights • 05 days',
    },
];

// Constructing the WhatsApp link with the encoded text
export const whatsapp_link = `https://api.whatsapp.com/send/?phone=919166555888&text=${page_titles[0].heading}&type=phone_number&app_absent=0`;


// Destination Covered by the tour
export const destinationCovered = {
    title: 'Destination Covered',
    destinations: ['Delhi', 'Agra', 'Fatehpur Sikri', 'Abhaneri', 'Jaipur'],
};

// Days Covered by the tour
export const tourItinerary = {
    title: `Tour <strong>Itinerary</strong>`,
    content: [
        {
            day: 'Day 01',
            title: 'Delhi',
            content: `
          <span class='itinerary-pts'>Our representative will meet you upon your arrival at Delhi Airport / Railway Station and take you to the hotel.</span>
          <span class='itinerary-pts'>As soon as the check-in process is complete, we'll embark on the Delhi City Tour, which includes visits to India Gate, President House & Parliament (Pass Through), Qutub Minar, Lotus Temple, Red Fort & Jama Masjid.</span>
          <span class='itinerary-pts'>In the evening, explore Cannaught Palace Markets.</span>
          <span class='itinerary-pts'>You will spend the night in Delhi.</span>
        `,
        },
        {
            day: 'Day 02',
            title: 'Agra',
            content: `
          <span class='itinerary-pts'>On the second day of your 5-day Golden Triangle Tour, we will Check-out from Delhi Hotel and transfer to Agra (240 kms / 4 Hours Drive).</span>
          <span class='itinerary-pts'>Enroute, we visit Sikandra – Burial Place of Akbar and Itimad Ud Daulah.</span>
          <span class='itinerary-pts'>Upon arrival, check-in at the hotel.</span>
          <span class='itinerary-pts'>In the evening, we visit Agra Fort along with a guide.</span>
          <span class='itinerary-pts'>Overnight stay will be in Agra.</span>
        `,
        },
        {
            day: 'Day 03',
            title:
                'Jaipur',
            content: `
          <span class='itinerary-pts'>Early morning, along with a guide, we visit the Taj Mahal – The Symbol of Love.</span>
          <span class='itinerary-pts'>After breakfast, check out from the hotel and transfer to Jaipur (250 Kms / 5 Hours drive).</span>
          <span class='itinerary-pts'>Enroute, we visit Fatehpur Sikri – The Dream City of Akbar and Abhaneri Stepwell, also known as Chand Baori.</span>
          <span class='itinerary-pts'>We reach Jaipur by evening and check in at the hotel.</span>
          <span class='itinerary-pts'>Evening free for self-exploration.</span>
          <span class='itinerary-pts'>Overnight stay will be in Jaipur Hotel.</span>
        `,
        },
        {
            day: 'Day 04',
            title: 'Jaipur',
            content: `
          <span class='itinerary-pts'>On the second day of your 8-day Rajasthan Tour, you will start early in the morning with a delicious breakfast at the hotel.</span>
          <span class='itinerary-pts'>Our guide will join you for a full-day Jaipur City Tour, covering the City Palace, Jantar Mantar, Walled Pinkcity, Amer Fort, Elephant Village (Hathi Gaon), and local markets.</span>
          <span class='itinerary-pts'>In the evening, enjoy a breathtaking view of Pinkcity and a stunning sunset from Nahargarh Fort, situated on the edge of the Aravali Hills.</span>
          <span class='itinerary-pts'>Overnight stay will be in Jaipur.</span>
        `,
        },
        {
            day: 'Day 05',
            title: 'Jaipur',
            content: `
          <span class='itinerary-pts'>After breakfast, check out from the hotel and visit Galta Ji (Monkey Temple), Albert Hall Museum, Birla Temple, & Patrika Gate.</span>
          <span class='itinerary-pts'>After lunch, drop at Jaipur Airport / Railway Station to connect your onward journey.</span>
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
            Embark on a <strong>5 Days Golden Triangle Tour</strong> that takes you through India&apos;s most iconic cities: Delhi, Agra, and Jaipur. This carefully curated <strong>Golden Triangle Travel Package</strong> perfectly blends history, culture, and architectural wonders. Your journey begins in Delhi, where you will explore historical landmarks like India Gate, Qutub Minar, and the bustling markets of Chandni Chowk. Experience the vibrant energy of the capital city and savor the delicious local cuisine.
            <br />
            The second day of your <strong>Golden Triangle Itinerary</strong> 5 Days will transport you to Agra, home of the magnificent Taj Mahal. Prepare to be awe-inspired as you witness the breathtaking beauty of this UNESCO World Heritage site at sunrise, when it glows with golden hues. After visiting the Taj Mahal, you&apos;ll have the chance to explore Agra Fort and learn about the fascinating history surrounding these monumental structures. The day concludes with a scenic drive to Jaipur, the Pink City, where you will experience its rich heritage and royal charm.
            <br />
            On the final leg of your India Golden Triangle Trip, immerse yourself in Jaipur&apos;s majestic architecture, including the Amber Fort, City Palace, and Hawa Mahal. Enjoy shopping for traditional handicrafts such as block-printed textiles, blue pottery, and Kundan jewelry, and savoring local delicacies. This 5 Days Golden Triangle Tour offers a memorable experience, leaving you with lasting memories of India&apos;s rich culture and heritage. Find More {Link(
                `Rajasthan Tour Packages`,
                `https://www.rajasthantourpackages.in/`
            )}.
        </>
    )
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
                    Explore the tallest brick minaret in the world and its surrounding historical ruins.
                </>
            )
        },
        {
            point: (
                <>
                    Behold the breathtaking beauty of the Taj Mahal, a UNESCO World Heritage site known for its stunning marble architecture.
                </>
            )
        },
        {
            point: (
                <>
                    Visit Fatehpur Sikri, the Dream City of Akbar, and explore the ancient step-well of Abhaneri.
                </>
            )
        },
        {
            point: (
                <>
                    Experience the grandeur of Amber Fort and admire the unique façade of the Palace of Winds in Jaipur.
                </>
            )
        },
        {
            point: (
                <>
                    Take a tour of Elephant Village, where you can feed these magnificent creatures and even ride on their backs.
                </>
            )
        },
        {
            point: (
                <>
                    Enjoy the vibrant energy of Jaipur’s markets and witness a stunning sunset from Nahargarh Fort.
                </>
            )
        },
        {
            point: (
                <>
                    All sightseeing and transfers are provided by air-conditioned vehicles, with knowledgeable local guides accompanying you during the tours.
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
        <span class='itinerary-pts'>04 Nights / 05 Days Air-Conditioned Accommodation.</span>
        <span class='itinerary-pts'>Daily Breakfast & Dinner.</span>
        <span class='itinerary-pts'>All Sightseeing and transfers by an Exclusive Air-Conditioned Vehicle.</span>
        <span class='itinerary-pts'>Driver Allowance, Fuel, Parking Charges, Toll Taxes and Interstate Taxes.</span>
        <span class='itinerary-pts'>Local Guide Services during Agra & Jaipur Sightseeing.</span>
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
        <span class='itinerary-pts'>Sound & Light Show, Elephant Ride & Chokhi Dhani Visit Charges.</span>
      `,
    },
    {
        title: 'Terms & Conditions',
        icon: 'FaFileContract',
        content: `
        <span class='itinerary-pts'>Tour Prices are Per Person.</span>
        <span class='itinerary-pts'>Package Costs may change during the Weekends, Festivals & New Year Period.</span>
        <span class='itinerary-pts'>Above Tour Rates are in Indian Rupees.</span>
        <span class='itinerary-pts'>With Single Occupancy Room, package cost will be 50% additional.</span>
        <span class='itinerary-pts'>Child Above 6 Years and Additional Adult sharing same room will cost 75% of Tour Cost, including Extra Bed, Transportation, and Meals.</span>
        <span class='itinerary-pts'>All payments to be made by Cheque / Demand Draft / QR Code are only payable at Jaipur in the name of our firm “Rajasthan Travel Helpline”.</span>
        <span class='itinerary-pts'>All disputes subject to jurisdiction of Jaipur Court only.</span>
        <span class='itinerary-pts'>E. & O. E.</span>
      `,
    },
];
// faq
export const tour_faq = [
    {
        question: (
            <>
                What is included in the 5-Day Golden Triangle Tour?
            </>
        ),
        answer: (
            <>
                The visit is planned for consolation and comfort, counting remains in comfortable lodgings, all transportation in a private vehicle, guided city visits by learned neighborhood guides, and entrance expenses to major attractions like the Taj Mahal and Golden Post.
            </>
        )
    },
    {
        question: (
            <>
                Do you know if this is a private tour?
            </>
        ),
        answer: (
            <>
                You can select a private visit, which engages you in creating a customized involvement that fits your interface. You can appreciate the adaptability of choosing travel dates, touring inclinations, and stops.
            </>
        ),
    },
    {
        question: (
            <>
                When is the most wonderful time for the Golden Triangle Tour?
            </>
        ),
        answer: (
            <>
                The best time is from <strong>October to March</strong> when the climate is charming for visiting. In the midst of these months, you can expect cooler temperatures and less stickiness, making your visit more comfortable.
            </>
        )
    },
    {
        question: (
            <>
                Can I customize my Golden Triangle Schedule for 5 Days?
            </>
        ),
        answer: (
            <>
                Absolutely! You can customize your agenda based on your inclinations and interface. Whether you need to incorporate extra cities, alter the arrangement of goals, or center on particular attractions, we can tailor the visit to meet your needs.
            </>
        )
    },
    {
        question: (
            <>
                How do I book the Golden Triangle Travel Package?
            </>
        ),
        answer: (
            <>
                You can book online through our site or contact us straightforwardly if you require assistance arranging your trip. Our group is continuously accessible to offer assistance through the booking preparation, give point-by-point data on almost all the agenda, and reply to any questions to make sure you have a smooth involvement.
            </>
        )
    },
]
