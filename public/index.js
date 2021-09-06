let percent = 0
const btn = document.querySelector('.next')
const slider = document.querySelectorAll('.slider')
const prev = document.querySelector('.prev')
const links = document.querySelector('.links')
let perc = 0
const cover = document.querySelector('.cover')
const container = document.querySelector('.container')
btn.addEventListener('click', ()=>{
    if(percent == 200){
        percent = 0
    }else{
        percent += 100
    }
    slider.forEach(slide => slide.style.transform = `translateX(-${percent}%)`)
})
prev.addEventListener('click', ()=>{
    if(percent == 0){
        percent = 200
    }else{
        percent -= 100
    }
    slider.forEach(slide => slide.style.transform = `translateX(-${percent}%)`)
})
const closeOpen = () => {
      if(perc == 0){
        links.style.transform = `translate(${perc}%)`
        perc = 100
        cover.style.display = 'block'

    }else{
    links.style.transform = `translate(-${perc}%)`
    cover.style.display = 'none'
    perc = 0
    }
}
function myFunction(x) {
    x.classList.toggle("change");
    closeOpen()
  }
cover.addEventListener('click', () => {
    cover.style.display = 'none'
    closeOpen()
    container.classList.toggle('change')
})