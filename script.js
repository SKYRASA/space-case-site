let skins = [

{
name:"Space Pistol",
img:"https://i.imgur.com/9QO4F9V.png",
rarity:"common",
chance:50
},

{
name:"Galaxy Rifle",
img:"https://i.imgur.com/XzQZ6QG.png",
rarity:"rare",
chance:30
},

{
name:"Nebula Sniper",
img:"https://i.imgur.com/v9y6F6T.png",
rarity:"epic",
chance:15
},

{
name:"Cosmic Dragon",
img:"https://i.imgur.com/VuK6C6H.png",
rarity:"legendary",
chance:5
}

]

function getRandomSkin(){

let rand = Math.random()*100
let sum = 0

for(let skin of skins){

sum += skin.chance

if(rand <= sum){

return skin

}

}

}

function openCase(){

let itemsDiv = document.getElementById("items")

itemsDiv.innerHTML=""

let roll=[]

for(let i=0;i<80;i++)

let skin=getRandomSkin()

roll.push(skin)

let div=document.createElement("div")

div.className="item "+skin.rarity

div.innerHTML=
"<img src='"+skin.img+"'><p>"+skin.name+"</p>"

itemsDiv.appendChild(div)

}

let win=roll[35]

setTimeout(()=>{

document.getElementById("result").innerHTML=
"🎉 YOU GOT: "+win.name

},5000)

itemsDiv.style.transform="translateX(-4100px)"

}
