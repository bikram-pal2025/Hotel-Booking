import logo from "./logo.svg";
import searchIcon from "./searchIcon.svg";
import userIcon from "./userIcon.svg";
import calenderIcon from "./calenderIcon.svg";
import locationIcon from "./locationIcon.svg";
import starIconFilled from "./starIconFilled.svg";
import arrowIcon from "./arrowIcon.svg";
import starIconOutlined from "./starIconOutlined.svg";
import instagramIcon from "./instagramIcon.svg";
import facebookIcon from "./facebookIcon.svg";
import twitterIcon from "./twitterIcon.svg";
import linkendinIcon from "./linkendinIcon.svg";
import freeWifiIcon from "./freeWifiIcon.svg";
import freeBreakfastIcon from "./freeBreakfastIcon.svg";
import roomServiceIcon from "./roomServiceIcon.svg";
import mountainIcon from "./mountainIcon.svg";
import poolIcon from "./poolIcon.svg";
import homeIcon from "./homeIcon.svg";
import closeIcon from "./closeIcon.svg";
import locationFilledIcon from "./locationFilledIcon.svg";
import heartIcon from "./heartIcon.svg";
import badgeIcon from "./badgeIcon.svg";
import menuIcon from "./menuIcon.svg";
import closeMenu from "./closeMenu.svg";
import guestsIcon from "./guestsIcon.svg";

import roomImg1 from "./roomImg1.png";
import roomImg2 from "./roomImg2.png";
import roomImg3 from "./roomImg3.png";
import roomImg4 from "./roomImg4.png";

import regImage from "./regImage.png";

import exclusiveOfferCardImg1 from "./exclusiveOfferCardImg1.png";
import exclusiveOfferCardImg2 from "./exclusiveOfferCardImg2.png";
import exclusiveOfferCardImg3 from "./exclusiveOfferCardImg3.png";

import addIcon from "./addIcon.svg";
import dashboardIcon from "./dashboardIcon.svg";
import listIcon from "./listIcon.svg";
import uploadArea from "./uploadArea.svg";

import totalBookingIcon from "./totalBookingIcon.svg";
import totalRevenueIcon from "./totalRevenueIcon.svg";

import heroImage from "./heroImage.png";
import aboutImage from "./about-img.jpeg";

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
  aboutImage,
};

// Cities
export const cities = [
  "Kolkata",
  "Mumbai",
  "Goa",
  "Jaipur",
];

// Exclusive Offers
export const exclusiveOffers = [
  {
    _id: 1,
    title: "Monsoon Special",
    description:
      "Stay 2 nights and get complimentary breakfast.",
    priceOff: 20,
    expiryDate: "July 31",
    image: exclusiveOfferCardImg1,
  },

  {
    _id: 2,
    title: "Couple Getaway",
    description:
      "Romantic stay package with free dinner.",
    priceOff: 25,
    expiryDate: "Aug 20",
    image: exclusiveOfferCardImg2,
  },

  {
    _id: 3,
    title: "Luxury India Escape",
    description:
      "Book early and enjoy premium discounts.",
    priceOff: 30,
    expiryDate: "Sep 10",
    image: exclusiveOfferCardImg3,
  },
];

// Testimonials
export const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    address: "Delhi, India",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    rating: 5,
    review:
      "Amazing hotel experience and smooth booking process.",
  },

  {
    id: 2,
    name: "Priya Das",
    address: "Kolkata, India",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    rating: 4,
    review:
      "Affordable pricing and beautiful hotels.",
  },

  {
    id: 3,
    name: "Arjun Verma",
    address: "Bangalore, India",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    rating: 5,
    review:
      "Best booking website I have used so far.",
  },
];

// Facilities
export const facilityIcons = {
  "Free WiFi": assets.freeWifiIcon,
  "Free Breakfast": assets.freeBreakfastIcon,
  "Room Service": assets.roomServiceIcon,
  "Mountain View": assets.mountainIcon,
  "Pool Access": assets.poolIcon,
};

// Room Features
export const roomCommonData = [
  {
    icon: assets.homeIcon,
    title: "Clean Stay",
    description: "Professionally cleaned rooms.",
  },

  {
    icon: assets.badgeIcon,
    title: "Premium Service",
    description: "Top-rated guest experience.",
  },

  {
    icon: assets.locationFilledIcon,
    title: "Prime Location",
    description: "Located near tourist attractions.",
  },

  {
    icon: assets.heartIcon,
    title: "Easy Check-In",
    description: "Fast and smooth check-in.",
  },
];

// Hotels
export const hotelDetails = [
  {
    _id: "1",
    name: "Royal Bengal Stay",
    city: "Kolkata",
    address: "Park Street",
    image: assets.roomImg1,
    bedType: "double",
    price: 4500,
    availability: true,
    off: "20%",
  },

  {
    _id: "2",
    name: "Marine View Hotel",
    city: "Mumbai",
    address: "Marine Drive",
    image: assets.roomImg2,
    bedType: "single",
    price: 5200,
    availability: true,
    off: "25%",
  },

  {
    _id: "3",
    name: "Beach Paradise Resort",
    city: "Goa",
    address: "Baga Beach",
    image: assets.roomImg3,
    bedType: "double",
    price: 6800,
    availability: true,
    off: "30%",
  },

  {
    _id: "4",
    name: "Pink City Palace",
    city: "Jaipur",
    address: "MI Road",
    image: assets.roomImg4,
    bedType: "single",
    price: 3900,
    availability: false,
    off: "15%",
  },
];

// Booking Data
export const bookingData = [
  {
    _id: "101",
    hotelName: "Royal Bengal Stay",
    address: "Park Street",
    city: "Kolkata",
    image: assets.roomImg1,
    checkInDate: "2026-06-20",
    checkOutDate: "2026-06-22",
    paymentStatus: "complete",
    price: 4500,
    bedType: "double",
    guestCount: 2,
  },

  {
    _id: "102",
    hotelName: "Marine View Hotel",
    address: "Marine Drive",
    city: "Mumbai",
    image: assets.roomImg2,
    checkInDate: "2026-06-24",
    checkOutDate: "2026-06-26",
    paymentStatus: "pending",
    price: 5200,
    bedType: "single",
    guestCount: 1,
  },

  {
    _id: "103",
    hotelName: "Beach Paradise Resort",
    address: "Baga Beach",
    city: "Goa",
    image: assets.roomImg3,
    checkInDate: "2026-07-02",
    checkOutDate: "2026-07-05",
    paymentStatus: "complete",
    price: 6800,
    bedType: "double",
    guestCount: 3,
  },
];