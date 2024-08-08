const inputField = document.querySelector(".form-control.form-control-dark")
const dropdownValues = document.getElementsByClassName('dropdown-list-item')
const dropdownMenu = document.querySelector(".list-unstyled")
inputField.addEventListener('input', (event) => {
    // Filter the dropdown for possible values
    for (let item of dropdownValues) {
        if (!item.innerHTML.toLowerCase().includes(event.target.value.toLowerCase())) {
            item.style = 'display: none;'
        } else {
            item.style = 'display: block;'
        }
    }
})