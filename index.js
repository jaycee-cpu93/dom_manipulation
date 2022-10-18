document.body.style.backgroundColor = "grey";

let paragraph = document.createElement("h1");
paragraph.innerHTML = "My Favorite book"
document.getElementById("container").appendChild(paragraph)


let list = document.createElement("li")
list.innerHTML = "how to win friends and influence people";
document.getElementById("list").appendChild(list)

let image = document.createElement("img");
image.src = "images/how_to_win_friends.jpg"
image.width = "300"
image.height = "400"

document.getElementById("list").appendChild(image)

let listTwo = document.createElement("li")
listTwo.innerHTML = "increase your financial IQ";
document.getElementById("list").appendChild(listTwo)

let imageTwo = document.createElement("img");
imageTwo.src = "images/increase_ur_financial_iq.jpg"
imageTwo.width = "300"
imageTwo.height = "400"

document.getElementById("list").appendChild(imageTwo)

