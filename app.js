// Create Dino Constructor
function Dino (species, weight, height, diet, where, when, fact){
    this.species = species;
    this.weight = weight ;
    this.height = height;
    this.diet = diet;
    this.where = where;
    this.when = when;
    this.fact = fact;
    this.image = "images/" + species.toLowerCase() + ".png";
}
// Create Dino Objects
const dinoArray = myDinasures.Dinos.map(dinoJson => {
    var species = dinoJson.species;
    var weight = dinoJson.weight;
    var height = dinoJson.height;
    var diet = dinoJson.diet;
    var where = dinoJson.where;
    var when = dinoJson.when;
    var fact = dinoJson.fact;
    var image = dinoJson.image;
    return new Dino(species, weight, height, diet, where, when, fact, image);
})
 // Create Human Object
function Human(name, feet, inches, weight, diet){
    this.name = name;
    this.feet = feet;
    this.inches = inches;
    this.weight = weight;
    this.diet = diet;
    this.image = "images/human.png";
}

 // Use IIFE to get human data from form
(function humanData(){
    document.getElementById("btn").addEventListener("click", () => {
        var form = document.getElementById("dino-compare");
        form.style.display = "none"
        var human = getHumanData();
        rndmComp(human)
        populateGrid(human)
    })
})()

function getHumanData() {
    
    var name = document.getElementById('name').value;
    var feet = parseInt(document.getElementById('feet').value || "0");
    var inches = parseInt(document.getElementById('inches').value || "0");
    var weight = parseInt(document.getElementById('weight').value || "0");
    var diet = document.getElementById('diet').value;

    var human = new Human(name, feet, inches, weight, diet);

    return human;
}

function comp(dino, human){
    var rndmIntg = Math.floor(Math.random() * 3);
    if(rndmIntg===0){
        dino.compareWeightAndFact(human.weight)
    }
    else if(rndmIntg===1){
        dino.compareHeightAndFact(human.height)
    }
    else if(rndmIntg===2){
        dino.compareDietAndFact(human.diet)
    }
}
function rndmComp(human){
    const minRndNum = 3;
    const maxRndNum = dinoArray.length - 1;
    var rndNumOfDino = Math.floor(Math.random() * (maxRndNum - minRndNum)) + minRndNum;
    for(i=0; i<rndNumOfDino; i++){
        var rndAnimalIndex = Math.floor(Math.random() * (dinoArray.length - 1));
        var myAnimal = dinoArray[rndAnimalIndex];
        comp(myAnimal, human)
    }
}
function createImg(dino){
    var imgToCreate = document.createElement("img");
    imgToCreate.src = dino.image;
    return imgToCreate;
}
function spanFact(dino){
    var comp = document.createElement("span");
    comp.textContent = dino.fact;
    return comp;
}
// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches. 
Dino.prototype.replaceFact = function(fact){
    this.fact = fact;
};
Dino.prototype.compareWeightAndFact = function(weight){
    var fact = "We have the same weight!";
    if (this.weight > weight) {
        fact = "I weight more than you ";
    } else if (this.weight < weight) {
        fact = "You weight more than me ";
    }
    this.replaceFact(fact);
}
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.
Dino.prototype.compareDietAndFact = function (diet){
    var fact = "we have the same diet";
    if(this.diet !== diet) {
        fact = `I am ${this.diet} and you are not`;
    }
    this.replaceFact(fact);
}
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.
Dino.prototype.compareHeightAndFact = function(feet, inches){
    var fact = "we have the same height";
    var height = feet * 12 + inches;
    if(this.height >  height) {
        fact = `my height is ${this.height} so im taller than you`;
    } else if (this.height <  height) {
        fact = `my height is ${this.height} so im shorter than you`;
    }
    this.replaceFact(fact);
}
    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen
document.getElementById("btn").addEventListener("click", function(){
    
});
function populateGrid(human) {
    var grid = document.getElementById("grid");
    grid.style.display = "flex";
    dinoArray.forEach((dino, index) => {
        if(index === 4){
            grid.appendChild(humanDiv(human));
        }
        var myRow = createTile(dino)
        grid.appendChild(myRow)
    });
}
function createTile(dino) {
    var myTile = document.createElement("div");
    myTile.classList.add("grid-item");
    var image = createImg(dino);
    myTile.appendChild(image);
    var fact = spanFact(dino);
    myTile.appendChild(fact);
    return myTile;
}
function humanDiv(human){
    var divOfHuman = document.createElement("div");
    divOfHuman.classList.add("grid-item");
    var img = createImg(human);
    divOfHuman.appendChild(img);
    return divOfHuman;
}


 