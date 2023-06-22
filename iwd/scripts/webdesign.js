var index = 0;

document.addEventListener(onload, slideShow());

function slideShow(){ 
    let carouselItems = document.getElementsByTagName("li");
    for(let i = 0; i < carouselItems.length; i++){
        if(i != index)
        carouselItems[i].style.display = "none";
    }
    if(index >= carouselItems.length){
        index = 0;
    }
    carouselItems[index].style.display = "block";
    index++;
    setTimeout(slideShow, 8000);
}