const inputField = document.querySelector(".form-control.form-control-dark")
const dropdownValues = document.getElementsByClassName('dropdown-list-item')
const dropdownMenu = document.querySelector(".list-unstyled")
inputField.addEventListener('input', (event) => {
    // Filter the dropdown for possible values
    for (let item of dropdownValues) {
        if (!item.children[0].childNodes[2].textContent.toLowerCase().includes(event.target.value.toLowerCase())) {
            item.style = 'display: none;'
        } else {
            item.style = 'display: block;'
        }
    }
    if (event.target.value.length === 0) {
        for (let i = 3; i < dropdownValues.length; i++) {
            dropdownValues[i].style = 'display: none;'
        }
    }
})