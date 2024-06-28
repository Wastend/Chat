export const getChanels = async () => {
    let data = []
    await fetch("/api").then(res => res.json()).then(newData => {
        data = newData
    });

    return data
}