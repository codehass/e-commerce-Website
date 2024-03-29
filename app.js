// Select wrapper
const wrapper = document.querySelector(".sliderWrapper");
// select menu items
const menuItems = document.querySelectorAll(".menuItem");

// all products
const products = [
	{
		id: 1,
		title: "Air Force",
		price: 119,
		colors: [
			{
				code: "black",
				img: "./img/air.png",
			},
			{
				code: "darkblue",
				img: "./img/air2.png",
			},
		],
	},
	{
		id: 2,
		title: "Air Jordan",
		price: 149,
		colors: [
			{
				code: "lightgray",
				img: "./img/jordan.png",
			},
			{
				code: "green",
				img: "./img/jordan2.png",
			},
		],
	},
	{
		id: 3,
		title: "Blazer",
		price: 109,
		colors: [
			{
				code: "lightgray",
				img: "./img/blazer.png",
			},
			{
				code: "green",
				img: "./img/blazer2.png",
			},
		],
	},
	{
		id: 4,
		title: "Crater",
		price: 129,
		colors: [
			{
				code: "black",
				img: "./img/crater.png",
			},
			{
				code: "lightgray",
				img: "./img/crater2.png",
			},
		],
	},
	{
		id: 5,
		title: "Hippie",
		price: 99,
		colors: [
			{
				code: "gray",
				img: "./img/hippie.png",
			},
			{
				code: "black",
				img: "./img/hippie2.png",
			},
		],
	},
];

let chosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
	item.addEventListener("click", () => {
		//change the current slide
		wrapper.style.transform = `translateX(${-100 * index}vw)`;

		//change the chosen product
		chosenProduct = products[index];

		// change texts of current product
		currentProductTitle.textContent = chosenProduct.title;
		currentProductPrice.textContent = "$" + chosenProduct.price;
		currentProductImg.src = chosenProduct.colors[0].img;

		// assign new colors
		currentProductColors.forEach((color, index) => {
			color.style.backgroundColor = chosenProduct.colors[index].code;
		});
	});
});

currentProductColors.forEach((color, index) => {
	color.addEventListener("click", () => {
		// change product image depending on the selected color
		currentProductImg.src = chosenProduct.colors[index].img;
	});
});

currentProductSizes.forEach((size, index) => {
	size.addEventListener("click", () => {
		// initiate background and text color
		currentProductSizes.forEach((size) => {
			size.style.backgroundColor = "white";
			size.style.color = "black";
		});

		// change background and text color of selected size
		size.style.backgroundColor = "black";
		size.style.color = "white";
	});
});
