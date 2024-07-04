import React from 'react';
import './Chanels.css'
import { Link } from 'react-router-dom';

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
                                        <div className='chanel-top'>
                                            <abbr title={row.title}>
                                                <h4 data-title={row.title}>
                                                    {row.title}
                                                </h4>
                                            </abbr>
                                            <abbr title={row.description}>
                                                <p>{row.description}</p>
                                            </abbr>
                                        </div>
                                        <div className="chanel-bottom">
                                            <div className="chanel-users">
                                                <div className='icon icon-user'></div>
                                                <sup>{row.users}</sup>
                                            </div>
                                            <Link to={`chanel/${row.id}`}>Join</Link>
                                        </div>
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