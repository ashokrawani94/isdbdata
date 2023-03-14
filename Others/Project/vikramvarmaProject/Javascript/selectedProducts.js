"use stict";
var productData = [
  {
    image: {
      picture: "../images/mencloths/clo1.jpg",
      height: "200px",
      width: "200px",
    },
    ProductName: "classic Green Shirt",
    productPrice: "2$",
    productDiscription: "classic Green Shirt",
    checkOutlink: "#",
    positonid: "position1",
  },
  {
    image: {
      picture: "../images/mencloths/clo2.jpg",
      height: "200px",
      width: "200px",
    },
    ProductName: "classic Green Shirt",
    productPrice: "2$",
    productDiscription: "classic Green Shirt",
    checkOutlink: "#",
    positonid: "position2",
  },
  {
    image: {
      picture: "../images/mencloths/clo3.jpg",
      height: "200px",
      width: "200px",
    },
    ProductName: "classic Green Shirt",
    productPrice: "2$",
    productDiscription: "classic Green Shirt",
    checkOutlink: "#",
    positonid: "position3",
  },
  {
    image: {
      picture: "../images/mencloths/clo4.jpg",
      height: "200px",
      width: "200px",
    },
    ProductName: "classic Green Shirt",
    productPrice: "2$",
    productDiscription: "classic Green Shirt",
    checkOutlink: "#",
    positonid: "position4",
  },
  {
    image: {
      picture: "../images/mencloths/clo5.jpg",
      height: "200px",
      width: "200px",
    },
    ProductName: "classic Green Shirt",
    productPrice: "2$",
    productDiscription: "classic Green Shirt",
    checkOutlink: "#",
    positonid: "position5",
  },
  {
    image: {
      picture: "../images/mencloths/clo6.jpg",
      height: "200px",
      width: "200px",
    },
    ProductName: "classic Green Shirt",
    productPrice: "2$",
    productDiscription: "classic Green Shirt",
    checkOutlink: "#",
    positonid: "position6",
  },
  {
    image: {
      picture: "../images/mencloths/clo7.jpg",
      height: "200px",
      width: "200px",
    },
    ProductName: "classic Green Shirt",
    productPrice: "2$",
    productDiscription: "classic Green Shirt",
    checkOutlink: "#",
    positonid: "position7",
  },
  {
    image: {
      picture: "../images/mencloths/clo8.jpg",
      height: "200px",
      width: "200px",
    },
    ProductName: "classic Green Shirt",
    productPrice: "2$",
    productDiscription: "classic Green Shirt",
    checkOutlink: "#",
    positonid: "position8",
  },
  {
    image: {
      picture: "../images/mencloths/clo9.jpg",
      height: "200px",
      width: "200px",
    },
    ProductName: "classic Green Shirt",
    productPrice: "2$",
    productDiscription: "classic Green Shirt",
    checkOutlink: "#",
    positonid: "position9",
  },
  {
    image: {
      picture: "../images/mencloths/clo10.jpg",
      height: "200px",
      width: "200px",
    },
    ProductName: "classic Green Shirt",
    productPrice: "2$",
    productDiscription: "classic Green Shirt",
    checkOutlink: "#",
    positonid: "position10",
  },
  {
    image: {
      picture: "../images/mencloths/clo11.jpg",
      height: "200px",
      width: "200px",
    },
    ProductName: "classic Green Shirt",
    productPrice: "2$",
    productDiscription: "classic Green Shirt",
    checkOutlink: "#",
    positonid: "position11",
  },
  {
    image: {
      picture: "../images/mencloths/clo12.jpg",
      height: "200px",
      width: "200px",
    },
    ProductName: "classic Green Shirt",
    productPrice: "2$",
    productDiscription: "classic Green Shirt",
    checkOutlink: "#",
    positonid: "position12",
  },
];
var renderProductDetails = (productinfo) => {
  var mainDiv = document.createElement("div");
  mainDiv.setAttribute("id", productinfo.positonid);
  mainDiv.setAttribute("class", "picContainer");
  var subdiv1 = document.createElement("div");
  var imgDiv = document.createElement("img");
  imgDiv.setAttribute("src", productinfo.image.picture);
  imgDiv.setAttribute("width", productinfo.image.width);
  imgDiv.setAttribute("height", productinfo.image.height);
  subdiv1.append(imgDiv);
  mainDiv.append(subdiv1);
  var subdiv2 = document.createElement("div");
  subdiv2.setAttribute("class", "prodetail");
  var proName = document.createElement("div");
  var proPric = document.createElement("div");
  var proDec = document.createElement("div");
  proName.innerHTML = productinfo.ProductName;
  proPric.innerHTML = productinfo.productPrice;
  proDec.innerHTML = productinfo.productDiscription;
  var chkDiv = document.createElement("div");
  var aTag = document.createElement("a");
  aTag.setAttribute("href", productinfo.checkOutlink);
  aTag.innerHTML = "checkOut";
  chkDiv.append(aTag);
  subdiv2.append(proName);
  subdiv2.append(proPric);
  subdiv2.append(proDec);
  subdiv2.append(chkDiv);
  mainDiv.append(subdiv1);
  mainDiv.append(subdiv2);
  document.querySelector(".container").append(mainDiv);
};

for (var i = 0; i < productData.length; i++) {
  renderProductDetails(productData[i]);
}
