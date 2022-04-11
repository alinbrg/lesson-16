// 1. გამოიყენეთ const currentDay = new Date().getDay(); ცვლადი;   currentDay ცვლადი გვაძლევს კვირის დღეს რიცხვითი სახით 0 - არის კვირა, 1 - არის ორშაბათი და ასე შემდეგ.( 0 - 6 ამდე რიცხვს აბრუნებს სადაც 6 არის შაბათი) , დავწეროთ switch სადაც შევამოწმებთ currentDay-ს და 0 ის შემთხვევაში console.log ში გამოვიტანთ სიტყვას - კვირა, 1 ის შემთხვევაში - ორშაბათს და ასე შემდეგ 6 - შაბათი.
const currentDay = new Date().getDay();
// console.log(currentDay);
let day;
// console.log(day);
switch (currentDay) {
	case 0:
		day = "sunday";
		// console.log("sunday");
		break;
	case 1:
		day = "monday";
		// console.log("monday");
		break;
	case 2:
		day = "thusday";
		// console.log("thusday");
		break;
	case 3:
		day = "wednsday";
		// console.log("wednsday");
		break;
	case 4:
		day = "thursday";
		// console.log("thursday");
		break;
	case 5:
		day = "friday";
		// console.log("friday");
		break;
	case 6:
		day = "saturday";
		// console.log("saturday");
		break;
}
let dayHeading = document.querySelector("h2");
dayHeading.innerText = day;
// console.log(day);

// 2. დაწერეთ for ციკლი, 0 დან 100 - მდე console.log ში დაბეჭდეთ ინდექსი i
for (let i = 0; i < 100; i++) {
	// console.log(i);
}
let myArr = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];

// for (let i = 0; i < myArr.length; i++) {
// 	console.log(myArr[i]);
// 	for (let j = 0; j < myArr[i].length; j++) {
// 		console.log(myArr[i][j]);
// 	}
// }

// 3. დაწერეთ while ციკლი 0 დან 50 - მდე console.log ში დაბეჭდეთ ინდექსი i
let i = 0;
while (i < 50) {
	// console.log(i);
	i++;
}
// console.log(i);
// 4. დაწერეთ do while ციკლი 0 დან 150 - მდე console.log ში დაბეჭდეთ ინდექსი i

let j = 0;
do {
	// console.log(j);
	j++;
} while (j < 150);

// 5. შექმენით ცვლადი და მიანიჭეთ ცარიელი მასივი, შემდეგ დაწერეთ Loop ( for ან while ან do while ) 1 დან 1000 - მდე ამ მასივში ჩაწერეთ ინდექსი გამრავლებული ინდექსზე (i * i); გამოიყენეთ  push მეთოდი

let emptyArr = [];
for (let i = 0; i < 1000; i++) {
	emptyArr.push(i * i);
}
// console.log(emptyArr);

function logSomeText() {
	console.log("text");
}
// logSomeText();
// logSomeText();
// logSomeText();

function userInfo(age, useName) {
	// let age, useName;
	console.log(`user info ,name - ${useName} , age -  ${age}`);
}
let userAge = 20;
// userInfo("giorgi", 30);
// userInfo(userAge, "nino");
// userInfo(40, "qeti");
let myArr3 = [1, 2, 3, 4, 5, 6];
let myArr4 = [1, 2, 3, 4, 5, 6];

// logArrayElements(myArr3);
// logArrayElements(myArr4);

function logArrayElements(arr) {
	let userName = "tea";
	console.log(`${arr}`);
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}

const myFunction = function () {
	console.log("my function with const");
};

const myArrowFunction = () => {
	console.log("my arrow function");
};

// myFunction();
// myArrowFunction();

function sum(a, b) {
	// var myVar = "var";
	a++;
	b++;
	// console.log(a, b);
	if (a > 0) {
		return a + b;
	} else {
		return a + b;
	}

	console.log(a + b);
}

// let sum1 = sum(2, 3);
// console.log(sum1);

let a = 5;
let b = 7;

let newSum = sum(a, b);
let mySumFunction = sum;
// console.log(newSum);
// console.log(mySumFunction(sum(a, b), 3));
// console.log(a, b);

let myArr5 = [1, 2, 3, 4, 5, 6];
// myArr5.pop();
let userArr = [
	{
		userName: "gio",
		userAge: 30,
		status: "active",
	},
	{
		userName: "tea",
		userAge: 20,
		status: "active",
	},
	{
		userName: "nino",
		userAge: 25,
		status: "passive",
	},
];
userArr.forEach((user, index) => {
	// console.log(user);
	user.id = index;
});
// console.log(userArr);

// array
const newArr = userArr.filter((el) => {
	return el.userAge > 22;
});
const activeUsers = userArr.filter((user) => {
	return user.status === "active";
});

// console.log(newArr);
// console.log(activeUsers);

// element
const firstActiveUser = userArr.find((user) => {
	return user.status === "active" && user.userAge < 25;
});
// console.log(firstActiveUser);

// array
const arrMap = userArr.map((user) => {
	return user.userName;
});
// console.log(arrMap);

// boolean
const someArr = userArr.some((user) => {
	return user.userAge > 40;
});

// console.log(someArr);

const everyArr = userArr.every((user) => {
	return user.userAge > 20;
});
// console.log(everyArr);
// if (everyArr) {
// 	console.log("everyone is older than 20");
// } else {
// 	console.log("everyone is not older than 20");
// }
