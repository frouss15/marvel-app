function List({characters}) {
  if(characters.length === 0){
    return ("Il n'y pas de personnages dans la liste.")
  }
  else{
      const characterList = characters.map((character,index)=>(
      <li key={index}>{character.name}</li>
      ))
      return (
        <div>
          <h2>Liste des personnages :</h2>
          <ul>
            <li>{characterList}</li>
          </ul>
        </div>
      );
    }
  }

export default List;  