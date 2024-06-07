


console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

console.log('Test')

// messageOne.textContent = "From ball"

weatherForm.addEventListener('submit',(e) => {
    e.preventDefault()

    const location = search.value

    fetch('/weather?address='+location).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            console.log(data.error)
        } else {
            console.log(data.forecast + data.address + data.keylocation)
            messageOne.textContent = data.forecast + data.address + data.keylocation
        }
    })
})

    console.log(location)
})