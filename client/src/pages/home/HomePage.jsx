import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { getChanels } from '../../scripts/api';
import Chanels from './Chanels';

function HomePage(props) {

    const [chanels, setChanels] = useState ([])

    useEffect(() => {
        async function fetchData() {
            const data = await getChanels();
            setChanels(data)
          }
          fetchData();
      }, []); 

    return (
        <main>
            <Chanels chanels={chanels} />            
        </main>
    );
}

export default HomePage;