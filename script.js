// fetch the data from the server
fetch("./data/characters.json")
    .then((response) => {
    console.log("Response", response);
    return response.json;

}).then((characters) => {
    console.log(characters);
    // add a new row for each user
        let ul = document.createElement("ul");
        document.querySelector("tbody").after(tr);
        
    characters.array.forEach((character) => {
        console.log(character);
        let li = document.createElement("li");
        li.innerText = character.name;
        ul.append(li);
    });
       let h2 = document.createElement("h2");
       h2.innerText = `Number of characters: ${characters.length}`;
       

});
