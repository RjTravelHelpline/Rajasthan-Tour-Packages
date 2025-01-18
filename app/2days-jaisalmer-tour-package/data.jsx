import { Link } from "@/Utils/util";

export const page_titles = [
    {
        subheading: '01 night • 02 days',
        heading: '02 days jaisalmer tour package',
    },
];
export const whatsapp_link = `https://api.whatsapp.com/send/?phone=919166555888&text=${page_titles[0].heading}&type=phone_number&app_absent=0`;
// Destination Covered by the tour
export const destinationCovered = {
    title: 'Destination Covered',
    destinations: ['Jaisalmer', 'Desert - Sand Dunes'],
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
            Your dreams will come true with our best <strong>2 days Jaisalmer tour package</strong>. {Link('Jaisalmer city', 'https://www.rajasthantourpackages.in/jaisalmer')} is surrounded by the Thar Desert and it is predominantly historical and culturally rich with mesmerizing desert area. That is why on this brief but exciting tour, you will get acquainted with the most significant objects of Jaisalmer – forts, havelis, and the great sand tracts.
            <br />
            On the first day, you will have a sightseeing tour: Jaisalmer’s first stop is the Jaisalmer Fort which shares the same color and is made from golden sandstone. You will also be able to visit Patwon Ki Haveli, which contain series of beautiful havelis explaining the architectural beauty of this region. Then proceed to experience the joy of camel safari in the most beautiful sand dunes of Rajasthan over night at Jaisalmer. This activity is one of the most popular attractions of the tourn and you’ll get a chance to ride a camel and to watch the sunset on the dunes of the Great Indian Desert.
            <br />
            This <strong>2 days Jaisalmer tour package</strong> is aimed at those clients who want to see as many fascinating {Link('places of Jaisalmer', 'https://www.rajasthantourpackages.in/blog/best-beautiful-places-to-visit-in-jaisalmer-travel-guide')} as possible. This fun-filled tour is a exciting trip for the adventurous soul and the historic minded individual as well.
            <br />
        </>
    )
};
// Days Covered by the tour
export const tourItinerary = {
    title: `Tour <strong>Itinerary</strong>`,
    content: [
        {
            day: 'Day 01',
            title:
                'Desert, Jaisalmer',
            content: `
        <span class='itinerary-pts'>On arrival, you are greeted by our representative and transferred to Sam Sand Dunes.</span>
        <span class='itinerary-pts'>Upon arrival, Check-In and relaxation in Tent.</span>
        <span class='itinerary-pts'>In the evening, you will have a unique experience of the Desert-like Arabian night by making an overnight stay over dunes with tented accommodations and cultural programs, and also enjoy a photogenic sunset on camelback.</span>
        <span class='itinerary-pts'>Overnight at Desert Camp.</span>
        `,
        },
        {
            day: 'Day 02',
            title: 'Jaisalmer',
            content: `
        <span class='itinerary-pts'>After breakfast, we checkout from Desert Camp and visit Lodurva, Kuldhara, Amar Sagar, Badabagh, Jaisalmer Fort, Palace, Museum, Ancient Jain Temple (Inside Fort), Patwon Ki Haveli & Nathmal Ki Haveli.</span>
        <span class='itinerary-pts'>In the evening, you will be dropped off at Jaisalmer Airport or Railway Station to connect your onward journey.</span>
        <span class='itinerary-end'>Your 02 Days Jaisalmer Tour Ends with Lifetime Happy Memories.</span>
        `,
        },
    ],
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
                    Discover the iconic Jaisalmer Fort, a UNESCO World Heritage Site celebrated for its breathtaking architecture and vibrant culture.
                </>
            )
        },
        {
            point: (
                <>
                    Take in picturesque views of Gadisar Lake, an idyllic sanctuary of temples and ghats ideal for an evening stroll.
                </>
            )
        },
        {
            point: (
                <>
                    Enjoy an exhilarating camel ride across mesmerizing sand dunes to capture the spirit of the desert landscape.
                </>
            )
        },
        {
            point: (
                <>
                    Experience a unique overnight stay in a desert camp, enjoying the charm of tented accommodations under the starry sky.
                </>
            )
        },
        {
            point: (
                <>
                    Delight in traditional cultural programs during your desert stay, showcasing the rich heritage and vibrant traditions of Rajasthan.
                </>
            )
        }
    ]
};
// More Info about the tour
export const packageData = [
    {
        title: 'Package Inclusions',
        icon: 'FaCheckCircle',
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
// faq
export const tour_faqs = [
    {
        question: (
            <>
                What does the 2-Day Jaisalmer Tour Package include?
            </>
        ),
        answer: (
            <>
                02 day Jaisalmer tour package usually includes a visit to the major attractions in Jaisalmer, such as the Jaisalmer Fort, Patwon Ki Haveli, and the Sam Sand Dunes. The package may also include a guided tour of the city, showcasing its rich history, culture, and beautiful architecture. You can also take a camel ride in the desert, attend a cultural dance performance,e and browse for souvenirs in the local markets. Meals, transportation, and accommodation (e.g. in desert camps or hotels) are usually included. The tour offers the opportunity to experience the beauty of the Thar Desert and the historical charm of Jaisalmer.
            </>
        )
    },
    {
        question: (
            <>
                What are the must-see attractions in Jaisalmer ?
            </>
        ),
        answer: (
            <>
                Jaisalmer, known as the {Link('Golden City', 'https://www.rajasthantourpackages.in/jaisalmer')} , has many beautiful attractions. The Jaisalmer Fort, a UNESCO World Heritage Site, is a must-see with its ancient walls and stunning architecture. The Patwon Ki Haveli, a collection of beautiful havelis, is a great example of Rajasthani craftsmanship. For a unique desert experience, visit the Sam Sand Dunes, where you can ride camels and watch the sunset. The Gadisar Lake, with its calm waters and surrounding temples, is a place to relax. Don&lsquo;t miss the beautiful Jain temples and the colorful markets, which offer a taste of the local culture.
            </>
        )
    },
    {
        question: (
            <>
                Can I Visit Jaisalmer Alone ?
            </>
        ),
        answer: (
            <>
                Yes, it is safe for solo travelers but still avoid being very cautious. It is well recognized by the historical background and the unique views of the nature it possesses, to the great number of tourists from different corners of the world. However, it is highly recommended that one should stay in the most populated areas, particularly at night. Never leave your personal belongings unattended, avoid using unknown cars, and plan your travel to know the culture of the country.
            </>
        )
    },
    {
        question: (
            <>
                How do I get to Jaisalmer ?
            </>
        ),
        answer: (
            <>
                There are several ways of getting to Jaisalmer, But one can go by direct train from places like {Link('Jaipur or Delhi', 'https://www.jaipurtaxiservice.com/one-way-taxi/jaipur-to-delhi-oneway-cab.html')} as the place indeed boasts of having its railway station. However, if you wanna go by flight then you can because Jaisalmer also has an airport, and all main cities of India have their flights here. Bus services are also available, as Jaisalmer is well connected through the bus services with other surrounding cities. The other means is by car or by booking a taxi since the road network is well developed and safe for long-distance travel.
            </>
        )
    },
    {
        question: (
            <>
                Is it possible to visit the Tanot and the India-Pakistan border on the 2-day Jaisalmer tour ?
            </>
        ),
        answer: (
            <>
                Yes, it’s possible to visit Tanot and the India-Pakistan border as part of a <strong>2-day Jaisalmer tour</strong>. You can visit the Tanot Mata Temple, known for its significance during the India-Pakistan wars of 1965 and 1971, and then drive to the Border Viewing Point near the India-Pakistan border. Note that the trip requires early planning and obtaining permits for the border area. If you need help with logistics, the Rajasthan Travel Helpline can suggest ways to optimize your visit.
            </>
        )
    }
];
