import React from 'react';

export default function Profiles({ Leaderboard }) {
    return (
        <div id="profile">
            Profiles
            {Item(Leaderboard)}
        </div>
    )

    function Item(data) {
        return (

            <>
            {
                data.map((value, index) => {
                    return (
                    <div className="flex" key={index}>
                        <div className="item">
                            <img src={value.img} alt="" />

                            <div className="info">
                                <h3 className='name'>{value.name}</h3>
                                <span>{value.location}</span>
                            </div>
                        </div>
                        <div className="item">
                            <span>{value.score}</span>
                        </div>
                    </div>
                    )
                })
            }
            </>

            
        )
    }
}