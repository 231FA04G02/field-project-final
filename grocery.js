let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}
let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () =>{
    searchForm.classList.remove('active');
    shoppingCart.classList.toggle('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}
let loginForm = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () =>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
}


loginForm.addEventListener("submit",()=>{
    alert("you have successfully login");
})


document.querySelectorAll(".products .btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default anchor behavior

    // Get the parent .box element
    const productBox = btn.closest(".box");

    // Extract product details
    const name = productBox.querySelector("h1")?.innerText || "Unknown Product";
    const price = productBox.querySelector(".price")?.innerText || "Price not found";

    // Show alert with product details
    alert(`Item added successfully to cart:\n\nProduct: ${name}\nPrice: ${price}`);
  });
});






let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.toggle('active');
}






window.onscroll = () =>
{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}



var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        Delay:7500,
        disableOnInteraction : false,
    },
    breakpoints:{
      0: {
        slidesPerView: 1,
      },
    786: {
        slidesPerView: 2,
      },
    1500: {
        slidesPerView: 3,
      },
    },
  });
  var swiper = new Swiper("Reivew-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        Delay:7500,
        disableOnInteraction : false,
    },
    breakpoints:{
      0: {
        slidesPerView: 1,
      },
    786: {
        slidesPerView: 2,
      },
    1500: {
        slidesPerView: 3,
      },
    },
  });