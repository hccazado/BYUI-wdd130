var index = 0;

document.addEventListener(onload, slideShow());

function slideShow(){
    
    let carouselItems = document.getElementsByTagName("li");
    for(let i = 0; i < carouselItems.length; i++){
        if(i != index)
        carouselItems[i].style.display = "none";
        console.log("set display none i: "+i);
    }

    if(index >= carouselItems.length){
        index = 0;
        console.log("reseting index variable:"+index);
    }
    carouselItems[index].style.display = "block";
    console.log("defined property display block in element: "+index);
    index++;
    setTimeout(slideShow, 10000);
}