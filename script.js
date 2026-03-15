let skins=[

{name:"Space Pistol",img:"img/space1.png",rarity:"common",chance:50},

{name:"Galaxy Rifle",img:"img/space2.png",rarity:"rare",chance:30},

{name:"Nebula Sniper",img:"img/space3.png",rarity:"epic",chance:15},

{name:"Cosmic Dragon",img:"img/space4.png",rarity:"legendary",chance:5}

]

function getSkin(){

let rand=Math.random()*100

let sum=0

for(let skin of skins){

sum+=skin.chance

if(rand<=sum){

return skin

}

}

}

function openCase(){

let items=document.getElementById("items")

items.innerHTML=""

items.style.transition="none"

items.style.transform="translateX(0px)"

let roll=[]

for(let i=0;i<100;i++){

let skin=getSkin()

roll.push(skin)

let div=document.createElement("div")

div.className="item "+skin.rarity

div.innerHTML="<img src='"+skin.img+"'><p>"+skin.name+"</p>"

items.appendChild(div)

}

setTimeout(()=>{

items.style.transition="5s cubic-bezier(.1,.7,.1,1)"

items.style.transform="translateX(-7000px)"

},100)

let win=roll[50]

setTimeout(()=>{

document.getElementById("result").innerHTML="🎉 YOU GOT: "+win.name

},5000)

}
