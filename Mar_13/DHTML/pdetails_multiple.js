var productData = [];

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

    // code to hit the url, get the data, 
    // var dataUrl = "http://localhost:8081/Mar_13/data/productData.json";
    // var dataUrl = 'https://origin-completion.amazon.in/api/2017/suggestions?limit=11&prefix=perfume&suggestion-type=WIDGET&suggestion-type=KEYWORD&page-type=Gateway&alias=aps&site-variant=desktop&version=3&event=onkeypress&wc=&lop=en_IN&last-prefix=ca&avg-ks-time=3701&fb=1&session-id=257-6181892-3191156&request-id=FRAFQB6BYAZ4YC9RP3WZ&mid=A21TJRUUN4KGV&plain-mid=44571&client-info=amazon-search-ui';
    var dataUrl = 'http://localhost:8081/get/productDetails';

    $.ajax({
        url: dataUrl,
        method: 'GET',
        dataType: 'JSON', // String, XML. ARRau
        data: {},
        success: (response) => {
            console.log("Successfly got communicated");
            console.log(response);
           productData = response.pData;
            for (var i = 0 ; i < productData.length; i++) {
                renderProductDetails(productData[i]);
            }
        },
        error: (error) => {
            console.log("Error while communicating");
            console.log(error);
        }
    });
}