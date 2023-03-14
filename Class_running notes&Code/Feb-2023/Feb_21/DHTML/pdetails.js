var pData = {
    name: 'Lapotop',
    price: 2500,
    discountPercent: 10,
    manufacturer: 'Dell',
    sellerName: 'Indian Electronics',
    image: 'https://www.wikihow.com/images/thumb/7/7f/Use-Laptops-Step-22.jpg/aid2283499-v4-1200px-Use-Laptops-Step-22.jpg'
};


var renderProductDetails = () => {
    var mainLi = document.createElement("li");
    var ulTag = document.createElement("ul");
    ulTag.setAttribute("class", 'productDetails');

    var li1 = document.createElement("li");
    li1.innerHTML = 'Product Name: ' + pData.name;
    ulTag.append(li1);

    var li2 = document.createElement("li");
    li2.innerHTML = 'Price: $' + pData.price;
    ulTag.append(li2);

    var li3 = document.createElement("li");
    li3.innerHTML = 'Manufacturer: ' + pData.manufacturer;
    ulTag.append(li3);
    
    var li4 = document.createElement("li");
    li4.innerHTML = 'Seller Name: ' + pData.sellerName;
    ulTag.append(li4);

    var li5 = document.createElement("li");
    var imgTag = document.createElement("img");
    imgTag.setAttribute("src", pData.image);
    li5.append(imgTag);
    ulTag.append(li5);

    mainLi.append(ulTag);
    document.querySelector(".container").append(mainLi);
}
renderProductDetails();