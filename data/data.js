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
    duration: '07 Nights | 08 days',
    imgSrc: allCitiesImages.jaipur.jaipurAmber02.src,
    title: '02-04 Days',
    navigate: '/02-04-days-rajasthan-tours',
  },

  {
    duration: '07 Nights | 08 days',
    imgSrc: allCitiesImages.jaisalmer.jaisalmerHaweli.src,
    title: '05-07 Days',

    navigate: '/05-07-days-rajasthan-tours',
  },
  {
    duration: '07 Nights | 08 days',
    imgSrc: allCitiesImages.jaipur.jaipurPatrikaGate.src,
    title: '08-10 Days',

    navigate: '/08-10-days-rajasthan-tours',
  },
  {
    duration: '07 Nights | 08 days',
    imgSrc: allCitiesImages.jaipur.jaipurGator.src,
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
    alt: allStatesImages.ahmedabad.ahmedabad01.alt,
    imgTitle: allStatesImages.ahmedabad.ahmedabad01.title,
    navigate: '/rajasthan-tour-from-ahmedabad',
  },
  {
    imgSrc: allStatesImages.bangalore.bangalore01.src,
    title: 'Bangalore',
    alt: allStatesImages.bangalore.bangalore01.alt,
    imgTitle: allStatesImages.bangalore.bangalore01.title,
    navigate: '/rajasthan-tour-from-bangalore',
  },
  {
    imgSrc: allStatesImages.bhubaneshwar.bhubaneshwar01.src,
    title: 'Bhubaneswar',
    alt: allStatesImages.bhubaneshwar.bhubaneshwar01.alt,
    imgTitle: allStatesImages.bhubaneshwar.bhubaneshwar01.title,
    navigate: '/rajasthan-tour-from-bhubaneshwar',
  },
  {
    imgSrc: allStatesImages.chennai.chennai01.src,
    title: 'Chennai',
    alt: allStatesImages.chennai.chennai01.alt,
    imgTitle: allStatesImages.chennai.chennai01.title,
    navigate: '/rajasthan-tour-from-chennai',
  },
  {
    imgSrc: allStatesImages.delhi.delhiBanner.src,
    title: 'Delhi',
    alt: allStatesImages.delhi.delhiBanner.alt,
    imgTitle: allStatesImages.delhi.delhiBanner.title,
    navigate: '/rajasthan-tour-from-delhi',
  },
  {
    imgSrc: allStatesImages.gujrat.gujrat01.src,
    title: 'Gujarat',
    alt: allStatesImages.gujrat.gujrat01.alt,
    imgTitle: allStatesImages.gujrat.gujrat01.title,
    navigate: '/rajasthan-tour-from-gujarat',
  },
  {
    imgSrc: allStatesImages.hyderabad.hyderabad01.src,
    title: 'Hyderabad',
    alt: allStatesImages.hyderabad.hyderabad01.alt,
    imgTitle: allStatesImages.hyderabad.hyderabad01.title,
    navigate: '/rajasthan-tour-from-hyderabad',
  },
  {
    imgSrc: allCitiesImages.jaipur.jaipurBanner01.src,
    title: 'Jaipur',
    alt: allCitiesImages.jaipur.jaipurBanner01.alt,
    imgTitle: allCitiesImages.jaipur.jaipurBanner01.title,
    navigate: '/rajasthan-tour-from-jaipur',
  },
  {
    imgSrc: allStatesImages.karnataka.karnataka01.src,
    title: 'Karnataka',
    alt: allStatesImages.karnataka.karnataka01.alt,
    imgTitle: allStatesImages.karnataka.karnataka01.title,
    navigate: '/rajasthan-tour-from-karnataka',
  },
  {
    imgSrc: allStatesImages.kerala.kerala01.src,
    title: 'Kerala',
    alt: allStatesImages.kerala.kerala01.alt,
    imgTitle: allStatesImages.kerala.kerala01.title,
    navigate: '/rajasthan-tour-from-kerala',
  },
  {
    imgSrc: allStatesImages.kolkata.kolkata01.src,
    title: 'Kolkata',
    alt: allStatesImages.kolkata.kolkata01.alt,
    imgTitle: allStatesImages.kolkata.kolkata01.title,
    navigate: '/rajasthan-tour-from-kolkata',
  },
  {
    imgSrc: allStatesImages.mumbai.mumbai01.src,
    title: 'Mumbai',
    alt: allStatesImages.mumbai.mumbai01.alt,
    imgTitle: allStatesImages.mumbai.mumbai01.title,
    navigate: '/rajasthan-tour-from-mumbai',
  },
  {
    imgSrc: allStatesImages.pune.pune01.src,
    title: 'Pune',
    alt: allStatesImages.pune.pune01.alt,
    imgTitle: allStatesImages.pune.pune01.title,
    navigate: '/rajasthan-tour-from-pune',
  },
  {
    imgSrc: allCitiesImages.udaipur.udaipur01.src,
    title: 'Udaipur',
    alt: allCitiesImages.udaipur.udaipur01.alt,
    imgTitle: allCitiesImages.udaipur.udaipur01.title,
    navigate: '/rajasthan-tour-from-udaipur',
  },
  {
    imgSrc: allStatesImages.westBengal.westBengal01.src,
    title: 'West Bengal',
    alt: allStatesImages.westBengal.westBengal01.alt,
    imgTitle: allStatesImages.westBengal.westBengal01.title,
    navigate: '/rajasthan-tour-from-west-bengal',
  },
  {
    imgSrc: allStatesImages.maharashtra.maharashtra01.src,
    title: 'Maharashtra',
    alt: allStatesImages.maharashtra.maharashtra01.alt,
    imgTitle: allStatesImages.maharashtra.maharashtra01.title,
    navigate: '/rajasthan-tour-from-maharashtra',
  },
  {
    imgSrc: allStatesImages.cochin.cochin01.src,
    title: 'Cochin',
    alt: allStatesImages.cochin.cochin01.alt,
    imgTitle: allStatesImages.cochin.cochin01.title,
    navigate: '/rajasthan-tour-from-cochin',
  },
  {
    imgSrc: allStatesImages.coimbatore.coimbatore01.src,
    title: 'Coimbatore',
    alt: allStatesImages.coimbatore.coimbatore01.alt,
    imgTitle: allStatesImages.coimbatore.coimbatore01.title,
    navigate: '/rajasthan-tour-from-coimbatore',
  },
  {
    imgSrc: allStatesImages.odisha.odisha01.src,
    title: 'Odisha',
    alt: allStatesImages.odisha.odisha01.alt,
    imgTitle: allStatesImages.odisha.odisha01.title,
    navigate: '/rajasthan-tour-from-odisha',
  },
  {
    imgSrc: allStatesImages.agra.agra01.src,
    title: 'Agra',
    alt: allStatesImages.agra.agra01.alt,
    imgTitle: allStatesImages.agra.agra01.title,
    navigate: '/rajasthan-tour-from-agra',
  },
  {
    imgSrc: allStatesImages.chhattisgarh.chhattisgarh01.src,
    title: 'Chhattisgarh',
    alt: allStatesImages.chhattisgarh.chhattisgarh01.alt,
    imgTitle: allStatesImages.chhattisgarh.chhattisgarh01.title,
    navigate: '/rajasthan-tour-from-chhattisgarh',
  },
  {
    imgSrc: allStatesImages.punjab.punjab01.src,
    title: 'Punjab',
    alt: allStatesImages.punjab.punjab01.alt,
    imgTitle: allStatesImages.punjab.punjab01.title,
    navigate: '/rajasthan-tour-from-punjab',
  },
  {
    imgSrc: allStatesImages.chandigarh.chandigarh01.src,
    title: 'Chandigarh',
    alt: allStatesImages.chandigarh.chandigarh01.alt,
    imgTitle: allStatesImages.chandigarh.chandigarh01.title,
    navigate: '/rajasthan-tour-from-chandigarh',
  },
  {
    imgSrc: allStatesImages.indore.indore01.src,
    title: 'Indore',
    alt: allStatesImages.indore.indore01.alt,
    imgTitle: allStatesImages.indore.indore01.title,
    navigate: '/rajasthan-tour-from-indore',
  },
  {
    imgSrc: allStatesImages.mysore.mysore01.src,
    title: 'Mysore',
    alt: allStatesImages.mysore.mysore01.alt,
    imgTitle: allStatesImages.mysore.mysore01.title,
    navigate: '/rajasthan-tour-from-mysore',
  },
  {
    imgSrc: allStatesImages.nagpur.nagpur01.src,
    title: 'Nagpur',
    alt: allStatesImages.nagpur.nagpur01.alt,
    imgTitle: allStatesImages.nagpur.nagpur01.title,
    navigate: '/rajasthan-tour-from-nagpur',
  },
  {
    imgSrc: allStatesImages.rajkot.rajkot01.src,
    title: 'Rajkot',
    alt: allStatesImages.rajkot.rajkot01.alt,
    imgTitle: allStatesImages.rajkot.rajkot01.title,
    navigate: '/rajasthan-tour-from-rajkot',
  },
  {
    imgSrc: allStatesImages.surat.surat01.src,
    title: 'Surat',
    alt: allStatesImages.surat.surat01.alt,
    imgTitle: allStatesImages.surat.surat01.title,
    navigate: '/rajasthan-tour-from-surat',
  },
  {
    imgSrc: allStatesImages.vishakhapatnam.vishakhapatnam01.src,
    title: 'Visakhapatnam',
    alt: allStatesImages.vishakhapatnam.vishakhapatnam01.alt,
    imgTitle: allStatesImages.vishakhapatnam.vishakhapatnam01.title,
    navigate: '/rajasthan-tour-from-vishakhapatnam',
  },
  {
    imgSrc: allStatesImages.andhraPradesh.andhraPradesh01.src,
    title: 'Andhra Pradesh',
    alt: allStatesImages.andhraPradesh.andhraPradesh01.alt,
    imgTitle: allStatesImages.andhraPradesh.andhraPradesh01.title,
    navigate: '/rajasthan-tour-from-andhra-pradesh',
  },
  {
    imgSrc: allStatesImages.telangana.telangana01.src,
    title: 'Telangana',
    alt: allStatesImages.telangana.telangana01.alt,
    imgTitle: allStatesImages.telangana.telangana01.title,
    navigate: '/rajasthan-tour-from-telangana',
  },
  {
    imgSrc: allStatesImages.tamilnadu.tamilnadu01.src,
    title: 'Tamil Nadu',
    alt: allStatesImages.tamilnadu.tamilnadu01.alt,
    imgTitle: allStatesImages.tamilnadu.tamilnadu01.title,
    navigate: '/rajasthan-tour-from-tamilnadu',
  },
  {
    imgSrc: allCitiesImages.mountabu.mountabu01.src,
    title: 'Mountabu',
    alt: allStatesImages.mountabu.mountabu01.alt,
    imgTitle: allStatesImages.mountabu.mountabu01.title,
    navigate: '/rajasthan-tour-from-mount-abu',
  },
  {
    imgSrc: allCitiesImages.ranthambore.ranthamboreBanner.src,
    title: 'Ranthambore',
    alt: allCitiesImages.ranthambore.ranthamboreBanner.alt,
    imgTitle: allCitiesImages.ranthambore.ranthamboreBanner.title,
    navigate: '/rajasthan-tour-from-ranthambore',
  },
  {
    imgSrc: allCitiesImages.jaipur.jaipurAlberthall.src,
    title: 'Kota',
    alt: allCitiesImages.jaipur.jaipurAlberthall.alt,
    imgTitle: allCitiesImages.jaipur.jaipurAlberthall.title,
    navigate: '/rajasthan-tour-from-kota',
  },
  {
    imgSrc: allStatesImages.vijayawada.vijayawada01.src,
    title: 'Vijaywada',
    alt: allStatesImages.vijayawada.vijayawada01.alt,
    imgTitle: allStatesImages.vijayawada.vijayawada01.title,
    navigate: '/rajasthan-tour-from-vijaywada',
  },
  {
    imgSrc: allCitiesImages.jaisalmer.jaisalmer01.src,
    title: 'Jaisalmer',
    alt: allCitiesImages.jaisalmer.jaisalmerFort.alt,
    imgTitle: allCitiesImages.jaisalmer.jaisalmerFort.title,
    navigate: '/rajasthan-tour-from-jaisalmer',
  },
  {
    imgSrc: allCitiesImages.jodhpur.jodhpur01.src,
    title: 'Jodhpur',
    alt: allCitiesImages.jodhpur.jodhpur01.alt,
    imgTitle: allCitiesImages.jodhpur.jodhpur01.title,
    navigate: '/rajasthan-tour-from-jodhpur',
  },
  {
    imgSrc: allCitiesImages.bikaner.bikanerBanner01.src,
    title: 'Bikaner',
    alt: allCitiesImages.bikaner.bikanerBanner01.alt,
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

// tour by days data
export const _02DaysToursData = [
  {
    title: 'Jaisalmer Tour package',
    price: 5000,
    duration: '01 night • 02 Days',
    imgSrc: '/Images/Card/jaisalmer.webp',
    alt: allCitiesImages.jaisalmer.jaisalmer01.alt,
    imgTitle: allCitiesImages.jaisalmer.jaisalmer01.title,
    navigate: '/2days-jaisalmer-tour-package',
    category: null,
    destination: ['jaisalmer'],
  },
  {
    title: 'Jaipur Tour Package',
    price: 2900,
    duration: '01 night • 02 Days',
    imgSrc: '/Images/Card/jaipur.webp',
    alt: allCitiesImages.jaipur.jaipurBanner01.alt,
    imgTitle: allCitiesImages.jaipur.jaipurBanner01.title,
    navigate: '/2days-jaipur-tour-package',
    category: null,
    destination: ['jaipur', 'ajmer', 'pushkar'],
  },
];

export const _03DaysToursData = [
  {
    title: 'jaipur Ajmer Pushkar Tour',
    price: 7500,
    duration: '02 nights • 03 Days',
    imgSrc: allCitiesImages.ajmer.ajmer01.src,
    alt: allCitiesImages.ajmer.ajmer01.alt,
    imgTitle: allCitiesImages.ajmer.ajmer01.title,
    navigate: '/3days-jaipur-ajmer-pushkar-tour',
    category: null,
    destination: ['jaipur', 'ajmer', 'pushkar'],
  },
  {
    title: 'Jaipur Ranthambore Weekend Tour',
    price: 9000,
    duration: '02 nights • 03 Days',
    imgSrc: allCitiesImages.ranthambore.ranthambore01.src,
    alt: allCitiesImages.ranthambore.ranthambore01.alt,
    imgTitle: allCitiesImages.ranthambore.ranthambore01.title,
    navigate: '/3days-jaipur-ranthambore-weekend-tour',
    category: 'weekend',
    destination: ['jaipur', 'ranthambore'],
  },
  {
    title: 'Udaipur Mewar Tour',
    price: 9000,
    duration: '02 nights • 03 Days',
    imgSrc: allCitiesImages.udaipur.udaipur01.src,
    alt: allCitiesImages.udaipur.udaipur01.alt,
    imgTitle: allCitiesImages.udaipur.udaipur01.title,
    navigate: '/3days-udaipur-mewar-tour',
    category: null,
    destination: ['udaipur', 'mewar'],
  },
  {
    title: 'jaisalmer desert safari tour',
    price: 9000,
    duration: '02 nights • 03 Days',
    imgSrc: allCitiesImages.jaisalmer.jaisalmer01.src,
    alt: allCitiesImages.jaisalmer.jaisalmer01.alt,
    imgTitle: allCitiesImages.jaisalmer.jaisalmer01.title,
    navigate: '/3days-jaisalmer-desert-safari-tour',
    category: null,
    destination: ['jaisalmer'],
  },
  {
    title: 'Udaipur Kumbhalgarh Tour',
    price: 8000,
    duration: '02 nights • 03 Days',
    imgSrc: allCitiesImages.kumbhalgarh.kumbhalgarh01.src,
    alt: allCitiesImages.kumbhalgarh.kumbhalgarh01.alt,
    imgTitle: allCitiesImages.kumbhalgarh.kumbhalgarh01.title,
    navigate: '/3days-udaipur-kumbhalgarh-tour',
    category: null,
    destination: ['udaipur', 'kumbhalgarh'],
  },
  {
    title: 'Jodhpur Jaisalmer Desert Tour',
    price: 9500,
    duration: '02 nights • 03 Days',
    imgSrc: allCitiesImages.jaisalmer.jaisalmerDesert01.src,
    alt: allCitiesImages.jaisalmer.jaisalmerDesert01.alt,
    imgTitle: allCitiesImages.jaisalmer.jaisalmerDesert01.title,
    navigate: '/3days-jodhpur-jaisalmer-desert-tour',
    category: null,
    destination: ['jodhpur', 'jaisalmer'],
  },
  {
    title: 'Jodhpur Mewar Tour',
    price: 9500,
    duration: '02 nights • 03 Days',
    imgSrc: allCitiesImages.jaisalmer.jaisalmerDesert02.src,
    alt: allCitiesImages.jaisalmer.jaisalmerDesert02.alt,
    imgTitle: allCitiesImages.jaisalmer.jaisalmerDesert02.title,
    navigate: '/3days-jodhpur-mewar-tour',
    category: null,
    destination: ['jodhpur', 'mewar'],
  },
  {
    title: 'Udaipur Mount-Abu Tour',
    price: 8500,
    duration: '02 nights • 03 Days',
    imgSrc: allCitiesImages.mountabu.mountabu01.src,
    alt: allCitiesImages.mountabu.mountabu01.alt,
    imgTitle: allCitiesImages.mountabu.mountabu01.title,
    navigate: '/3days-udaipur-mountabu-tour',
    category: null,
    destination: ['udaipur', 'mountabu'],
  },
  {
    title: 'Jhalana Leopard Safari Tour',
    price: 8500,
    duration: '02 nights • 03 Days',
    imgSrc: allCitiesImages.jaipur.jaipurJhalanaLeopard.src,
    alt: allCitiesImages.jaipur.jaipurJhalanaLeopard.alt,
    imgTitle: allCitiesImages.jaipur.jaipurJhalanaLeopard.title,
    navigate: '/3days-jhalana-leopard-safari-tour',
    category: null,
    destination: ['jaipur'],
  },
  {
    title: 'Jaipur Agra Tour',
    price: 8500,
    duration: '02 nights • 03 Days',
    imgSrc: allStatesImages.agra.agra01.src,
    alt: allStatesImages.agra.agra01.alt,
    imgTitle: allStatesImages.agra.agra01.title,
    navigate: '/3days-jaipur-agra-tour',
    category: null,
    destination: ['jaipur', 'agra'],
  },
];
// _04DaysToursData.js
export const _04DaysToursData = [
  {
    title: 'Jaipur - Udaipur Package Tour',
    price: 12000,
    duration: '03 nights • 04 Days',
    imgSrc: allCitiesImages.udaipur.udaipurBanner.src,
    alt: allCitiesImages.udaipur.udaipurBanner.alt,
    imgTitle: allCitiesImages.udaipur.udaipurBanner.title,
    navigate: '/4days-jaipur-udaipur-tour',
    category: 'popular',
    destination: ['jaipur', 'udaipur'],
  },
  {
    title: 'Jaipur - Jaisalmer Package Tour',
    price: 13000,
    duration: '03 nights • 04 Days',
    imgSrc: allCitiesImages.jaipur.jaipurHeritage.src,
    alt: allCitiesImages.jaipur.jaipurHeritage.alt,
    imgTitle: allCitiesImages.jaipur.jaipurHeritage.title,
    navigate: '/4days-jaipur-jaisalmer-tour',
    category: null,
    destination: ['jaipur', 'jaisalamer'],
  },
  {
    title: 'Delhi - Agra - Jaipur Tour',
    price: 14000,
    duration: '03 nights • 04 Days',
    imgSrc: allStatesImages.agra.agra01.src,
    alt: allStatesImages.agra.agra01.alt,
    imgTitle: allStatesImages.agra.agra01.title,
    navigate: '/4days-delhi-agra-jaipur-tour',
    category: null,
    destination: ['delhi', 'agra', 'jaipur'],
  },
  {
    title: 'Jaipur Udaipur Mount Abu Tour',
    price: 12500,
    duration: '03 nights • 04 Days',
    imgSrc: allCitiesImages.mountabu.mountabu01.src,
    alt: allCitiesImages.mountabu.mountabu01.alt,
    imgTitle: allCitiesImages.mountabu.mountabu01.title,
    navigate: '/4days-jaipur-udaipur-mountabu-tour',
    category: null,
    destination: ['jaipur', 'udaipur', 'mountabu'],
  },
];

// _05DaysToursData.js
export const _05DaysToursData = [
  {
    title: 'Jodhpur - Jaisalmer - Mount Abu Tour',
    price: 15000,
    duration: '04 nights • 05 Days',
    imgSrc: allStatesImages.mountabu.mountabu01.src,
    alt: allCitiesImages.mountabu.mountabu01.alt,
    imgTitle: allCitiesImages.mountabu.mountabu01.title,
    navigate: '/5days-jodhpur-jaisalmer-mountabu-tour',
    category: null,
    destination: ['jodhpur', 'jaisalmer', 'mountabu'],
  },
  {
    title: 'Lakes - Forts & Desert Tour',
    price: 15000,
    duration: '04 nights • 05 Days',
    imgSrc: allCitiesImages.jaisalmer.jaisalmerFort.src,
    alt: allCitiesImages.jaisalmer.jaisalmerFort.alt,
    imgTitle: allCitiesImages.jaisalmer.jaisalmerFort.title,
    navigate: '/5days-udaipur-jodhpur-jaisalmer-tour',
    category: null,
    destination: ['udaipur', 'jodhpur', 'jaisalmer'],
  },
  {
    title: 'Golden Triangle Tour',
    price: 12899,
    duration: '04 nights • 05 Days',
    imgSrc: allStatesImages.punjab.punjabGoldenTemple.src,
    alt: allStatesImages.punjab.punjabGoldenTemple.alt,
    imgTitle: allStatesImages.punjab.punjabGoldenTemple.title,
    navigate: '/5days-golden-triangle-tour',
    category: 'popular',
    destination: [''],
  },
  {
    title: 'Rajasthan Tour package',
    price: 13799,
    duration: '04 nights • 05 Days',
    imgSrc: allCitiesImages.jaipur.jaipurAlberthall.src,
    alt: allCitiesImages.jaipur.jaipurAlberthall.alt,
    imgTitle: allCitiesImages.jaipur.jaipurAlberthall.title,
    navigate: '/5days-rajasthan-tour-package',
    category: null,
    destination: [''],
  },
  {
    title: 'Udaipur Jodhpur Jaisalmer Tour',
    price: 17000,
    duration: '04 nights • 05 Days',
    imgSrc: allCitiesImages.udaipur.udaipur01.src,
    alt: allCitiesImages.udaipur.udaipur01.alt,
    imgTitle: allCitiesImages.udaipur.udaipur01.title,
    navigate: '/5days-udaipur-jodhpur-jaisalmer-tour',
    category: null,
    destination: ['udaipur', 'jodhpur', 'jaisalmer'],
  },
];

// _06DaysToursData.js
export const _06DaysToursData = [
  {
    title: 'Udaipur Jodhpur Jaisalmer Desert Tour',
    price: 21000,
    duration: '05 nights • 06 Days',
    imgSrc: allCitiesImages.jaisalmer.jaisalmerDesert01.src,
    alt: allCitiesImages.jaisalmer.jaisalmerDesert01.alt,
    imgTitle: allCitiesImages.jaisalmer.jaisalmerDesert01.title,
    navigate: '/6days-udaipur-jodhpur-jaisalmer-desert-tour',
    category: null,
    destination: ['udaipur', 'jodhpur', 'jaisalmer'],
  },
  {
    title: 'Wild & Historic Rajasthan Tour',
    price: 22000,
    duration: '05 nights • 06 Days',
    imgSrc: allCitiesImages.jaipur.jaipurJhalanaLeopard.src,
    alt: allCitiesImages.jaipur.jaipurJhalanaLeopard.alt,
    imgTitle: allCitiesImages.jaipur.jaipurJhalanaLeopard.title,
    navigate: '/6days-wild-and-historic-rajasthan-tour',
    category: null,
    destination: [''],
  },
  {
    title: 'Mewar Tour',
    price: 18000,
    duration: '05 nights • 06 Days',
    imgSrc: allCitiesImages.marwar.marwar01.src,
    alt: allCitiesImages.marwar.marwar01.src,
    imgTitle: allCitiesImages.marwar.marwar01.src,
    navigate: '/6days-mewar-tour',
    category: null,
    destination: ['mewar'],
  },
  {
    title: 'Rajasthan Tour',
    price: 18000,
    duration: '05 nights • 06 Days',
    imgSrc: allCitiesImages.jaipur.jaipurPinkCity.src,
    alt: allCitiesImages.jaipur.jaipurPinkCity.src,
    imgTitle: allCitiesImages.jaipur.jaipurPinkCity.src,
    navigate: '/6days-rajasthan-tour',
    category: null,
    destination: [''],
  },
  {
    title: 'BEST OF WILD LIFE PACKAGE',
    price: 19000,
    duration: '05 nights • 06 Days',
    imgSrc: allCitiesImages.jaisalmer.jaisalmerFort.src,
    alt: allCitiesImages.jaisalmer.jaisalmerFort.src,
    imgTitle: allCitiesImages.jaisalmer.jaisalmerFort.src,
    navigate: '/',
    category: 'tourism',
    destination: [''],
  },
  {
    title: 'Rajasthan Forts and Desert Tour',
    price: 19000,
    duration: '05 nights • 06 Days',
    imgSrc: allCitiesImages.jaisalmer.jaisalmerFort.src,
    alt: allCitiesImages.jaisalmer.jaisalmerFort.src,
    imgTitle: allCitiesImages.jaisalmer.jaisalmerFort.src,
    navigate: '/6days-rajasthan-forts-and-desert-tour',
    category: 'popular',
    destination: [''],
  },
];

// _07DaysToursData.js
export const _07DaysToursData = [
  {
    title: 'Royal Rajasthan Tour',
    price: 25000,
    duration: '06 nights • 07 Days',
    imgSrc: allCitiesImages.jaipur.jaipurAlberthall.src,
    alt: allCitiesImages.jaipur.jaipurAlberthall.src,
    imgTitle: allCitiesImages.jaipur.jaipurAlberthall.src,
    navigate: '/7days-royal-rajasthan-tour',
    category: 'popular',
    destination: [''],
  },
  {
    title: 'PEARLS OF RAJASTHAN',
    price: 25000,
    duration: '06 nights • 07 Days',
    imgSrc: allCitiesImages.jaipur.jaipurAlberthall.src,
    alt: allCitiesImages.jaipur.jaipurAlberthall.src,
    imgTitle: allCitiesImages.jaipur.jaipurAlberthall.src,
    navigate: '/',
    category: 'tourism',
    destination: [''],
  },
];
// _08DaysToursData.js
export const _08DaysToursData = [
  {
    title: 'Rajasthan Budget Tour',
    price: 28000,
    duration: '07 nights • 08 Days',
    imgSrc: allCitiesImages.bikaner.bikanerBanner01.src,
    alt: allCitiesImages.bikaner.bikanerBanner01.src,
    imgTitle: allCitiesImages.bikaner.bikanerBanner01.src,
    navigate: '/8days-rajasthan-budget-tour',
    category: 'popular',
    destination: [''],
  },
  {
    title: 'DESERT CIRCUIT',
    price: 28000,
    duration: '07 nights • 08 Days',
    imgSrc: allCitiesImages.bikaner.bikanerBanner01.src,
    alt: allCitiesImages.bikaner.bikanerBanner01.src,
    imgTitle: allCitiesImages.bikaner.bikanerBanner01.src,
    navigate: '/',
    category: 'tourism',
    destination: [''],
  },
  {
    title: 'Rajasthan Tour from Ahmedabad',
    price: 31000,
    duration: '07 nights • 08 Days',
    imgSrc: allStatesImages.ahmedabad.ahmedabad01.src,
    alt: allStatesImages.ahmedabad.ahmedabad01.alt,
    imgTitle: allStatesImages.ahmedabad.ahmedabad01.title,
    navigate: '/8days-rajasthan-tour-from-ahmedabad',
    category: null,
    destination: ['ahmedabad'],
  },
  {
    title: 'Rajasthan Road Trip',
    price: 30000,
    duration: '07 nights • 08 Days',
    imgSrc: allCitiesImages.jaipur.jaipurRoadTrip.src,
    alt: allCitiesImages.jaipur.jaipurRoadTrip.alt,
    imgTitle: allCitiesImages.jaipur.jaipurRoadTrip.title,
    navigate: '/8days-rajasthan-road-trip',
    category: null,
    destination: [''],
  },
  {
    title: 'BEST OF RAJASTHAN PART 2',
    price: 30000,
    duration: '07 nights • 08 Days',
    imgSrc: allCitiesImages.jaipur.jaipurRoadTrip.src,
    alt: allCitiesImages.jaipur.jaipurRoadTrip.alt,
    imgTitle: allCitiesImages.jaipur.jaipurRoadTrip.title,
    navigate: '/',
    category: 'tourism',
    destination: [''],
  },
  {
    title: 'Rajasthan Heritage Tour',
    price: 29000,
    duration: '07 nights • 08 Days',
    imgSrc: allCitiesImages.jaipur.jaipurHeritage.src,
    alt: allCitiesImages.jaipur.jaipurHeritage.alt,
    imgTitle: allCitiesImages.jaipur.jaipurHeritage.title,
    navigate: '/8days-rajasthan-heritage-tour',
    category: null,
    destination: [''],
  },
];

// _09DaysToursData.js
export const _09DaysToursData = [
  {
    title: 'Rajasthan Holiday Package',
    price: 34000,
    duration: '08 nights • 09 Days',
    imgSrc: allCitiesImages.jaipur.jaipurAmber.src,
    alt: allCitiesImages.jaipur.alt,
    imgTitle: allCitiesImages.jaipur.title,
    navigate: '/9days-rajasthan-holiday-package',
    category: null,
    destination: [''],
  },
  {
    title: 'Best of Rajasthan Tour',
    price: 33000,
    duration: '08 nights • 09 Days',
    imgSrc: allCitiesImages.jaipur.jaipurPinkCity.src,
    alt: allCitiesImages.jaipur.jaipurPinkCity.alt,
    imgTitle: allCitiesImages.jaipur.jaipurPinkCity.title,
    navigate: '/9days-best-of-rajasthan-tour',
    category: 'tourism',
    destination: [''],
  },
  {
    title: 'Rajasthan Leisure Tour',
    price: 35000,
    duration: '08 nights • 09 Days',
    imgSrc: allCitiesImages.jaisalmer.jaisalmerLeisure.src,
    alt: allCitiesImages.jaisalmer.jaisalmerLeisure.alt,
    imgTitle: allCitiesImages.jaisalmer.jaisalmerLeisure.title,
    navigate: '/9days-rajasthan-leisure-tour',
    category: null,
    destination: [''],
  },
  {
    title: 'DESERT PACKAGE',
    price: 35000,
    duration: '08 nights • 09 Days',
    imgSrc: allCitiesImages.jaisalmer.jaisalmerLeisure.src,
    alt: allCitiesImages.jaisalmer.jaisalmerLeisure.alt,
    imgTitle: allCitiesImages.jaisalmer.jaisalmerLeisure.title,
    navigate: '/',
    category: 'tourism',
    destination: [''],
  },
];

// _10DaysToursData.js
export const _10DaysToursData = [
  {
    title: 'Rajasthan Honeymoon Tour',
    price: 36000,
    duration: '09 nights • 10 Days',
    imgSrc: allCitiesImages.jaipur.jaipurHoneymoon.src,
    alt: allCitiesImages.jaipur.jaipurHoneymoon.alt,
    imgTitle: allCitiesImages.jaipur.jaipurHoneymoon.title,
    navigate: '/10days-rajasthan-honeymoon-tour',
    category: 'popular',
    destination: [''],
  },
  {
    title: 'RAJASTHAN DARSHAN',
    price: 36000,
    duration: '09 nights • 10 Days',
    imgSrc: allCitiesImages.jaipur.jaipurHoneymoon.src,
    alt: allCitiesImages.jaipur.jaipurHoneymoon.alt,
    imgTitle: allCitiesImages.jaipur.jaipurHoneymoon.title,
    navigate: '/',
    category: 'tourism',
    destination: [''],
  },
  {
    title: 'Rajasthan Vacation Tour',
    price: 26300,
    duration: '09 nights • 10 Days',
    imgSrc: allCitiesImages.jaipur.jaipurNahargarh.src,
    alt: allCitiesImages.jaipur.jaipurNahargarh.alt,
    imgTitle: allCitiesImages.jaipur.jaipurNahargarh.title,
    navigate: '/10days-rajasthan-vacation-tour',
    category: null,
    destination: [''],
  },
  {
    title: 'EXOTIC RAJASTHAN',
    price: 35000,
    duration: '09 nights • 10 Days',
    imgSrc: allCitiesImages.jaipur.jaipurCulinary.src,
    alt: allCitiesImages.jaipur.jaipurCulinary.alt,
    imgTitle: allCitiesImages.jaipur.jaipurCulinary.title,
    navigate: '/',
    category: 'tourism',
    destination: [''],
  },
  {
    title: 'Rajasthan Culinary Tour',
    price: 35000,
    duration: '09 nights • 10 Days',
    imgSrc: allCitiesImages.jaipur.jaipurCulinary.src,
    alt: allCitiesImages.jaipur.jaipurCulinary.alt,
    imgTitle: allCitiesImages.jaipur.jaipurCulinary.title,
    navigate: '/10days-rajasthan-culinary-tour',
    category: null,
    destination: [''],
  },
];

export const _11To15DaysToursData = [
  {
    title: 'Complete Rajasthan Tour',
    price: 42000,
    duration: '11 nights • 12 Days',
    imgSrc: allCitiesImages.jaipur.jaipurAmber.src,
    alt: allCitiesImages.jaipur.jaipurAmber.alt,
    imgTitle: allCitiesImages.jaipur.jaipurAmber.title,
    navigate: '/12days-complete-rajasthan-tour',
    category: 'popular',
    destination: [''],
  },
  {
    title: 'RELIGIOUS TOUR',
    price: 42000,
    duration: '11 NIGHTS • 12 DAYS',
    imgSrc: allCitiesImages.jaipur.jaipurAmber.src,
    alt: allCitiesImages.jaipur.jaipurAmber.alt,
    imgTitle: allCitiesImages.jaipur.jaipurAmber.title,
    navigate: '/',
    category: 'tourism',
    destination: [''],
  },
  {
    title: 'RAJASTHAN PACKAGE',
    price: 40000,
    duration: '12 nights • 13 Days',
    imgSrc: allStatesImages.delhi.delhiBanner.src,
    alt: allStatesImages.delhi.delhiBanner.alt,
    imgTitle: allStatesImages.delhi.delhiBanner.title,
    navigate: '/',
    category: 'tourism',
    destination: ['delhi'],
  },
  {
    title: 'Classic Rajasthan Tour from Delhi to Delhi',
    price: 40000,
    duration: '14 nights • 15 Days',
    imgSrc: allStatesImages.delhi.delhiBanner.src,
    alt: allStatesImages.delhi.delhiBanner.alt,
    imgTitle: allStatesImages.delhi.delhiBanner.title,
    navigate: '/15days-classic-rajasthan-tour-from-delhi',
    category: null,
    destination: ['delhi'],
  },
  {
    title: 'Round Trip from Jaipur to Jaipur',
    price: 46000,
    duration: '13 nights • 14 Days',
    imgSrc: allCitiesImages.jaipur.jaipurRoadTrip.src,
    alt: allCitiesImages.jaipur.jaipurRoadTrip.alt,
    imgTitle: allCitiesImages.jaipur.jaipurRoadTrip.title,
    navigate: '/14days-rajasthan-round-trip-from-jaipur',
    category: null,
    destination: ['jaipur'],
  },
  {
    title: 'Rajasthan Wildlife & Historical Tour',
    price: 49000,
    duration: '14 nights • 15 Days',
    imgSrc: allCitiesImages.jaipur.jaipurJhalanaLeopard.src,
    alt: allCitiesImages.jaipur.jaipurJhalanaLeopard.alt,
    imgTitle: allCitiesImages.jaipur.jaipurJhalanaLeopard.title,
    navigate: '/15days-rajasthan-wildlife-and-historical-tour',
    category: null,
    destination: [''],
  },
  {
    title: 'Rajasthan Tour',
    price: 49000,
    duration: '10 nights • 11 Days',
    imgSrc: allCitiesImages.jaipur.jaipurPinkCity.src,
    alt: allCitiesImages.jaipur.jaipurPinkCity.alt,
    imgTitle: allCitiesImages.jaipur.jaipurPinkCity.title,
    navigate: '/11days-rajasthan-tour',
    category: 'tourism',
    destination: [''],
  },
  {
    title: 'Rajasthan Family Trip',
    price: 43000,
    duration: '11 nights • 12 Days',
    imgSrc: allCitiesImages.jaipur.jaipurWaterPool.src,
    alt: allCitiesImages.jaipur.jaipurWaterPool.alt,
    imgTitle: allCitiesImages.jaipur.jaipurWaterPool.title,
    navigate: '/12days-rajasthan-family-trip',
    category: null,
    destination: [''],
  },
];

// all tour packages data
export const allDaysToursData = [
  ..._02DaysToursData,
  ..._03DaysToursData,
  ..._04DaysToursData,
  ..._05DaysToursData,
  ..._06DaysToursData,
  ..._07DaysToursData,
  ..._08DaysToursData,
  ..._09DaysToursData,
  ..._10DaysToursData,
  ..._11To15DaysToursData,
];

// Functions to handle the filterations in the packages
// popular tour packages
export const popularTourPackagesData = allDaysToursData.filter(
  (pkg) => pkg.category === 'popular'
);

// packages by destination
export const getPackagesByDestination = (destination) =>
  allDaysToursData.filter(
    (pkg) => pkg.destination && pkg.destination.includes(destination)
  );

// jaipur
export const jaipurTourPackagesData = getPackagesByDestination('jaipur');
// jodhpur
export const jodhpurTourPackagesData = getPackagesByDestination('jodhpur');
// jaisalmer
export const jaisalmerTourPackagesData = getPackagesByDestination('jaisalmer');
// agra
export const agraTourPackagesData = getPackagesByDestination('agra');
// ajmer
export const ajmerTourPackagesData = getPackagesByDestination('ajmer');
// mountabu
export const mountabuTourPackagesData = getPackagesByDestination('mountabu');
// udaipur
export const udaipurTourPackagesData = getPackagesByDestination('udaipur');
// ranthambore
export const ranthamboreTourPackagesData =
  getPackagesByDestination('ranthambore');
// bharatpur
export const bharatpurTourPackagesData = getPackagesByDestination('bharatpur');
// bikaner
export const bikanerTourPackagesData = getPackagesByDestination('bikaner');
// delhi
export const delhiTourPackagesData = getPackagesByDestination('delhi');
