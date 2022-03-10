const potions = Array.from(document.querySelectorAll('.image'));
const previewBox = document.querySelector(".preview-box");

potions.map(item => item.addEventListener('click', activeModal
))

function removePreview() {
    previewBox.classList.remove('preview-box-active');
}

function activeModal(event) {
    fetch("assets/potions.json")
        .then(response => {
            return response.json()
        })
        .then(result => {
            potionIngredients.innerHTML = ""
            const potionId = event.path[1].id
            const potion = result.potions[potionId]
            potionTitle.innerText = potion.name
            potionImage.src = `assets/products/${potion.image}`
            potionEffect.innerText = potion.effect
            potion.ingredients.map(item => {
                potionIngredients.innerHTML += `<p>${item}</p>`
            })
            potionPrice.innerText = "$" + potion.price
            previewBox.classList.add('preview-box-active')
        })
}
