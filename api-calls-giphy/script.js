
let giphyAPI; 
function preload() {
	giphyAPI = loadStrings('api.txt');
}
let url = `https://api.giphy.com/v1/gifs/trending?api_key=${giphyAPI}`;
// let url2 = 

const COLORS = [50, 255];

let imageData;

function setup() {
	// noCanvas();

	fetch(url)
		.then(response => response.json())
		.then(json => {
			let num = random([...Array(json.data.length).keys()]);
			// let num = 2;
			drawImage(json.data[num].images.fixed_height_still.url, json.data[num].title);
			imageData = loadImage(json.data[num].images.fixed_height_still.url, drawImg);
			// console.log(json.data);
			createCanvas(json.data[num].images.fixed_height_still.width, json.data[num].images.fixed_height_still.width);
		})


}

let flag;

function drawImage(src, title) {
	let body = document.querySelector('body');
	let img = document.createElement('img');
	let heading = document.createElement('h1');
	img.src = src;
	heading.innerText = title;
	body.appendChild(img);
	body.appendChild(heading);


}

function drawImg(data) {
	flag = true;

}

function draw() {
	background(COLORS[0]);
	if (flag == true) {
		image(imageData, 0, 0);
	}


}
