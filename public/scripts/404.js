const backBtn = document.getElementById('back')

const backwards = (e) => {
    e.preventDefault()
    history.back()
}

backBtn.addEventListener('click', backwards)