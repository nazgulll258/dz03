import React from 'react';

import MainPage from '../../Pages/MainPage';
import AboutPage from '../../Pages/AboutPages';



export default function Description()

 {
  const about = {titl: "Title", description: "description"}
  const main = {title: "Title 2", description: "description 2"} 
  return (
    <div>
      <AboutPage  info= {about} />
      <MainPage info={main} />
    </div>
  );
}
