import Img1 from "./../assets/clothingImg/1.jpg";
import Img2 from "./../assets/clothingImg/2.jpg";
import Img3 from "./../assets/clothingImg/3.jpg";
import Img4 from "./../assets/clothingImg/4.jpg";    
import Img5 from "./../assets/clothingImg/5.jpg";
import Img6 from "./../assets/clothingImg/6.jpg";
import Img7 from "./../assets/clothingImg/7.jpg";
import Img8 from "./../assets/clothingImg/8.jpg";     
          


const CLOTHING_CONFIG = [
    {
        id: 1,
        name: "Classic Anarkali Dress",
        description: "Elegant Anarkali perfect for weddings and festive occasions.",
        rentalPrice: "₹850/month",
        rating: 4.8,
        category: "ethnic",
        imageUrl: [Img1, Img2, Img3]
    },
    {
        id: 2,
        name: "Tailored Blazer",
        description: "Sharp, tailored blazer suitable for formal events and shoots.",
        rentalPrice: "₹1200/month",
        rating: 4.6,
        category: "formal",
        imageUrl: [Img2, Img4]
    },
    {
        id: 3,
        name: "Party Gown",
        description: "Stylish evening gown that stands out on any red carpet.",
        rentalPrice: "₹1500/month",
        rating: 4.7,
        category: "evening",
        imageUrl: [Img3, Img6]
    },
    {
        id: 4,
        name: "Denim Jacket",
        description: "Classic denim jacket for casual and layered looks.",
        rentalPrice: "₹400/month",
        rating: 4.4,
        category: "casual",
    imageUrl:[Img4, Img1]
    },
    {
        id: 5,
        name: "Silk Saree",
        description: "Luxurious silk saree with delicate zari work.",
        rentalPrice: "₹1000/month",
        rating: 4.9,
        category: "ethnic",
    imageUrl: [Img5, Img2]
    },
    {
        id: 6,
        name: "Business Shirt",
        description: "Crisp business shirt ideal for meetings and corporate events.",
        rentalPrice: "₹250/month",
        rating: 4.3,
        category: "formal",
    imageUrl: [Img6, Img3]
    },
    {
        id: 7,
        name: "Lehenga Choli",
        description: "Ornate lehenga set for special ceremonies and photoshoots.",
        rentalPrice: "₹1800/month",
        rating: 4.8,
        category: "ethnic",
    imageUrl:[  Img7, Img5]
    },
    {
        id: 8,
        name: "Casual Trousers",
        description: "Comfortable trousers for everyday wear and travel.",
        rentalPrice: "₹300/month",
        rating: 4.2,
        category: "casual",
    imageUrl: [ Img6, Img3, Img4]
    },
    {
        id: 9,
        name: "Cocktail Dress",
        description: "Chic cocktail dress perfect for parties and social events.",
        rentalPrice: "₹900/month",
        rating: 4.5,
        category: "evening",
    imageUrl:[Img3, Img5, Img6]
    },
    {
        id: 10,
        name: "Kids Party Wear",
        description: "Adorable party wear set for kids with comfortable fabric.",
        rentalPrice: "₹350/month",
        rating: 4.4,
        category: "kids",
    imageUrl:[Img4, Img6, Img1]
    }
  
];

export { CLOTHING_CONFIG };
