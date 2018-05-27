import { getNumOptionsFilled } from './create'
import nativeToast from 'native-toast'
// This file contains the code for looking for and showing errors
// in the user input

// This adds an error class to a given element
export function showError(elem, message) {
    if (!elem.classList.contains('error')) {
        elem.classList.add('error')
    }
    nativeToast({
        position: 'bottom',
        timeout: 1500,
        type: 'error',
        message
    })
}

// This removes the error class from a given element
export function clearError(elem) {
    if (elem.classList.contains('error')) {
        elem.classList.remove('error')
    }
}

// Here, I want to look if everything is filled in correctly
export function inputErrors() {
    // Check there is a title
    const titleInput = document.getElementById('question-input')
    if (titleInput.value.length === 0) {
        showError(titleInput, 'Enter A Title')
        return false
    } else {
        clearError(titleInput)
    }

    const optionsContainer = document.getElementById('options-container')
    if (getNumOptionsFilled() < 2) {
        showError(optionsContainer, 'Enter Some Options')
        return false
    } else {
        clearError(optionsContainer)
    }
    return true
}
