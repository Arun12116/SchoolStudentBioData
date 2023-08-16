export const getDataFromLs = () => {
    const data = localStorage.getItem("person_data")
    if (data) {
        return JSON.parse(data)
    } else {
        return []
    }
}