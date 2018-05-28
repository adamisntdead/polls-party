function vote(id) {
    const request = new XMLHttpRequest();
    request.open('POST', `/vote/${id}`, true);
    request.setRequestHeader('X-CSRF-Token', CSRF_TOKEN)
    request.send()
}

function showResults() {
    let totalVotes = 0

    document.querySelectorAll('.option-item').forEach(elem => {
        totalVotes += parseInt(elem.getAttribute('votes'))
    })


    document.querySelectorAll('.option-item').forEach(elem => {
        const amount = parseInt(elem.getAttribute('votes')) * 100 / totalVotes
        elem.setAttribute('style', `width: ${amount}%`)
        elem.onclick = () => {}
    })
}


window.optionClick = function(e) {
    e.votes = (parseInt(e.votes) + 1).toString()
    showResults()
    console.log(e)
    vote(e.id)
}
document.getElementById('results-button').onclick = showResults
