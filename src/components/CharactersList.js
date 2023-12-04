import { format } from 'date-fns';
import { Link } from "react-router-dom";

export function CharactersList({ characters = [] }) {
    return (
        <ul id="characters">
            {characters.map((character) => (
                <li key={character.id}>
                    <Link to={`/characters/${character.id}`}>
                        {character.name} -
                        {format(new Date(character.modified), 'MMMM dd,yyyy')}
                    </Link>
                </li>
            ))} 
        </ul>
    );
}