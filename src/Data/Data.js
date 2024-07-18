import hoursImage from '../assets/24hours.png';
import mapsImage from '../assets/maps.png';
import calendar from '../assets/calendar.png';
import teamImage from '../assets/team.png';
import serviceImg from '../assets/serviceImg.jpg';
import carService from '../assets/car-service.png';
import carWash from '../assets/car-wash.png';
import washImg from '../assets/washImg.png';
import professionalism from '../assets/professionalism.png';
import protection from '../assets/protection.png';
import punctuality from '../assets/punctuality.png';
import crashedCar from '../assets/crashedcar.jpg';
import waitingMan from '../assets/waitingman.jpg';
import towingcarlig from '../assets/towing-carlig.jpg';
import contactEmail from '../assets/contactEmail.png';
import map from '../assets/map.png';
import phoneCall from '../assets/phone-call.png';

export const homeServices = [
  {
    id: 1,
    image: hoursImage,
    title: '24/7 NON STOP',
    paragraph:
      'Auto Towing runs on a common dispatcher that takes orders and requests for 24/24 hours and for 7/7 days.',
  },
  {
    id: 2,
    image: mapsImage,
    title: 'INTERNATIONAL TRANSPORT',
    paragraph:
      'X currently offers international auto transport services around the clock, both local - Bucharest, as well as domestic and international.',
  },
  {
    id: 3,
    image: calendar,
    title: 'ON TIME DELIVERY',
    paragraph:
      "We offer transport of equipment from any area from Romania, always following to be on time according to our client's requests.",
  },
  {
    id: 4,
    image: teamImage,
    title: 'EXPERTS TEAM',
    paragraph:
      'Our team consists only of professional, serious people who have a rich experience in this industry..',
  },
];

export const otherServices = [
  {
    id: 1,
    backImg: serviceImg,
    icon: carService,
    title: 'SERVICE AUTO',
    paragraph: 'Service auto situat pe autostrada A2.',
    detailsLink: 'https://carfix-garage.ro/',
  },
  {
    id: 2,
    backImg: washImg,
    icon: carWash,
    title: 'SPALATORIE AUTO',
    paragraph: 'TEXTTT fff dddd fff dfdd sfd.',
    detailsLink: 'https://carfix-garage.ro/',
  },
];

export const textAboutUs = {
  text: 'X a luat ființă din nevoia de ajutor în situațiile rutiere de urgență, pe teritoriul României, punând la dispoziția clienților săi servicii de asistență rutieră non-stop, atunci când autoturismul este imobilizat, ajutându-i să minimalizeze costurile, prompt și eficient. Cu o experiență de peste 15 ani, deservind peste 23 000 de clienți, X a construit cea mai mare rețea de furnizori de servicii de asistență rutieră la nivel național, atent coordonată de un Call Center gata să îți răspundă solicitărilor 24/7, la 021 9695. 9695 oferă clienților săi garanția că, în orice moment, cineva le va fi alături pentru rezolvarea unei probleme ivite în trafic.',
};

export const qualities = [
  {
    id:1,
    img: professionalism,
    title:'Profesionalism',
    text: 'Lucrăm la standarde europene și oferim întodeauna servicii de calitate și la prețuri avantajoase.',
  },
  {
    id:2,
    img: protection,
    title:'Siguranta',
    text: 'Angajații noștri sunt atent instruiți pentru a manipula autovehiculele fără a produce avarii.',
  },
  {
    id:3,
    img: punctuality,
    title:'Punctualitate',
    text: 'Ne deplasăm rapid pentru a interveni propt și deploca situația.',
  },
];


export const images = [
    crashedCar, towingcarlig, waitingMan
] 

export const contactInfo = [{
  id:1,
  img: contactEmail,
  text: '13carfix@gmail.com' 
},
{
  id:2,
  img: map,
  text: 'Strada Grânelor, Fetești-Gară 925150' 
},
{
  id:3,
  img: phoneCall,
  text: '+40 720 261 991 +40 731 682 466' 
}]