const initialState = false;

const changeSearch = (state = initialState, action) =>{
    switch(action.type){

        case 'RESET': return initialState;
        
        case "ACTIVE" : return action.payload;
        
        default : return state;
    }
}



export default changeSearch;
