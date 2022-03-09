
const potions = Array.from(document.querySelectorAll('.image'));
const previewBox = document.querySelector(".preview-box");

potions.map(item => item.addEventListener('click', () => {
    previewBox.classList.add('preview-box-active');
}))

function removePreview (){
    previewBox.classList.remove('preview-box-active');
}
