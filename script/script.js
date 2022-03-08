
const potions = Array.from(document.querySelectorAll('.image'));
const previewBox = document.querySelector(".preview-box");

potions.map(item => item.addEventListener('click', () => {
    previewBox.classList.add('preview-box-active');
}))

function removePreview (){
    previewBox.classList.remove('preview-box-active');
}
























/*

const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('img')
images.forEach(image => {
    image.addEventListener('click', e => {
        lightbox.classList.add('active')
        const img = document.createElement('img')
        img.src = image.src
        lightbox.appendChild(img)
    })
})


lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
})

*/