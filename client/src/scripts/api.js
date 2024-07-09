export const getChanels = async (count, offset) => {
    const params = new URLSearchParams();
    params.append('count', count);
    params.append('offset', offset);
    const response = await fetch(`/all-chanels?${params}`);
    const data = await response.json();

    return data;
}

export const getCountChanels = async () => {
    let data = 0
    await fetch("/chanels-count",).then(res => res.json()).then(newData => {
        data = newData
    });

    return data
}

export const authHandle = async (name, password) => {
    const reqData = {name, password}
    
    const response = await fetch(`/auth`,{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(reqData)
      });

    return response.status === 200 ? true : false
}

export const registerHandle = async (name, password) => {
    const reqData = {name, password}
    
    const response = await fetch(`/register`,{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(reqData)
      });

    return response.status === 200 ? true : false
}