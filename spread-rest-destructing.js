/*
1) Kasutades spread operaatorit, loo uus objekt "obj2", kus on lisaks ka neljas property "d" väärtusega 42 (spread)
*/
const obj = {
    a: 2,
    b: 5,
    c: 14,
};
const obj2 = { ...obj, d: 42 };
console.log(obj2);

console.log("\n------------------ \r\n");

/*
 Kasutades eelolevat "obj" muutujat, loo ühe "const" märksõnaga kaks muutujat: muutuja "a" väärtusega 2 ning muutuja
 "rest", mis on objekt, mis sisaldab kahte ülejäänud propertyt (object destructuring, rest)
*/
const {a, ...rest} = obj;
console.log(a);
console.log(rest);

console.log("\n------------------ \r\n");

/*
 Tee sama tegevus, mis eelmises ülesandes, aga nii, et muutuja "a" asemel tekiks sama väärtusega muutuja "foo"
*/
const {a: foo, ...rest2} = obj;
console.log(foo);
console.log(rest2);

console.log("\n------------------ \r\n");

/*
 Loo kahe elemendiga array ning kasuta järgmisel real array destructuring võtet, et luua ainult üks muutuja,
 mille väärtuseks on array viimane element (array destructuring)
*/
const array = ["hello", "world"];

[, last] = array;
console.log(last);

console.log("\n------------------ \r\n");

/*
 Kirjuta üks rida koodi, mis vahetab ära kahe muutuja väärtused (array destructuring assignment)
*/
let aNew = 1;
let bNew = 2;
[bNew, aNew] = [aNew, bNew];

console.log(aNew);
console.log(bNew);

console.log("\n------------------ \r\n");

/*
 Kirjuta üks rida koodi, mis tekitab kaks uut muutujat. "b" väärtus on array esimene element ja "c" väärtus array
 viimased elemendid, ignoreeridest teist elementi (tühi string)) (array destructuring + rest assignment)
*/
const newArray = [true, '', 2, 3, 4];
const [firstElement,,...restElements] = newArray;

console.log(firstElement);
console.log(restElements);

console.log("\n------------------ \r\n");

/*
 Defineeri funktsioon "b", mille sisendiks on suvaline arv muutujaid (eri parameetrites) ja mis tagastab array,
 mille väärtusteks on sisendparameetrid (rest parameters)
*/
function b(...functionParams) {
    return functionParams;
}

const aFunctionParams = b(1,2,3,4,5,"text", null, false);
console.log(aFunctionParams);