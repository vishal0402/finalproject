const homePage="https://5d76bf96515d1a0014085cf9.mockapi.io/product";
const productDetails="https://5d76bf96515d1a0014085cf9.mockapi.io/product/1";
const order="https://5d76bf96515d1a0014085cf9.mockapi.io/order"

function navSlide() {
  var burger = document.querySelector(".burger");
  var nav = document.querySelector(".nav-links");

  burger.addEventListener("click", function() {
    nav.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
  });
}


$(()=>{
  addHeroCarousel();
    getCardData();
    navSlide();

})

const addHeroCarousel = () => {
  $("#banner").slick({
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: true,
  });
};

 // Selection of the elements
 var clothingCards = document.getElementById("clothingCards");
 var accessoriesCards = document.getElementById("accessoriesCards");

const getCardData=()=>{
    $.get(homePage, (data)=>{
        console.log(data);
      var containerData=data;
      for( var i=0; i<containerData.length; i++){
        if(containerData[i].isAccessory===false){
            clothingCards.append(
                            createItemCard(
                              containerData[i].id,
                              containerData[i].preview,
                              containerData[i].name,
                              containerData[i].brand,
                              containerData[i].price
                            )
                          );

        }
        else{
            accessoriesCards.append(
                            createItemCard(
                              containerData[i].id,
                              containerData[i].preview,
                              containerData[i].name,
                              containerData[i].brand,
                              containerData[i].price
                            )
                          );
        }
      }

    }).fail((error)=>{
        console.log(error)
    })
}
// ---------------- Create Card Element Function -------



  // Create Card Function That Create Card Dynamically
  function createItemCard(id, preview, name, brand, price) {
    //Create a DIV element with class CARD
    var cardElement = document.createElement("div");
    cardElement.setAttribute("class", "card");
    cardElement.setAttribute("id", id);

    //Create a ANCHOR element with HREF
    var cardLink = document.createElement("a");
    cardLink.href = "product.html?product_id=" + id;

    //Create a IMG-CONTAINER element with class IMG
    var imgContainer = document.createElement("div");
    imgContainer.setAttribute("class", "img");

    //Create a IMG element with SRC
    var newImgElement = document.createElement("img");
    newImgElement.src = preview;

    // Append IMG into IMG-CONTAINER
    imgContainer.appendChild(newImgElement);

    //Create a DIV element with class DETAILS
    var deatils = document.createElement("div");
    deatils.setAttribute("class", "details");

    //Create a H3 element with TEXT-NODE NAME
    var newTitleElement = document.createElement("h3");
    var newName = document.createTextNode(name);

    // Append NAME into H3
    newTitleElement.appendChild(newName);
    deatils.appendChild(newTitleElement);

    //Create a H4 element with TEXT-NODE BRAND
    var newBrandElement = document.createElement("h4");
    var newBrand = document.createTextNode(brand);

    // Append BRAND into H4
    newBrandElement.appendChild(newBrand);
    deatils.appendChild(newBrandElement);

    //Create a H5 element with TEXT-NODE PRICE
    var newPriceElement = document.createElement("h5");
    var newPriceText = document.createTextNode("Rs ");
    var newPrice = document.createTextNode(price);
    newPriceElement.appendChild(newPriceText);

    // Append PRICE into H5
    newPriceElement.appendChild(newPrice);
    deatils.appendChild(newPriceElement);

    // Append IMG-CONATINER into CARD-LINK
    cardLink.appendChild(imgContainer);
    cardLink.appendChild(deatils);

    // Append CARD-LINK into CARD-ELEMENT
    cardElement.appendChild(cardLink);

    // Returning CARD-ELEMENT
    return cardElement;
  }




  const productData=()=>{

    var searchId = window.location.search.split("=")[1];
    $.get(
      "https://5d76bf96515d1a0014085cf9.mockapi.io/product/" + searchId,
      function(data) {
        var productDetail = data;
        name = productDetail.name;
        imageSrc = productDetail.preview;
        brand = productDetail.brand;
        price = productDetail.price;
        description = productDetail.description;
        photo0 = productDetail.photos[0];
        photo1 = productDetail.photos[1];
        photo2 = productDetail.photos[2];
        photo3 = productDetail.photos[3];
        photo4 = productDetail.photos[4];
        photo5 = productDetail.photos[5];

        createProductPage(
          imageSrc,
          name,
          brand,
          price,
          description,
          photo0,
          photo1,
          photo2,
          photo3,
          photo4,
          photo5
        );



    }).fail((error)=>{
      console.log(error)
    })
  }
  productData();

  function createProductPage(
    imageSrc,
    name,
    brand,
    price,
    description,
    img0,
    img1,
    img2,
    img3,
    img4,
    img5
  ) {
    // Product Image
    var productImg = document.getElementById("productImg");
    productImg.src = imageSrc;

    // Product Name
    var productName = document.getElementById("name");
    productName.innerHTML = name;

    // Product Barnd
    var productBrand = document.getElementById("brand");
    productBrand.innerHTML = brand;

    // Product Price
    var productPrice = document.getElementById("price");
    productPrice.innerHTML = price;

    // Product Description
    var productDescription = document.getElementById("description");
    productDescription.innerHTML = description;

    // Product Preview Image 0
    var photo0 = document.getElementById("img0");
    photo0.src = img0;

    // Product Preview Image 1
    var photo1 = document.getElementById("img1");
    photo1.src = img1;

    // Product Preview Image 2
    var photo2 = document.getElementById("img2");
    photo2.src = img2;

    // Product Preview Image 3
    var photo3 = document.getElementById("img3");
    photo3.src = img3;

    // Product Preview Image 4
    var photo4 = document.getElementById("img4");
    photo4.src = img4;

    // Product Preview Image 5
    var photo5 = document.getElementById("img5");
    photo5.src = img5;

    // ---------------- Change Preview Image OnClick -------
    function changeImage() {
      // Photo 0
      photo0.addEventListener("click", function() {
        productImg.src = img0;
      });

      // Photo 1
      photo1.addEventListener("click", function() {
        productImg.src = img1;
      });
      // Photo 2
      photo2.addEventListener("click", function() {
        productImg.src = img2;
      });

      // Photo 3
      photo3.addEventListener("click", function() {
        productImg.src = img3;
      });

      // Photo 4
      photo4.addEventListener("click", function() {
        productImg.src = img4;
      });

      // Photo 5
      photo5.addEventListener("click", function() {
        productImg.src = img5;
      });
      $(document).on("click", ".previewImg img", function() {
        $(this)
          .addClass("active")
          .siblings()
          .removeClass("active");
      });


    }
    changeImage();
  }

  var addToCartBtn = document.getElementById("add-to-cart");
