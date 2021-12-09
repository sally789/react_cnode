export default function User(user={
    loading:true,
    data:{}
},action) {
    switch(action.type){
        case 'user_loading':
            return {
                loading:true,
                data:{}
            }
        case 'user_loadover':
            return {
                loading:false,
                data:action.data
            }
        default:
            return {
                loading:true,
                data:{}
            }
    }
}