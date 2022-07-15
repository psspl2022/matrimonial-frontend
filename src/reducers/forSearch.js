const initialState = false;

const changeSearch = (state = initialState, action) =>{
    switch(action.type){
        case "ACTIVE" : return action.payload;
        default : return state;
    }
}

export default changeSearch;
