/* eslint-disable react/function-component-definition */
import React from 'react'
import { Layout } from 'antd'

const { Footer } = Layout
export default function FooterComponent() {
  return (
    <Layout>
      <Footer className="footer">
        <p className=".wrap">
          CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js
          的技术研究。
        </p>
      </Footer>
    </Layout>
  )
}
