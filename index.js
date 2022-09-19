
let content = document.querySelector('.js-generated.content')

let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo') // header = <h1> class="dog-name">Rizzo</h1>
content.append(header)

let dogContent = document.createElement('div')
dogContent.setAttribute('class', 'dog-content') // div = <div class="dog-content"></div>
content.append(dogContent)

let dogImage = document.createElement('img')
dogImage.setAttribute('class', 'dog-image')
dogImage.setAttribute('src', './assets/rizzo.jpg') 
content.append(dogImage)
// image = <img class="dog-image" src="./assets/rizzo.jpg">

let dogDetails = document.createElement('div')
dogDetails.setAttribute('class', 'dog-details')
content.append(dogDetails)
// <div class="dog-details"></div>

let description = document.createElement("h3")
description.textContent = "Description:"
dogDetails.append(description)

let paragraph = document.createElement("p")
paragraph.textContent = "This gentle dog..."
dogDetails.append(paragraph)

let feedingTimes = document.createElement("h3")
feedingTimes.textContent = "Feeding Times:"
dogDetails.append(feedingTimes)

let feedingTimesList = document.createElement("ul")
let morning = document.createElement("li")
morning.textContent = "9 am"
feedingTimesList.append(morning)
let afternoon = document.createElement("li")
afternoon.textContent = "12 am"
feedingTimesList.append(afternoon)
let night = document.createElement("li")
night.textContent = "5 pm"
feedingTimesList.append(night)

dogDetails.append(feedingTimesList)