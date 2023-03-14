var types = [
    {
        name: "Dairy Milk",
        fat: "30g",
        protein: "7.3g",
        salt: "0.14g",
        img: "images/dairyMilk.jpg"
    },
    {
        name: "Kit-kat",
        fat: "30g",
        protein: "7.3g",
        salt: "0.14g",
        img: "images/KitKat.jpg"
    },
    {
        name: " Kiss me",
        fat: "30g",
        protein: "7.3g",
        salt: "0.14g",
        img: "images/kissMe choclate.webp"
    }
]
var productDetails = (types) => {
    var list = document.createElement("li")
    var ulTag = document.createElement("ul")
    ulTag.setAttribute("class", "productDetails")

    var li1 = document.createElement("li")
    li1.innerHTML = "Choclate Name : " + types.name
    ulTag.append(li1)

    var li2 = document.createElement("li")
    li2.innerHTML = "Fat : " + types.fat
    ulTag.append(li2)

    var li3 = document.createElement("li")
    li3.innerHTML = "Protein : " + types.protein
    ulTag.append(li3)

    var li4 = document.createElement("li")
    li4.innerHTML = "Salt : " + types.salt
    ulTag.append(li4)

    var li5 = document.createElement("li")
    var imgTag = document.createElement("img")
    imgTag.setAttribute("src", types.img)
    li5.append(imgTag)
    ulTag.append(li5)

    list.append(ulTag)
    document.querySelector(".container").append(list)
}
for (var i = 0; i < types.length; i++) {
    productDetails(types[i])
}

