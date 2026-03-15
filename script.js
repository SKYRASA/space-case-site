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
let skins=[

{name:"AK-47 Redline",img:"https://i.imgur.com/Jh9XG5E.png",chance:40},

{name:"M4A4 Neo-Noir",img:"https://i.imgur.com/Z6XbK4b.png",chance:30},

{name:"AWP Dragon Lore",img:"https://i.imgur.com/7Y4FQ6N.png",chance:5},

{name:"USP Kill Confirmed",img:"https://i.imgur.com/VgxYz4P.png",chance:25}

]

function getSkin(){

let rand=Math.random()*100
let sum=0

for(let s of skins){

sum+=s.chance

if(rand<=sum)return s

}

}

function openCase(){

let items=document.getElementById("items")

items.innerHTML=""

let roll=[]

for(let i=0;i<60;i++){

let skin=getSkin()

roll.push(skin)

let div=document.createElement("div")

div.className="item"

div.innerHTML="<img src='"+skin.img+"' width='80'><p>"+skin.name+"</p>"

items.appendChild(div)

}

items.style.transition="5s"
items.style.transform="translateX(-5000px)"

let win=roll[30]

setTimeout(()=>{

document.getElementById("result").innerHTML="YOU GOT "+win.name

saveItem(win)

},5000)

}

function saveItem(item){

let inv=JSON.parse(localStorage.getItem("inventory")||"[]")

inv.push(item)

localStorage.setItem("inventory",JSON.stringify(inv))

}

function loadInventory(){

let inv=JSON.parse(localStorage.getItem("inventory")||"[]")

let div=document.getElementById("inventory")

if(!div)return

inv.forEach(item=>{

let el=document.createElement("div")

el.innerHTML="<img src='"+item.img+"' width='80'><p>"+item.name+"</p>"

div.appendChild(el)

})

}

loadInventory()
