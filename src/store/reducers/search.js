const search = {
    loading: true,
    data: [],
}
export default function Search(search, action) {
    switch (action.type) {
        case 'search_loading':
            return {
                loading: true,
                data: [],
            }
        case 'search_loadover':
            return {
                loading: false,
                data: action.data,
            }
        default:
            return {
                loading: true,
                data: [],
            }
    }
}
