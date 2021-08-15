import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Admin',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'User',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Nike Slim Shirt',
      category: 'Shirts',
      image: '/images/p1.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: '100% Cotton & Fine Linen Material.',
    },
    {
      name: 'Adidas Fit Shirt',
      category: 'Shirts',
      image: '/images/p2.jpg',
      price: 100,
      countInStock: 20,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 10,
      description: 'Best For Professional Appearances.',
    },
    {
      name: 'Lacoste Free Shirt',
      category: 'Shirts',
      image: '/images/p3.jpg',
      price: 220,
      countInStock: 0,
      brand: 'Lacoste',
      rating: 4.8,
      numReviews: 17,
      description: 'A Light Coloured Professional Looking Shirt .',
    },
    {
      name: 'Nike Slim Pant',
      category: 'Pants',
      image: '/images/p4.jpg',
      price: 78,
      countInStock: 15,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description: 'Comfortable and Light Coloured Pant.',
    },
    {
      name: 'Puma Slim Pant',
      category: 'Pants',
      image: '/images/p5.jpg',
      price: 65,
      countInStock: 5,
      brand: 'Puma',
      rating: 4.5,
      numReviews: 10,
      description: 'Best For Professional Appearances.',
    },
    {
      name: 'Puma Royale',
      category: 'Pants',
      image: '/images/p6.jpg',
      price: 65,
      countInStock: 10,
      brand: 'Puma',
      rating: 5,
      numReviews: 10,
      description: 'The Ultimate Luxury Clothing with 100% Comfort.',
    },
    {
      name: 'GoPro Camera',
      category: 'Camera',
      image: '/images/p7.jpg',
      price: 600,
      countInStock: 20,
      brand: 'GoPro',
      rating: 5,
      numReviews: 25,
      description: 'high quality product',
    },
    {
      name: 'Samsung Tab Pro',
      category: 'Mobiles and Tablets',
      image: '/images/p8.jpg',
      price: 650,
      countInStock: 25,
      brand: 'Samsung',
      rating: 4,
      numReviews: 25,
      description: 'A Bigger Size With Enhanced Functionalities.',
    },
    {
      name: 'Apple iPad Pro',
      category: 'Mobiles and Tablets',
      image: '/images/p9.jpg',
      price: 800,
      countInStock: 5,
      brand: 'Apple',
      rating: 5,
      numReviews: 25,
      description: 'User-Friendly UI and a Smarter Camera with A13 Bionic Chip',
    },
    {
      name: 'T-Dagger Gaming Mouse',
      category: 'Gaming',
      image: '/images/p10.jpg',
      price: 90,
      countInStock: 30,
      brand: 'TDagger',
      rating: 4,
      numReviews: 25,
      description: 'Best For Gaming with a Smoother Movement.',
    },
    {
      name: 'Bose Gaming HeadPhones',
      category: 'Gaming',
      image: '/images/p11.jpg',
      price: 100,
      countInStock: 20,
      brand: 'Bose',
      rating: 5,
      numReviews: 30,
      description: 'Noise Cancellation and Enhanced Sound Effects',
    },
    {
      name: 'PlayStation Controller',
      category: 'Gaming',
      image: '/images/p12.jpg',
      price: 35,
      countInStock: 20,
      brand: 'PlayStation',
      rating: 5,
      numReviews: 25,
      description: 'Smoother Control Flow with long lasting Durability.',
    },
    {
      name: 'SanDisk MicroSD Card',
      category: 'HardWare',
      image: '/images/p14.jpg',
      price: 40,
      countInStock: 15,
      brand: 'SanDisk',
      rating: 5,
      numReviews: 25,
      description: '1 TB Capacity with Amazing Durability.',
    },
  ],
};
export default data;