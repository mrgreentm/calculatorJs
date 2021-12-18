function insertNumber(id) {
    var number = parseInt(document.getElementById(`${id}`).value)
    element = document.getElementById('results')
    element.innerHTML += number
}

function resete() {
    let reset = document.getElementById('results')
    reset.innerHTML = ''
}

function operations(id) {
    element = document.getElementById('results')
    let operation = document.getElementById(`${id}`).value
    element.innerHTML += operation
}

function result() {
    let elements = document.getElementById('results')
    if (elements.innerHTML.includes('+')) {
        var numbers = elements.innerHTML.split('+')
        elements.innerHTML = (parseInt(numbers[0]) + parseInt(numbers[1]))
    } else {
        if (elements.innerHTML.includes('-')) {
            var numbers = elements.innerHTML.split('-')
            elements.innerHTML = (parseInt(numbers[0]) - parseInt(numbers[1]))
        } else {
            if (elements.innerHTML.includes('x')) {
                var numbers = elements.innerHTML.split('x')
                elements.innerHTML = (parseInt(numbers[0])) * (parseInt(numbers[1]))
            } else {
                if (elements.innerHTML.includes('^')) {
                    var numbers = elements.innerHTML.split('^')
                    elements.innerHTML = Math.pow((parseInt(numbers[0])), (parseInt(numbers[1])))
                } else {
                    if (elements.innerHTML.includes('/')) {
                        var numbers = elements.innerHTML.split('/')
                        elements.innerHTML = (parseInt(numbers[0])) / (parseInt(numbers[1]))
                    }
                }
            }
        }
    }
}