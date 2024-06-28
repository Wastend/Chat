import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { getChanels } from '../../scripts/api';

function HomePage(props) {

    const [data, setData] = useState ([{}])

    useEffect(() => {
        async function fetchData() {
            const data = await getChanels();
            setData(data)
          }
          fetchData();
      }, []); 

    return (
        <div>
            <Link to='/test'>test</Link>
        </div>
    );
}

export default HomePage;