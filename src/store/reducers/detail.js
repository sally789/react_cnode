export default function Detail(detail={
    loading:true,
    data:{},
    isError:false,
    err_msg:''
},action) {
    switch(action.type){
        case 'topics_loading':
            return {
                loading:true,
                data:{},
                isError:false,
                err_msg:''
            }
        case 'topics_loadover':
            return {
                loading:false,
                data:action.data,
                isError:false,
                err_msg:''
            }
        case 'topics_error':
            return {
                loading:false,
                data:{},
                isError:true,
                err_msg:action.err_msg
            }
        default:
            return {
                loading:true,
                data:{},
                isError:false,
                err_msg:''
            }
    }
}