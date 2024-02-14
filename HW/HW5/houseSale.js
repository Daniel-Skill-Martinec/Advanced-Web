let houseForSale = {
    area: 940,
    value: 320000,
    streetName: "Fifth Street",
    built: "2012",
    owner: { name: "Blake", age: 29 },
    offers: [290000, 295000, 315000, 312000]
};

function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}

console.log("houseForSale:");
console.log(deepCopy(houseForSale));

let modifiedHouse = deepCopy(houseForSale);
delete modifiedHouse.built;

modifiedHouse.owner.age = 30;

modifiedHouse["sale price"] = 312000;

console.log("houseForSale After Changes:");
console.log(modifiedHouse);

