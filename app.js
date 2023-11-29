const heading = document.querySelector('h1')
const form = document.querySelector('form')


const data = JSON.parse(localStorage.getItem('text')) || [];
console.log(data)

data.map(item => {
    heading.innerHTML += `
        <h3>${item.text}</h3>
    `
})

if(heading.textContent === '') {
    heading.style.display = 'none'
}

form.addEventListener('submit' , (e)=> {
    e.preventDefault();

    const formData = new FormData(form)

    const info = {}

    formData.forEach((value, key) => {
        info[key] = value
        data.push(info)
    })

    localStorage.setItem('text', JSON.stringify(data))

    location.reload();
    form.reset();
})


const clearItem = document.querySelector('#clear')

clearItem.addEventListener('click', () => {
    localStorage.removeItem('text')

    location.reload();
})