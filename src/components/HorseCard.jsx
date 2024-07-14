import React from 'react'
const HorseCard = ({ horse, onSelect }) => {
    return (
        <div className="card horse-card p-2" style={{ width: '20rem', borderRadius: '16px' }}>
            <div className="card-body">
                <img src={horse.image} alt={horse.name} style={{ width: '270px', height: '320px' }} />
                <h3 className='text-center pt-2 text-white'>{horse.name}</h3>
            </div>
            <div className="card-footer bg-transparent">
                <button type='button' className='book-btn d-block mx-auto fs-6' onClick={() => onSelect(horse)}>Book Now</button>
            </div>
        </div>
    )
}

export default HorseCard