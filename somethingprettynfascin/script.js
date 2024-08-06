
// sorting, 4 ma shortie

let numberOfCirclesSlider;
let ncsSliderSize = 200;

let radioSelectionInput;
let userArrayInput;

let submitButton;




function setup() {
  createCanvas(1024, 400);
  numberOfCirclesSlider = createSlider(2, 10, 4, 1);
  numberOfCirclesSlider.size(ncsSliderSize);
  numberOfCirclesSlider.position(width - ncsSliderSize, 100);

  noStroke();
  fill(255);
  radioSelectionInput = createRadio();
  radioSelectionInput.option('Selection Sort');
  radioSelectionInput.option('Bubble Sort');
  radioSelectionInput.size(ncsSliderSize, 20);
  radioSelectionInput.position(width - ncsSliderSize, 150);

  userArrayInput = createInput();
  userArrayInput.size(ncsSliderSize, 20);
  userArrayInput.position(width - ncsSliderSize, 200);
  userArrayInput.attribute('placeholder', 'Enter your array here (csv)');

  submitButton = createButton('Submit');
  submitButton.size(ncsSliderSize, 20);
  submitButton.position(width - ncsSliderSize, 250);
  submitButton.mousePressed(draw);
}

function draw() {
  //setup
  background(30);
  let numberOfCircles = numberOfCirclesSlider.value();
  text (`number of circles: ${numberOfCircles}`, width - ncsSliderSize, 90);
  fill(255);
  noStroke();
  //&&&&&
  let userArray = userArrayInput.value();
  let userArrayValues = userArray.split(',');
  userArrayValues = userArrayValues.map(x => parseInt(x));
  userArrayValues = userArrayValues.filter(x => !isNaN(x));
  userArrayValues = userArrayValues.slice(0, numberOfCircles);
  console.log(userArrayValues);
  let typeOfSort = radioSelectionInput.value();
  console.log(typeOfSort);

}
