import fs from 'fs';
import { SitemapStream, streamToPromise } from 'sitemap';

// Define your routes
const routes = [
  { path: '/faq' },

  {
    path: '/gallery',
  },
  {
    path: '/contact-us',
  },
  {
    path: '/about-us',
  },
  { path: '/privacy-policy' },
  {
    path: '/terms-and-conditions',
  },
  {
    path: '/blog/categories/fair-and-festivals',
    path: '/blog/categories/history-and-culture',
    path: '/blog/categories/tour-and-travels',
    path: '/blog/categories/food',
    path: '/blog/categories/wildlife',
    path: '/blog/archives/december-2024',
    path: '/blog/archives/november-2024',
    path: '/blog/pushkar-camel-fair-cultural-tourism-rajasthan',
    path: '/blog/delhi-to-srinagar-train-kashmir-train-tour-jammu-railway-routes',
    path: '/blog/rajasthan-cultural-heritage-tours-exploring-tradition-history',
    path: '/blog/pink-city-jaipur-turns-297-discover-why-it-attracts-visitors-from-across-the-globe',
    path: '/blog/wildlife-trails-rajasthan-nature-adventures',
  },
  // destination
  { path: '/jaipur' },
  { path: '/mount-abu' },
  { path: '/bikaner' },
  { path: '/ranthambore' },
  { path: '/udaipur' },
  { path: '/jaisalmer' },
  { path: '/ajmer' },
  { path: '/jodhpur' },
  { path: '/bharatpur' },
  { path: '/agra' },
  { path: '/delhi' },
  { path: '/kota' },

  {
    path: '/02-04-days-rajasthan-tours',
  },
  {
    path: '/05-07-days-rajasthan-tours',
  },
  {
    path: '/08-10-days-rajasthan-tours',
  },
  {
    path: '/11-15-days-rajasthan-tour-packages',
  },
  {
    path: '/06-10-days-rajasthan-tours',
  },
  {
    path: '/02-05-days-rajasthan-tours',
  },

  // propar days tours
  {
    path: '/02-days-rajasthan-tour-packages',
  },
  {
    path: '/2days-jaisalmer-tour-package',
  },
  { path: '/2days-jaipur-tour-package' },

  // 03 days (1+10=11)
  {
    path: '/03-days-rajasthan-tour-packages',
  },
  {
    path: '/3days-jaipur-ajmer-pushkar-tour',
  },
  {
    path: '/3days-jaipur-ranthambore-weekend-tour',
  },
  {
    path: '/3days-udaipur-mewar-tour',
  },
  {
    path: '/3days-jaisalmer-desert-safari-tour',
  },
  {
    path: '/3days-udaipur-kumbhalgarh-tour',
  },
  {
    path: '/3days-jodhpur-jaisalmer-desert-tour',
  },
  {
    path: '/3days-jodhpur-mewar-tour',
  },
  {
    path: '/3days-udaipur-mountabu-tour',
  },
  {
    path: '/3days-jhalana-leopard-safari-tour',
  },
  {
    path: '/3days-jaipur-agra-tour',
  },

  // 04 days (4+1=5)
  {
    path: '/04-days-rajasthan-tour-packages',
  },
  {
    path: '/4days-jaipur-udaipur-tour',
  },
  {
    path: '/4days-jaipur-jaisalmer-tour',
  },
  { path: '/4days-delhi-agra-jaipur-tour' },
  {
    path: '/4days-jaipur-udaipur-mountabu-tour',
  },

  // 05 days (5+1=6)
  {
    path: '/05-days-rajasthan-tour-packages',
  },
  {
    path: '/5days-jodhpur-jaisalmer-mountabu-tour',
  },
  {
    path: '/5days-udaipur-jodhpur-jaisalmer-tour',
  },
  { path: '/5days-golden-triangle-tour' },
  {
    path: '/5days-rajasthan-tour-package',
  },
  {
    path: '/5days-jaipur-udaipur-jodhpur-desert-tour',
  },

  // 06 days (5+1=6)
  {
    path: '/06-days-rajasthan-tour-packages',
  },
  {
    path: '/6days-udaipur-jodhpur-jaisalmer-desert-tour',
  },
  {
    path: '/6days-wild-and-historic-rajasthan-tour',
  },

  { path: '/6days-mewar-tour' },
  {
    path: '/6days-rajasthan-tour',
  },
  {
    path: '/6days-rajasthan-forts-and-desert-tour',
  },

  // 07 days (1+1=2)
  {
    path: '/07-days-rajasthan-tour-packages',
  },
  { path: '/7days-royal-rajasthan-tour' },

  // 08 days (4+1=5)
  {
    path: '/08-days-rajasthan-tour-packages',
  },
  { path: '/8days-rajasthan-budget-tour' },
  {
    path: '/8days-rajasthan-tour-from-ahmedabad',
  },
  { path: '/8days-rajasthan-road-trip' },
  {
    path: '/8days-rajasthan-heritage-tour',
  },

  // 09 days (3+1=4)
  {
    path: '/09-days-rajasthan-tour-packages',
  },
  {
    path: '/9days-rajasthan-holiday-package',
  },
  { path: '/9days-best-of-rajasthan-tour' },
  {
    path: '/9days-rajasthan-leisure-tour',
  },
  // 10 days (3+1=4)
  {
    path: '/10-days-rajasthan-tour-packages',
  },
  {
    path: '/10days-rajasthan-honeymoon-tour',
  },
  {
    path: '/10days-rajasthan-vacation-tour',
  },
  {
    path: '/10days-rajasthan-culinary-tour',
  },

  // 11-15 days (6+1=7)
  {
    path: '/12days-complete-rajasthan-tour',
  },
  {
    path: '/15days-classic-rajasthan-tour-from-delhi',
  },
  {
    path: '/14days-rajasthan-round-trip-from-jaipur',
  },
  {
    path: '/15days-rajasthan-wildlife-and-historical-tour',
  },
  {
    path: '/11days-rajasthan-tour',
  },
  {
    path: '/12days-rajasthan-family-trip',
  },

  {
    path: '/rajasthan-tourism-tour-packages',
  },
  { path: '/wildlife-tour-packages' },
  { path: '/religious-tour-packages' },
  { path: '/village-tour-packages' },
  { path: '/weekend-tour-packages' },
  { path: '/rajasthan-tourism-hotels' },
  {
    path: '/heritage-hotels-tour-packages',
  },
  { path: '/luxury-tour-packages' },
  { path: '/rajasthan-group-tours' },

  { path: '/ltc-tour-packages' },
  { path: '/family-tour-packages' },
  { path: '/honeymoon-tour-packages' },
  { path: '/senior-citizens-tour-packages' },
  { path: '/women-friendly-tour-packages' },

  { path: '/rajasthan-cab-rental' },
  { path: '/jaipur-cab-rental' },
  { path: '/udaipur-cab-rental' },
  { path: '/jaisalmer-cab-rental' },
  { path: '/jodhpur-cab-rental' },
  { path: '/ranthambore-cab-rental' },
  { path: '/bikaner-cab-rental' },
  { path: '/mount-abu-cab-rental' },
  { path: '/delhi-cab-rental' },
  { path: '/agra-cab-rental' },
  { path: '/ajmer-cab-rental' },
  { path: '/kota-cab-rental' },

  {
    path: '/rajasthan-tour-by-cities',
  },
  {
    path: '/rajasthan-tour-from-ahmedabad',
  },
  {
    path: '/rajasthan-tour-from-bangalore',
  },
  {
    path: '/rajasthan-tour-from-bhubaneshwar',
  },
  {
    path: '/rajasthan-tour-from-chennai',
  },
  {
    path: '/rajasthan-tour-from-delhi',
  },
  {
    path: '/rajasthan-tour-from-hyderabad',
  },
  { path: '/rajasthan-tour-from-mumbai' },
  { path: '/rajasthan-tour-from-kolkata' },
  { path: '/rajasthan-tour-from-pune' },
  { path: '/rajasthan-tour-from-jaipur' },
  {
    path: '/rajasthan-tour-from-karnataka',
  },
  {
    path: '/rajasthan-tour-from-kerala',
  },
  {
    path: '/rajasthan-tour-from-udaipur',
  },
  {
    path: '/rajasthan-tour-from-west-bengal',
  },
  {
    path: '/rajasthan-tour-from-maharashtra',
  },
  {
    path: '/rajasthan-tour-from-cochin',
  },
  {
    path: '/rajasthan-tour-from-coimbatore',
  },
  { path: '/rajasthan-tour-from-odisha' },
  {
    path: '/rajasthan-tour-from-agra',
  },
  {
    path: '/rajasthan-tour-from-chhattisgarh',
  },
  {
    path: '/rajasthan-tour-from-punjab',
  },
  {
    path: '/rajasthan-tour-from-chandigarh',
  },
  {
    path: '/rajasthan-tour-from-indore',
  },
  {
    path: '/rajasthan-tour-from-mysore',
  },
  {
    path: '/rajasthan-tour-from-nagpur',
  },
  {
    path: '/rajasthan-tour-from-rajkot',
  },
  { path: '/rajasthan-tour-from-surat' },
  {
    path: '/rajasthan-tour-from-jaisalmer',
  },
  { path: '/rajasthan-tour-from-jodhpur' },
  {
    path: '/rajasthan-tour-from-visakhapatnam',
  },
  {
    path: '/rajasthan-tour-from-andhra-pradesh',
  },
  {
    path: '/rajasthan-tour-from-gujarat',
  },
  {
    path: '/rajasthan-tour-from-telangana',
  },
  {
    path: '/rajasthan-tour-from-tamilnadu',
  },
  { path: '/rajasthan-tour-from-bikaner' },
  {
    path: '/rajasthan-tour-from-ranthambore',
  },
  {
    path: '/rajasthan-tour-from-mount-abu',
  },
  { path: '/rajasthan-tour-from-kota' },
  {
    path: '/rajasthan-tour-from-vijaywada',
  },
];

async function generateSitemap() {
  // Create a stream to write the sitemap
  const stream = new SitemapStream({
    hostname: 'https://www.rajasthantourpackages.in',
  });

  // Add URLs to the stream
  routes.forEach((route) => {
    stream.write({ url: route.path, lastmod: new Date() });
  });

  // End the stream and get the XML
  stream.end();
  const sitemap = await streamToPromise(stream).then((sm) => sm.toString());

  // Write the sitemap to a file
  fs.writeFileSync('./public/sitemap.xml', sitemap);
  console.log('Sitemap generated successfully!');
}

generateSitemap().catch(console.error);
