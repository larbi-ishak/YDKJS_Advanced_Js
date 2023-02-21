/*
let brands = ["Mercedes", "Bmw", "Audi", "Alpha Romio", "Porsche"];

// getting each item from an array and upper case the last letter form the item
let endUpper = brands.map((brand) => {
    let newBrand = brand
        .split("")
        .map((letter, ind, arr) => {
            if (ind === arr.length - 1) letter = letter.toUpperCase();
            return letter;
        })
        .join("");
    return newBrand;
});

console.log(endUpper);

// Boolean shortcut
console.log(!!null);
console.log(Boolean(null));
*/

arr = [1, 2, 3, 4, 5, 6];
function moving(arr, round_nmbr) {
    let arrLenght = arr.length;
    console.log(arrLenght);
    let temp = arr[arrLenght - 1];
    for (i = 1; i < arrLenght; i++) {
        arr[i] = arr[i - 1];
    }
    arr[0] = temp;
    console.log(arr);
}
moving(arr, 5);
