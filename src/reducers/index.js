export default (state,action) => {
    switch (action.type){
        case "MEMBER_NAME":
            return {
                ...state,
                name: action.name
            };
        case "MEMBER_PIC":
            return {
                ...state,
                background: action.background
            }
        default:
            return state;
    }
};