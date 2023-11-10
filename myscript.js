// const images = Array.from(document.getElementsByClassName("cell"));
let score = 0;
const image1 = document.getElementById("one");
const image2 = document.getElementById("two");
const image3 = document.getElementById("three");
const image4 = document.getElementById("four");
const image5 = document.getElementById("five");
const image6 = document.getElementById("six");
const image7 = document.getElementById("seven");
const image8 = document.getElementById("eight");
const image9 = document.getElementById("nine");
const image10 = document.getElementById("ten");
const image11= document.getElementById("eleven");
const image12 = document.getElementById("twelve");
const image13= document.getElementById("thirteen");
const image14= document.getElementById("fourteen");
const image15= document.getElementById("fifteen");
const image16= document.getElementById("sixteen");
let delayInMilliseconds = 1000;
let images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16];
let imageTypes = ["example1.png", "example2.png", "example3.png", "example4.png", "example5.png", "example6.png", "example7.png", "example8.png", "example1.png", "example2.png", "example3.png", "example4.png", "example5.png", "example6.png", "example7.png", "example8.png"];
let bannedID = [];
let count = 0;
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
imageTypes = shuffleArray(imageTypes);
console.log(imageTypes);
let example1 = true;
let example2 = true;
let example3 = true;
let example4 = true;
let example5 = true;
let example6 = true;
let example7 = true;
let example8 = true;
let preid = -1;
let sameImage = "";
let presource = "Hidden.png";
// let newImage = document.createElement('img');
//          newImage.src = "example1.png";
//          // Set attribute values for the image
//          newImage.setAttribute('id', 'myImage');
//          newImage.setAttribute('width', '200px');
//          newImage.setAttribute('height', '200px');
    
//          image3.appendChild(newImage);
console.log(image3.id);
let freezeClic = false;
document.addEventListener("click", e => {
    if (freezeClic) {
        e.stopPropagation();
        e.preventDefault();
    }
}, true);
initialize = () => {




for (let i=0; i < images.length; i++){
    
    let newImage = document.createElement('img');
    newImage.src = "Hidden.png";
    images[i].replaceChildren(newImage);
    console.log[images[i].id];
    
    images[i].addEventListener("click", (event, id) => {
        changeImage(event, images[i].id);
    });

}
}
reset = () => {
    freezeClic = true;
    setTimeout(function() {
        
        for (let i=0; i < images.length; i++){
            if(!(bannedID.includes(i))){
            let newImage = document.createElement('img');
            newImage.src = "Hidden.png";
            images[i].replaceChildren(newImage);
            }
        }
        freezeClic = false;
      }, delayInMilliseconds);
   
}
resettt = () => {
   
       score = 0;
        for (let i=0; i < images.length; i++){
            
            let newImage = document.createElement('img');
            newImage.src = "Hidden.png";
            images[i].replaceChildren(newImage);
            
        }
       
        let scoreee = document.getElementById("points");
        scoreee.innerText = `Points: ${score}`;
}

function changeImage(event, id){
    if(sameImage != id){
    sameImage=id;
    
    console.log(bannedID);
    score++;
    let scoreee = document.getElementById("points");
    scoreee.innerText = `Points: ${score}`;
    console.log(event.target.src)
    console.log(event.id)
    console.log(this.id)
    console.log(id);
    let source = "Hidden.png";
    
    
    count++;
    let numnum = -1;
    if(id === "one"){
        source = imageTypes[0];
        numnum=0;
    }
    if(id === "two"){
        source = imageTypes[1];
        numnum=1;
    }
    if(id === "three"){
        source = imageTypes[2];
        numnum=2;
    }
    if(id === "four"){
        source = imageTypes[3];
        numnum=3;
    }
    if(id === "five"){
        source = imageTypes[4];
        numnum=4;
    }
    if(id === "six"){
        source = imageTypes[5];
        numnum=5;
    }
    if(id === "seven"){
        source = imageTypes[6];
        numnum=6;
    }
    if(id === "eight"){
        source = imageTypes[7];
        numnum=7;
    }
    if(id === "nine"){
        source = imageTypes[8];
        numnum=8;
    }
    if(id === "ten"){
        source = imageTypes[9];
        numnum=9;
    }
    if(id === "eleven"){
        source = imageTypes[10];
        numnum=10;
    }
    if(id === "twelve"){
        source = imageTypes[11];
        numnum=11;
    }
    if(id === "thirteen"){
        source = imageTypes[12];
        numnum=12;
    }
    if(id === "fourteen"){
        source = imageTypes[13];
        numnum=13;
    }
    if(id === "fifteen"){
        source = imageTypes[14];
        numnum=14;
    }
    if(id === "sixteen"){
        source = imageTypes[15];
        numnum=15;
    }
    
    if (presource === source){
        console.log("hjfdshfjskfldj");
        bannedID.push(preid);
        bannedID.push(numnum);

    }
    preid = numnum;
    presource = source;
    if(count > 1){
        reset();
        count = 0;
        presource = "Hidden.png"
        //preid = -1;
    }
    event.target.src = source;
    }
}
