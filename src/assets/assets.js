import logo from './logo.svg'
import searchIcon from './searchIcon.svg'
import userIcon from './userIcon.svg'
import calenderIcon from './calenderIcon.svg'
import locationIcon from './locationIcon.svg'
import starIconFilled from './starIconFilled.svg'
import arrowIcon from './arrowIcon.svg'
import starIconOutlined from './starIconOutlined.svg'
import instagramIcon from './instagramIcon.svg'
import facebookIcon from './facebookIcon.svg'
import twitterIcon from './twitterIcon.svg'
import linkendinIcon from './linkendinIcon.svg'
import freeWifiIcon from './freeWifiIcon.svg'
import freeBreakfastIcon from './freeBreakfastIcon.svg'
import roomServiceIcon from './roomServiceIcon.svg'
import mountainIcon from './mountainIcon.svg'
import poolIcon from './poolIcon.svg'
import homeIcon from './homeIcon.svg'
import closeIcon from './closeIcon.svg'
import locationFilledIcon from './locationFilledIcon.svg'
import heartIcon from './heartIcon.svg'
import badgeIcon from './badgeIcon.svg'
import menuIcon from './menuIcon.svg'
import closeMenu from './closeMenu.svg'
import guestsIcon from './guestsIcon.svg'
import roomImg1 from './roomImg1.png'
import roomImg2 from './roomImg2.png'
import roomImg3 from './roomImg3.png'
import roomImg4 from './roomImg4.png'
import regImage from './regImage.png'
import exclusiveOfferCardImg1 from "./exclusiveOfferCardImg1.png";
import exclusiveOfferCardImg2 from "./exclusiveOfferCardImg2.png";
import exclusiveOfferCardImg3 from "./exclusiveOfferCardImg3.png";
import addIcon from "./addIcon.svg";
import dashboardIcon from "./dashboardIcon.svg";
import listIcon from "./listIcon.svg";
import uploadArea from "./uploadArea.svg";
import totalBookingIcon from "./totalBookingIcon.svg";
import totalRevenueIcon from "./totalRevenueIcon.svg";
import heroImage from "./heroImage.png"


export const assets = {
    logo,
    heroImage,
    roomImg1,
    roomImg2,
    roomImg3,
    roomImg4,
    searchIcon,
    userIcon,
    calenderIcon,
    locationIcon,
    starIconFilled,
    arrowIcon,
    starIconOutlined,
    instagramIcon,
    facebookIcon,
    twitterIcon,
    linkendinIcon,
    freeWifiIcon,
    freeBreakfastIcon,
    roomServiceIcon,
    mountainIcon,
    poolIcon,
    closeIcon,
    homeIcon,
    locationFilledIcon,
    heartIcon,
    badgeIcon,
    menuIcon,
    closeMenu,
    guestsIcon,
    regImage,
    addIcon,
    dashboardIcon,
    listIcon,
    uploadArea,
    totalBookingIcon,
    totalRevenueIcon,
}

export const cities = [
    "Dubai",
    "Singapore",
    "New York",
    "London",
];

// Exclusive Offers Dummy Data
export const exclusiveOffers = [
    { _id: 1, title: "Summer Escape Package", description: "Enjoy a complimentary night and daily breakfast", priceOff: 25, expiryDate: "Aug 31", image: exclusiveOfferCardImg1 },
    { _id: 2, title: "Romantic Getaway", description: "Special couples package including spa treatment", priceOff: 20, expiryDate: "Sep 20", image: exclusiveOfferCardImg2 },
    { _id: 3, title: "Luxury Retreat", description: "Book 60 days in advance and save on your stay at any of our luxury properties worldwide.", priceOff: 30, expiryDate: "Sep 25", image: exclusiveOfferCardImg3 },
]

// Testimonials Dummy Data
export const testimonials = [
    { id: 1, name: "Emma Rodriguez", address: "Barcelona, Spain", image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200", rating: 5, review: "I've used many booking platforms before, but none compare to the personalized experience and attention to detail that QuickStay provides." },
    { id: 2, name: "Liam Johnson", address: "New York, USA", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200", rating: 4, review: "QuickStay exceeded my expectations. The booking process was seamless, and the hotels were absolutely top-notch. Highly recommended!" },
    { id: 3, name: "Sophia Lee", address: "Seoul, South Korea", image: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=200", rating: 5, review: "Amazing service! I always find the best luxury accommodations through QuickStay. Their recommendations never disappoint!" }
];


export const facilityIcons = {
    "Free WiFi": assets.freeWifiIcon,
    "Free Breakfast": assets.freeBreakfastIcon,
    "Room Service": assets.roomServiceIcon,
    "Mountain View": assets.mountainIcon,
    "Pool Access": assets.poolIcon,
};

// For Room Details Page
export const roomCommonData = [
    { icon: assets.homeIcon, title: "Clean & Safe Stay", description: "A well-maintained and hygienic space just for you." },
    { icon: assets.badgeIcon, title: "Enhanced Cleaning", description: "This host follows Staybnb's strict cleaning standards." },
    { icon: assets.locationFilledIcon, title: "Excellent Location", description: "90% of guests rated the location 5 stars." },
    { icon: assets.heartIcon, title: "Smooth Check-In", description: "100% of guests gave check-in a 5-star rating." },
];


export const hotelDetails = [
  {
    _id: "67f76393197ac559e4089b72",
    name: "Luxury Stay Inn",
    city: "Dubai",
    address: "123 Palm Street",
    image: assets.roomImg1,
    bedType: "double",
    price: 150,
    availability: true,
    off:"20%"
  },
  {
    _id: "67f76393197ac559e4089b73",
    name: "Skyline Hotel",
    city: "Singapore",
    address: "45 Marina Bay Road",
    image: assets.roomImg2,
    bedType: "single",
    price: 120,
    availability: true,
    off:"25%"
  },
  {
    _id: "67f76393197ac559e4089b74",
    name: "Empire Suites",
    city: "New York",
    address: "789 Manhattan Ave",
    image: assets.roomImg3,
    bedType: "double",
    price: 200,
    availability: false,
    off:"10%"
  },
  {
    _id: "67f76393197ac559e4089b75",
    name: "Royal London Stay",
    city: "London",
    address: "221 Baker Street",
    image: assets.roomImg4,
    bedType: "single",
    price: 180,
    availability: true,
    off:"22%"
  }
];



// User Bookings Dummy Data
export const bookingData = [
  {
    _id: "67f76839994a731e97d3b8ce",
    hotelName: "Luxury Stay Inn",
    address: "123 Palm Street, Downtown",
    city: "Dubai",
    image: assets.roomImg1,
    checkInDate: "2025-04-30",
    checkOutDate: "2025-05-01",
    paymentStatus: "complete",
    price: 150,
    bedType: "double",
    guestCount: 1
  },
  {
    _id: "67f76829994a731e97d3b8c3",
    hotelName: "Skyline Hotel",
    address: "45 Marina Bay Road",
    city: "Singapore",
    image: assets.roomImg2,
    checkInDate: "2025-04-27",
    checkOutDate: "2025-04-28",
    paymentStatus: "pending",
    price: 120,
    bedType: "single",
    guestCount: 2
  },
  {
    _id: "67f76810994a731e97d3b8b4",
    hotelName: "Empire Suites",
    address: "789 Manhattan Ave",
    city: "New York",
    image: assets.roomImg3,
    checkInDate: "2025-04-11",
    checkOutDate: "2025-04-12",
    paymentStatus: "failed",
    price: 200,
    bedType: "double",
    guestCount: 1
  }
];