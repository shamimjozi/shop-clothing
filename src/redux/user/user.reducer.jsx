// it's a function that gets two property :
//1. state object ->represent last or initial state
//2. action -> the object that has type 

const INITIAL_STATE ={
    currentUser : null 
}
//=> we have default value 

const userReducer = (state = INITIAL_STATE , action) =>{
     switch (action.type) {
         case 'SET_CURRENT_USER':
           return{
               ...state,
               currentUser:action.payload
           }  
        
         default:
             return state;
     }
}

export default userReducer;