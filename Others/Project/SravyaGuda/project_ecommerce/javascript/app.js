//script for Login page
/* 
document.querySelector(".login-button").addEventListener("hover", function(){
    document.querySelector(".login-button").setAttribute("style","background-color:red");
});

document.querySelector("body").addEventListener("load", navBarDisplay());
function navBarDisplay(){
    if(document.URL.includes("loginPage")==true){
        document.querySelector("nav").style.display="none";
        document.querySelector(".search").style.display="none";
    }
} */
function appendElement(parentSelector, childElement){
    var parentSelector = "."+parentSelector;
    document.querySelector(parentSelector).append(childElement);
}
var ItemsData = [{
    itemName: "Shirts",
    imgURL: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/journeys/N2FkMDllZDUt/N2FkMDllZDUt-MDBmZTQ0MDAt-w186._SY116_CB614324651_.jpg"
},
{
    itemName: "Watches",
    imgURL: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/journeys/N2FkMDllZDUt/N2FkMDllZDUt-YTEwOWM0Y2It-w186._SY116_CB614324651_.jpg"
},
{
    itemName: "Shirts",
    imgURL: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/journeys/N2FkMDllZDUt/N2FkMDllZDUt-MDBmZTQ0MDAt-w186._SY116_CB614324651_.jpg"
},
{
    itemName: "Watches",
    imgURL: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/journeys/N2FkMDllZDUt/N2FkMDllZDUt-YTEwOWM0Y2It-w186._SY116_CB614324651_.jpg"
},
{
    itemName: "Shirts",
    imgURL: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/journeys/N2FkMDllZDUt/N2FkMDllZDUt-MDBmZTQ0MDAt-w186._SY116_CB614324651_.jpg"
},
{
    itemName: "Watches",
    imgURL: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/journeys/N2FkMDllZDUt/N2FkMDllZDUt-YTEwOWM0Y2It-w186._SY116_CB614324651_.jpg"
},
{
    itemName: "Shirts",
    imgURL: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/journeys/N2FkMDllZDUt/N2FkMDllZDUt-MDBmZTQ0MDAt-w186._SY116_CB614324651_.jpg"
},
{
    itemName: "Watches",
    imgURL: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/journeys/N2FkMDllZDUt/N2FkMDllZDUt-YTEwOWM0Y2It-w186._SY116_CB614324651_.jpg"
},
{
    itemName: "Shirts",
    imgURL: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/journeys/N2FkMDllZDUt/N2FkMDllZDUt-MDBmZTQ0MDAt-w186._SY116_CB614324651_.jpg"
},
{
    itemName: "Watches",
    imgURL: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/journeys/N2FkMDllZDUt/N2FkMDllZDUt-YTEwOWM0Y2It-w186._SY116_CB614324651_.jpg"
},
{
    itemName: "Shirts",
    imgURL: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/journeys/N2FkMDllZDUt/N2FkMDllZDUt-MDBmZTQ0MDAt-w186._SY116_CB614324651_.jpg"
},
{
    itemName: "Watches",
    imgURL: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/journeys/N2FkMDllZDUt/N2FkMDllZDUt-YTEwOWM0Y2It-w186._SY116_CB614324651_.jpg"
},
{
    itemName: "Shirts",
    imgURL: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/journeys/N2FkMDllZDUt/N2FkMDllZDUt-MDBmZTQ0MDAt-w186._SY116_CB614324651_.jpg"
},
{
    itemName: "Watches",
    imgURL: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/journeys/N2FkMDllZDUt/N2FkMDllZDUt-YTEwOWM0Y2It-w186._SY116_CB614324651_.jpg"
},
{
    itemName: "Shirts",
    imgURL: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/journeys/N2FkMDllZDUt/N2FkMDllZDUt-MDBmZTQ0MDAt-w186._SY116_CB614324651_.jpg"
},
{
    itemName: "Watches",
    imgURL: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/journeys/N2FkMDllZDUt/N2FkMDllZDUt-YTEwOWM0Y2It-w186._SY116_CB614324651_.jpg"
},
{
    itemName: "Shirts",
    imgURL: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/journeys/N2FkMDllZDUt/N2FkMDllZDUt-MDBmZTQ0MDAt-w186._SY116_CB614324651_.jpg"
},
{
    itemName: "Watches",
    imgURL: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/journeys/N2FkMDllZDUt/N2FkMDllZDUt-YTEwOWM0Y2It-w186._SY116_CB614324651_.jpg"
},
{
    itemName: "Shirts",
    imgURL: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/journeys/N2FkMDllZDUt/N2FkMDllZDUt-MDBmZTQ0MDAt-w186._SY116_CB614324651_.jpg"
},
{
    itemName: "Watches",
    imgURL: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/journeys/N2FkMDllZDUt/N2FkMDllZDUt-YTEwOWM0Y2It-w186._SY116_CB614324651_.jpg"
},
{
    itemName: "Shirts",
    imgURL: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/journeys/N2FkMDllZDUt/N2FkMDllZDUt-MDBmZTQ0MDAt-w186._SY116_CB614324651_.jpg"
},
{
    itemName: "Watches",
    imgURL: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/journeys/N2FkMDllZDUt/N2FkMDllZDUt-YTEwOWM0Y2It-w186._SY116_CB614324651_.jpg"
},
{
    itemName: "Shirts",
    imgURL: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/journeys/N2FkMDllZDUt/N2FkMDllZDUt-MDBmZTQ0MDAt-w186._SY116_CB614324651_.jpg"
},
{
    itemName: "Watches",
    imgURL: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/journeys/N2FkMDllZDUt/N2FkMDllZDUt-YTEwOWM0Y2It-w186._SY116_CB614324651_.jpg"
},
{
    itemName: "Shirts",
    imgURL: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/journeys/N2FkMDllZDUt/N2FkMDllZDUt-MDBmZTQ0MDAt-w186._SY116_CB614324651_.jpg"
},
{
    itemName: "Watches",
    imgURL: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/journeys/N2FkMDllZDUt/N2FkMDllZDUt-YTEwOWM0Y2It-w186._SY116_CB614324651_.jpg"
},
{
    itemName: "Shirts",
    imgURL: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/journeys/N2FkMDllZDUt/N2FkMDllZDUt-MDBmZTQ0MDAt-w186._SY116_CB614324651_.jpg"
},
{
    itemName: "Watches",
    imgURL: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/journeys/N2FkMDllZDUt/N2FkMDllZDUt-YTEwOWM0Y2It-w186._SY116_CB614324651_.jpg"
},
{
    itemName: "Shirts",
    imgURL: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/journeys/N2FkMDllZDUt/N2FkMDllZDUt-MDBmZTQ0MDAt-w186._SY116_CB614324651_.jpg"
},
{
    itemName: "Watches",
    imgURL: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/journeys/N2FkMDllZDUt/N2FkMDllZDUt-YTEwOWM0Y2It-w186._SY116_CB614324651_.jpg"
},
{
    itemName: "Shirts",
    imgURL: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/journeys/N2FkMDllZDUt/N2FkMDllZDUt-MDBmZTQ0MDAt-w186._SY116_CB614324651_.jpg"
},
{
    itemName: "Watches",
    imgURL: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/journeys/N2FkMDllZDUt/N2FkMDllZDUt-YTEwOWM0Y2It-w186._SY116_CB614324651_.jpg"
},
{
    itemName: "Shirts",
    imgURL: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/journeys/N2FkMDllZDUt/N2FkMDllZDUt-MDBmZTQ0MDAt-w186._SY116_CB614324651_.jpg"
},
{
    itemName: "Watches",
    imgURL: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/journeys/N2FkMDllZDUt/N2FkMDllZDUt-YTEwOWM0Y2It-w186._SY116_CB614324651_.jpg"
},
{
    itemName: "Shirts",
    imgURL: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/journeys/N2FkMDllZDUt/N2FkMDllZDUt-MDBmZTQ0MDAt-w186._SY116_CB614324651_.jpg"
},
{
    itemName: "Watches",
    imgURL: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/journeys/N2FkMDllZDUt/N2FkMDllZDUt-YTEwOWM0Y2It-w186._SY116_CB614324651_.jpg"
},
{
    itemName: "Shirts",
    imgURL: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/journeys/N2FkMDllZDUt/N2FkMDllZDUt-MDBmZTQ0MDAt-w186._SY116_CB614324651_.jpg"
},
{
    itemName: "Watches",
    imgURL: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/journeys/N2FkMDllZDUt/N2FkMDllZDUt-YTEwOWM0Y2It-w186._SY116_CB614324651_.jpg"
},
{
    itemName: "Shirts",
    imgURL: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/journeys/N2FkMDllZDUt/N2FkMDllZDUt-MDBmZTQ0MDAt-w186._SY116_CB614324651_.jpg"
},
{
    itemName: "Watches",
    imgURL: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/journeys/N2FkMDllZDUt/N2FkMDllZDUt-YTEwOWM0Y2It-w186._SY116_CB614324651_.jpg"
},
{
    itemName: "Shirts",
    imgURL: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/journeys/N2FkMDllZDUt/N2FkMDllZDUt-MDBmZTQ0MDAt-w186._SY116_CB614324651_.jpg"
},
{
    itemName: "Watches",
    imgURL: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/journeys/N2FkMDllZDUt/N2FkMDllZDUt-YTEwOWM0Y2It-w186._SY116_CB614324651_.jpg"
},
{
    itemName: "Shirts",
    imgURL: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/journeys/N2FkMDllZDUt/N2FkMDllZDUt-MDBmZTQ0MDAt-w186._SY116_CB614324651_.jpg"
},
{
    itemName: "Watches",
    imgURL: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/journeys/N2FkMDllZDUt/N2FkMDllZDUt-YTEwOWM0Y2It-w186._SY116_CB614324651_.jpg"
},
{
    itemName: "Shirts",
    imgURL: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/journeys/N2FkMDllZDUt/N2FkMDllZDUt-MDBmZTQ0MDAt-w186._SY116_CB614324651_.jpg"
},
{
    itemName: "Watches",
    imgURL: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/journeys/N2FkMDllZDUt/N2FkMDllZDUt-YTEwOWM0Y2It-w186._SY116_CB614324651_.jpg"
},
{
    itemName: "Shirts",
    imgURL: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/journeys/N2FkMDllZDUt/N2FkMDllZDUt-MDBmZTQ0MDAt-w186._SY116_CB614324651_.jpg"
},
{
    itemName: "Watches",
    imgURL: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/journeys/N2FkMDllZDUt/N2FkMDllZDUt-YTEwOWM0Y2It-w186._SY116_CB614324651_.jpg"
},
{
    itemName: "Shirts",
    imgURL: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/journeys/N2FkMDllZDUt/N2FkMDllZDUt-MDBmZTQ0MDAt-w186._SY116_CB614324651_.jpg"
},
{
    itemName: "Watches",
    imgURL: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/journeys/N2FkMDllZDUt/N2FkMDllZDUt-YTEwOWM0Y2It-w186._SY116_CB614324651_.jpg"
},
{
    itemName: "Shirts",
    imgURL: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/journeys/N2FkMDllZDUt/N2FkMDllZDUt-MDBmZTQ0MDAt-w186._SY116_CB614324651_.jpg"
},
{
    itemName: "Watches",
    imgURL: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/journeys/N2FkMDllZDUt/N2FkMDllZDUt-YTEwOWM0Y2It-w186._SY116_CB614324651_.jpg"
},
{
    itemName: "Shirts",
    imgURL: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/journeys/N2FkMDllZDUt/N2FkMDllZDUt-MDBmZTQ0MDAt-w186._SY116_CB614324651_.jpg"
}];

