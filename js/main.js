var image = true
var image1a = document.getElementById("img1a")
var image2a = document.getElementById("img2a")
document.getElementById("img-swap-a").addEventListener("click", () => {
  console.log("button clicked")
  image ^= true
  if (image) {
    image1a.style.visibility = 'hidden'
    image2a.style.visibility = 'visible'
  }else{
    image1a.style.visibility = 'visible'
    image2a.style.visibility = 'hidden'
  }
})
