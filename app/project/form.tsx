'use client'
import React from 'react'
import { Col, DatePicker, Form, Input, Radio, Row, Select } from 'antd';

const ProjectFormPage = () => {
  const [form] = Form.useForm();
  return (
    <main>
      <Form form={form} name='project-form' layout='vertical'>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="name" label="Name project">
              <Input />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="timeStart" label="Time start">
              <DatePicker className='w-full' />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="timeEnd" label="Time end">
              <DatePicker className='w-full' />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name={'postTutorial'} label='Post tutorial'>
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name={'videoTutorial'} label='Video tutorial'>
              <Input />
            </Form.Item>

          </Col>
          <Col span={6}>
            <Form.Item name='type' label="Type">
              <Select placeholder='Select type' options={[
                { label: 'Public', value: 'public' },
                { label: 'Private', value: 'private' }
              ]} />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item name='backer' label="Backer">
              <Select placeholder='Select backer' options={[
                { label: 'Public', value: 'public' },
                { label: 'Private', value: 'private' }
              ]} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name='checkDaily' label='Daily'>
              <Radio.Group options={[
                { label: 'Yes', value: true },
                { label: 'No', value: false }
              ]} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="description" label="Description">
              <Input.TextArea rows={4} />
            </Form.Item>
          </Col>

        </Row>
      </Form>
    </main>
  )
}

export default ProjectFormPage