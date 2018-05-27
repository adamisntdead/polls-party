import { showError, clearError, inputErrors } from './errors'

function addOption() {
    const optionsContainer = document.getElementById('options-container')

    const newDiv = document.createElement('div')

    if (getNumOptions() !== 0) {
        newDiv.appendChild(document.createElement('hr'))
    }

    const newInput = document.createElement('input')
    newInput.setAttribute('type', 'text')
    newInput.setAttribute('name', 'options[]')
    newInput.setAttribute('placeholder', 'Option...')
    newInput.setAttribute('autocomplete', 'off')
    newInput.oninput = optionOnChange
    newDiv.appendChild(newInput)

    optionsContainer.appendChild(newDiv)
}


window.inputErrors = inputErrors
window.err = () => showError(document.getElementsByClassName('options-container')[0])
window.isErr = inputErrors
window.ok = () => clearError(document.getElementsByClassName('options-container')[0])

// addOption()
export function getNumOptionsFilled() {
    const optionInputs = document.querySelectorAll('input[type="text"]')

    let filled = 0
    optionInputs.forEach((elem) => {
        if (elem.value !== '') filled++
    })

    return filled
}

function getNumOptions() {
    const optionInputs = document.querySelectorAll('input[type="text"]')
    return optionInputs.length
}

function optionOnChange() {
    if (getNumOptions() < 4 && getNumOptions() === getNumOptionsFilled()) {
        addOption()
    }
}

addOption()
addOption()
