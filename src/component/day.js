import dayjs from 'dayjs'

const relativeTime = require('dayjs/plugin/relativeTime')

dayjs.extend(relativeTime)
require('dayjs/locale/zh-cn')

dayjs.locale('zh-cn')
export default function Dayjs(props) {
  const { date } = props
  return dayjs(date).fromNow()
}
