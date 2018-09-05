const upper = [];
const lower = ['a', 'b', 'c'];

lower.forEach((item) => {
    "use strict";
   upper.push(item.toUpperCase());
});

console.log(upper);


const upper2 = lower.map((item) => {
    "use strict";
   return item.toUpperCase();
});

console.log(upper2);


const lettersStr = upper2.reduce((returnStr, item) => {
    return returnStr.concat(item);
});

console.log(lettersStr);

const sum = (...sumElements) => {
    return sumElements.reduce((accumulator, number) => {
       return accumulator + number;
    });
};

console.log(sum(1,2,3));