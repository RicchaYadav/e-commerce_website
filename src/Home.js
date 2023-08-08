import React from 'react'
import  "./Home.css"
import myImage from './Images/shop.jpg';
import myImage1 from './Images/1.jpg';
import myImage2 from './Images/2.jpg';
import myImage4 from './Images/4.jpg';
import myImage7 from './Images/7.jpg';
import myImage5 from './Images/5.jpg';
import myImage6 from './Images/6.jpg';

import Product from './Product'

function Home() {
  return (
    <div className='home'>
        <div className="home_container">
        <img src={myImage} alt="My Image" />
        </div>


        <div className="home_row">
            <Product 
            id = {12113329}
            title="The Alchemist"
            price={208}
            image={myImage1}
            rating={5}/>
            <Product 
            id = {12113329}
            title="Fire-Boltt Hurricane 1.3 Curved Glass Display with 360 Health Training, 100+ Sports Modes Smartwatch"
            price={1449}
            image={myImage2}
            rating={4}/>
            
           
            
        </div>

        <div className="home_row">
        <Product
        id = {12113324}
         title="DELL Core i5 11th Gen-(16 GB/512 GB SSD/4 GB Graphics)"
            price={67990}
            image={myImage4}
            rating={4}/>

            <Product
            id = {12113323}
             title="Canon EOS 3000D DSLR Camera, 18-55 mm Lens "
            price={31490}
            image={myImage6}
            rating={5}/>
            

            <Product 
            id = {12113325}
            title="Blutooth Speaker"
            price={999}
            image={myImage5}
            rating={4}/>
        </div>

        <div className="home_row">
        <Product 
            id = {12113326}
            title="Samsung 138 cm (55 inches) 4K Ultra HD Smart QLED TV QA55Q70TAKXXL (Titan Gray)"
            price={31229}
            image={myImage7}
            rating={4}/>
        </div>
    </div>

    
  )
}

export default Home;