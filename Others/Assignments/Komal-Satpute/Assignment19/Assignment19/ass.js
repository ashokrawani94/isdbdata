class flowers {
    flowerStatus = "Attractive"
    flowerFragrance = "Brith Spring"
    constructor(Data) {
        console.log("THE FLOWERS")
        this.name = Data.name
        this.fragerence = Data.fragerence
        this.color = Data.color
        this.fruit = Data.fruit
        this.size = Data.size
        this.speciality = Data.speciality
        this.medicine = Data.medicine

    }
    preetyflowers() {
        console.log("preety flower")
    }
    cuteflowers() {
        console.log("cute flower")
    }
    flourishflowers() {
        console.log("flourish flower")
    }
    loveflowers() {
        console.log("love flower")
    }
    amazingflower() {
        console.log("Amazing flower")
    }
}

var f1 = {
    name: "Lotus",
    fragerence: "Sweet",
    color: "yellowPink",
    fruit: "yes",
    size: "large",
    speciality: "LaxmiLotus",
    medicine: "Ayurvedic"
}
var flower1 = new flowers(f1)
console.log(flower1)

var f2 = {
    name: "Rose",
    fragerence: "Sweet",
    color: "Red",
    fruit: "yes",
    size: "medium",
    speciality: "Love",
    medicine: "Ayurvedic"
}
var flower2 = new flowers(f2)
console.log(flower2)

var f3 = {
    name: "jasmin",
    fragerence: "Sweet",
    color: "white",
    fruit: "yes",
    size: "small",
    speciality: "fragerence",
    medicine: "Ayurvedic"
}
var flower3 = new flowers(f3)
console.log(flower3)

var f4 = {
    name: "sunflower",
    fragerence: "Sweet",
    color: "yellow",
    fruit: "yes",
    size: "large",
    speciality: "sun",
    medicine: "Ayurvedic"
}
var flower4 = new flowers(f4)
console.log(flower4)

var f5 = {
    name: "hibiscus",
    fragerence: "Sweet",
    color: "red",
    fruit: "yes",
    size: "medium",
    speciality: "Ganeshji",
    medicine: "Ayurvedic"
}
var flower5 = new flowers(f5)
console.log(flower5)



    

