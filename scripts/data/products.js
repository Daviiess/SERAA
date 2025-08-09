import { formatCurrency } from "../../scripts/utils/money.js";
class Product{
    id;
    image;
    name;
    rating;
    priceCents;
    section
    constructor(productDetails){
        this.id = productDetails.id;
        this.image = productDetails.image;
        this.name = productDetails.name;
        this.rating = productDetails.rating;
        this.priceCents = productDetails.priceCents;
        this.section = productDetails.section;
     
    }
    //method to get the stars
   getStars(){
    return `images/ratings/rating-${this.rating.stars}.png`
   }
   getPrice(){
    return `${formatCurrency(
                      this.priceCents
                    )}`
   }
}
/* const product1 = new Product({
        id:'product1',
        image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
        name: 'Athletic Cotton Socks - 6 Pairs',
        rating:{
            stars: 40,
            count: 15
        },
        priceCents:1099,
        section: 'latest',
    }); */


export let products = [
     //Latest products
    {
        id:'product1',
        image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
        name: 'Athletic Cotton Socks - 6 Pairs',
        rating:{
            stars: 40,
            count: 15
        },
        priceCents:1099,
        section: 'latest',
        keywords: ['socks', 'cotton socks', 'athletic', '6 pairs', 'sports socks', 'men socks', 'women socks']
    },

    {
        id : 'product2',
        image: 'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
        name: 'Adults Plain Cotton T-Shirt - 2 Pack - Teal',
        rating:{
            stars: 35,     
            count: 22
        },
        priceCents:899,
        section: 'latest',
        keywords: ['t-shirt', 'plain tee', 'cotton', '2 pack', 'teal shirt', 'unisex shirt']
    },

    {
        id:'product3',
        image:'images/products/men-athletic-shoes-green.jpg',
        name: "Men's Athletic Shoes - Green",
        rating:{
            stars: 40,
            count: 10
        },
        priceCents:1999,
        section: 'latest',
        keywords: ['shoes', 'athletic shoes', 'green sneakers', 'running shoes', 'men shoes']
    },

    {
        id:'product4',
        image:'images/products/men-chino-pants-beige.jpg',
        name:"Men's Chino Pants - Beige",
        rating:{
            stars:35,
            count:12
        },
        priceCents:2199,
        section: 'latest',
        keywords: ['pants', 'chino pants', 'beige trousers', 'men pants', 'casual pants']
    },
    {
        id:'product5',
        image:'images/products/men-slim-fit-summer-shorts-Gray.jpg',
        name:"Men's-Chino-pants-beige",
        rating:{
            stars:40,
            count:17
        },
        priceCents:1499,
        section: 'latest',
        keywords: ['shorts', 'summer shorts', 'slim fit shorts', 'gray shorts', 'men shorts']
    },
   //Men products
   {
        id:'product6',
        image:'images/products/men-slim-fit-tee-705-black.jpg',
        name:"Men's Slim Fit Tee 705 - Black",
        rating:{
            stars:40,
            count:46
        },
        priceCents:900,
        section: 'men',
        keywords: ['t-shirt', 'slim fit tee', 'black shirt', 'men shirt', 'casual shirt']
    },
   {
        id:'product7',
        image:'images/products/men-slim-fit-tee-yireh-black.jpg',
        name:"Men' Slim Fit Tee Yireh - Black",
        rating:{
            stars:45,
            count:37
        },
        priceCents:1000,
        section: 'men',
        keywords: ['t-shirt', 'slim fit tee', 'black shirt', 'men shirt', 'yireh shirt']
    },
    
   {
        id:'product8',
        image:'images/products/men-kiiki-slim-fit-shirt-cream.jpg',
        name:"Men's Kiiki Slim Fit Shirt - Cream",
        rating:{
            stars:35,
            count:15
        },
        priceCents:899,
        section: 'men',
        keywords: ['shirt', 'slim fit shirt', 'cream shirt', 'kiiki shirt', 'men shirt']
    },
   {
        id:'product9',
        image:'images/products/men-corporate-shirt-2-pieces.jpg',
        name:"Men's Corporate Shirt - 2 Pieces",
        rating:{
            stars:45,
            count:65
        },
        priceCents:1999,
        section: 'men',
        keywords: ['corporate shirt', 'formal shirt', 'business wear', 'men shirt', '2 pack shirt']
    },
   {
        id:'product10',
        image:'images/products/Air Jordans - Blue and White.png',
        name:"Men's Air Jordans - Blue and White",
        rating:{
            stars:50,
            count:65
        },
        priceCents:1500,
        section: 'men',
        keywords: ['air jordans', 'blue sneakers', 'white sneakers', 'men shoes', 'basketball shoes']
    },
   {
        id:'product11',
        image:'images/products/men-cotton-long-sleeve-shirt-black.png',
        name:"Men's Cotton Long Sleeve Shirt - Black",
        rating:{
            stars:40,
            count:32
        },
        priceCents:1000,
        section: 'men',
        keywords: ['shirt', 'cotton shirt', 'long sleeve', 'black shirt', 'men shirt']
    },

    {
        id:'product12',
        image:'images/products/men-cotton-long-sleeve-shirt-white.png',
        name:"Men's Cotton Long Sleeve Shirt - White",
        rating:{
            stars:40,
            count:31
        },
        priceCents:800,
        section: 'men',
        keywords: ['shirt', 'cotton shirt', 'long sleeve', 'white shirt', 'men shirt']
    },
    {
        id:'product13',
        image:'images/products/men-slim-fit-tee-green.png',
        name:"Men's Slim Fit Tee - Green",
        rating:{
            stars:40,
            count:17
        },
        priceCents:799,
        section: 'men',
        keywords: ['t-shirt', 'slim fit tee', 'green shirt', 'men shirt']
    },
    {
        id:'product14',
        image:'images/products/men-long-sleeve-corporate-shirt-white.png',
        name:"Men's Long Sleeve Corporate Shirt - White",
        rating:{
            stars:40,
            count:17
        },
        priceCents:1200,
        section: 'men',
        keywords: ['corporate shirt', 'white shirt', 'long sleeve', 'formal shirt', 'men shirt']
    },
    {
        id:'product15',
        image:'images/products/men-jeans-Blue.jpg',
        name:"Men's Jeans - Blue",
        rating:{
            stars:50,
            count:25
        },
        priceCents:800,
        section: 'men',
        keywords: ['jeans', 'blue jeans', 'denim', 'men pants']
    },
    //women products
    {
         id:'product16',
        image:'images/products/women-large-jacket-cream.jpg',
        name:"Women's Large Jacket - Cream",
        rating:{
            stars:35,
            count:22
        },
        priceCents:1200,
        section: 'women',
        keywords: ['jacket', 'cream jacket', 'outerwear', 'women jacket']
    },
    {
         id:'product17',
        image:'images/products/women-mini-cowl-dress-pink.jpg',
        name:"Women's Mini Cowl Dress - Pink",
        rating:{
            stars:40,
            count:19
        },
        priceCents:1500,
        section: 'women',
        keywords: ['dress', 'mini dress', 'pink dress', 'cowl neck', 'women dress']
    },
    {
         id:'product18',
        image:'images/products/women-jean-dress-blue.jpg',
        name:"Women's Jean Dress - Blue",
        rating:{
            stars:45,
            count:22
        },
        priceCents:1300,
        section: 'women',
        keywords: ['dress', 'jean dress', 'denim dress', 'blue dress', 'women dress']
    },
    {
         id:'product19',
        image:'images/products/women-long-sleeve-sweater-red.jpg',
        name:"Women's Long Sleeve Sweater - Red",
        rating:{
            stars:45,
            count:29
        },
        priceCents:800,
        section: 'women',
        keywords: ['sweater', 'long sleeve', 'red sweater', 'women sweater']
    },
    {
         id:'product20',
        image:'images/products/women-v-shirt-cream.jpg',
        name:"Women's V-Shirt - Cream",
        rating:{
            stars:40,
            count:29
        },
        priceCents:750,
        section: 'women',
        keywords: ['shirt', 'v-neck', 'cream shirt', 'women shirt']
    },
    {
         id:'product21',
        image:'images/products/women-shoes-multi-colored.jpg',
        name:"Women's Shoes - Multi-Colored",
        rating:{
            stars:40,
            count:77
        },
        priceCents:1250,
        section: 'women',
        keywords: ['shoes', 'multi color shoes', 'fashion shoes', 'women shoes']
    },
    {
         id:'product22',
        image:'images/products/women-long-sleeve-sweater-705-black.jpg',
        name:"Women's Long Sleeve Sweater - Black",
        rating:{
            stars:50,
            count:81
        },
        priceCents:1150,
        section: 'women',
        keywords: ['sweater', 'long sleeve', 'black sweater', 'women sweater']
    },
    {
         id:'product23',
        image:'images/products/women-knit-ballet-flat-gray.jpg',
        name:"Women's Knit Ballet Flat - Gray",
        rating:{
            stars:50,
            count:56
        },
        priceCents:750,
        section: 'women',
        keywords: ['shoes', 'knit shoes', 'ballet flats', 'gray shoes', 'women shoes']
    },
    {
         id:'product24',
        image:'images/products/women-knit-ballet-flat-leopard.jpg',
        name:"Women's Knit Ballet Flat - Leopard",
        rating:{
            stars:50,
            count:33
        },
        priceCents:750,
        section: 'women',
        keywords: ['shoes', 'knit shoes', 'ballet flats', 'leopard print', 'women shoes']
    },
    {
         id:'product25',
        image:'images/products/women-stretch-popover-hoodie-black.jpg',
        name:"Women's Stretch Popover Hoodie - Black",
        rating:{
            stars:50,
            count:34
        },
        priceCents:1150,
        section: 'women',
        keywords: ['hoodie', 'black hoodie', 'stretch hoodie', 'women hoodie']
    },
    {
         id:'product26',
        image:'images/products/minoha™-japanese-inspired-ceramic-Set.jpg',
        name:"Minoha™ Japanese Inspired Ceramic Set",
        rating:{
            stars:40,
            count:32
        },
        priceCents:1150,
        section: 'items',
        keywords: ['ceramic', 'japanese set', 'dinnerware', 'plates', 'cups']
    },
    {
         id:'product27',
        image:'images/products/mirae-ceramic-bowl-3-pieces.png',
        name:"Mirae Ceramic Bowl - 3 Pieces",
        rating:{
            stars:35,
            count:11
        },
        priceCents:950,
        section: 'items',
        keywords: ['bowl', 'ceramic bowl', 'kitchenware', '3 piece set']
    },
    {
         id:'product28',
        image:'images/products/thaleia-ceramic-mug-white.jpg',
        name:"Thaleia Ceramic Mug - White",
        rating:{
            stars:40,
            count:31
        },
        priceCents:550,
        section: 'items',
        keywords: ['mug', 'ceramic mug', 'white mug', 'coffee cup']
    },
    {
         id:'product29',
        image:'images/products/soluna-ceramic-plates-6-pieces.png',
        name:"Soluna Ceramic Plates - 6 Pieces",
        rating:{
            stars:45,
            count:43
        },
        priceCents:1250,
        section: 'items',
        keywords: ['plates', 'ceramic plates', 'kitchenware', '6 piece set']
    },
    {
         id:'product30',
        image:'images/products/cielo™-matte-ceramic-mug-set.jpg',
        name:"Cielo™ Matte Ceramic Mug Set",
        rating:{
            stars:40,
            count:22
        },
        priceCents:1250,
        section: 'items',
        keywords: ['mug', 'ceramic mug', 'matte finish', 'cup set']
    },
    {
         id:'product31',
        image:'images/products/modern-savara-lounge-chair-brown.jpg',
        name:"Modern Savara Lounge Chair - Brown",
        rating:{
            stars:50,
            count:66
        },
        priceCents:1750,
        section: 'furniture',
        keywords: ['chair', 'lounge chair', 'brown chair', 'living room furniture']
    },
    {
         id:'product32',
        image:'images/products/modern-lunea-lounge-chair-light-skya.jpg',
        name:"Modern Lunea Lounge Chair Light - Skya",
        rating:{
            stars:45,
            count:51
        },
        priceCents:1350,
        section: 'furniture',
        keywords: ['chair', 'lounge chair', 'light blue chair', 'modern furniture']
    },
    {
         id:'product33',
        image:'images/products/modern-ayden-lounge-chair-grey.jpg',
        name:"Modern Ayden Lounge Chair Grey",
        rating:{
            stars:45,
            count:56
        },
        priceCents:1300,
        section: 'furniture',
        keywords: ['chair', 'lounge chair', 'grey chair', 'modern furniture']
    },
    {
         id:'product34',
        image:'images/products/modern-savara-nest-chair-verdra.jpg',
        name:"Modern Savara Nest Chair - Verdra",
        rating:{
            stars:50,
            count:61
        },
        priceCents:1850,
        section: 'furniture',
        keywords: ['chair', 'nest chair', 'verdra green chair', 'modern furniture']
    },
    {
         id:'product35',
        image:'images/products/mochara-cupboard-2-door-cream-storage-unit.png',
        name:"Mochara Cupboard Storage Unit - Cream",
        rating:{
            stars:35,
            count:29
        },
        priceCents:1300,
        section: 'furniture',
        keywords: ['cupboard', 'storage unit', 'cream cupboard', '2 door storage']
    },

].map((productDetails) => {
  /* console.log('Creating product:', productDetails); */
  return new Product(productDetails);
});

