// src/data/cities.js

import tokyoImage from '../assets/tokyo.jpeg';
import parisImage from '../assets/paris.jpg';
import newyorkImage from '../assets/newyork.jpeg';

const cities = [
  {
    id: 1,
    name: "Tokyo",
    country: "Japan",
    description: "Tokyo is known for its blend of traditional and modern influences...",
    landmarks: [
      { name: "Tokyo Tower", image: '../assets/tokyo_tower.jpg' },
      { name: "Senso-ji Temple", image: '../assets/sensoji_temple.jpg' },
      { name: "Shibuya Crossing", image: '../assets/shibuya_crossing.jpg' }
    ],
    image: tokyoImage,
    details: {
      facts: "Tokyo has the most Michelin-starred restaurants of any city in the world.",
      foods: "Ramen, Sushi, Tempura, Soba noodles.",
      attractions: "Tokyo Tower, Ueno Park, Meiji Shrine, and the bustling Shibuya Crossing."
    }
  },
  {
    id: 2,
    name: "Paris",
    country: "France",
    description: "Paris, the City of Light, is renowned for its art, fashion...",
    landmarks: [
      { name: "Eiffel Tower", image: '../assets/eiffel_tower.jpg' },
      { name: "Louvre Museum", image: '../assets/louvre.jpg' },
      { name: "Notre-Dame Cathedral", image: '../assets/notre_dame.jpg' }
    ],
    image: parisImage,
    details: {
      facts: "Paris was originally a Roman city called 'Lutetia.'",
      foods: "Croissants, Baguettes, Escargot, and Ratatouille.",
      attractions: "Eiffel Tower, Louvre Museum, Montmartre, and the Seine River."
    }
  },
  {
    id: 3,
    name: "New York",
    country: "USA",
    description: "New York City is known for its vibrant culture, diverse neighborhoods...",
    landmarks: [
      { name: "Times Square", image: '../assets/times_square.jpg' },
      { name: "Central Park", image: '../assets/central_park.jpg' },
      { name: "Statue of Liberty", image: '../assets/statue_of_liberty.jpg' }
    ],
    image: newyorkImage,
    details: {
      facts: "New York was the first capital of the United States in 1789.",
      foods: "Bagels, New York-style pizza, Cheesecake, and Pretzels.",
      attractions: "Statue of Liberty, Times Square, Empire State Building, and Central Park."
    }
  }
];

export default cities;
