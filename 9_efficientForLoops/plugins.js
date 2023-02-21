// tip : emmet : write math expression select it then with command pallet evaluate it

/* Efficient for loops */

let brands = [
    "BMW",
    "Mercedes",
    "Audi",
    "Volkswagen",
    "Porsche",
    "Alpha Romio",
];

let obj = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
};

// in the case of an array for in will show the index
// in the case of an object for in will show the key
// for(let item in array)
// shortcuts forin foreach

brands.forEach((element, index, arr) => {});

for (const entry of Object.entries(obj)) {
    console.log(entry);
}
for (const key of Object.keys(obj)) {
    console.log(key);
}
for (const value of Object.values(obj)) {
    console.log(value);
}

let str = "mohamed ali";
let arr = [...str];
let initial = "";

let simp = arr.map((item, index, arr) => {
    let newArr = arr.slice(index + 1);
    if (!newArr.includes(item)) {
        return item;
    } else {
        return "";
    }
});

console.log(simp);

// accumulator pattern
const word = "thisisareallybigwordthatyoucanseethatfromafardistance";

const wordCount = {};
for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    if (!wordCount[letter]) {
        // if the letter doesn't exist , make it a property and putting value of 1
        wordCount[letter] = 1;
    } else if (wordCount[letter] >= 5) {
        // if the letter appears 5 times or more
        // we make a property with capitalized copy of the letter
        if (wordCount[letter.toUpperCase()]) {
            // if it exists we add
            wordCount[letter.toUpperCase()]++;
        } else {
            // if it doesn't exist we make
            wordCount[letter.toUpperCase()] = 1;
        }
    } else {
        wordCount[letter]++;
    }
}
console.log(wordCount);
// wordCount["1"] = 4; immutable
console.log(wordCount["1"]);

// shortcut, conserving computer resources and breaking code
for (brand of brands) {
    if (brand === "Audi") {
        console.log("Found It! and code stops here");
        break;
    }
    console.log(brand);
}

// spread
// new Set for duplicated
// destructuring
// radom generate color and make it the window background
// dealing with clipboard
// transitionend event
// short if statements
// capturing screen

obj = {
    todo: "youtube",
    now: "instagram",
    focus: "projects",
    utility: "pug",
    todos: ["react", "reactNative/Pwa", "python", "linux", "dart+flutter"],
};
console.log(obj);

const { todo: tod, now, focs } = obj;
console.log(tod);
console.log(now);
console.log(focs); // undefined

const {
    todos: [, , favLanguage, sysAdmin],
} = obj;
console.log(favLanguage, sysAdmin);

const button = document.querySelector("#copy");
const what = document.querySelector("#what");
const linkInput = document.querySelector("#link");

button.addEventListener("click", () => {
    let link = linkInput.value;
    navigator.clipboard.writeText(link);
});

what.addEventListener("click", () => {
    let msg = navigator.clipboard.readText();
    alert(msg);
});
// transitionend
const but = document.querySelector(".btn");
const but2 = document.querySelector(".btn2");
but.addEventListener("click", () => {
    but.style.opacity = 0;
});
but.addEventListener("transitionend", () => {
    but.style.display = "none";
});

// capturing
const start = document.querySelector(".start");
const preview = document.querySelector(".preview");

start.addEventListener("click", async () => {
    const options = {
        video: {
            cursor: "always", // show the cursor
        },
        audio: false,
    };
    preview.srcObject = await navigator.mediaDevices.getDisplayMedia({
        options,
    });
});
