var footerDetails = () => {
    var mainDiv = document.createElement("div");
    mainDiv.setAttribute("class", 'subFooter');
    document.querySelector(".footer").append(mainDiv);
    
    var div1 = document.createElement("div");
    var hr = document.createElement("hr");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");

    mainDiv.append(div1);
    mainDiv.append(div2);
    mainDiv.append(div3);
    mainDiv.append(div4);

    div1.setAttribute("class", 'subFooter1');
    div2.setAttribute("class", 'subFooter2');
    div3.setAttribute("class", 'subFooter2');
    div4.setAttribute("class", 'subFooter2');

    var heading = document.createElement("h1");
    var spanTag = document.createElement("span");
    heading.append(spanTag);
    spanTag.innerHTML = 'MONCKY'
    spanTag.setAttribute("class", 'footerBrand');
    var brTag = document.createElement("br");
    var headingh3 = document.createElement("h3");
    div1.append(heading);
    div1.append(headingh3);
    headingh3.innerHTML = "E-COMMERCE COMPANY";

    var ulTag1 = document.createElement("ul");
    var ulTag2 = document.createElement("ul");
    var ulTag3 = document.createElement("ul");
    
    div2.append(ulTag1);
    div3.append(ulTag2);
    div4.append(ulTag3);

    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
    var li4 = document.createElement("li");
    var li5 = document.createElement("li");
    var li6 = document.createElement("li");
    var li7 = document.createElement("li");
    var li8 = document.createElement("li");
    var li9 = document.createElement("li");
    var li0 = document.createElement("li");

    
    li1.innerHTML = "SERVICES";
    li2.innerHTML = "LIVE SALES";
    li3.innerHTML = "FEEDBACK";
    li4.innerHTML = "CAREER IN";
    li5.innerHTML = "SUPPORT";
    li6.innerHTML = "CONTACT US";
    li7.innerHTML = "18TH MILESTONE BAREILLY";
    li8.innerHTML = "FARIDPUR";
    li9.innerHTML = "+91 7037408342";
    li0.innerHTML = "EMAIL US";

    li0.setAttribute("href", 'mailto:raoyashwant@gmail.com');

    ulTag1.append(li1);
    ulTag1.append(li2);
    ulTag1.append(li3);

    ulTag2.append(li4);
    ulTag2.append(li5);

    ulTag3.append(li6);
    ulTag3.append(li7);
    ulTag3.append(li8);
    ulTag3.append(li9);
    ulTag3.append(li0);

}

footerDetails();