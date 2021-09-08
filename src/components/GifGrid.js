import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'
import PropTypes from 'prop-types'



export const GifGrid = ({category}) => {

    const {data: images, loading} = useFetchGifs( category )

    const imagesYes = (images) => {
        return(
            <div className="card-grid">
                    {images.map((img) => {
                        return(
                            <GifGridItem
                                key={img.id}
                                {...img}
                            />
                        )
                    })}
            </div>
        )
    }

    const imagesNo = () => <p>Sorry, no gifs found.</p>;
        
    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>

            {loading && <p className="animate__animated animate__flash">Loading...</p>}
            
            {images.length === 0 ? imagesNo() : imagesYes(images) }
            
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
