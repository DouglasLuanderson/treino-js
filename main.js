let counter = 0;
let corpo = document.querySelector('body');
let imagens = [
    "assets/paise1.jpg",
    "assets/paise2.jpg",
    "assets/paise3.jpg",
    "assets/paise4.jpg",
]

function setImage(){
    image.setAttribute('src', imagens[counter]);
}

let before =document.createElement('h1')
let beforeText = document.createTextNode('<')
before.appendChild(beforeText);

before.addEventListener('click', function(){
    if( counter > 0){
        counter = counter - 1;  
    }
    else{
        counter = 3
    }
    setImage()
});

let image = document.createElement('img');
let next = document.createElement('h1')
let nextText = document.createTextNode('>')

next.appendChild(nextText);

next.addEventListener('click', function(){
    if( counter < 3){
        counter = counter + 1;    
    }else{
        counter = 0
    }
  
    setImage() 
});

function init() {
    corpo.appendChild(before);
    corpo.appendChild(image);
    corpo.appendChild(next);

}

init();