const products = [
  {
    id: 1,
    name: "Lymio men jackets || bomber jacket for men || Lightweight Outwear Sportswear",
    price: 799,
    url: "https://m.media-amazon.com/images/I/617PqifhwSL._SY741_.jpg",
    category: "Men's Cloathing",
    desc: "Bomber Jacket",
  },
  {
    id: 2,
    name: "Blaq Ash Men's Casual Puffer Jacket, Hooded, Quilted",
    price: 1499,
    url: "https://m.media-amazon.com/images/I/717uDhjkSHL._SX679_.jpg",
    category: "Men's Cloathing",
    desc: "Insulating: This puffer jacket is designed with quilted down filling to provide excellent insulation against cold weather.",
  },
  {
    id: 3,
    name: "AUSK Polo Regular Fit T-Shirt for Men",
    price: 349,
    url: "https://m.media-amazon.com/images/I/51oPShkSd5L._SX569_.jpg",
    category: "Men's Cloathing",
    desc: "Fabric Type: 60% Cotton And 40% Polyester",
  },
  {
    id: 4,
    name: "The Souled Store Men's T-Shirt",
    price: 999,
    url: "https://m.media-amazon.com/images/I/616Zkr85mRL._SY741_.jpg",
    category: "Men's Cloathing",
    desc: "Homegrown Indian Brand - One-stop-shop for Official Merch of all your favorite superheroes, films, TV shows and cartoons",
  },
  {
    id: 5,
    name: "Majestic Man Men Small Checkered Slim Fit Cotton Casual Shirt",
    price: 538,
    url: "https://m.media-amazon.com/images/I/71ck9U5rmkL._SY741_.jpg",
    category: "Men's Cloathing",
    desc: "Fabric - Premium Cotton, Pre-Washed for extremely soft finish and No Shrinkage Post Washing",
  },
  {
    id: 6,
    name: "ONLY Women's A-Line Coat",
    price: 2802,
    url: "https://m.media-amazon.com/images/I/71U5+hXC-1L._SY879_.jpg",
    category: "Women's Cloathing",
    desc: "Material Care Description :: 100% Polyester | Machine Wash",
  },
  {
    id: 7,
    name: "VERO MODA Womens Leather Jacket",
    price: 2989,
    url: "https://m.media-amazon.com/images/I/71-rpedoJZL._SY741_.jpg",
    category: "Women's Cloathing",
    desc: "Fabric Composition, Wash Care :: 100% Viscose polyurethane coated,Dry Clean",
  },
  {
    id: 8,
    name: "FOREVER 21 Women Abstract Fitted Mini Dress",
    price: 998,
    url: "https://m.media-amazon.com/images/I/61c7y8GivqL._SY741_.jpg",
    category: "Women's Cloathing",
    desc: "Mini Dress",
  },
  {
    id: 9,
    name: "BIBA Women Ankle Length Dress",
    price: 1758,
    url: "https://m.media-amazon.com/images/I/718Ha7Dmc4L._SX679_.jpg",
    category: "Women's Cloathing",
    desc: "Color : Black",
  },
  {
    id: 10,
    name: "Latin Quarters Women High Low Green Dress",
    price: 1250,
    url: "https://m.media-amazon.com/images/I/71T40p5sBfL._SX679_.jpg",
    category: "Women's Cloathing",
    desc: "Product Material :- Polyester Stretch, Color :- Maroon, Sleeves :- Sleeveless, Fit Type :- Classic Fit, Wash Care :- Regular Machine Wash",
  },
  {
    id: 11,
    name: "SanDisk SDCZ50-128G-I35 USB2.0 128 GB Pen Drive (Red and Black)",
    price: 749,
    url: "https://m.media-amazon.com/images/I/61sFaDqQH8L._SX679_.jpg",
    category: "Electronics",
    desc: "Compact design for maximum portability",
  },
  {
    id: 12,
    name: "Western Digital WD 5TB My Passport Portable Hard Disk Drive, USB 3.0 with Automatic Backup",
    price: 11949,
    url: "https://m.media-amazon.com/images/I/31wvuKk07iL._SX300_SY300_QL70_FMwebp_.jpg",
    category: "Electronics",
    desc: "Form Factor: 2.5-inch | SuperSpeed USB 3.0 port |USB 2.0 compatible| Material: Plastic",
  },
  {
    id: 13,
    name: "Duracell 20000 MAH Slimmest Power Bank with 1 Type C PD and 2 USB A Port, 22.5W Fast Charging",
    price: 3049,
    url: "https://m.media-amazon.com/images/I/71rIGQrFJ0L._SX679_.jpg",
    category: "Electronics",
    desc: "20000 mAh powerbank",
  },
  {
    id: 14,
    name: "XP-PEN Deco Mini 7 Graphics Tablet 17.78 cm x 11.09 cm (7 x 4.37 inches) Pen Tablet with 8192 Levels Pressure Sensitivity",
    price: 3695,
    url: "https://m.media-amazon.com/images/I/21hzUno97vL._SX300_SY300_QL70_FMwebp_.jpg",
    category: "Electronics",
    desc: " [Compact, Portable size]: XPPen Deco Mini7 is a medium sized graphic tablet with an active area of 7x4 inches. It’s a comfortable canvas to create on, while still being easy to carry. Perfect alternative to a mouse.",
  },
  {
    id: 15,
    name: "boAt Lunar Discovery w/ 1.39' (3.5 cm) HD Display, Turn-by-Turn Navigation, DIY Watch Face Studio",
    price: 1499,
    url: "https://m.media-amazon.com/images/I/71Iit7U1S+L._AC_UY327_FMwebp_QL65_.jpg",
    category: "Electronics",
    desc: "Turn-By-Turn Navigation with MapMyIndia: Whether it’s a new destination or a familiar place, find your way without being lost using the boAt Lunar Discovery Smartwatch. Access directions using Turn-by-Turn navigation by MapMyIndia without reaching for your phone.",
  },
  {
    id: 16,
    name: "boAt Rockerz 450 Bluetooth On Ear Headphones with Mic, Upto 15 Hours Playback",
    price: 1499,
    url: "https://m.media-amazon.com/images/I/31ztpzzaDSL._SX300_SY300_QL70_FMwebp_.jpg",
    category: "Electronics",
    desc: "Playback- It provides a massive battery backup of upto 15 hours for a superior playback time. Charging Time : 3 Hours",
  },
  {
    id: 17,
    name: "ZENEME Women American Diamond Studded Intrcately Designed Leaf Shaped Necklace With Earring",
    price: 299,
    url: "https://m.media-amazon.com/images/I/71oIQcQ92HL._SY575_.jpg",
    category: "Jwelery",
    desc: "What You Get:- Total 3 Pc 1 Elegant looking White-pearl based Choker in Yellow gold-plating American Diamond Detailing along with matching round stud earrings.",
  },
  {
    id: 18,
    name: "Shining Diva Fashion Angel Wings Platinum Plated Crystal Pendant Necklace Jewellery Set",
    price: 3499,
    url: "https://m.media-amazon.com/images/I/61fLFJtPU9L._SY695_.jpg",
    category: "Jwelery",
    desc: "This jewellery set contains White Gold Platinum Plated Austrian Crystal Pendant Necklace Jewellery Set with One Pair of Earrings",
  },
  {
    id: 19,
    name: "VAMA FASHIONS Trendy Adjustable Silver Anklet",
    price: 149,
    url: "https://m.media-amazon.com/images/I/61ioHXsfKYL._SX695_.jpg",
    category: "Jwelery",
    desc: " This Adjustable Silver Plated Anklet Leg Chain is designed to symbolize love and harmony, featuring a layered chain and a unique cross bead, making it a versatile accessory for any wardrobe.",
  },
  {
    id: 20,
    name: "YouBella Jewellery German Silver Plated Stylish Handmade Anklets",
    price: 445,
    url: "https://m.media-amazon.com/images/I/61px36G4UlL._SY695_.jpg",
    category: "Jwelery",
    desc: "Best for Gifting and for personal Use, combine it with matching dress and be the limelight of every Occasion",
  },
];

export default products;
