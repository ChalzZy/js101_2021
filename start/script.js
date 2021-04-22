console.log('loaded')

let searchButton = document.getElementById('searchBar__button');

console.log(searchButton)



function handleClick() {
    console.log('this got clicked!')

    let input = document.getElementById('searchBar__input')
    console.log(input.value)

    let request = fetch(`https://api.giphy.com/v1/gifs/search?api_key=y1JgTYudliHa7vdPq4kMhieC7MUk9jLM&q=$cats`)

    request.then(getJson).then(handleResponse)
}

function getJson(response) {
    return response.json()
}

function handleResponse(jsonBody) {
    console.log(jsonBody)

    let gifItems = jsonBody.data

    gifItems.forEach((gifItem) => {
        console.log(gifItem.images.fixed_width.url)

        let imgElement = document.createElement('img')
        imgElement.src = imageUrl;
    })
}

searchButton.addEventListener('click', handleClick)