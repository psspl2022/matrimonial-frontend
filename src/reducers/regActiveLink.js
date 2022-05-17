const initialState = 'profile';

const changeActiveLink = (state = initialState, action) =>{
    switch(action.type){
        case "ACTIVE" : return action.payload;
        default : return state;
    }
}

export default changeActiveLink;