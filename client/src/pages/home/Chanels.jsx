import React from 'react';
import './Chanels.css'

function Chanels(props) {
    const chanels = props.chanels
    return (
        <section className='chanels'>
            <div className="container">
                {
                    chanels.length !== 0 ? (
                        <div className='chanels-block'>
                            <h3>Chanels</h3>
                            <ul className="chanel-list">
                                {chanels.map(row => (
                                    <li key={row.id}>
                                        <abbr title={row.title}>
                                            <h4 data-title={row.title}>
                                                {row.title}
                                            </h4>
                                        </abbr>
                                        <abbr title={row.description}>
                                            <p>{row.description}</p>
                                        </abbr>
                                        <a href={`chanel/${row.id}`}>Join</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )
                        :
                        <p>Posts not founded</p>
                }

            </div>

        </section>
    );
}

export default Chanels;