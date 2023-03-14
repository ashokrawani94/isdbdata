"use stict";
var productData = [
  {
    image: {
      picture: "../images/mencloths/clo1.jpg",
      height: "200px",
      width: "200px",
    },
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
    productDiscription: "classic Green Shirt",
    checkOutlink: "#",
    positonid: "position4",
  },
  {
    image: {
      picture: "../images/womenCloths/Womenclo1.jpg",
      height: "200px",
      width: "200px",
    },
    productDiscription: "classic Green Shirt",
    checkOutlink: "#",
    positonid: "position5",
  },
  {
    image: {
      picture: "../images/womenCloths/Womenclo2.jpg",
      height: "200px",
      width: "200px",
    },
    productDiscription: "classic Green Shirt",
    checkOutlink: "#",
    positonid: "position6",
  },
  {
    image: {
      picture: "../images/womenCloths/Womenclo3.jpg",
      height: "200px",
      width: "200px",
    },
    productDiscription: "classic Green Shirt",
    checkOutlink: "#",
    positonid: "position7",
  },
  {
    image: {
      picture: "../images/womenCloths/Womenclo4.jpg",
      height: "200px",
      width: "200px",
    },
    productDiscription: "classic Green Shirt",
    checkOutlink: "#",
    positonid: "position8",
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
  var prodis = document.createElement("div");
  prodis.innerHTML = productinfo.productDiscription;
  var chkDiv = document.createElement("div");
  var aTag = document.createElement("a");
  aTag.setAttribute("href", productinfo.checkOutlink);
  aTag.innerHTML = "checkOut";
  chkDiv.append(aTag);
  subdiv2.append(prodis);
  subdiv2.append(chkDiv);
  mainDiv.append(subdiv1);
  mainDiv.append(subdiv2);
  document.querySelector(".rightcontainer").append(mainDiv);
};

for (var i = 0; i < productData.length; i++) {
  renderProductDetails(productData[i]);
}
