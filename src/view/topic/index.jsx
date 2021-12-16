import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import { Alert } from 'antd'
import { useTopicDetail } from '../../store/action/index'
import Details from './detail'
import CommentList from '../../component/comment'

export default function TopicDetail() {
  const {
    loading, data, isError, err_msg,
  } = useSelector(
    (state) => state.detail,
  )
  const { id } = useParams()
  const history = useHistory()
  const getData = useTopicDetail()
  useEffect(() => {
    getData(id)
  }, [id])
  return (
    <div>
      {isError ? (
        <Alert
          closable
          type="error"
          message="请求出错"
          description={(
            <div>
              <p>{err_msg}</p>
              <p>点击关闭按钮返回上一级</p>
            </div>
          )}
          onClose={() => {
            history.goBack()
          }}
        />
      ) : (
        <>
          <Details loading={loading} data={data} />
          <CommentList data={data.replies} loading={loading} />
        </>
      )}
    </div>
  )
}
