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
      'Tractări Carfix Garage funcționează pe baza unui dispecerat comun care preia comenzi și solicitări timp de 24/24 ore și 7/7 zile.',
  },
  {
    id: 2,
    image: mapsImage,
    title: 'TRANSPORT NAȚIONAL',
    paragraph:
      'Tractări Carfix Garage oferă în prezent servicii de transport auto național non-stop.',
  },
  {
    id: 4,
    image: teamImage,
    title: 'ECHIPĂ DE EXPERȚI',
    paragraph:
      'Echipa noastră este formată numai din oameni profesioniști, serioși, care au o experiență bogată în această industrie.',
  },
];

export const otherServices = [
  {
    id: 1,
    backImg: serviceImg,
    icon: carService,
    title: 'SERVICE AUTO',
    paragraph: 'Service auto situat lângă autostrada A2.',
    detailsLink: 'https://carfix-garage.ro/',
  },
  {
    id: 2,
    backImg: washImg,
    icon: carWash,
    title: 'SPĂLĂTORIE AUTO',
    paragraph: 'Spălătorie auto situată lângă autostrada A2.',
    detailsLink: 'https://carfix-garage.ro/',
  },
];

export const textAboutUs = {
  text: 'Tractări Carfix Garage a luat ființă din nevoia de ajutor în situațiile rutiere de urgență, pe teritoriul României, punând la dispoziția clienților săi servicii de asistență rutieră non-stop, atunci când autoturismul este imobilizat, ajutându-i să minimalizeze costurile, prompt și eficient.',
};

export const qualities = [
  {
    id: 1,
    img: professionalism,
    title: 'Profesionalism',
    text: 'Lucrăm la standarde europene și oferim întodeauna servicii de calitate și la prețuri avantajoase.',
  },
  {
    id: 2,
    img: protection,
    title: 'Siguranță',
    text: 'Angajații noștri sunt atent instruiți pentru a manipula autovehiculele fără a produce avarii.',
  },
  {
    id: 3,
    img: punctuality,
    title: 'Punctualitate',
    text: 'Ne deplasăm rapid pentru a interveni prompt și debloca situația.',
  },
];

export const images = [crashedCar, towingcarlig, waitingMan];

export const contactInfo = [
  {
    id: 1,
    img: contactEmail,
    text: '13carfix@gmail.com',
  },
  {
    id: 2,
    img: map,
    text: 'Strada Grânelor, Fetești-Gară 925150',
  },
  {
    id: 3,
    img: phoneCall,
    phones: ['+40 720 261 991', '+40 731 682 466'],
  },
];
