import React from 'react';
import gallery1 from "../../../src/image/gallery1.png";
import './Gallery.style.css'



const Gallery = () => {
    return (
        <div className='gallery-area'>
            <div className='row container-full'>

                <div className='col-md-6'>
                    <div className='gallery-image'>
                        <img src={gallery1} />
                    </div>
                </div>

                <div className='col-md-6'>
                    <div className='gallery-text'>
                        <h3>Find your nearest store</h3>
                        <p className="text-store">Visit one of our 150 stores worldwide for customizations, fittings styling advice.</p>
                        <button className="btn">Stores</button>
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default Gallery;