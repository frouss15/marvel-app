function List(characters) {
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

export default List;  