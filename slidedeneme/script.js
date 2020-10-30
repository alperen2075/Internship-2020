//I proud of myself :)
var kisiler=[
    {
        name: "Salvador Dali",
        image:"https://www.makaleler.com/fotomakaleler/salvador-dali-kimdir-1769.jpg",
        link:"https://tr.wikipedia.org/wiki/Salvador_Dal%C3%AD"
    },
    {
        name: "Picasso",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Paolo_Monti_-_Servizio_fotografico_%28Milano%2C_1953%29_-_BEIC_6356204.jpg/220px-Paolo_Monti_-_Servizio_fotografico_%28Milano%2C_1953%29_-_BEIC_6356204.jpg",
        link:"https://tr.wikipedia.org/wiki/Pablo_Picasso"
    },
    {
        name: "Leonardo Da Vinci",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/LEONARDO.JPG/220px-LEONARDO.JPG",
        link:"https://tr.wikipedia.org/wiki/Leonardo_da_Vinci"
    },
    {
        name: "Frida Kahlo",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg/220px-Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg",
        link:"https://tr.wikipedia.org/wiki/Frida_Kahlo"
    },
    {
        name: "Osman Hamdi Bey",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Osman_Hamdi_Bey.jpg/220px-Osman_Hamdi_Bey.jpg",
        link:"https://tr.wikipedia.org/wiki/Osman_Hamdi_Bey"
    }
    
];
var setting={
    duration:1000,
    random:false
}
var interval;
var index = 0;
otomatikAkis(setting);
document.querySelector('.fa-arrow-alt-circle-left').addEventListener('click', function(){
    if(index==0)index=kisiler.length-1;
    else index--;
    showSlide(index);
    console.log(index);
});
document.querySelector('.fa-arrow-alt-circle-right').addEventListener('click', function(){
    if(index==(kisiler.length-1))index=0;
    else index++;
    showSlide(index);
    console.log(index);
});

document.querySelectorAll(".arrow").forEach(function(arrow){
    arrow.addEventListener("mouseenter",function(){
        clearInterval( interval);
    })
});
document.querySelectorAll(".arrow").forEach(function(arrow){
    arrow.addEventListener("mouseleave",function(){
        otomatikAkis(setting);
    })
});
function showSlide(index){
    document.querySelector(".card-img-top").setAttribute("src",kisiler[index].image);
    document.querySelector(".card-title").textContent=kisiler[index].name;
    document.querySelector(".card-link").setAttribute("href",kisiler[index].link);
}

function otomatikAkis(setting){
  interval=  setInterval(function(){
        var prev=index;
        if(setting.random){
            do{
                index=Math.floor(Math.random()*kisiler.length);
            }while(index==prev);            
            showSlide(index);
            console.log(index);
        }
        else{
            if((kisiler.length-1)==index) index=0;
            else index++;
            showSlide(index);
        }
    },setting.duration)
}