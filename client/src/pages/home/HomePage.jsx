import React, { useState, useEffect } from 'react';
import { getCountChanels, getChanels } from '../../scripts/api';
import Chanels from './Chanels';

function HomePage(props) {

    const [chanels, setChanels] = useState([])
    const [paginationCount, setPaginationCount] = useState(0)
    const [currentPagination, setCurrentPagination] = useState(0)
    const countProducts = 10

    useEffect(() => {
        async function fetchData() {
            const count = await getCountChanels()
            if (count) {
                setCurrentPagination(1)
                if (count / countProducts > 1)
                    setChanels(await getChanels(countProducts, 0))
            }
            setPaginationCount(count / countProducts)
        }
        fetchData();
    }, []);

    return (
        <main>
            <Chanels chanels={chanels} paginationCount={paginationCount} countProducts={countProducts} currentPagination={currentPagination} />
        </main>
    );
}

export default HomePage;