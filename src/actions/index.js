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

const resetSearch = () => ({ type: 'RESET' });

export { regActiveLink, forSearch, resetSearch };



