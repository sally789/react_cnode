export default function Detail(_detail, action) {
  switch (action.type) {
    case 'detail_loading':
      return {
        loading: true,
        data: { author: {} },
        isError: false,
        err_msg: '',
      }
    case 'detail_loadover':
      return {
        loading: false,
        data: action.data,
        isError: false,
        err_msg: '',
      }
    case 'detail_error':
      return {
        loading: false,
        data: { author: {} },
        isError: true,
        err_msg: action.err_msg,
      }
    default:
      return {
        loading: true,
        data: { author: {} },
        isError: false,
        err_msg: '',
      }
  }
}
