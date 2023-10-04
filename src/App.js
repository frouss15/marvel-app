import React from "react";
import  Title  from './components/Title';
import  Count  from './components/Count';
import  List  from './components/List';
import  Image  from './components/Image';

const characters =require('./data/characters.json')


function App() {
return (
  <>
    {/* 
        La propriété id et data-demo sont passées au composant Title grâce au spread operator.
        La propriété color est définie dans le composant Title
     */}
    <Title></Title>
    <Count characters={characters}></Count>
    <List characters={characters}></List>
    <Image character={characters[0]}></Image>
  </>
);
}



export default App;