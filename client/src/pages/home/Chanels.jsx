import React from 'react';
import './Chanels.css'

function Chanels(props) {
    const chanels = props.chanels
    return (
        <section className='chanels'>
            <div className="container">
                {
                    chanels.length !== 0 ?
                        <ul className="chanel-list">
                            {chanels.map(row => (
                                <li key={row.id}>
                                    <h3>
                                        {row.title}
                                    </h3>
                                    <p>{row.description}</p>
                                </li>
                            ))}
                        </ul>
                        :
                        <p>Posts not founded</p>
                }

            </div>

        </section>
    );
}

export default Chanels;