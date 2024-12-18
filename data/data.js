import {
  allCitiesImages,
  allGalleryImages,
  allStatesImages,
  cabImages,
} from './imageData';

// breadcrumb data
// breadcrumbData.js
const breadcrumbData = {
  // main
  aboutUs: [{ label: 'home', link: '/' }, { label: 'About us' }],
  contactUs: [{ label: 'home', link: '/' }, { label: 'contact us' }],
  privacyPolicy: [{ label: 'home', link: '/' }, { label: 'Privacy Policy' }],
  tnc: [{ label: 'home', link: '/' }, { label: 'Terms & Conditions' }],
  faq: [{ label: 'home', link: '/' }, { label: 'Faq' }],

  // popular tour packages
  popularTour: [
    { label: 'home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: 'popular tour packages' },
  ],

  // exclusive tour packages
  familyTour: [
    { label: 'home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: 'family tour packages' },
  ],
  honeymoonTour: [
    { label: 'home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: 'rajasthan honeymoon packages' },
  ],
  womenfriendlyTour: [
    { label: 'home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: 'women family rajasthan tour' },
  ],
  seniorcitizenTour: [
    { label: 'home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: 'rajasthan tour for senior citizen' },
  ],
  ltcTour: [
    { label: 'home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: 'LTC tour packages' },
  ],
  _02_05daystours: [
    { label: 'home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: '02-05 days rajasthan tour packages' },
  ],
  _06_10daystours: [
    { label: 'home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: '06-10 days rajasthan tour packages' },
  ],

  // between tours
  _02_04Days: [
    { label: 'home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: '02-04 days tour packages' },
  ],
  _02_05Days: [
    { label: 'home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: '02-05 days tour packages' },
  ],
  _05_07Days: [
    { label: 'home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: '05-07 days tour packages' },
  ],
  _06_10Days: [
    { label: 'home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: '06-10 days tour packages' },
  ],
  _08_10Days: [
    { label: 'home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: '08-10 days tour packages' },
  ],
  // tour by days
  tourByDaysHome: [
    { label: 'home', link: '/' },
    { label: 'rajasthan tour packages' },
  ],
  _02Days: [
    { label: 'home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: '02 days tour packages' },
  ],

  _03Days: [
    { label: 'home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: '03 days tour packages' },
  ],

  _04Days: [
    { label: 'home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: '04 days tour packages' },
  ],

  _05Days: [
    { label: 'home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: '05 days tour packages' },
  ],

  _06Days: [
    { label: 'home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: '06 days tour packages' },
  ],

  _07Days: [
    { label: 'home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: '07 days tour packages' },
  ],

  _08Days: [
    { label: 'home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: '08 days tour packages' },
  ],

  _09Days: [
    { label: 'home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: '09 days tour packages' },
  ],

  _10Days: [
    { label: 'home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: '10 days tour packages' },
  ],
  _11_15Days: [
    { label: 'home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: '11-15 days tour packages' },
  ],

  // tour by cities
  citiesHome: [{ label: 'Home', link: '/' }, { label: 'Tour by Cities' }],
  rajasthanTourFromAgra: [
    { label: 'Home', link: '/' },
    { label: 'Tour by Cities', link: '/rajasthan-tour-by-cities' },
    { label: 'Rajasthan Tour from Agra' },
  ],
  rajasthanTourFromAhmedabad: [
    { label: 'Home', link: '/' },
    { label: 'Tour by Cities', link: '/rajasthan-tour-by-cities' },
    { label: 'Rajasthan Tour from Ahmedabad' },
  ],
  rajasthanTourFromBhubaneshwar: [
    { label: 'Home', link: '/' },
    { label: 'Tour by Cities', link: '/rajasthan-tour-by-cities' },
    { label: 'Rajasthan Tour from Bhubaneshwar' },
  ],
  rajasthanTourFromDelhi: [
    { label: 'Home', link: '/' },
    { label: 'Tour by Cities', link: '/rajasthan-tour-by-cities' },
    { label: 'Rajasthan Tour from Delhi' },
  ],
  rajasthanTourFromChennai: [
    { label: 'Home', link: '/' },
    { label: 'Tour by Cities', link: '/rajasthan-tour-by-cities' },
    { label: 'Rajasthan Tour from Chennai' },
  ],
  rajasthanTourFromCochin: [
    { label: 'Home', link: '/' },
    { label: 'Tour by Cities', link: '/rajasthan-tour-by-cities' },
    { label: 'Rajasthan Tour from Cochin' },
  ],
  rajasthanTourFromCoimbatore: [
    { label: 'Home', link: '/' },
    { label: 'Tour by Cities', link: '/rajasthan-tour-by-cities' },
    { label: 'Rajasthan Tour from Coimbatore' },
  ],
  rajasthanTourFromGujarat: [
    { label: 'Home', link: '/' },
    { label: 'Tour by Cities', link: '/rajasthan-tour-by-cities' },
    { label: 'Rajasthan Tour from Gujarat' },
  ],
  rajasthanTourFromIndore: [
    { label: 'Home', link: '/' },
    { label: 'Tour by Cities', link: '/rajasthan-tour-by-cities' },
    { label: 'Rajasthan Tour from Indore' },
  ],
  rajasthanTourFromKarnataka: [
    { label: 'Home', link: '/' },
    { label: 'Tour by Cities', link: '/rajasthan-tour-by-cities' },
    { label: 'Rajasthan Tour from Karnataka' },
  ],
  rajasthanTourFromKerala: [
    { label: 'Home', link: '/' },
    { label: 'Tour by Cities', link: '/rajasthan-tour-by-cities' },
    { label: 'Rajasthan Tour from Kerala' },
  ],
  rajasthanTourFromMysore: [
    { label: 'Home', link: '/' },
    { label: 'Tour by Cities', link: '/rajasthan-tour-by-cities' },
    { label: 'Rajasthan Tour from Mysore' },
  ],
  rajasthanTourFromNagpur: [
    { label: 'Home', link: '/' },
    { label: 'Tour by Cities', link: '/rajasthan-tour-by-cities' },
    { label: 'Rajasthan Tour from Nagpur' },
  ],
  rajasthanTourFromBangalore: [
    { label: 'Home', link: '/' },
    { label: 'Tour by Cities', link: '/rajasthan-tour-by-cities' },
    { label: 'Rajasthan Tour from Bangalore' },
  ],
  rajasthanTourFromPunjab: [
    { label: 'Home', link: '/' },
    { label: 'Tour by Cities', link: '/rajasthan-tour-by-cities' },
    { label: 'Rajasthan Tour from Punjab' },
  ],
  rajasthanTourFromRajkot: [
    { label: 'Home', link: '/' },
    { label: 'Tour by Cities', link: '/rajasthan-tour-by-cities' },
    { label: 'Rajasthan Tour from rajkot' },
  ],
  rajasthanTourFromTelangana: [
    { label: 'Home', link: '/' },
    { label: 'Tour by Cities', link: '/rajasthan-tour-by-cities' },
    { label: 'Rajasthan Tour from telangana' },
  ],
  rajasthanTourFromUdaipur: [
    { label: 'Home', link: '/' },
    { label: 'Tour by Cities', link: '/rajasthan-tour-by-cities' },
    { label: 'Rajasthan Tour from udaipur' },
  ],
  rajasthanTourFromVijaywada: [
    { label: 'Home', link: '/' },
    { label: 'Tour by Cities', link: '/rajasthan-tour-by-cities' },
    { label: 'Rajasthan Tour from vijaywada' },
  ],
  rajasthanTourFromAndhraPradesh: [
    { label: 'Home', link: '/' },
    { label: 'Tour by Cities', link: '/rajasthan-tour-by-cities' },
    { label: 'Rajasthan Tour from Andhra Pradesh' },
  ],
  rajasthanTourFromBikaner: [
    { label: 'Home', link: '/' },
    { label: 'Tour by Cities', link: '/rajasthan-tour-by-cities' },
    { label: 'Rajasthan Tour from bikaner' },
  ],
  rajasthanTourFromChandigarh: [
    { label: 'Home', link: '/' },
    { label: 'Tour by Cities', link: '/rajasthan-tour-by-cities' },
    { label: 'Rajasthan Tour from chandigarh' },
  ],
  rajasthanTourFromChhattisgarh: [
    { label: 'Home', link: '/' },
    { label: 'Tour by Cities', link: '/rajasthan-tour-by-cities' },
    { label: 'Rajasthan Tour from chhattisgarh' },
  ],
  rajasthanTourFromHyderabad: [
    { label: 'Home', link: '/' },
    { label: 'Tour by Cities', link: '/rajasthan-tour-by-cities' },
    { label: 'Rajasthan Tour from hyderabad' },
  ],
  rajasthanTourFromJaipur: [
    { label: 'Home', link: '/' },
    { label: 'Tour by Cities', link: '/rajasthan-tour-by-cities' },
    { label: 'Rajasthan Tour from jaipur' },
  ],
  rajasthanTourFromJaisalmer: [
    { label: 'Home', link: '/' },
    { label: 'Tour by Cities', link: '/rajasthan-tour-by-cities' },
    { label: 'Rajasthan Tour from jaisalmer' },
  ],
  rajasthanTourFromJodhpur: [
    { label: 'Home', link: '/' },
    { label: 'Tour by Cities', link: '/rajasthan-tour-by-cities' },
    { label: 'Rajasthan Tour from jodhpur' },
  ],
  rajasthanTourFromKolkata: [
    { label: 'Home', link: '/' },
    { label: 'Tour by Cities', link: '/rajasthan-tour-by-cities' },
    { label: 'Rajasthan Tour from kolkata' },
  ],
  rajasthanTourFromKota: [
    { label: 'Home', link: '/' },
    { label: 'Tour by Cities', link: '/rajasthan-tour-by-cities' },
    { label: 'Rajasthan Tour from kota' },
  ],
  rajasthanTourFromMaharashtra: [
    { label: 'Home', link: '/' },
    { label: 'Tour by Cities', link: '/rajasthan-tour-by-cities' },
    { label: 'Rajasthan Tour from maharashtra' },
  ],
  rajasthanTourFromMountabu: [
    { label: 'Home', link: '/' },
    { label: 'Tour by Cities', link: '/rajasthan-tour-by-cities' },
    { label: 'Rajasthan Tour from mountabu' },
  ],
  rajasthanTourFromMumbai: [
    { label: 'Home', link: '/' },
    { label: 'Tour by Cities', link: '/rajasthan-tour-by-cities' },
    { label: 'Rajasthan Tour from Mumbai' },
  ],
  rajasthanTourFromOdisha: [
    { label: 'Home', link: '/' },
    { label: 'Tour by Cities', link: '/rajasthan-tour-by-cities' },
    { label: 'Rajasthan Tour from odisha' },
  ],
  rajasthanTourFromPune: [
    { label: 'Home', link: '/' },
    { label: 'Tour by Cities', link: '/rajasthan-tour-by-cities' },
    { label: 'Rajasthan Tour from pune' },
  ],
  rajasthanTourFromRanthambore: [
    { label: 'Home', link: '/' },
    { label: 'Tour by Cities', link: '/rajasthan-tour-by-cities' },
    { label: 'Rajasthan Tour from ranthambore' },
  ],
  rajasthanTourFromSurat: [
    { label: 'Home', link: '/' },
    { label: 'Tour by Cities', link: '/rajasthan-tour-by-cities' },
    { label: 'Rajasthan Tour from surat' },
  ],
  rajasthanTourFromTamilnadu: [
    { label: 'Home', link: '/' },
    { label: 'Tour by Cities', link: '/rajasthan-tour-by-cities' },
    { label: 'Rajasthan Tour from tamilnadu' },
  ],
  rajasthanTourFromVisakhapatnam: [
    { label: 'Home', link: '/' },
    { label: 'Tour by Cities', link: '/rajasthan-tour-by-cities' },
    { label: 'Rajasthan Tour from visakhapatnam' },
  ],
  rajasthanTourFromWestbengal: [
    { label: 'Home', link: '/' },
    { label: 'Tour by Cities', link: '/rajasthan-tour-by-cities' },
    { label: 'Rajasthan Tour from west bengal' },
  ],

  // tour packages
  jaipurTourPackage: [
    { label: 'home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: 'jaipur tour packages' },
  ],

  ajmerTourPackage: [
    { label: 'home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: 'ajmer tour packages' },
  ],

  bikanerTourPackage: [
    { label: 'home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: 'bikaner tour packages' },
  ],

  bharatpurTourPackage: [
    { label: 'home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: 'bharatpur tour packages' },
  ],

  udaipurTourPackage: [
    { label: 'home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: 'udaipur tour packages' },
  ],

  ranthamboreTourPackage: [
    { label: 'home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: 'ranthambore tour packages' },
  ],

  jaisalmerTourPackage: [
    { label: 'home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: 'jaisalmer tour packages' },
  ],

  jodhpurTourPackage: [
    { label: 'home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: 'jodhpur tour packages' },
  ],

  mountabuTourPackage: [
    { label: 'home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: 'mount abu tour packages' },
  ],

  delhiTourPackage: [
    { label: 'home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: 'delhi tour packages' },
  ],

  // cab rentals
  homeCabRental: [{ label: 'Home', link: '/' }, { label: 'cab rental' }],
  jaipurCab: [
    { label: 'Home', link: '/' },
    { label: 'cab rental', link: '/rajasthan-cab-rental' },
    { label: 'jaipur cab rental' },
  ],
  agraCab: [
    { label: 'Home', link: '/' },
    { label: 'cab rental', link: '/rajasthan-cab-rental' },
    { label: 'agra cab rental' },
  ],
  jodhpurCab: [
    { label: 'Home', link: '/' },
    { label: 'cab rental', link: '/rajasthan-cab-rental' },
    { label: 'jodhpur cab rental' },
  ],
  bikanerCab: [
    { label: 'Home', link: '/' },
    { label: 'cab rental', link: '/rajasthan-cab-rental' },
    { label: 'bikaner cab rental' },
  ],
  ajmerCab: [
    { label: 'Home', link: '/' },
    { label: 'cab rental', link: '/rajasthan-cab-rental' },
    { label: 'ajmer cab rental' },
  ],
  delhiCab: [
    { label: 'Home', link: '/' },
    { label: 'cab rental', link: '/rajasthan-cab-rental' },
    { label: 'delhi cab rental' },
  ],
  jaisalmerCab: [
    { label: 'Home', link: '/' },
    { label: 'cab rental', link: '/rajasthan-cab-rental' },
    { label: 'jaisalmer cab rental' },
  ],
  kotaCab: [
    { label: 'Home', link: '/' },
    { label: 'cab rental', link: '/rajasthan-cab-rental' },
    { label: 'kota cab rental' },
  ],
  mountabuCab: [
    { label: 'Home', link: '/' },
    { label: 'cab rental', link: '/rajasthan-cab-rental' },
    { label: 'mountabu cab rental' },
  ],
  ranthamboreCab: [
    { label: 'Home', link: '/' },
    { label: 'cab rental', link: '/rajasthan-cab-rental' },
    { label: 'ranthambore cab rental' },
  ],
  udaipurCab: [
    { label: 'Home', link: '/' },
    { label: 'cab rental', link: '/rajasthan-cab-rental' },
    { label: 'udaipur cab rental' },
  ],

  // destinations
  destinationHome: [{ label: 'Home', link: '/' }, { label: 'destination' }],
  jaipur: [{ label: 'Home', link: '/' }, { label: 'jaipur' }],
  jodhpur: [{ label: 'Home', link: '/' }, { label: 'jodhpur' }],
  bikaner: [{ label: 'Home', link: '/' }, { label: 'bikaner' }],
  jaisalmer: [{ label: 'Home', link: '/' }, { label: 'jaisalmer' }],
  ranthambore: [{ label: 'Home', link: '/' }, { label: 'ranthambore' }],
  bharatpur: [{ label: 'Home', link: '/' }, { label: 'bharatpur' }],
  agra: [{ label: 'Home', link: '/' }, { label: 'agra' }],
  delhi: [{ label: 'Home', link: '/' }, { label: 'delhi' }],
  mountabu: [{ label: 'Home', link: '/' }, { label: 'mountabu' }],
  udaipur: [{ label: 'Home', link: '/' }, { label: 'udaipur' }],
  ajmer: [{ label: 'Home', link: '/' }, { label: 'ajmer' }],
  pushkar: [{ label: 'Home', link: '/' }, { label: 'pushkar' }],

  // tour packages by theme
  wildlifeTour: [
    { label: 'Home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: 'Wildlife Tour Packages' },
  ],
  groupTour: [
    { label: 'Home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: 'Rajasthan Group Tour Packages' },
  ],
  luxuryTour: [
    { label: 'Home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: 'luxury Tour Packages' },
  ],
  tourismTour: [
    { label: 'Home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: 'Rajasthan tourism Packages' },
  ],
  religiousTour: [
    { label: 'Home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: 'Religious tour Packages' },
  ],
  villageTour: [
    { label: 'Home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: 'Rajasthan village Tours' },
  ],
  rdtcHotelTour: [
    { label: 'Home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: 'RDTC hotels tour' },
  ],
  heritageHotelTour: [
    { label: 'Home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: 'heritage hotels tour package' },
  ],
  weekendTour: [
    { label: 'Home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: 'weekend Tour Packages' },
  ],

  tourismHotels: [
    { label: 'Home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: 'rajasthan tourism hotels' },
  ],

  // days packages
  // 2 days
  _2daysjaisalmer: [
    { label: 'Home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: '02 days jaisalmer tour package' },
  ],
  _2daysjaipur: [
    { label: 'Home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: '02 days jaipur tour package' },
  ],
  // 3 days
  _3daysjaipurajmerpushkartour: [
    { label: 'Home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: '03 days jaipur ajmer pushkar tour' },
  ],
  _03DaysJaipurAgraTour: [
    { label: 'home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: '03 days jaipur agra tour' },
  ],
  _3daysjaisalmerdesertsafaritour: [
    { label: 'Home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: '03 days jaisalmer desert safari tour' },
  ],
  _3daysjaipurranthamboreweekendtour: [
    { label: 'Home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: '03 Days Jaipur Ranthambore Weekend Tour' },
  ],
  _3daysjodhpurjaisalmerdeserttour: [
    { label: 'Home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: '03 Days Jodhpur Jaisalmer Desert Tour' },
  ],
  _3daysjodhpurmewartour: [
    { label: 'Home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: '03 Days Jodhpur Mewar Tour' },
  ],
  _3daysudaipurkumbhalgarhtour: [
    { label: 'Home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: '03 Days Udaipur Kumbhalgarh Tour' },
  ],
  _3daysudaipurmewartour: [
    { label: 'Home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: '03 Days Udaipur Mewar Tour' },
  ],
  _3daysudaipurmountabutour: [
    { label: 'Home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: '03 Days Udaipur Mountabu Tour' },
  ],
  _3daysjhalanaleopardsafaritour: [
    { label: 'Home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: '03 Days Jhalana Leopard Safari tour' },
  ],

  // 4 days
  _4daysdelhiagrajaipurtour: [
    { label: 'Home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: '04 Days Delhi Agra Jaipur Tour' },
  ],
  _4daysjaipurjaisalmertour: [
    { label: 'Home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: '04 Days Jaipur jaisalmer tour' },
  ],
  _4daysjaipurudaipurmountabutour: [
    { label: 'Home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: '04 Days jaipur udaipur mountabu tour' },
  ],
  _4daysjaipurudaipurtour: [
    { label: 'Home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: '04 Days Jaipur udaipur tour' },
  ],
  // 5 days
  _5daysgoldentriangletour: [
    { label: 'Home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: '05 days golden triangle tour' },
  ],
  _5daysjaipurudaipurjodhpurdeserttour: [
    { label: 'Home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: '05 days jaipur udaipur jodhpur desert tour' },
  ],
  _5daysjodhpurjaisalmermountabutour: [
    { label: 'Home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: '05 days jodhpur jaisalmer mountabu tour' },
  ],
  _5daysudaipurjodhpurjaisalmertour: [
    { label: 'Home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: '05 days udaipur jodhpur jaisalmer tour' },
  ],
  _5daysrajasthantour: [
    { label: 'Home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: '05 days rajasthan tour package' },
  ],

  // 6 days
  _6daysmerwartour: [
    { label: 'Home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: '05 days merwar tour' },
  ],
  _6daysrajasthanfortsanddeserttour: [
    { label: 'Home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: '05 days rajasthan forts and desert tour' },
  ],
  _6daysrajasthantour: [
    { label: 'Home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: '06 days rajasthan tour' },
  ],
  _6daysudaipurjodhpurjaisalmerdeserttour: [
    { label: 'Home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: '05 days udaipur jodhpur jaisalmer desert tour' },
  ],
  _6dayswildandhistoricrajasthantour: [
    { label: 'Home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: '05 days wild and historical tour' },
  ],

  // 7 days
  _7daysroyalrajasthantour: [
    { label: 'Home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: '05 days royal rajasthan tour' },
  ],
  // 8 days
  _8daysrajasthanbudgettour: [
    { label: 'Home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: '08 days rajasthan budget tour' },
  ],
  _8daysrajasthanheritagetour: [
    { label: 'Home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: '08 days rajasthan heritage tour' },
  ],
  _8daysrajasthanroadtrip: [
    { label: 'Home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: '08 days rajasthan road trip' },
  ],
  _8daysrajasthantourfromahmedabad: [
    { label: 'Home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: '08 days rajasthan tour from ahmedabad' },
  ],

  // 9 days
  _9daysbestofrajasthantour: [
    { label: 'Home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: '09 days best of rajasthan tour' },
  ],
  _9daysrajasthanholidaypackage: [
    { label: 'Home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: '09 days rajasthan holiday package' },
  ],
  _9daysrajasthanleisuretour: [
    { label: 'Home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: '09 days rajasthan leisure tour' },
  ],

  // 10 days
  _10daysrajasthanvacationtour: [
    { label: 'Home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: '10 days rajasthan vacation tour' },
  ],
  _10daysrajasthanculinarytour: [
    { label: 'Home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: '10 days rajasthan culinary tour' },
  ],
  _10daysrajasthanhoneymoontour: [
    { label: 'Home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: '10 days rajasthan honeymoon tour' },
  ],
  // 11 days
  _11daysrajasthantour: [
    { label: 'Home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: '11 days rajasthan tour' },
  ],

  // 12 days
  _12dayscompleterajasthantour: [
    { label: 'Home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: '12 days complete rajasthan tour' },
  ],
  _12daysrajasthanfamilytrip: [
    { label: 'Home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: '12 daus rajasthan family trip' },
  ],

  // 14 days
  _14daysrajasthanroundtripfromjaipur: [
    { label: 'Home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: '14 days rajasthan round trip from jaipur' },
  ],

  // 15 days
  _15daysclassicrajasthantourfromdelhi: [
    { label: 'Home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: '15 days classic rajasthan tour from delhi' },
  ],
  _15daysrajasthanwildlifeandhistoricaltour: [
    { label: 'Home', link: '/' },
    { label: 'rajasthan tour packages', link: '/rajasthan-tour-packages' },
    { label: '15 days rajasthan wildlife & historical tour' },
  ],

  // blogs
  food: [{ label: 'blog', link: '/blog' }, { label: 'food' }],
  tourandtravels: [
    { label: 'blog', link: '/blog' },
    { label: 'tour and travel' },
  ],
  historyandculture: [
    { label: 'blog', link: '/blog' },
    { label: 'history and culture' },
  ],
  wildlife: [{ label: 'blog', link: '/blog' }, { label: 'wildlife' }],
  newsandupdates: [
    { label: 'blog', link: '/blog' },
    { label: 'news and updates' },
  ],
  fairandfestivals: [
    { label: 'blog', link: '/blog' },
    { label: 'fair and festivals' },
  ],

  // archives
  november2024: [{ label: 'blog', link: '/blog' }, { label: 'november 2024' }],
  october2024: [{ label: 'blog', link: '/blog' }, { label: 'october 2024' }],
};
export default breadcrumbData;

// days packages
export const daysPackage = [
  {
    duration: '',
    imgSrc: allCitiesImages.jaipur.jaipurAmber02.src,
    imgAlt: 'Jaipur Amber',
    imgTitle: 'Jaipur Amber Heritage view',
    title: '02-04 Days',
    navigate: '/02-04-days-rajasthan-tours',
  },

  {
    duration: '',
    imgSrc: allCitiesImages.jaisalmer.jaisalmerHaweli.src,
    imgAlt: 'Jaisalmer Patwa Haweli',
    imgTitle: 'View of Jaisalmer Patawo ki Haweli',
    title: '05-07 Days',
    navigate: '/05-07-days-rajasthan-tours',
  },
  {
    duration: '',
    imgSrc: allCitiesImages.jaipur.jaipurPatrikaGate.src,
    imgAlt: 'Patrika Gate',
    imgTitle: 'Jaipur Patrika Gate',
    title: '08-10 Days',
    navigate: '/08-10-days-rajasthan-tours',
  },
  {
    duration: '',
    imgSrc: allCitiesImages.jaipur.jaipurGator.src,
    imgAlt: 'Jaipur Gator',
    imgTitle: 'View of Jaipur Gator',
    title: '11-15 Days',
    navigate: '/11-15-days-rajasthan-tour-packages',
  },
];

// rajsthan destinations
export const destinations = [
  {
    duration: '07 Nights | 08 days',
    imgSrc: allCitiesImages.jaipur.jaipurBanner01.src,
    title: 'jaipur',

    navigate: '/destination/jaipur',
  },
  {
    duration: '07 Nights | 08 days',
    imgSrc: allCitiesImages.jaisalmer.jaisalmer01.src,
    title: 'jaisalmer',

    navigate: '/destination/jaisalmer',
  },
  {
    duration: '07 Nights | 08 days',
    imgSrc: allCitiesImages.udaipur.udaipur01.src,
    title: 'udaipur',

    navigate: '/destination/udaipur',
  },
  {
    duration: '07 Nights | 08 days',
    imgSrc: allCitiesImages.bharatpur.bharatpurCulture.src,
    title: 'bharatpur',
    navigate: '/destination/bharatpur',
  },
  {
    duration: '07 Nights | 08 days',
    imgSrc: allCitiesImages.mountabu.mountabu01.src,
    title: 'mountabu',

    navigate: '/destination/mountabu',
  },
  {
    duration: '07 Nights | 08 days',
    imgSrc: allCitiesImages.jodhpur.jodhpur01.src,
    title: 'jodhpur',

    navigate: '/destination/jodhpur',
  },
  {
    duration: '07 Nights | 08 days',
    imgSrc: allStatesImages.agra.agra01.src,
    title: 'agra',

    navigate: '/destination/agra',
  },
  {
    duration: '07 Nights | 08 days',
    imgSrc: allStatesImages.delhi.delhi01.src,
    title: 'delhi',

    navigate: '/destination/delhi',
  },
];

// tour by cities and states
export const cabRentals = [
  {
    imgSrc: cabImages.toyotaEtios.src,
    imgTitle: cabImages.toyotaEtios.title,
    alt: cabImages.toyotaEtios.alt,
    title: 'Jaipur',
    navigate: '/jaipur-cab-rental',
  },
  {
    imgSrc: cabImages.toyotaEtios.src,
    imgTitle: cabImages.toyotaEtios.title,
    alt: cabImages.toyotaEtios.alt,
    title: 'Jaisalmer',
    navigate: '/jaisalmer-cab-rental',
  },
  {
    imgSrc: cabImages.toyotaEtios.src,
    imgTitle: cabImages.toyotaEtios.title,
    alt: cabImages.toyotaEtios.alt,
    title: 'Jodhpur',
    navigate: '/jodhpur-cab-rental',
  },
  {
    imgSrc: cabImages.toyotaEtios.src,
    imgTitle: cabImages.toyotaEtios.title,
    alt: cabImages.toyotaEtios.alt,
    title: 'Bikaner',
    navigate: '/bikaner-cab-rental',
  },
  {
    imgSrc: cabImages.toyotaEtios.src,
    imgTitle: cabImages.toyotaEtios.title,
    alt: cabImages.toyotaEtios.alt,
    title: 'Udaipur',
    navigate: '/udaipur-cab-rental',
  },
  {
    imgSrc: cabImages.toyotaEtios.src,
    imgTitle: cabImages.toyotaEtios.title,
    alt: cabImages.toyotaEtios.alt,
    title: 'ranthambore',
    navigate: '/ranthambore-cab-rental',
  },
  {
    imgSrc: cabImages.toyotaEtios.src,
    imgTitle: cabImages.toyotaEtios.title,
    alt: cabImages.toyotaEtios.alt,
    title: 'mount abu',
    navigate: '/mount-abu-cab-rental',
  },
  {
    imgSrc: cabImages.toyotaEtios.src,
    imgTitle: cabImages.toyotaEtios.title,
    alt: cabImages.toyotaEtios.alt,
    title: 'delhi',
    navigate: '/delhi-cab-rental',
  },
  {
    imgSrc: cabImages.toyotaEtios.src,
    imgTitle: cabImages.toyotaEtios.title,
    alt: cabImages.toyotaEtios.alt,
    title: 'agra',
    navigate: '/agra-cab-rental',
  },
  {
    imgSrc: cabImages.toyotaEtios.src,
    imgTitle: cabImages.toyotaEtios.title,
    alt: cabImages.toyotaEtios.alt,
    title: 'ajmer',
    navigate: '/ajmer-cab-rental',
  },
];

// tour by cities and states
export const tourByCities = [
  {
    imgSrc: allStatesImages.ahmedabad.ahmedabad01.src,
    title: 'Ahmedabad',
    imgAlt: allStatesImages.ahmedabad.ahmedabad01.alt,
    imgTitle: allStatesImages.ahmedabad.ahmedabad01.title,
    navigate: '/rajasthan-tour-from-ahmedabad',
  },
  {
    imgSrc: allStatesImages.bangalore.bangalore01.src,
    title: 'Bangalore',
    imgAlt: allStatesImages.bangalore.bangalore01.alt,
    imgTitle: allStatesImages.bangalore.bangalore01.title,
    navigate: '/rajasthan-tour-from-bangalore',
  },
  {
    imgSrc: allStatesImages.bhubaneshwar.bhubaneshwar01.src,
    title: 'Bhubaneswar',
    imgAlt: allStatesImages.bhubaneshwar.bhubaneshwar01.alt,
    imgTitle: allStatesImages.bhubaneshwar.bhubaneshwar01.title,
    navigate: '/rajasthan-tour-from-bhubaneshwar',
  },
  {
    imgSrc: allStatesImages.chennai.chennai01.src,
    title: 'Chennai',
    imgAlt: allStatesImages.chennai.chennai01.alt,
    imgTitle: allStatesImages.chennai.chennai01.title,
    navigate: '/rajasthan-tour-from-chennai',
  },
  {
    imgSrc: allStatesImages.delhi.delhiBanner.src,
    title: 'Delhi',
    imgAlt: allStatesImages.delhi.delhiBanner.alt,
    imgTitle: allStatesImages.delhi.delhiBanner.title,
    navigate: '/rajasthan-tour-from-delhi',
  },
  {
    imgSrc: allStatesImages.gujrat.gujrat01.src,
    title: 'Gujarat',
    imgAlt: allStatesImages.gujrat.gujrat01.alt,
    imgTitle: allStatesImages.gujrat.gujrat01.title,
    navigate: '/rajasthan-tour-from-gujarat',
  },
  {
    imgSrc: allStatesImages.hyderabad.hyderabad01.src,
    title: 'Hyderabad',
    imgAlt: allStatesImages.hyderabad.hyderabad01.alt,
    imgTitle: allStatesImages.hyderabad.hyderabad01.title,
    navigate: '/rajasthan-tour-from-hyderabad',
  },
  {
    imgSrc: allCitiesImages.jaipur.jaipurBanner01.src,
    title: 'Jaipur',
    imgAlt: allCitiesImages.jaipur.jaipurBanner01.alt,
    imgTitle: allCitiesImages.jaipur.jaipurBanner01.title,
    navigate: '/rajasthan-tour-from-jaipur',
  },
  {
    imgSrc: allStatesImages.karnataka.karnataka01.src,
    title: 'Karnataka',
    imgAlt: allStatesImages.karnataka.karnataka01.alt,
    imgTitle: allStatesImages.karnataka.karnataka01.title,
    navigate: '/rajasthan-tour-from-karnataka',
  },
  {
    imgSrc: allStatesImages.kerala.kerala01.src,
    title: 'Kerala',
    imgAlt: allStatesImages.kerala.kerala01.alt,
    imgTitle: allStatesImages.kerala.kerala01.title,
    navigate: '/rajasthan-tour-from-kerala',
  },
  {
    imgSrc: allStatesImages.kolkata.kolkata01.src,
    title: 'Kolkata',
    imgAlt: allStatesImages.kolkata.kolkata01.alt,
    imgTitle: allStatesImages.kolkata.kolkata01.title,
    navigate: '/rajasthan-tour-from-kolkata',
  },
  {
    imgSrc: allStatesImages.mumbai.mumbai01.src,
    title: 'Mumbai',
    imgAlt: allStatesImages.mumbai.mumbai01.alt,
    imgTitle: allStatesImages.mumbai.mumbai01.title,
    navigate: '/rajasthan-tour-from-mumbai',
  },
  {
    imgSrc: allStatesImages.pune.pune01.src,
    title: 'Pune',
    imgAlt: allStatesImages.pune.pune01.alt,
    imgTitle: allStatesImages.pune.pune01.title,
    navigate: '/rajasthan-tour-from-pune',
  },
  {
    imgSrc: allCitiesImages.udaipur.udaipur01.src,
    title: 'Udaipur',
    imgAlt: allCitiesImages.udaipur.udaipur01.alt,
    imgTitle: allCitiesImages.udaipur.udaipur01.title,
    navigate: '/rajasthan-tour-from-udaipur',
  },
  {
    imgSrc: allStatesImages.westBengal.westBengal01.src,
    title: 'West Bengal',
    imgAlt: allStatesImages.westBengal.westBengal01.alt,
    imgTitle: allStatesImages.westBengal.westBengal01.title,
    navigate: '/rajasthan-tour-from-west-bengal',
  },
  {
    imgSrc: allStatesImages.maharashtra.maharashtra01.src,
    title: 'Maharashtra',
    imgAlt: allStatesImages.maharashtra.maharashtra01.alt,
    imgTitle: allStatesImages.maharashtra.maharashtra01.title,
    navigate: '/rajasthan-tour-from-maharashtra',
  },
  {
    imgSrc: allStatesImages.cochin.cochin01.src,
    title: 'Cochin',
    imgAlt: allStatesImages.cochin.cochin01.alt,
    imgTitle: allStatesImages.cochin.cochin01.title,
    navigate: '/rajasthan-tour-from-cochin',
  },
  {
    imgSrc: allStatesImages.coimbatore.coimbatore01.src,
    title: 'Coimbatore',
    imgAlt: allStatesImages.coimbatore.coimbatore01.alt,
    imgTitle: allStatesImages.coimbatore.coimbatore01.title,
    navigate: '/rajasthan-tour-from-coimbatore',
  },
  {
    imgSrc: allStatesImages.odisha.odisha01.src,
    title: 'Odisha',
    imgAlt: allStatesImages.odisha.odisha01.alt,
    imgTitle: allStatesImages.odisha.odisha01.title,
    navigate: '/rajasthan-tour-from-odisha',
  },
  {
    imgSrc: allStatesImages.agra.agra01.src,
    title: 'Agra',
    imgAlt: allStatesImages.agra.agra01.alt,
    imgTitle: allStatesImages.agra.agra01.title,
    navigate: '/rajasthan-tour-from-agra',
  },
  {
    imgSrc: allStatesImages.chhattisgarh.chhattisgarh01.src,
    title: 'Chhattisgarh',
    imgAlt: allStatesImages.chhattisgarh.chhattisgarh01.alt,
    imgTitle: allStatesImages.chhattisgarh.chhattisgarh01.title,
    navigate: '/rajasthan-tour-from-chhattisgarh',
  },
  {
    imgSrc: allStatesImages.punjab.punjab01.src,
    title: 'Punjab',
    imgAlt: allStatesImages.punjab.punjab01.alt,
    imgTitle: allStatesImages.punjab.punjab01.title,
    navigate: '/rajasthan-tour-from-punjab',
  },
  {
    imgSrc: allStatesImages.chandigarh.chandigarh01.src,
    title: 'Chandigarh',
    imgAlt: allStatesImages.chandigarh.chandigarh01.alt,
    imgTitle: allStatesImages.chandigarh.chandigarh01.title,
    navigate: '/rajasthan-tour-from-chandigarh',
  },
  {
    imgSrc: allStatesImages.indore.indore01.src,
    title: 'Indore',
    imgAlt: allStatesImages.indore.indore01.alt,
    imgTitle: allStatesImages.indore.indore01.title,
    navigate: '/rajasthan-tour-from-indore',
  },
  {
    imgSrc: allStatesImages.mysore.mysore01.src,
    title: 'Mysore',
    imgAlt: allStatesImages.mysore.mysore01.alt,
    imgTitle: allStatesImages.mysore.mysore01.title,
    navigate: '/rajasthan-tour-from-mysore',
  },
  {
    imgSrc: allStatesImages.nagpur.nagpur01.src,
    title: 'Nagpur',
    imgAlt: allStatesImages.nagpur.nagpur01.alt,
    imgTitle: allStatesImages.nagpur.nagpur01.title,
    navigate: '/rajasthan-tour-from-nagpur',
  },
  {
    imgSrc: allStatesImages.rajkot.rajkot01.src,
    title: 'Rajkot',
    imgAlt: allStatesImages.rajkot.rajkot01.alt,
    imgTitle: allStatesImages.rajkot.rajkot01.title,
    navigate: '/rajasthan-tour-from-rajkot',
  },
  {
    imgSrc: allStatesImages.surat.surat01.src,
    title: 'Surat',
    imgAlt: allStatesImages.surat.surat01.alt,
    imgTitle: allStatesImages.surat.surat01.title,
    navigate: '/rajasthan-tour-from-surat',
  },
  {
    imgSrc: allStatesImages.vishakhapatnam.vishakhapatnam01.src,
    title: 'Visakhapatnam',
    imgAlt: allStatesImages.vishakhapatnam.vishakhapatnam01.alt,
    imgTitle: allStatesImages.vishakhapatnam.vishakhapatnam01.title,
    navigate: '/rajasthan-tour-from-vishakhapatnam',
  },
  {
    imgSrc: allStatesImages.andhraPradesh.andhraPradesh01.src,
    title: 'Andhra Pradesh',
    imgAlt: allStatesImages.andhraPradesh.andhraPradesh01.alt,
    imgTitle: allStatesImages.andhraPradesh.andhraPradesh01.title,
    navigate: '/rajasthan-tour-from-andhra-pradesh',
  },
  {
    imgSrc: allStatesImages.telangana.telangana01.src,
    title: 'Telangana',
    imgAlt: allStatesImages.telangana.telangana01.alt,
    imgTitle: allStatesImages.telangana.telangana01.title,
    navigate: '/rajasthan-tour-from-telangana',
  },
  {
    imgSrc: allStatesImages.tamilnadu.tamilnadu01.src,
    title: 'Tamil Nadu',
    imgAlt: allStatesImages.tamilnadu.tamilnadu01.alt,
    imgTitle: allStatesImages.tamilnadu.tamilnadu01.title,
    navigate: '/rajasthan-tour-from-tamilnadu',
  },
  {
    imgSrc: allCitiesImages.mountabu.mountabu01.src,
    title: 'Mountabu',
    imgAlt: allStatesImages.mountabu.mountabu01.alt,
    imgTitle: allStatesImages.mountabu.mountabu01.title,
    navigate: '/rajasthan-tour-from-mount-abu',
  },
  {
    imgSrc: allCitiesImages.ranthambore.ranthamboreBanner.src,
    title: 'Ranthambore',
    imgAlt: allCitiesImages.ranthambore.ranthamboreBanner.alt,
    imgTitle: allCitiesImages.ranthambore.ranthamboreBanner.title,
    navigate: '/rajasthan-tour-from-ranthambore',
  },
  {
    imgSrc: allCitiesImages.jaipur.jaipurAlberthall.src,
    title: 'Kota',
    imgAlt: allCitiesImages.jaipur.jaipurAlberthall.alt,
    imgTitle: allCitiesImages.jaipur.jaipurAlberthall.title,
    navigate: '/rajasthan-tour-from-kota',
  },
  {
    imgSrc: allStatesImages.vijayawada.vijayawada01.src,
    title: 'Vijaywada',
    imgAlt: allStatesImages.vijayawada.vijayawada01.alt,
    imgTitle: allStatesImages.vijayawada.vijayawada01.title,
    navigate: '/rajasthan-tour-from-vijaywada',
  },
  {
    imgSrc: allCitiesImages.jaisalmer.jaisalmer01.src,
    title: 'Jaisalmer',
    imgAlt: allCitiesImages.jaisalmer.jaisalmerFort.alt,
    imgTitle: allCitiesImages.jaisalmer.jaisalmerFort.title,
    navigate: '/rajasthan-tour-from-jaisalmer',
  },
  {
    imgSrc: allCitiesImages.jodhpur.jodhpur01.src,
    title: 'Jodhpur',
    imgAlt: allCitiesImages.jodhpur.jodhpur01.alt,
    imgTitle: allCitiesImages.jodhpur.jodhpur01.title,
    navigate: '/rajasthan-tour-from-jodhpur',
  },
  {
    imgSrc: allCitiesImages.bikaner.bikanerBanner01.src,
    title: 'Bikaner',
    imgAlt: allCitiesImages.bikaner.bikanerBanner01.alt,
    imgTitle: allCitiesImages.bikaner.bikanerBanner01.title,
    navigate: '/rajasthan-tour-from-bikaner',
  },
];

// reviewers
export const reviewers = [
  {
    name: 'Sally M',
    Images: [
      {
        src: allGalleryImages.img25.src,
        title: 'An amazing evening',
        alt: 'Customer review by Sally M: An amazing evening',
      },
      {
        src: allGalleryImages.img26.src,
        title: 'An amazing evening',
        alt: 'Customer review by Sally M: An amazing evening',
      },
    ],
    rating: 5,
    date: '10 days ago',
    title: 'An amazing evening',
    review:
      'An absolutely wonderful and amazing experience. A welcoming and very sweet family. If you’re looking for an evening with laughter, amazing food and culture, I can definitely recommend this! They teach you how to make delicious Indian food and tea, all whilst learning about their culture. wouldn’t wish to have been this experience without.',
  },
  {
    name: 'Shubham Roy Choudhary',
    Images: [
      {
        src: allGalleryImages.img11.src,
        title: 'A wonderful experience, a well planned trip',
        alt: 'Customer review by Shubham Roy Choudhary: A wonderful experience, a well planned trip',
      },
      {
        src: allGalleryImages.img12.src,
        title: 'A wonderful experience, a well planned trip',
        alt: 'Customer review by Shubham Roy Choudhary: A wonderful experience, a well planned trip',
      },
    ],
    rating: 5,
    date: '3 months ago',
    title: 'A wonderful experience, a well planned trip',
    review:
      'It was an amazing experience visiting Rajasthan. We started from Jaipur, then visited Jaisalmer where we spent a night camping at the desert and then finally visited Jodhpur. I would recommend everyone to definitely plan your trip through this travel. Thank You for the wonderful experience for me and my family.',
  },
  {
    name: 'Anand A',
    Images: [
      {
        src: allGalleryImages.img13.src,
        title: 'Awesome experience',
        alt: 'Customer review by Anand A: Awesome experience',
      },
      {
        src: allGalleryImages.img14.src,
        title: 'Awesome experience',
        alt: 'Customer review by Anand A: Awesome experience',
      },
    ],
    rating: 5,
    date: '4 months ago',
    title: 'Awesome experience',
    review:
      'Very nicely coordinated trip. Started with Jaipur and ended the 10 day trip at Bikaner. Rajasthani food is excellent. We get to explore a hill station in Mt Abu, once in a lifetime desert safari experience in Jaisalmer, historic masterpieces in Jaipur, Jodhpur, Udaipur, and religious calmness of Pushkar and Karni mata temples.',
  },
  {
    name: 'Nitin S',
    Images: [
      {
        src: allGalleryImages.img15.src,
        title: 'Rajasthan Wonderful Trip',
        alt: 'Customer review by Nitin S: Rajasthan Wonderful Trip',
      },
      {
        src: allGalleryImages.img16.src,
        title: 'Rajasthan Wonderful Trip',
        alt: 'Customer review by Nitin S: Rajasthan Wonderful Trip',
      },
    ],
    rating: 5,
    date: '2 months ago',
    title: 'Rajasthan Wonderful Trip',
    review:
      'We had a great trip to Rajasthan and all thanks to Rajasthan travel help line. We covered sight seeing at Jaipur, Jodhpur and Udaipur with the respective guides who enlightened us regarding the places we visited. A guide is a must to understand all the details may it be regarding palaces or museum artifacts which were included in our tour package.',
  },
];
