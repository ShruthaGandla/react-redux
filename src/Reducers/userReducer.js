
//reducer method takes two arguments (state,action)which redux provides automatically
//reducer returns the new state to the store.
//second reducer
const userReducer = (state = {
    name: "Hello",
    age: 27
}, action) => {
    switch (action.type) {
        case "SET_NAME":
            state = {
                ...state,
                name: action.payload
            };
            break;
        case "SET_AGE":
            state = {
                ...state,
                age: action.payload
            };
            break;
    }
    return state;
};

export default userReducer;