
import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Catalog", href: "#catalog" },
  {
    label: "How it works",
    href: "#how it works",
    dropdown: [
      { label: "How Printify Works", href: "#how printify works" },
      { label: "Print On Demand", href: "#print on demand" },
      { label: "Printify Quality Promise", href: "#printify quality promise" },
      { label: "What to Sell?", href: "#what to sell?" },
    ],
  },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#blog" },
  {
    label: "Services",
    href: "#services",
    dropdown: [
      { label: "Printify Studio", href: "#printify studio" },
      { label: "Printify Express Delivery", href: "#printify express delivery" },
      { label: "Transfer Products", href: "#transfer products" },
      { label: "Order In Bulk", href: "#order in bulk" },
      { label: "Experts Program", href: "#experts program" },
    ],
  },
  {
    label: "Use Cases",
    href: "#use cases",
    dropdown: [
      { label: "Merch for Fans", href: "#merch for fans" },
      { label: "Merch for eCommerce", href: "#merch for eCommerce" },
      { label: "Merch for Enterprises", href: "#merch for enterprises" },
      { label: "Grow Your Store", href: "#grow your store" },
    ],
  },
  {
    label: "Need Help?",
    href: "#need help?",
    dropdown: [
      { label: "Help Center", href: "#help center" },
      { label: "Contacts", href: "#contacts" },
      { label: "My Requests", href: "#my requests" },
    ],
  },
];

export const testimonials = [
  {
    user: "Sophia Taylor",
    company: "Fashion Enthusiast",
    image: user1, 
    text: "The quality of the clothing is exceptional! I've never felt so confident in my outfits. Highly recommend this brand for anyone looking to elevate their style.",
    rating: 5,
  },
  {
    user: "Liam Johnson",
    company: "Style Influencer",
    image: user2, 
    text: "Every piece I’ve worn has received compliments! The attention to detail and trendy designs are unmatched. This brand is a must-have in every wardrobe.",
    rating: 4,
  },
  {
    user: "Mia Rodriguez",
    company: "Fashion Blogger",
    image: user3, 
    text: "I love how unique and stylish the pieces are! They fit perfectly and are made from high-quality materials. I can’t wait to wear them for my next photoshoot!",
    rating: 5,
  },
  {
    user: "Noah Smith",
    company: "Clothing Retailer",
    image: user4, 
    text: "As a retailer, I appreciate the craftsmanship and creativity of this brand. The designs stand out in the market, and customers love the collections!",
    rating: 5,
  },
  {
    user: "Oliver Brown",
    company: "Fashion Stylist",
    image: user6, 
    text: "Working with this brand has been a game-changer! Their innovative styles and commitment to quality make my job easier. I love styling their collections!",
    rating: 4,
  },
];


export const checklistItems = [
  {
    title: "Quality Materials",
    description:
      "We source the finest fabrics to ensure comfort and durability.",
  },
  {
    title: "Latest Trends",
    description:
      "Stay ahead with the latest fashion trends in every collection.",
  },
  {
    title: "Sustainable Practices",
    description:
      "Our production methods prioritize sustainability and eco-friendliness.",
  },
  {
    title: "Unique Designs",
    description: "Every piece is crafted with unique designs that stand out.",
  },
];



export const companyLinks = [
  { href: "#", text: "About Us" },
  { href: "#", text: "Careers" },
  { href: "#", text: "Press" },
  { href: "#", text: "Blog" },
  { href: "#", text: "Contact" },
];

export const productLinks = [
  { href: "#", text: "Pricing" },
  { href: "#", text: "Features" },
  { href: "#", text: "Integrations" },
  { href: "#", text: "Marketplace" },
  { href: "#", text: "Partners" },
];

export const supportLinks = [
  { href: "#", text: "Help Center" },
  { href: "#", text: "FAQ" },
  { href: "#", text: "Status" },
  { href: "#", text: "Privacy Policy" },
  { href: "#", text: "Terms of Service" },
];