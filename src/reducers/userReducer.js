const userReducer = (state = {
    name: "Traxxex - Drow Ranger",
    age: 25
}, action) => {
    switch (action.type) {
        case "SETNAME":
            state = {
                ...state,
                name: action.payload
            };
            break;
        case "SETAGE":
            state = {
                ...state,
                age: action.payload
            };
            break;
    }
    return state;
};

export default userReducer;