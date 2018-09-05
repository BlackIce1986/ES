/*
 Kasuta find funktsiooni, et leida arrayst element ID-ga 3
*/
const arr = [
    { id: 3, name: 'Anni' },
    { id: 5, name: 'Maarja' },
    { id: 7 },
];

let elementWithId3 = arr.find((el) => {
    if (el.id === 3) {
        return el;
    }
});

console.log(elementWithId3);
console.log("\n------------------ \r\n");

/*
 Kasuta filter funktsiooni, et koostada array, kus on ainult objektid, millel on "name" property
*/
let elementsWithName = arr.filter((el) => {
    "use strict";
    if (el.name) {
        return el;
    }
});

console.log(elementsWithName);
console.log("\n------------------ \r\n");

/*
 Implementeeri kahte eri moodi funktsioon arrayHas
*/
const arrayForArrayHas = [
    42,
    'tere',
];
const arrayHas = (element) => {
    return arrayForArrayHas.includes(element);
};

console.log(arrayHas('tere')); // true
console.log(arrayHas(43)); // false
console.log("\n------------------ \r\n");

/*
 Miks eelmises ülesandes loodud arrayHas ei tööta objekti tüüpidega, näiteks:
*/
const objectForArrayHas = [
    { id: 1 },
    { id: 2 },
];

const anyTypeHas = (arrayToCheck, element) => {
    return arrayToCheck.some((index) => {
        if (typeof index === "object") {
            return JSON.stringify(element) === JSON.stringify(index);
        }
        return element === index;
    });
};
console.log(anyTypeHas(objectForArrayHas, {id: 1}));
console.log(anyTypeHas(arrayForArrayHas, 43));
console.log("\n------------------ \r\n");

/*
 Implementeeri allolevad funktsiooni objekti jaoks (hasElement kontrollib kas antud key-ga element eksisteerib,
 getLength tagastab elementide arvu, removeNameless tagastab ainult elemendid, millel on "name" property)
*/
const obj = {
    3: { name: 'Anni'},
    5: { name: 'Maarja'},
    7: { address: 'abc 123' },
};

const getLength = (object) => {
    "use strict";
    return Object.entries(object).length;
};

const removeNameless = (object) => {
    return Object.values(object).filter((el) => {
        if (el.name) {
            return el;
        }
    });
}

const hasElement = (element, needle) => {
    return needle in element;
};

console.log(hasElement(obj, 3)); // true
console.log(hasElement(obj, 4)); // false

console.log(getLength(obj)); // 3

console.log(getLength(removeNameless(obj))); // 2

console.log("\n------------------ \r\n");
/*
 Kirjuta eelmise ülesande tulem ümber nii, et kasutad tavalise objekti asemel ES6 Map objekti.
*/

const map = new Map(Object.entries(obj));

const hasMapElement = (element, needle) => {
    "use strict";
    return element.has(needle);
};

const getMapLength = (map) => {
    "use strict";
    return map.size;
};


const removeMapNameless = (map) => {
    "use strict";
    return new Map(Array.from(map.entries()).filter((el) => {
        if (el[1].name) {
            return el;
        }
    }));
};

console.warn(map);
console.log(hasMapElement(map, '3')); // true
console.log(hasMapElement(map, '4')); // false
console.log(getMapLength(map));       // 3
console.log(getMapLength(removeMapNameless(map))); // 2
console.log("\n------------------ \r\n");