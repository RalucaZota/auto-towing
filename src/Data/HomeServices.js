import hoursImage from '../assets/24hours.png';
import mapsImage from '../assets/maps.png';
import calendar from '../assets/calendar.png';
import teamImage from '../assets/team.png';
import serviceImg from '../assets/serviceImg.jpg';
import carService from '../assets/car-service.png';
import carWash from '../assets/car-wash.png';
import washImg from '../assets/washImg.png';


export const homeServices = [{
    id: 1,
    image: hoursImage,
    title: '24/7 NON STOP',
    paragraph: "Auto Towing runs on a common dispatcher that takes orders and requests for 24/24 hours and for 7/7 days."
},
{
    id: 2,
    image: mapsImage,
    title: 'INTERNATIONAL TRANSPORT',
    paragraph: "X currently offers international auto transport services around the clock, both local - Bucharest, as well as domestic and international."
    
},
{
    id: 3,
    image: calendar,
    title: 'ON TIME DELIVERY',
    paragraph: "We offer transport of equipment from any area from Romania, always following to be on time according to our client's requests."
    
},
{
    id: 4,
    image: teamImage,
    title: 'EXPERTS TEAM',
    paragraph: "Our team consists only of professional, serious people who have a rich experience in this industry.."
    
}]


export const otherServices = [{
    id: 1,
    backImg: serviceImg,
    icon:carService,
    title: 'SERVICE AUTO',
    paragraph: "Service auto situat pe autostrada A2.",
    detailsLink: 'https://carfix-garage.ro/'
},
{
    id: 2,
    backImg:washImg,
    icon:carWash,
    title: 'SPALATORIE AUTO',
    paragraph: "TEXTTT.",
    detailsLink: 'https://carfix-garage.ro/'
},]