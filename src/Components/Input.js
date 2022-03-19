import { 
    validateFirstName,
    validateEmail,
    validatePhone,
    validatebarber,
    validateService,
    validateDate,
    validateTime,
 } from "../Actions";
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';

function Input({type, placeholder, disable = false, id=''}) {
    const dispatch = useDispatch();

    const firstNameState = useSelector(state => state.form.firstName);
    const emailState = useSelector(state => state.form.email);
    const phoneState = useSelector(state => state.form.phone);
    const barberState = useSelector(state => state.form.barber);
    const serviceState = useSelector(state => state.form.service);
    const dateState = useSelector(state => state.form.date);
    const timeState = useSelector(state => state.form.time);
    // Handlers
    const dispatchInformation = (e) =>{
         if(placeholder === "First Name"){
            dispatch(validateFirstName(e.target.value))
         }else if(placeholder === "Email"){
            dispatch(validateEmail(e.target.value))
         }else if(placeholder === "Phone"){
            dispatch(validatePhone(e.target.value))
         }else if(placeholder === "Barber"){
            dispatch(validatebarber(e.target.value))
         }else if(placeholder === "Service"){
            dispatch(validateService(e.target.value))
         }else if(placeholder === "Select Date"){
            dispatch(validateDate(e.target.value))
         }else if(placeholder === "Select Time"){
            dispatch(validateTime(e.target.value))
         }
    }
    const errorMessage = () => {
        if(placeholder === "First Name"){
            return firstNameState.message;
         }else if(placeholder === "Email"){
            return emailState.message;
         }else if(placeholder === "Phone"){
            return phoneState.message;
         }else if(placeholder === "Barber"){
            return barberState.message;
         }else if(placeholder === "Service"){
            return serviceState.message;
         }else if(placeholder === "Select Date"){
            return dateState.message;
         }else if(placeholder === "Select Time"){
            return timeState.message;
         }
    }


    return (
        type !== 'select' && disable === false?
        <>
        <input type={type} placeholder={placeholder} onChange={dispatchInformation}/>
        <span>{errorMessage(placeholder)}</span>
        </>
        :
        disable === true?
        <input type={type} placeholder={placeholder} id={id} disabled/>
        :
        <>
        <select>
            <option disabled selected>{placeholder}</option>
        </select>
        <span>{errorMessage(placeholder)}</span>
        </>
    );
}

export default Input;