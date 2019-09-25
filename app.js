/*

const makeupApiUrl = 'http://makeup-api.herokuapp.com/api/v1/products';
const makeupFrontImg = document.getElementById('makeup-container');


let getMakeupData = async ()=> {
const respose = await fetch(`${makeupApiUrl}.json?id=1`);
    const makeup = await respose.json();
    console.log(makeup);

    i =makeup;
    for(let i=0;i<10;i++){
       
        const frontImg = makeup.image_link;
        makeupFrontImg.innerHTML += `<img src="${frontImg}"`;
    
    };
    
};

getMakeupData();



*/



















const makeupName = document.getElementById('name');
const makeupBrand = document.getElementById('header');
const makeupFrontImg = document.getElementById('image_link');


const makeupApiUrl = 'http://makeup-api.herokuapp.com/api/v1/products';

let getMakeupData = async ()=> {
    const respose = await fetch(`${makeupApiUrl}/1048.json`);
    const makeup = await respose.json();
   
    console.log(makeup);

    const frontImg = makeup.image_link;
    const name = makeup.name;
    const header= makeup.brand;
    makeupBrand.innerText = makeup.brand;
    makeupName.innerText = makeup.name;
    makeupFrontImg.src = frontImg;
   


};

getMakeupData();

const makeupName2 = document.getElementById('name2');
const makeupBrand2 = document.getElementById('header2');
const makeupFrontImg2 = document.getElementById('image_link2');

let getMakeupDatas = async ()=> {
const respose = await fetch(`${makeupApiUrl}/1046.json`);
    const makeup = await respose.json();
    console.log(makeup);

    const frontImg = makeup.image_link;
    const name2 = makeup.name;
    const header2= makeup.brand;
    makeupBrand2.innerText = makeup.brand;
    makeupName2.innerText = makeup.name;
    makeupFrontImg2.src = frontImg;
   

 


};

getMakeupDatas();
