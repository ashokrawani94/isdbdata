var productData = [
    {
        name: 'Lapotop',
        price: 2500,
        discountPercent: 10,
        manufacturer: 'Dell',
        sellerName: 'Indian Electronics',
        image: 'https://www.wikihow.com/images/thumb/7/7f/Use-Laptops-Step-22.jpg/aid2283499-v4-1200px-Use-Laptops-Step-22.jpg'
    },
    {
        name: 'Mobile',
        price: 1000,
        discountPercent: 10,
        manufacturer: 'Sony',
        sellerName: 'ABC Goods & Electronics',
        image: 'https://www.thechennaimobiles.com/image/cache/catalog/1329356-600x600.jpg'
    },
    {
        name: 'Pendrive',
        price: 2100,
        discountPercent: 5,
        manufacturer: 'Disk',
        sellerName: 'PQR Electronics',
        image: 'https://rukminim1.flixcart.com/image/416/416/l1fc0i80/pendrive/pendrive/t/v/g/64gb-2-0-usb-pen-drive-flash-drive-with-metal-body-external-original-imagdy4kdgrpxyya.jpeg?q=70'
    }
];

var renderProductDetails = (pData) => {
   var mainLi = $("<li/>");
    var ulTag = $("<ul></ul>");
    ulTag.addClass('productDetails');
    var li1 = $("<li/>").html('Product Name: ' + pData.name);
    ulTag.append(li1);

    var li2 = $("<li/>").html('Price: $' + pData.price);
    ulTag.append(li2);

    var li3 = $("<li/>").html('Manufacturer: ' + pData.manufacturer);
    ulTag.append(li3);
    
    var li4 = $("<li/>").html('Seller Name: ' + pData.sellerName);
    ulTag.append(li4);

    var li5 = $("<li/>");
    var imgTag = $("<img />").attr("src", pData.image);
    li5.append(imgTag);
    ulTag.append(li5);
    mainLi.append(ulTag);
    $(".container").append(mainLi);
}

var loadProductDetails = () => {
    for (var i = 0 ; i < productData.length; i++) {
        renderProductDetails(productData[i]);
    }
}