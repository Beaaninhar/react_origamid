import React from 'react'
import Slide from './Slide';

function App() {
  const slides = [
    {
      id: 'slide1',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBjHje0flB7dCD7QAlUWUcTuNC196mhBpjcw&usqp=CAU',
    },
    {
      id: 'slide2',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBjHje0flB7dCD7QAlUWUcTuNC196mhBpjcw&usqp=CAU',
    },
    {
      id: 'slide3',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBjHje0flB7dCD7QAlUWUcTuNC196mhBpjcw&usqp=CAU',
    },
  ];

  return <div><Slide slides={slides}/></div>;
}

export default App;
