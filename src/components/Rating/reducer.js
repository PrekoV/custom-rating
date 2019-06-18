export const initialState = {
    value: 0
};

export const reducer = (state, action) => {
    switch (action.type) {
        case "HOVERED": {
            let num = { ...state };
            num.value = action.payload + 1;
            return num;
        }
        case "HALF_HOVERED": {
            let num = { ...state };
            num.value = action.payload + 0.5;
            return num;
        }
        case "UNHOVERED": {
            let num = { ...state };
            num.value = 0;
            return num;
        }
        default:
            return { ...state };
    }
};
