import { Table } from 'react-bootstrap';
import { allCitiesImages, allStatesImages } from './imageData';

// * consting the assets
const rajasthanImg = '/Images/Card/jalmahal.webp';
const hyderabadImg = '/Images/Card/hyderabad.webp';
const indianStreetFood = '/Images/Card/indian-streetfood.webp';
const kolkataStreetFood = '/Images/Card/kolkata-streetfood.webp';
const chennaiStreetFood = '/Images/Card/chennai-streetfood.webp';
const delhiStreetFood = '/Images/Card/delhi-streetfood.webp';
const bangaloreStreetFood = '/Images/Card/bangalore-streetfood.webp';

// * Blog data
const generateSlug = (heading) =>
  heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
export const blogs = [
  // Tour & Travels Category
  {
    author: 'John Doe',
    image: allCitiesImages.jaipur.jaipurAmber02.src,
    date: '2024-08-22',
    heading: 'Discover the Hidden Gems of Rajasthan',
    slug: generateSlug('Discover the Hidden Gems of Rajasthan'),
    description:
      'Explore the lesser-known attractions in Rajasthan that are off the beaten path. This blog reveals secret spots and hidden gems that offer a unique experience away from the usual tourist trails.',
    category: 'Tour & Travels',
    more: `Rajasthan is renowned for its rich heritage, stunning palaces, and vibrant culture, 
              but there’s more to this desert state than meets the eye. Beyond the well-trodden tourist 
              spots like Jaipur, Udaipur, and Jodhpur.`,
  },
  {
    author: 'Riya Patel',
    image: allStatesImages.kerala.kerala01.src,
    date: '2024-08-05',
    heading: 'Planning Your Perfect Beach Vacation in Kerala',
    slug: generateSlug('Planning Your Perfect Beach Vacation in Kerala'),
    description:
      'Kerala is renowned for its beautiful beaches. This blog offers tips on planning a beach vacation in Kerala, including the best beaches to visit and activities to enjoy.',
    category: 'Tour & Travels',
    more: `Kerala, with its serene backwaters and stunning beaches, is a paradise for beach 
              lovers. From the lively shores of Kovalam to the tranquil sands of Varkala.`,
  },

  // Food Category
  {
    author: 'Jane Smith',
    image: allCitiesImages.jaipur.jaipurCulinary.src,
    date: '2024-08-15',
    heading: 'The Ultimate Guide to Indian Street Food',
    slug: generateSlug('The Ultimate Guide to Indian Street Food'),
    description:
      'Dive into the vibrant world of Indian street food. From spicy chaats to sweet delicacies, this guide covers the best street food experiences across various cities in India.',
    category: 'Food',
    more: `India is known for its rich culinary diversity, and its street food culture is one 
              of the most exciting aspects of exploring this land of flavors.`,
  },
  {
    author: 'Amit Kumar',
    image: allCitiesImages.jaipur.jaipurAmber02.src,
    date: '2024-07-25',
    heading: 'Savoring Rajasthani Cuisine: A Culinary Journey',
    slug: generateSlug('Savoring Rajasthani Cuisine: A Culinary Journey'),
    description:
      'Rajasthani cuisine is as colorful as its culture. Explore the flavors of this royal cuisine, from spicy curries to sweet delicacies like ghevar and malpua.',
    category: 'Food',
    more: `Rajasthan's cuisine is rich in flavors, with each dish telling a story of the 
              state’s royal past. Dishes like dal baati churma and ker sangri are must-try experiences.`,
  },

  // History & Culture Category
  {
    author: 'Amit Kumar',
    image: allStatesImages.hyderabad.hyderabad01.src,
    date: '2024-08-10',
    heading: 'Top 10 Historical Monuments in India',
    slug: generateSlug('Top 10 Historical Monuments in India'),
    description:
      "A comprehensive list of India's top 10 historical monuments that every traveler should visit. Learn about their history, architecture, and significance.",
    category: 'History & Culture',
    more: `India’s historical monuments are more than just tourist attractions; they are 
              standing reminders of the country’s vibrant past and architectural prowess.`,
  },
  {
    author: 'Priya Sen',
    image: allStatesImages.hyderabad.hyderabad01.src,
    date: '2024-07-18',
    heading: 'The Rich Cultural Heritage of South India',
    slug: generateSlug('The Rich Cultural Heritage of South India'),
    description:
      'South India offers a unique blend of tradition, architecture, and art. Discover the rich cultural tapestry woven through its temples, festivals, and cuisine.',
    category: 'History & Culture',
    more: `From the intricate temple architecture in Tamil Nadu to the traditional dance 
              forms of Kerala, South India has preserved its heritage in captivating ways.`,
  },

  // Fair & Festivals Category
  {
    author: 'Rajesh Sharma',
    image: allCitiesImages.jaipur.jaipurAmber02.src,
    date: '2024-07-11',
    heading: 'The Vibrant Festivals of Rajasthan',
    slug: generateSlug('The Vibrant Festivals of Rajasthan'),
    description:
      'Experience the colorful festivals of Rajasthan, from Diwali to the Pushkar Camel Fair. These celebrations bring alive the vibrant culture of the state.',
    category: 'Fair & Festivals',
    more: `Rajasthan’s festivals are grand spectacles of color and culture. Each festival, 
              whether it’s Diwali or Teej, showcases the unique traditions of this royal land.`,
  },
  {
    author: 'Neha Kapoor',
    image: allStatesImages.kerala.kerala01.src,
    date: '2024-06-20',
    heading: 'Onam: Kerala’s Harvest Festival',
    slug: generateSlug('Onam Kerala Harvest Festival'),
    description:
      'Onam, the harvest festival of Kerala, is a time of joy and celebration. This guide explains the history, customs, and cultural significance of this beloved festival.',
    category: 'Fair & Festivals',
    more: `Onam is more than just a harvest festival; it’s a celebration of Kerala’s cultural 
              heritage. From the grand feast of Onasadya to the intricate flower designs, Onam brings 
              families together.`,
  },

  // News & Updates Category
  {
    author: 'John Doe',
    image: allStatesImages.kerala.kerala01.src,
    date: '2024-08-22',
    heading: 'Recent Developments in Indian Tourism',
    slug: generateSlug('Recent Developments in Indian Tourism'),
    description:
      'Stay updated on the latest trends and developments in Indian tourism, from eco-tourism initiatives to new travel regulations across the country.',
    category: 'News & Updates',
    more: `With growing interest in sustainable travel, India is focusing on eco-tourism 
              and responsible travel initiatives. New regulations are also in place to ensure 
              safe and enjoyable experiences for tourists.`,
  },
  {
    author: 'Amit Kumar',
    image: allCitiesImages.jaipur.jaipurAmber02.src,
    date: '2024-08-12',
    heading: 'Tourism Industry’s Recovery Post-Pandemic',
    slug: generateSlug('Tourism Industry Recovery Post-Pandemic'),
    description:
      'An in-depth look at how the tourism industry is bouncing back after the pandemic. This article covers the challenges faced and the new trends shaping the future of travel.',
    category: 'News & Updates',
    more: `The tourism industry has shown resilience as it rebounds from the pandemic’s 
              impact. Innovations in health and safety protocols and a focus on local tourism have 
              helped revive travel across regions.`,
  },

  // Wildlife Category
  {
    author: 'Admin',
    image: allCitiesImages.jaipur.jaipurJhalanaLeopard.src,
    date: '2024-11-16',
    heading: ' Rajasthan Wildlife Trails for Adventurers',
    slug: generateSlug('wildlife-trails-rajasthan-nature-adventures'),
    description:
      'India is home to numerous wildlife sanctuaries. Discover the top sanctuaries to visit, the wildlife you can spot, and tips for making the most of your wildlife adventure.',
    category: 'Wildlife',
    more: (
      <>
        <h4>Find Natural Beauty as an Investigative Tourist</h4>
        <p className="fw-bold mt-2 mb-0">
          Introduction:
        </p>
        <p className='mb-0'>Rich in a royal legacy and magnificent forts and palaces Rajasthan also boasts of some of the best Wildlife Sanctuary and National Park in India. Peace and serenity are two qualities that no traveler would associate with this enthralling state of Rajasthan, but for the part of the traveler who wants to cut through the jungle and feel the off beat rugged look of Rajasthan it offers some of the best track of wildlife tours. In this blog we will share further details about the Rajasthan wildlife trails for adventurers and the many options available for those interested in a non-conventional Wildlife Tour Packages destination.
        </p>
        <p className="fw-bold mt-2 mb-0">
          The Untouched Wilderness of Rajasthan:
        </p>
        <p className='mb-0'> Although Rajasthan is traditionally regarded as a land of history and architecture it is also an area with a vibrant and diverse wildlife population. It has the huge Thar desert stretching over a vast area in the west endangered greens of Aravalli forests in the South, Where the state’s wildlife safari gives tourists a welcome opportunity of indulgence in adventures and ecstasize in witnessing the unadulterated natural beauty.
        </p>
        <hr />
        <h4 className='mt-3'>Top Rajasthan Wildlife Trails for Adventurers:</h4>
        <p className="fw-bold mt-2 mb-0">
          1. Sariska Tiger Reserve: A Journey Through the Jungle
        </p>
        <p className='mb-0'>The Sariska Tiger Reserve situated in the hills of Aravalli in Rajasthan is a wonderful world for a dedicated adventure tourist. Sariska occupies a terrain of high ridge with extensive scrub, dense forest and is famous for bengal tiger. Tiger reserve is among those sanctuaries which are more famous in Rajasthan and provides many options for trekking to travelers. Here one has bar privileges to spot tigers from the jungle safaris apart from other animals such as leopards, wild pigs and some species of deers.
        </p>
        <p className="fw-bold mt-2 mb-0">
          Things to do:
        </p>
        <p className='mb-0'>• Sariska has several trails for the more adventurous and up close view of the wild animals.</p>
        <p className='mb-0'>• Jeep tours for the purpose of viewing tiger and leopard plus other birds of the wild.</p>
        <p className='mb-0'>• Tenting out in the forests and other areas with no light from any source apart from the moon.</p>
        <p className="fw-bold mt-2 mb-0">
          Timings:
        </p>
        <Table responsive className='table table-rounded mx-2 my-0'>
          <thead>
            <tr>
              <th>Month</th>
              <th>Morning Trip Timing</th>
              <th>Evening Trip Timing</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1 October to 31 October</td>
              <td>06.30 to 10.00 AM</td>
              <td>2.30 to 6.00 PM</td>
            </tr>
            <tr>
              <td>1 November to 31 January</td>
              <td>07.00 to 10.30 AM</td>
              <td>2.00 to 5.30 PM</td>
            </tr>
            <tr>
              <td>1 February to 31 March</td>
              <td>06.30 to 10.00 AM</td>
              <td>2.30 to 6.00 PM</td>
            </tr>
            <tr>
              <td>1 April to 15 May</td>
              <td>06.00 to 09.30 AM</td>
              <td>3.00 to 6.30 PM</td>
            </tr>
            <tr>
              <td>15 May to 30 June</td>
              <td>06.00 to 09.30 AM</td>
              <td>3.30 to 7.00 PM</td>
            </tr>
          </tbody>
        </Table>
        <p className="fw-bold mt-2 mb-0">
          Charges:
        </p>
        <Table responsive className='table table-rounded mx-2 my-0'>
          <thead>
            <tr>
              <th>Vehicle</th>
              <th>Sariska Gate</th>
              <th>Tehla Gate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Gypsy Amount (Indian)</td>
              <td>1270</td>
              <td>1270</td>
            </tr>
            <tr>
              <td>Canter Amount (Indian)</td>
              <td>856</td>
              <td>856</td>
            </tr>
            <tr>
              <td>Gypsy Amount (Foreigner)</td>
              <td>2084</td>
              <td>2084</td>
            </tr>
            <tr>
              <td>Canter Amount (Foreigner)</td>
              <td>1670</td>
              <td>1670</td>
            </tr>
          </tbody>
        </Table>

        <h4 className='mt-3'>2. Ranthambore National Park: A Royal Adventure</h4>
        <p className='mb-0'>Ranthambore National Park is among the most popular and culturally typical Indian parks for wildlife lovers. This park is situated in the center of Rajasthan, which allows lovers of complex adventurous jeep safaris to intersect the desired wildlife tour with an archaeological tour. Various accommodations are available within and adjacent to the park, and the Ranthambore Fort looming within the park remains an added attraction to wilderness-loving visitors and adventurers who like to have an affair with historical adventures.</p>
        <p className='mb-0'>Stuffed with fabulous Thick forests, abundant water resources, and having proliferation of wildlife like Tigers, Leopards, Wild boars etc Ranthambore is the paradise for the wildlife trekkers and the photographers.</p>
        <p className="fw-bold mt-2 mb-0">
          Things to do:
        </p>
        <p className='mb-0'>• Morning game drives to access tiger, crocodile, and bird’s documentary.</p>
        <p className='mb-0'>• Traveling through the forests with a local guide to find some less-known interesting places        </p>
        <p className='mb-0'>• Taking a historical and a wild tour around the Ranthambore Fort</p>
        <p className="fw-bold mt-2 mb-0">
          Timings:
        </p>
        <Table responsive className='table table-rounded my-0'>
          <thead>
            <tr>
              <th>Month</th>
              <th>Morning Trip Timing</th>
              <th>Evening Trip Timing</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1 October to 31 October</td>
              <td>06.30 to 10.00 AM</td>
              <td>2.30 to 6.00 PM</td>
            </tr>
            <tr>
              <td>1 November to 31 January</td>
              <td>07.00 to 10.30 AM</td>
              <td>2.00 to 5.30 PM</td>
            </tr>
            <tr>
              <td>1 February to 31 March</td>
              <td>06.30 to 10.00 AM</td>
              <td>2.30 to 6.00 PM</td>
            </tr>
            <tr>
              <td>1 April to 16 May</td>
              <td>06.00 to 09.30 AM</td>
              <td>3.00 to 6.30 PM</td>
            </tr>
            <tr>
              <td>16 May to 30 June</td>
              <td>06.00 to 09.30 AM</td>
              <td>3.30 to 7.00 PM</td>
            </tr>
          </tbody>
        </Table>
        <p className="fw-bold mt-2 mb-0">
          Charges:
        </p>
        <Table responsive className='table table-rounded my-0'>
          <thead>
            <tr>
              <th>Vehicle</th>
              <th>Advance Ticket</th>
              <th>Tatkal Ticket</th>
              <th>Current Ticket</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Gypsy Amount (Indian)</td>
              <td>1458</td>
              <td>20848</td>
              <td>1458</td>
            </tr>
            <tr>
              <td>Canter Amount (Indian)</td>
              <td>891</td>
              <td>-</td>
              <td>891</td>
            </tr>
            <tr>
              <td>Gypsy Amount (Foreigner)</td>
              <td>2746</td>
              <td>28576</td>
              <td>2746</td>
            </tr>
            <tr>
              <td>Canter Amount (Foreigner)</td>
              <td>2179</td>
              <td>-</td>
              <td>2179</td>
            </tr>
          </tbody>
        </Table>
        <p className='fw-bold'>Other Booking Extra Charges</p>
        <Table responsive className='table table-rounded my-0'>
          <thead>
            <tr>
              <th>Details</th>
              <th>Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Choice Gypsy (Indian/Foreigner)</td>
              <td>7476</td>
            </tr>
            <tr>
              <td>Choice Guide Charges for Gypsy (Indian/Foreigner)</td>
              <td>1697</td>
            </tr>
            <tr>
              <td>Choice Guide Charges for Canter (Indian/Foreigner)</td>
              <td>1903</td>
            </tr>
          </tbody>
        </Table>

        <p className='fw-bold'>Zone Charges</p>
        <Table responsive className='table table-rounded my-0'>
          <thead>
            <tr>
              <th>Zone Details</th>
              <th>Indian Citizen</th>
              <th>Foreigner Citizen</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Gypsy (Inter Zones), Zone 1-5 to Zone 6-10 or Zone 6-10 to Zone 1-5</td>
              <td>820</td>
              <td>3300</td>
            </tr>
            <tr>
              <td>Canter (Inter Zones), Zone 1-5 to Zone 6-10 or Zone 6-10 to Zone 1-5</td>
              <td>444</td>
              <td>1650</td>
            </tr>
            <tr>
              <td>Gypsy (Within Zones), Zone 01 to 05 or Zone 06 to 10</td>
              <td>410</td>
              <td>2924</td>
            </tr>
            <tr>
              <td>Canter (Within Zones), Zone 01 to 05 or Zone 06 to 10</td>
              <td>222</td>
              <td>1462</td>
            </tr>
          </tbody>
        </Table>
        <hr />
        <h4 className='mt-3'>3. Keoladeo Ghana National Park: A Birdwatcher’s Paradise</h4>
        <p className='mb-0'>If this is the kind of adventurous act in which an individual is interested more than anything, the Keoladeo Ghana National Park also famously known as the Bharatpur Bird Sanctuary should be on his/her list of must visit places. This is an ideal breeding place for birds and there are many migratory birds because of its status as a world inheritance site. If You want to see birds, you should visit the park during winter since thousands of birds flock the park making it among the best places in the world to watch birds.Besides birds the park is also inhabited by a couple of species of animals such as jackals, wild boars and monkeys which makes it an excellent wildlife trail for wildlife lovers interested in watching birds and animals.</p>
        <p className='fw-bold'>Things to do:</p>
        <p className='mb-0'>• Phestival for stewards including directional bird watching to view different species of birds.</p>
        <p className='mb-0'>• Take your car or bicycle/ walking trip to tour the park that is endowed with different attractions.</p>
        <p className='mb-0'>• Half day boat ride through wetlands of the park for trip</p>
        <p className="fw-bold mt-2 mb-0">Timings:</p>
        <Table responsive className='table table-rounded my-0'>
          <thead>
            <tr>
              <th>Month</th>
              <th>Morning Trip Timing</th>
              <th>Evening Trip Timing</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1 October to 31 October</td>
              <td>6:30 AM - 10:00 AM</td>
              <td>2:30 PM - 6:00 PM</td>
            </tr>
            <tr>
              <td>1 November to 31 January</td>
              <td>7:00 AM - 10:30 AM</td>
              <td>2:00 PM - 5:30 PM</td>
            </tr>
            <tr>
              <td>1 February to 31 March</td>
              <td>6:30 AM - 10:00 AM</td>
              <td>2:30 PM - 6:00 PM</td>
            </tr>
            <tr>
              <td>1 April to 16 May</td>
              <td>6:00 AM - 09:30 AM</td>
              <td>3:00 PM - 6:30 PM</td>
            </tr>
            <tr>
              <td>16 May to 30 June</td>
              <td>6:00 AM - 09:30 AM</td>
              <td>3:30 PM - 7:00 PM</td>
            </tr>
          </tbody>
        </Table>
        <p className="fw-bold mt-2 mb-0">
          Charges:
        </p>
        <Table responsive className='table table-rounded my-0'>
          <thead>
            <tr>
              <th>Visitors</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Indian Visitors</td>
              <td>₹50</td>
            </tr>
            <tr>
              <td>Foreign Visitors</td>
              <td>₹400</td>
            </tr>
            <tr>
              <td>Cycle Rickshaw</td>
              <td>₹300/hour (with a guide)</td>
            </tr>
          </tbody>
        </Table>

        <h4 className='mt-3'>4. Desert National Park: Experience in Sam Sand Dunes of Rajasthan</h4>
        <p className='mb-0'>For those who wish to have another side of wildlife, which is adventurous in a real sense, then Desert National Park of Jaisalmer is the place. This park is in the center of the Thar desert and is a good chance to get acquainted with the desert in Rajasthan. The park is inhabited by Great Indian Bustards, foxes, camels, desert foxes, and other creatures of the desert, that is why it attracts those tourists who are in search of a quite unusual experience of fauna-watching.
          The area is desolate and arid, thus providing a dramatic difference to the green midland forests covering other wildlife districts in the state. Hiking, making camp in high sands, and observing the large open skies are a few of the attractions in this trail.</p>
        <p className="fw-bold mt-2 mb-0">Things to do:</p>
        <p className='mb-0'>• scarred by careless sand ruts and crowned with humped animals, designed for traveling the desert and searching for wild animals.</p>
        <p className='mb-0'>• Expedition by crossing through the desert in order to taste the difficulty of it.</p>
        <p className='mb-0'>• The desert is a prime location to camp to have an incredible and unusual adventure.</p>
        <hr />
        <p className="fw-bold mt-2 mb-0">
          Timings:
        </p>
        <Table responsive className='table table-rounded my-0'>
          <thead>
            <tr>
              <th>Month</th>
              <th>Morning Trip Timing</th>
              <th>Evening Trip Timing</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1 October to 31 October</td>
              <td>6:30 AM - 10:00 AM</td>
              <td>2:30 PM - 6:00 PM</td>
            </tr>
            <tr>
              <td>1 November to 31 January</td>
              <td>7:00 AM - 10:30 AM</td>
              <td>2:00 PM - 5:30 PM</td>
            </tr>
            <tr>
              <td>1 February to 31 March</td>
              <td>6:30 AM - 10:00 AM</td>
              <td>2:30 PM - 6:00 PM</td>
            </tr>
            <tr>
              <td>1 April to 16 May</td>
              <td>6:00 AM - 09:30 AM</td>
              <td>3:00 PM - 6:30 PM</td>
            </tr>
            <tr>
              <td>16 May to 30 June</td>
              <td>6:00 AM - 09:30 AM</td>
              <td>3:30 PM - 7:00 PM</td>
            </tr>
          </tbody>
        </Table>
        <p className="fw-bold mt-2 mb-0">
          Charges:
        </p>
        <Table responsive className='table table-rounded my-0'>
          <thead>
            <tr>
              <th>Visitors</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Gypsy Amount (Indian)</td>
              <td>Starting From ₹1000 Per Person</td>
            </tr>
            <tr>
              <td>Gypsy Amount (Foreigner)</td>
              <td>₹2084</td>
            </tr>
          </tbody>
        </Table>
        <h4 className='mt-3'>5. Mount Abu Wildlife Sanctuary: A Cool Retreat in the Hills
        </h4>
        <p className='mb-0'>Those who want to escape the heat and at the same time go through a Wildlife trail will find Mount Abu Wildlife Sanctuary perfect. founded in the Aravalli hill range, it is one of the conservative kinds in Rajasthan because of the favorable pleasant weather as well as the diversity in fauna. This place has various types of plants, as well as animal species such as leopards, crocodiles, sloth bears and several birds.
        </p>
        <p className='mb-0'>Nature lovers may hike the sanctuary’s trekking paths which provide novelty and exciting views of hills and valleys not forgetting the wildlife therein. It is also the place where the Nakki lake which is famous all around is and after chasing wild lives one can take a boat ride on the lake.</p>
        <p className="fw-bold mt-2 mb-0">
          Things to do:
        </p>
        <p className='mb-0'>• Walking a hike in the beautiful trails of Mount Abu</p>
        <p className='mb-0'>• Visiting the sanctuary by car or on foot</p>
        <p className='mb-0'>• Drinking tea while boating in Nakki Lake which comes just after a day of trying to explore the entire place.</p>

        <p className="fw-bold mt-2 mb-0">
          Timings:
        </p>
        <Table responsive className='table table-rounded my-0'>
          <thead>
            <tr>
              <th>Month</th>
              <th>Morning Trip Timing</th>
              <th>Evening Trip Timing</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1 October to 31 October</td>
              <td>6:30 AM - 10:00 AM</td>
              <td>2:30 PM - 6:00 PM</td>
            </tr>
            <tr>
              <td>1 November to 31 January</td>
              <td>7:00 AM - 10:30 AM</td>
              <td>2:00 PM - 5:30 PM</td>
            </tr>
            <tr>
              <td>1 February to 31 March</td>
              <td>6:30 AM - 10:00 AM</td>
              <td>2:30 PM - 6:00 PM</td>
            </tr>
            <tr>
              <td>1 April to 16 May</td>
              <td>6:00 AM - 09:30 AM</td>
              <td>3:00 PM - 6:30 PM</td>
            </tr>
            <tr>
              <td>16 May to 30 June</td>
              <td>6:00 AM - 09:30 AM</td>
              <td>3:30 PM - 7:00 PM</td>
            </tr>
          </tbody>
        </Table>
        <p className="fw-bold mt-2 mb-0">
          Charges:
        </p>
        <Table responsive className='table table-rounded my-0'>
          <thead>
            <tr>
              <th>Visitors</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Gypsy Amount (Indian)</td>
              <td>₹300 (Jeep Safari included)</td>
            </tr>
            <tr>
              <td>Gypsy Amount (Foreigner)</td>
              <td>₹300</td>
            </tr>
          </tbody>
        </Table>

        <h4 className='mt-3'>6. Gajner Wildlife Sanctuary: Off-the-Beaten-Path Adventure</h4>
        <p className='mb-0'>For those wishing to be somewhat insulated from the typical tourist crowd and actually see wildlife which are virtually all over the place, one of the best places to visit is the Gajner Wildlife Sanctuary in Bikaner. Situated towards Gajner Palace, the sanctuary is a perfect way to relax into nature where tourists get to experience different animals like antelopes, black bucks, wild boars and many migratory birds. This relatively unknown wildlife trail provides excellent opportunities for those who prefer to be on their own and who want to discover the lesser known wildlife area in Rajasthan.</p>
        <p className="fw-bold mt-2 mb-0">
          Things to do:
        </p>
        <p className='mb-0'>• Wildlife tours to look at antelopes, wild boars and birds</p>
        <p className='mb-0'>• Walking along the sanctuary’s beautiful quiet ground or using a jeep.</p>
        <p className='mb-0'>• Refurbished Palace With A Palace Interior View & Enjoying A Peaceful Vacation At Gajner Palace</p>
        <p className="fw-bold mt-2 mb-0">
          Timings:
        </p>
        <Table responsive className='table table-rounded my-0'>
          <thead>
            <tr>
              <th>Month</th>
              <th>Morning Trip Timing</th>
              <th>Evening Trip Timing</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1 October to 31 October</td>
              <td>6:30 AM - 10:00 AM</td>
              <td>2:30 PM - 6:00 PM</td>
            </tr>
            <tr>
              <td>1 November to 31 January</td>
              <td>7:00 AM - 10:30 AM</td>
              <td>2:00 PM - 5:30 PM</td>
            </tr>
            <tr>
              <td>1 February to 31 March</td>
              <td>6:30 AM - 10:00 AM</td>
              <td>2:30 PM - 6:00 PM</td>
            </tr>
            <tr>
              <td>1 April to 16 May</td>
              <td>6:00 AM - 09:30 AM</td>
              <td>3:00 PM - 6:30 PM</td>
            </tr>
            <tr>
              <td>16 May to 30 June</td>
              <td>6:00 AM - 09:30 AM</td>
              <td>3:30 PM - 7:00 PM</td>
            </tr>
          </tbody>
        </Table>

        <p className="fw-bold mt-2 mb-0">
          Charges:
        </p>
        <Table responsive className='table table-rounded my-0'>
          <thead>
            <tr>
              <th>Visitors</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Gypsy Amount (Indian)</td>
              <td>₹1270</td>
            </tr>
            <tr>
              <td>Canter Amount (Indian)</td>
              <td>₹856</td>
            </tr>
            <tr>
              <td>Gypsy Amount (Foreigner)</td>
              <td>₹2084</td>
            </tr>
            <tr>
              <td>Canter Amount (Foreigner)</td>
              <td>₹1670</td>
            </tr>
          </tbody>
        </Table>

        <h4 className='mt-3'>7. Mukundra Hills Tiger Reserve: A Hidden Gem</h4>
        <p className='mb-0'>Mukundra Hills Tiger Reserve is among all the wildlife destinations of Rajasthan a truly offbeat destination and is located around Kota. This reserve, which has not been recognised widely even to this date, houses some of the important species like the Bengal tigers, leopards and the deer. The reserve also presents fabulous views of the hills, making it as suiTable for filmmakers and wildlife photographers as for travelers who like thrilling adventures.</p>
        <p className='mb-0'>This park has very strange territorial features; steep slopes and amazingly thick growth of vegetation especially trees in Mukundra Hills so formulating this as a less difficult trip would be misleading to those who would still prefer to trek through it.</p>
        <p className="fw-bold mt-2 mb-0">
          Things to do:
        </p>
        <p className='mb-0'>• Walking across the difficult terrains of Mukundra Hills</p>
        <p className='mb-0'>• Tiger tracking safaris, leopard tracking safaris etc.</p>
        <p className='mb-0'>• Safari and nature photography to get stunning shots of the great features of the planet.</p>

        <p className="fw-bold mt-2 mb-0">
          Timings:
        </p>
        <Table responsive className='table table-rounded my-0'>
          <thead>
            <tr>
              <th>Month</th>
              <th>Morning Trip Timing</th>
              <th>Evening Trip Timing</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1 October to 31 October</td>
              <td>6:30 AM - 10:00 AM</td>
              <td>2:30 PM - 6:00 PM</td>
            </tr>
            <tr>
              <td>1 November to 31 January</td>
              <td>7:00 AM - 10:30 AM</td>
              <td>2:00 PM - 5:30 PM</td>
            </tr>
            <tr>
              <td>1 February to 31 March</td>
              <td>6:30 AM - 10:00 AM</td>
              <td>2:30 PM - 6:00 PM</td>
            </tr>
            <tr>
              <td>1 April to 16 May</td>
              <td>6:00 AM - 09:30 AM</td>
              <td>3:00 PM - 6:30 PM</td>
            </tr>
            <tr>
              <td>16 May to 30 June</td>
              <td>6:00 AM - 09:30 AM</td>
              <td>3:30 PM - 7:00 PM</td>
            </tr>
          </tbody>
        </Table>

        <p className="fw-bold mt-2 mb-0">
          Charges:
        </p>
        <Table responsive className='table table-rounded my-0'>
          <thead>
            <tr>
              <th>Visitors</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Gypsy Amount (Indian)</td>
              <td>₹1270</td>
            </tr>
            <tr>
              <td>Canter Amount (Indian)</td>
              <td>₹856</td>
            </tr>
            <tr>
              <td>Gypsy Amount (Foreigner)</td>
              <td>₹2084</td>
            </tr>
            <tr>
              <td>Canter Amount (Foreigner)</td>
              <td>₹1670</td>
            </tr>
          </tbody>
        </Table>
        <h4 className='mt-3'>8. Kumbhalgarh Wildlife Sanctuary: An editorial A walk along history and wilderness</h4>
        <p className='mb-0'>Stretching around the circumference of the historical Kumbhalgarh Fort, the Kumbhalgarh Wildlife Sanctuary is blended with historical importance as well as bio-geographical richness. This sanctuary spreads over the Aravalli range of hills and encompasses many forms of life, like leopards, wolves, Hyenas, jungle cats, etc., with many different species of trees and plants. The ideal time for it is in the cold season which ranges from October to March because the climate will be fine and many animals are easily spotted. This sanctuary’s terrain offers some challenging terrains and magnificent sceneries that explain why visitors interested in wildlife would like to visit the place.
        </p>
        <p className="fw-bold mt-2 mb-0">
          Things to do:
        </p>
        <p className='mb-0'>• Walking tracks and trails offering sights of unusual fauna</p>
        <p className='mb-0'>• After that, although the sanctuary trek should be of interest, go to the Kumbhalgarh Fort, which has UNESCO World Heritage Site status.</p>
        <p className='mb-0'>• Having a taste of night camping amidst beautiful stars in the Aravalli hills</p>

        <p className="fw-bold mt-2 mb-0">
          Timings:
        </p>
        <Table responsive className='table table-rounded my-0'>
          <thead>
            <tr>
              <th>Month</th>
              <th>Morning Trip Timing</th>
              <th>Evening Trip Timing</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1 October to 31 October</td>
              <td>6:30 AM - 10:00 AM</td>
              <td>2:30 PM - 6:00 PM</td>
            </tr>
            <tr>
              <td>1 November to 31 January</td>
              <td>7:00 AM - 10:30 AM</td>
              <td>2:00 PM - 5:30 PM</td>
            </tr>
            <tr>
              <td>1 February to 31 March</td>
              <td>6:30 AM - 10:00 AM</td>
              <td>2:30 PM - 6:00 PM</td>
            </tr>
            <tr>
              <td>1 April to 16 May</td>
              <td>6:00 AM - 09:30 AM</td>
              <td>3:00 PM - 6:30 PM</td>
            </tr>
            <tr>
              <td>16 May to 30 June</td>
              <td>6:00 AM - 09:30 AM</td>
              <td>3:30 PM - 7:00 PM</td>
            </tr>
          </tbody>
        </Table>
        <h4 className='mt-3'>9. Jaisamand Wildlife Sanctuary: Wilderness by the Lake</h4>
        <p className='mb-0'>Located in proximity to Jaisamand Lake, the second largest artificial lake in Asia, the Jaisamand Wildlife Sanctuary is a blend of water and land Wildlife tours. It is the reserve of panthers, deer and crocodiles among the land animals and birds and a migrational land for birds. The location that has been adopted is the lake; with the added advantage of the beauty of the whole place, the sanctuary becomes an out-of-the-ordinary experience for anybody willing to have an experience of adventure in nature.</p>
        <p className="fw-bold mt-2 mb-0">
          Things to do:
        </p>
        <p className='mb-0'>• Hiking around Jaisamand Lake and into the woods</p>
        <p className='mb-0'>• Boat service for bird watching and crocodile sighting in Jaisamand Lake</p>
        <p className='mb-0'>• Nature and wildlife, especially birds and fish photography in a calm and magnificent climate</p>
        <p className="fw-bold mt-2 mb-0">
          Timings:
        </p>
        <Table responsive className='table table-rounded my-0'>
          <thead>
            <tr>
              <th>Month</th>
              <th>Morning Trip Timing</th>
              <th>Evening Trip Timing</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1 October to 31 October</td>
              <td>6:30 AM - 10:00 AM</td>
              <td>2:30 PM - 6:00 PM</td>
            </tr>
            <tr>
              <td>1 November to 31 January</td>
              <td>7:00 AM - 10:30 AM</td>
              <td>2:00 PM - 5:30 PM</td>
            </tr>
            <tr>
              <td>1 February to 31 March</td>
              <td>6:30 AM - 10:00 AM</td>
              <td>2:30 PM - 6:00 PM</td>
            </tr>
            <tr>
              <td>1 April to 16 May</td>
              <td>6:00 AM - 09:30 AM</td>
              <td>3:00 PM - 6:30 PM</td>
            </tr>
            <tr>
              <td>16 May to 30 June</td>
              <td>6:00 AM - 09:30 AM</td>
              <td>3:30 PM - 7:00 PM</td>
            </tr>
          </tbody>
        </Table>
        <p className="fw-bold mt-2 mb-0">
          Charges:
        </p>
        <Table responsive className='table table-rounded my-0'>
          <thead>
            <tr>
              <th>Visitors</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Gypsy Amount (Indian)</td>
              <td>₹1270</td>
            </tr>
            <tr>
              <td>Canter Amount (Indian)</td>
              <td>₹856</td>
            </tr>
            <tr>
              <td>Gypsy Amount (Foreigner)</td>
              <td>₹2084</td>
            </tr>
            <tr>
              <td>Canter Amount (Foreigner)</td>
              <td>₹1670</td>
            </tr>
          </tbody>
        </Table>
        <h4 className='mt-3'>10. Sajjangarh Wildlife Sanctuary (Monsoon Palace): A Rainy Season Paradise</h4>
        <p className='mb-0'>Located in the Aravalli range overlooking the city of Udaipur, Sajjangarh Wildlife Sanctuary, or Monsoon Palace Sanctuary, is an ideal place for literal adventurers, specifically during the monsoon. This sanctuary is located around Monsoon Palace, which is an extremely beautiful site of picturesque lakes and royal palaces along with Jharokhas in Udai Sagar and Swaroop Sagar, mainly including rain forest and greenery sights of Udai Sagar. Wildlife species sheltered in the sanctuary include sambhar, wild boars, hyenas and bird life.</p>
        <p className="fw-bold mt-2 mb-0">
          Things to do:
        </p>
        <p className='mb-0'>• Walking through the fog in the rain forest for the lover of adventures during the period of monsoon.</p>
        <p className='mb-0'>• Visiting Mardan Palace finally with the view over the sanctuary and Udaipur</p>
        <p className='mb-0'>• Picnicking and feeding the fishes, as the sanctuary supports different types of avian after a day’s rainfall.</p>
        <p className="fw-bold mt-2 mb-0">
          Timings:
        </p>
        <Table responsive className='table table-rounded my-0'>
          <thead>
            <tr>
              <th>Month</th>
              <th>Morning Trip Timing</th>
              <th>Evening Trip Timing</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1 October to 31 October</td>
              <td>6:30 AM - 10:00 AM</td>
              <td>2:30 PM - 6:00 PM</td>
            </tr>
            <tr>
              <td>1 November to 31 January</td>
              <td>7:00 AM - 10:30 AM</td>
              <td>2:00 PM - 5:30 PM</td>
            </tr>
            <tr>
              <td>1 February to 31 March</td>
              <td>6:30 AM - 10:00 AM</td>
              <td>2:30 PM - 6:00 PM</td>
            </tr>
            <tr>
              <td>1 April to 16 May</td>
              <td>6:00 AM - 09:30 AM</td>
              <td>3:00 PM - 6:30 PM</td>
            </tr>
            <tr>
              <td>16 May to 30 June</td>
              <td>6:00 AM - 09:30 AM</td>
              <td>3:30 PM - 7:00 PM</td>
            </tr>
          </tbody>
        </Table>
        <p className="fw-bold mt-2 mb-0">
          Charges:
        </p>
        <Table responsive className='table table-rounded my-0'>
          <thead>
            <tr>
              <th>Visitors</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Adult (Indian)</td>
              <td>Rs 30/- per head</td>
            </tr>
            <tr>
              <td>Golf Car</td>
              <td>Rs 50/- per head</td>
            </tr>
            <tr>
              <td>Adult (Foreigner)</td>
              <td>Rs 300/- per head</td>
            </tr>
            <tr>
              <td>Electric Car</td>
              <td>Rs 30/- per head</td>
            </tr>
          </tbody>
        </Table>
        <h4 className='mt-3'>11. Jawai Leopard Safari: Wildlife Tour in Rajasthan
        </h4>
        <p className='mb-0'>Among the attractions of the area for tourists and lovers of animals and adventures, the Jawai Leopard Safari is a concentrated version of the wildlife tour in the region of Rajasthan. Located in the picturesque Jawai area, this safari helps you explore the difficult terrains of aravalli hills famous as the wonder of the world. The safari is famous more for its leopard, of which the visitor can sight this animal in its natural environment. The Jawai Leopard Safari is the best place to spot these amazing big cats at work mostly early in the morning and late in the evening.</p>
        <p className='mb-0'>Talking about other animals the region encompasses spotted deer, crocodiles, hyenas and an incredible number of bird creatures making the photography enthusiasts and bird watchers fall in love with the place. There are also possibilities to witness daily life of the population which is living in the villages neighboring the safari, and this is a plus to the visiting experience.</p>
        <p className='mb-0'>Panoramic natural beauty, variety of birds and wild animals, in addition to the opportunity to meet leopards, the Jawai Leopard Safari offers an exciting tour in Rajasthan.</p>
        <p className="fw-bold mt-2 mb-0">
          Things to do:
        </p>
        <p className='mb-0'>• Seeing Leopards and other animals during the safari</p>
        <p className='mb-0'>• Bird watching in the different habitat</p>
        <p className='mb-0'>• Culturally, I went around the local villages to discover the whole culture.</p>

        <p className="fw-bold mt-2 mb-0">
          Timing:
        </p>
        <Table responsive className='table table-rounded my-0'>
          <thead>
            <tr>
              <th>Season</th>
              <th>Morning Trip Timing</th>
              <th>Evening Trip Timing</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Summer Season</td>
              <td>5:30 AM – 08:30 AM</td>
              <td>4:00 PM – 7:00 PM</td>
            </tr>
            <tr>
              <td>Winter Season</td>
              <td>6:00 AM – 09:00 AM</td>
              <td>4:00 PM – 7:00 PM</td>
            </tr>
            <tr>
              <td>Bird, Crocodile & Jawai Dam Visit</td>
              <td>7:00 AM – 10:00 AM</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Village Safari</td>
              <td>9:00 AM - 11:00 AM</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Jungle Safari</td>
              <td>5:30 AM - 08:00 AM</td>
              <td>-</td>
            </tr>
          </tbody>
        </Table>

        <p className="fw-bold mt-2 mb-0">
          Charges:
        </p>
        <Table responsive className='table table-rounded my-0'>
          <thead>
            <tr>
              <th>Visitors</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Gypsy Amount (Indian)</td>
              <td>Rs 4000/- Per Gypsy</td>
            </tr>
            <tr>
              <td>Gypsy Amount (Foreigner)</td>
              <td>-</td>
            </tr>
          </tbody>
        </Table>

        <p className="fw-bold mt-2 mb-0">
          Conclusion:
        </p>
        <p className='mb-0'>Rajasthan is not all about palace and fort; it is all about the wild and the wilder. For passionates who look for an accurate feeling of the wild nature and who want to feel the taste of the hunting but strictly non-lethal, there is nothing better than the Rajasthan wildlife trails for adventurers which combined the toughest terrains for the harshest climate and the treks along with the sightseeing of different regions along with various types of forests that give you the preference to see the animals in the natural habitats. If you are hiking through the jungle, traveling through desert or embarking on a safari in savannah, the wildlife tours of Rajasthan will definitely not leave you disappointed along with providing memories of a lifetime.</p>
        <hr />
        <p className="fw-bold mt-2 mb-0">
          FAQs
        </p>
        <p className="fw-bold mt-2 mb-0">
          Which parks are worth visiting in Rajasthan?
        </p>
        <p className='mb-0'>The finest National parks tourists should visit in India are Ranthambore National Park, Sariska Tiger Reserve and Keoladeo National Park. There are many similarities between the two parks; they both have generic products like tigers, wild animals, birds, and so on, but one can do it differently.</p>

        <p className="fw-bold mt-2 mb-0">
          What wild animals can a tourist hope to encounter in Ranthambore National Park?
        </p>
        <p className='mb-0'>Local people of Rajasthan tour From Ranthambore this way will be able to get the best out of the tiger-spotting safaris inside the park. The conservation value of this park is relatively high & some historical buildings further enhance the park beauty.</p>
        <p className="fw-bold mt-2 mb-0">
          What are the best time to visit Ranthambore National Park?
        </p>
        <p className='mb-0'>Some of the most famous adventurous activities for wildlife tours are jeep safari, nature walks and camel safari tours. All such activities make the visitors more aware of the natural systems in the region as they participate in respective activities.
        </p>
        <p className="fw-bold mt-2 mb-0">
          What is the best time to go bird watching in Keoladeo National Park?
        </p>
        <p className='mb-0'>The ideal months to go bird watching in Keoladeo National Park is during the migration periods, which fall between October and March. Tourists can observe different endangered birds and other animals, and the park is part of a UNESCO list.</p>
        <p className="fw-bold mt-2 mb-0">
          In what ways do the camel safaris improve the cultural experience in the region of Rajasthan?
        </p>
        <p className='mb-0'>Camel safaris are ideal to move through some of the world most extensive and arid terrains while interacting with some of the native tribes. What is more important is that it allows tourists to discover the native customs and traditions and value the history and culture of Rajasthan.        </p>
        <p className="fw-bold mt-2 mb-0">
          What is in it for the visitor to receive customized adventure packages in Rajasthan?
        </p>
        <p className='mb-0'>New travel products in Rajasthan make it possible to take packaged trips where choices of activities like cooking demonstrations and visits to villages are provided. The guides improve these experiences with their experience to give the guests a better understanding of the area.</p>

      </>
    ),
  },
  {
    author: 'Sandeep Verma',
    image: allStatesImages.kerala.kerala01.src,
    date: '2024-06-25',
    heading: 'A Guide to Bird Watching in India',
    slug: generateSlug('A Guide to Bird Watching in India'),
    description:
      'India’s diverse habitats make it a paradise for bird watchers. This guide covers the best places to observe rare and exotic bird species across the country.',
    category: 'Wildlife',
    more: `From the migratory birds of Bharatpur to the rich bird life in Kerala’s forests, 
              India offers prime spots for bird watching enthusiasts to catch a glimpse of vibrant 
              and rare species.`,
  },
];

//* functional assets
export const getLatestBlogs = (blogs, count = 5) => {
  return blogs
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, count);
};

//* Function to get popular blogs
export const getPopularBlogs = (blogs, count = 5) => {
  return blogs.slice(0, count);
};

//* Function to get blogs by category
export const getBlogsByCategory = (blogs, category) => {
  return blogs.filter(
    (blog) => blog.category.toLowerCase() === category.toLowerCase()
  );
};

export const blogCategories = [
  {
    path: '/food',
    text: 'food',
  },
  {
    path: '/wildlife',
    text: 'wildlife',
  },
  {
    path: '/tour-and-travels',
    text: 'tour & travels',
  },
  {
    path: '/history-and-culture',
    text: 'history & culture',
  },
  {
    path: '/news-and-updates',
    text: 'News & Updates',
  },
  {
    path: '/fair-and-festivals',
    text: 'Fair & Festivals',
  },
];
