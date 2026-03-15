let skins = [

{name:"Common", class:"common"},
{name:"Common", class:"common"},
{name:"Rare", class:"rare"},
{name:"Rare", class:"rare"},
{name:"Epic", class:"epic"},
{name:"Legendary", class:"legendary"}

]

function openCase(){

let itemsDiv = document.getElementById("items")
itemsDiv.innerHTML=""

let roll = []

for(let i=0;i<40;i++){

let skin = skins[Math.floor(Math.random()*skins.length)]

roll.push(skin)

let div = document.createElement("div")

div.className="item "+skin.class
div.innerText=skin.name

itemsDiv.appendChild(div)

}

let win = roll[35]

setTimeout(()=>{

document.getElementById("result").innerText="YOU GOT: "+win.name

},4000)

itemsDiv.style.transform="translateX(-4200px)"

}
