const images = [
"Images/400_600_glace4.jpg", "Images/400_600_glace3.jpg",
"Images/400_600_glace2.jpg", "Images/400_600_glace1.jpg"
]

let i = 0 

function placeImage(x, y){

   const nextImage = images [i]

   const img= document.createElement("img")
   img.setAttribute("src", nextImage)
   img.style.left= x + "px"
   img.style.top = y + "px"
   img.style.transform = "translate(-50%, -50%) scale (0.5) rotate("+(Math.random()* 20 -10)+"deg)"

    document.body.appendChild(img)

    i = i + 1 

    if (i >=images.length){
        i=0
    }
}

let mouse= 0

document.addEventListener ("mousemove", function(event){
    event.preventDefault()
    mouse= mouse + 1
    if (mouse % 20 == 0){
    placeImage (event.pageX, event.pageY)
    }
    
})

document.addEventListener ("touchend", function(event){
    event.preventDefault()
    placeImage(event.pageX, eventpageY)

})