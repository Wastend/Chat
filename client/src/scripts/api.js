export const getChanels = async (count, offset) => {
    const params = new URLSearchParams();
    params.append('count', count);
    params.append('offset', offset);
    const response = await fetch(`/all-chanels?${params}`);
    const data = await response.json();
    console.log(data);

    return data;
}

export const getCountChanels = async () => {
    let data = 0
    await fetch("/chanels-count",).then(res => res.json()).then(newData => {
        data = newData
    });

    return data
}