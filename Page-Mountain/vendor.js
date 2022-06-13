
const mountainNames=[
    {
        id:0,
        name: 'Everest',
        img: './mountain-image/Everest.jpg',
    },
    {
        id:1,
        name: 'K2',
        img: './mountain-image/K2.jpg',
    },
    {
        id:2,
        name: 'Cho Oyu',
        img: './mountain-image/ChoOyu.jpg',
    },
    {
        id:3,
        name: 'Kangchenjunga',
        img: './mountain-image/Kangchenjunga.jpg',
    },
    {
        id:4,
        name: 'Lhoste',
        img: './mountain-image/Lhotse.jpg',
    },
    {
        id:5,
        name: 'Makalu',
        img: './mountain-image/makalus.jpg',
    },
    {
        id:6,
        name: 'Everest',
        img: './mountain-image/Everest.jpg',
    }
];


const left =document.querySelector('.left-Icon');
const right =document.querySelector('.right-Icon');

const mountainContainer=document.querySelector('.mountains-Container');
let counter=0;

const rightIconHandler=()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(item=> item.json())
    .then(json => {
        if(counter == mountainNames.length-1){
            counter=0;
        } if(counter <=mountainNames.length-1){
            counter++;
        }
        mountainContainer.innerHTML=`
        <div class="mountains-image"><img src=${mountainNames[counter].img} alt=${mountainNames[counter].name}></div>
            <div class="mountains-inform">
            <h2>${mountainNames[counter].name}</h2>
            <p>${json[counter].body}</p>
        </div>
        `
    })
}

const leftIconHandler=()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(item=> item.json())
    .then(json => {
        if(counter == 0){
            counter=mountainNames.length-1;
        } if(counter !=0){
            counter--;
        }
        mountainContainer.innerHTML=`
        <div class="mountains-image"><img src=${mountainNames[counter].img} alt=${mountainNames[counter].name}></div>
            <div class="mountains-inform">
            <h2>${mountainNames[counter].name}</h2>
            <p>${json[counter].body}</p>
        </div>
        `
    })
}

right.addEventListener('click',rightIconHandler);
left.addEventListener('click',leftIconHandler);

const slideBox=document.getElementsByClassName('slide-box');
const slideContainer =document.querySelector('.slide-Container');

const leftIconSlider=document.querySelector('.left-Icon_slider');
const rightIconSlider=document.querySelector('.right-Icon_slider');

let number=0;

const rightSlider=()=>{
    if(number == slideBox.length-3){
        number=-1;
    }
      if(number<=slideBox.length-3){
        number++;
    } 
      slideContainer.style.transform= 'translate('+(number) * -17 +'%)';
}

const leftSlider=()=>{
    if(number == slideBox.length-3){
        number=-1;
    }
      if(number<=slideBox.length-3){
        number++;
    } 
      slideContainer.style.transform= 'translate('+(number) * -17 +'%)';
}

const rightHandlerSlider=()=>{
    if(number == 0){
        number=slideBox.length-2;
    }
      if(number!==0){
          number--;
      } 
      slideContainer.style.transform= 'translate('+(number) * -17 +'%)';
}



rightIconSlider.addEventListener('click',rightSlider);
leftIconSlider.addEventListener('click',rightHandlerSlider);