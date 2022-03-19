
const initState = {
    firstName: {value: '', message: ''},
    email: {value: '', message: ''},
    phone: {value: '', message: ''},
    barber: {value: '', message: ''},
    service: {value: '', message: ''},
    date: {value: '', message: ''},
    time: {value: '', message: ''},
}

function formReducer(state = initState, action) {
    let newState;
    switch(action.type){
        case "validate first name":
            newState = { ...state, firstName: {value: action.payload.name, message: ''} }
            if(newState.firstName.value === ''){
                newState = { ...state, firstName: {value: action.payload.name, message: 'First Name is required'} }
            }
            return newState
        case "validate email":
            newState = { ...state, email: {value: action.payload.email, message: ''} }
            if(newState.email.value === ''){
                newState = { ...state, email: {value: action.payload.name, message: 'Email is required'} }
            }
            return newState
        case "validate phone":
            newState = { ...state, phone: {value: action.payload.phone, message: ''} }
            if(newState.phone.value === ''){
                newState = { ...state, phone: {value: action.payload.phone, message: 'Phone is required'} }
            }
            return newState
        case "validate barber":
        case "validate service":
        case "validate date":
        case "validate time":

        default:
            return {...state}

    }
}

export default formReducer;

