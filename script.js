const images = [
    "https://media.istockphoto.com/id/529664572/photo/fruit-background.jpg?s=612x612&w=0&k=20&c=K7V0rVCGj8tvluXDqxJgu0AdMKF8axP0A15P-8Ksh3I=","https://images.pexels.com/photos/39803/pexels-photo-39803.jpeg?cs=srgb&dl=apple-food-fruit-39803.jpg&fm=jpg",
   "https://images.freeimages.com/images/large-previews/7c9/bananas-1326987.jpg",
  "https://th.bing.com/th/id/R.54a385f0a055f747227d31670dc90da7?rik=%2fpbQB6koWwOfgA&riu=http%3a%2f%2fnaturebring.com%2fwp-content%2fuploads%2f2017%2f05%2flitchi-tree-03.jpg&ehk=M4lghzNe9zoDZqPzAXm1nZjMP%2bASvlXspxEwkYlH6eY%3d&risl=&pid=ImgRaw&r=0",
  "https://images-prod.healthline.com/hlcmsresource/images/AN_images/dragon-fruit-1296x728-feature.jpg",
  "https://as1.ftcdn.net/v2/jpg/01/87/65/46/1000_F_187654684_ScVTIc0odtqtWsBLp0oTMprDvqTu9VQR.jpg",
  "https://images.pexels.com/photos/1555163/pexels-photo-1555163.jpeg?cs=srgb&dl=agriculture-blurred-background-close-up-1555163.jpg&fm=jpg",
  "https://images.unsplash.com/photo-1539519532614-723937382b86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
  "https://www.thespruce.com/thmb/vp67m8j7PBJkWAYVJBlaZmPnrH0=/5400x3604/filters:fill(auto,1)/how-to-grow-strawberries-from-seed-2539934-01-73c138a5c3454c41b285a56c9807ad01.jpg",
"https://c4.wallpaperflare.com/wallpaper/96/26/395/fruits-kiwi-fruit-wallpaper-preview.jpg",
"https://images.immediate.co.uk/production/volatile/sites/30/2017/01/avocado-45bccf2-scaled.jpg",
"https://www.tasteofhome.com/wp-content/uploads/2019/02/pineapples_1283638660.jpg",
"https://images8.alphacoders.com/364/364713.jpg",
"https://timesofindia.indiatimes.com/photo/83848108.cms",
"https://img.freepik.com/premium-photo/illustration-ultra-realistic-4k-image-guava_756405-53258.jpg?w=2000",
"https://www.instacart.com/company/wp-content/uploads/2023/01/Babaco-1-1050x525.jpg",
"https://cdn.pixabay.com/photo/2020/06/12/02/47/coconut-tree-5288844_1280.jpg",
"https://th.bing.com/th/id/OIP.RGRsQR6Kk9v8KPdK6u_fkgHaE8?rs=1&pid=ImgDetMain",
"https://image.shutterstock.com/image-photo/fresh-mandarin-oranges-fruit-tangerines-260nw-1840946869.jpg",
"https://wallpapers-all.com/uploads/posts/2017-03/16_plum.jpg",
"https://th.bing.com/th/id/OIP.Lmy4O_HheJBl8u6lTzHYWwHaE9?rs=1&pid=ImgDetMain",
"https://insanelygoodrecipes.com/wp-content/uploads/2022/12/Fresh-Ripe-Orange-Persimmons.jpg",
"https://th.bing.com/th/id/OIP.fJzqWQtf9_g626HLtp6l0AHaEo?rs=1&pid=ImgDetMain",
"https://homebnc.com/homeimg/2017/08/03-pumpkin-carving-ideas-homebnc-907x1024.jpg",
"https://th.bing.com/th/id/R.1a4de2a6bde388fe84912389710cc5b4?rik=AyWXycQ%2fYlzeUw&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f06%2fWatermelon-HD-Image.jpg&ehk=BQ5ZRkCGCrN2vcNfDHYs1eX0d9qB46e%2fyt7AvXIgHEE%3d&risl=1&pid=ImgRaw&r=0",
"https://th.bing.com/th/id/OIP.ObmQEnTkJc5iHE4s7LuUtgHaE8?rs=1&pid=ImgDetMain",
"https://www.thespruceeats.com/thmb/cCl77CkW651jiuAnXt0jaY_3G-E=/1500x1057/filters:fill(auto,1)/GettyImages-121800191-baf933eb16644a219767dfbed55fad7f.jpg",
"https://images.immediate.co.uk/production/volatile/sites/30/2020/02/figs-2056729.jpg?quality=90&resize=661,600",
"https://stylesatlife.com/wp-content/uploads/2020/02/jamun-fruit-benefits-1.jpg",
"https://image.shutterstock.com/image-photo/jujube-indian-chinese-date-monkey-260nw-361478042.jpg",
"https://floridafruitgeek.files.wordpress.com/2020/05/img_20200517_185450757_1_1e_1.jpg?w=768&h=768&crop=1",
"https://swikblog.com/wp-content/uploads/2017/10/custard-apple-2.jpg",
"https://morningchores.com/wp-content/uploads/2021/06/sugarcane-close.jpg",
"https://th.bing.com/th/id/OIP.GkBFpnPP4QeJa5UodcMNAgHaF6?rs=1&pid=ImgDetMain",
"https://th.bing.com/th/id/OIP.C8rZYTthwog8ZnMLonylRwHaFj?rs=1&pid=ImgDetMain",
];
  const container = document.getElementById("store");
  
  for (let i = 1; i <= 40; i++) {
    const productName = `Product ${i}`;
    const productPrice = Math.floor(Math.random() * 3000) + 500;
    const imageUrl = images[i % images.length];
  
    const productCard = document.createElement("div");
    productCard.className = "product-card";
  
    productCard.innerHTML = `
      <img src="${imageUrl}" alt="${productName}">
      <div class="product-name">${productName}</div
      <div class="product-price">₹${productPrice}</div>
      <button class="add-btn" onclick="addToCart('${productName}', ${productPrice})">Add to Cart</button>
    `;
  
    container.appendChild(productCard);
  }
  
  function addToCart(name, price) {
    alert(`${name} added to cart! Price: ₹${price}`);
  }
  // script.js
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(fruit) {
    cart.push(fruit);
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.href = "cart.html"; // yeh naya page khol dega
    
}
  


let fruits = [
  { name: "Apple", price: 30 },
  { name: "Banana", price: 10 },
  { name: "Mango", price: 50 }
];


