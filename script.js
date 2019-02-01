console.log(window.innerWidth);
console.log(window.innerHeight);
let imageNames = ["demi.png","bi.jpg","trans.jpg","gay.jpg","nb.png","lesbian.png","pan.png","ace.png","polysexual.png","intersex.png","aro.png","genderfluid.png","agender.png"
,"pinkjack.png","genderq.png"];
let right = document.getElementById('right');



let tumbs = document.getElementById("tumbs");
let display =  document.getElementById("display");

selectImage(Math.floor(Math.random()*imageNames.length));
for(let i=0; i<imageNames.length; i++){
  let tumb = new Image();
  tumb.src = "images/small/" + imageNames[i];
  tumb.id = i;
  tumbs.appendChild(tumb);
  tumb.addEventListener("click",function(e){
    selectImage(e.target.id);
  })
}

function selectImage(id){
  display.src = "images/big/" + imageNames[id];
}

let z = 0;//teller voor images in array
right.addEventListener("click",function(){
  if (z>=imageNames.length-1) {z=0;}
  else {
    z++;
  }
  display.src = "images/big/"+ imageNames[z];
  console.log(z);
})

left.addEventListener("click",function(){
  if (z==0) {z=imageNames.length-1;}
  else {
    console.log(z);
    z--;
  }
  display.src = "images/big/"+ imageNames[z];
})
up.addEventListener("click",function(){
  if (z<=0) {z=imageNames.length-1;}
  else {
    console.log(z);
    z = z-5;
  }
  display.src = "images/big/"+ imageNames[z];
})
down.addEventListener("click",function(){
  if (z>=imageNames.length) {z=0;}
  else {
    z = z+5;
    console.log(z);
  }
  display.src = "images/big/"+ imageNames[z];
})
