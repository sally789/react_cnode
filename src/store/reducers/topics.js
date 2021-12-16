export default function Topics(topics, action) {
  switch (action.type) {
    case 'topics_loading':
      return {
        loading: true,
        data: [],
      }
    case 'topics_loadover':
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
