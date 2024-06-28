export const getChanels = async () => {
    let data = []
    await fetch("/all-chanels").then(res => res.json()).then(newData => {
        data = newData
    });

    return data
}