createItems = (itData) =>{
    var itemLi = document.createElement("li");
    appendElement("itemList", itemLi);
    itemLi.setAttribute("class", "item item"+i);
    var itemContainer = document.createElement("div");
    appendElement("item"+i, itemContainer);
    itemContainer.setAttribute("class", "itemContainer itemContainer"+i);
   //  adding image element to div tag
    var imgElement = document.createElement("img");
    appendElement("itemContainer"+i, imgElement);
    imgElement.setAttribute("class", "itemImg");
    imgElement.setAttribute("src", itData.imgURL);
    //add heading for image
    var itemNameElement = document.createElement("p");
    appendElement("itemContainer"+i, itemNameElement);
    itemNameElement.setAttribute("class", "itemName");
    itemNameElement.innerHTML = itData.itemName;
}
for(var i=0;i< ItemsData.length;i++){
    createItems(ItemsData[i]);
}















/* Direct method for creating items on Shopping page
//script for shopping page
function createItems(){    
    //adding list element
    var item1 = document.createElement("li");
    document.querySelector(".itemList").append(item1);
    item1.setAttribute("class", "item");
    //adding div tag as child of list
    var itemContainer = document.createElement("div");
    item1.append(itemContainer);
    itemContainer.setAttribute("class", "itemContainer");

    // adding image element
    var img1 = document.createElement("img");
    itemContainer.append(img1);
    img1.setAttribute("class", "itemImg");
    img1.setAttribute("src", "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/journeys/N2FkMDllZDUt/N2FkMDllZDUt-MDBmZTQ0MDAt-w186._SY116_CB614324651_.jpg");
    //add heading for image
    var itemName = document.createElement("p");
    itemContainer.append(itemName);
    itemName.setAttribute("class", "itemName");
    itemName.innerHTML = "Shirts";   
}
createItems();
*/