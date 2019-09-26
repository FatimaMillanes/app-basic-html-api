
const imgContainer = document.getElementById('makeup-container');


let getInfo = async () => {
    const response = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json?id=1')
    const makeup = await response.json();
    let flag = 0;
    console.log(makeup);
    makeup.some(element =>{
        const theImg = element.image_link;
        imgContainer.innerHTML += `<h1><img src="${theImg}" class="img-makeup"></h1>`
        flag++;
        if(flag === 20){
            return element === element;
           
        }         
    });
    
}
getInfo();









/*


const makeupName = document.getElementById('name');
const makeupBrand = document.getElementById('header');

const makeupApiUrl = 'http://makeup-api.herokuapp.com/api/v1/products';

let getMakeupData = async ()=> {
    const respose = await fetch(`${makeupApiUrl}/1048.json`);
    const makeup = await respose.json();
   
    console.log(makeup);

    const name = makeup.name;
    const header= makeup.brand;
    makeupBrand.innerText = makeup.brand;
    makeupName.innerText = makeup.name;   


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

*/