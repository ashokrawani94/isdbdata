var productData = [
     {
        name : "Laptop",
        price: 200,
        manufacturer: "Dell",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpLOuv3zy-quBgd1dZzkyGsgBAYX7BfHtec6ZM6phCoISNdNMjRIQYuv6GrRcVm8-4beo&usqp=CAU"
     },
     {
        name : "Gaming Laptop",
        price : 500,
        manufacturer : "Lenovo",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpLOuv3zy-quBgd1dZzkyGsgBAYX7BfHtec6ZM6phCoISNdNMjRIQYuv6GrRcVm8-4beo&usqp=CAU"
     },
     {
        name : "Office Laptop",
        price : 300,
        manufacturer: "HP",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpLOuv3zy-quBgd1dZzkyGsgBAYX7BfHtec6ZM6phCoISNdNMjRIQYuv6GrRcVm8-4beo&usqp=CAU"
     }
     
]

var renderProductDetails = (pData) =>{
    var mainLi = document.createElement("li")
    var ulTag = document.createElement('ul')
    ulTag.setAttribute('class', 'productDetails')

    var li_1 = document.createElement("li")
    li_1.innerHTML = 'Product Name: ' + pData.name;
    ulTag.append(li_1);

    var li_2 = document.createElement("li")
    li_2.innerHTML = 'Product price: ' + pData.price;
    ulTag.append(li_2);

    var li_3 = document.createElement("li")
    li_3.innerHTML = 'Product Manufacturer: ' + pData.manufacturer;
    ulTag.append(li_3);

    var li_4 = document.createElement("li")
    var img = document.createElement('img')
    img.setAttribute("src", pData.image)
    li_4.append(img)
    ulTag.append(li_4);

    mainLi.append(ulTag)
    document.querySelector(".container").append(mainLi);
    
    // img.style.textAlign = "centre"
}
for(var i = 0; i<= productData.length; i++){
    renderProductDetails(productData[i])
}