var cart = document.getElementById("cart-count");
var myCartData = [];
var cartIntialValue;

if(localStorage.getItem('cart-count') == null) {
	localStorage.setItem('cart-count', '0');
} else {
	var cartValue = localStorage.getItem('cart-count');
	localStorage.setItem('cart-count', cartValue);
}


// ---------------- Increase Cart Count -----------------------
function cartCount() {
  if (window.localStorage.getItem("cart-count") === null) {
    cartIntialValue = 0;
  } else {
    cartIntialValue = JSON.parse(window.localStorage.getItem("cart-count"));
    cart.innerHTML = cartIntialValue;
  }
  var cartCurrentValue = cartIntialValue + 1;
  window.localStorage.setItem("cart-count", cartCurrentValue);
  cart.innerHTML = window.localStorage.getItem("cart-count");
}
cart.innerHTML = window.localStorage.getItem("cart-count");

// ---------------- Add Data into List and then into Local Storage -----------------------

function addDataIntoList(productData) {
  // If Local Storage Is Empty Then Set List To Empty
  if (window.localStorage.getItem("product-list") === null) {
    myCartData = [];
  }
  // If Local Storage Is Not Empty Then Set List To Value Of Local Storage
  else {
    myCartData = JSON.parse(window.localStorage.getItem("product-list"));
  }

  // If List Is Empty Then Push The Object In It
  if (myCartData.length === 0) {
    var myObj = {
      id: productData.id,
      title: productData.name,
      count: 1,
      price: productData.price,
      preview: productData.preview
    };
    myCartData.push(myObj);
  }
  // If List Is Not Empty Then
  else if (myCartData.length != 0) {
    var w = 0;
    // If Same Product Data == True Then List.Count++
    for (var i = 0; i < myCartData.length; i++) {
      if (myCartData[i].id == productData.id) {
        myCartData[i].count = parseInt(myCartData[i].count) + 1;
        w += 1;
      }
    }
    // Else Add New Data Into List
    if (w == 0) {
      var myObj = {
        id: productData.id,
        title: productData.name,
        count: 1,
        price: productData.price,
        preview: productData.preview
      };
      myCartData.push(myObj);
    }
  }
  // Store The List Into Local Storage
  window.localStorage.setItem("product-list", JSON.stringify(myCartData));
}

//------ Add-To-Cart-Btn Click Event Listner ------------------------

addToCartBtn.addEventListener("click", function() {
  var productId = window.location.search.split("=")[1];
  var urlLink =
    "https://5d76bf96515d1a0014085cf9.mockapi.io/product/" + productId;

  function getDataForLocalStorage() {
    var http = new XMLHttpRequest();
    http.onreadystatechange = function() {
      if (this.readyState === 4) {
        if (this.status === 200) {
          var productData = JSON.parse(this.responseText);
          addDataIntoList(productData);
        }
      }
    };
    http.open("GET", urlLink, true);
    http.send();
  }
  cartCount();
  getDataForLocalStorage();
}); 