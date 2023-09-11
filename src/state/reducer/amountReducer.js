export const amountreducer=(state=0,action)=>{
    if(action.type==="deposit")
    {
        console.log("depo")
        return state+action.payload
    }
    else if(action.type==="withdraw")
    {
        let money=state-action.payload;
        if(money>0)
        {
            return state-action.payload
        }
        else{
            return 0;
        }
    }
    else    
        return state;
   
}