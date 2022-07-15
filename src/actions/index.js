const regActiveLink = (activestatus) => {
    return {
        type : "ACTIVE",
        payload : activestatus
    }
}

const forSearch = (searchdata) => {
    return {
        type : "ACTIVE",
        payload : searchdata
    }
}

export { regActiveLink, forSearch };



