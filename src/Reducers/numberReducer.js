
//reducer method takes two arguments (state,action)which redux provides automatically
//reducer returns the new state to the store.

//there was an error if I try to do export deafult in line 6.
//Fat arrow functions are first put in a const and then exported.
const numberReducer = (state = {
    result:1,
    lastValues:[]
},action) =>{

    switch(action.type){
        case "ADD":
            //    This is not an immutable way of doing 
            //  state.result += action.payload;

            //This is an immutable way of dealing with reference types.Also we can use Object.assign like state = Object.assign({}, state)
            state = {
                ...state,
                result: state.result+action.payload,
                lastValues:[...state.lastValues,action.payload]
            };
            break;
        case "SUBTRACT":
            break;
    }
    return state;

};

export default numberReducer;