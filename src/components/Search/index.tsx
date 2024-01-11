import cleanObject from '@/utils/cleanObject'
import { useDebounceFn } from 'ahooks'
import {
  Button,
  Checkbox,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Space,
  Switch,
} from 'antd'
import React, { FC, useEffect, useState } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import {
  SEARCH_KEY_TITLE,
  SEARCH_KEY_SELECT,
  SEARCH_KEY_NUMBER,
  SEARCH_KEY_SWITCH,
  SEARCH_KEY_SLIDER,
  SEARCH_KEY_RADIO,
  SEARCH_KEY_CHECKBOX,
  SEARCH_KEY_MULTIPLE,
} from '@/constants/search'
import { DownOutlined, UpOutlined } from '@ant-design/icons'
import { getSearchParams } from '@/utils/getSearchParams'

interface SearchProps {
  onSearch?: () => void
}
const marks = {
  0: 'A',
  20: 'B',
  40: 'C',
  60: 'D',
  80: 'E',
  100: 'F',
}
const Search: FC<SearchProps> = (props: SearchProps) => {
  const { onSearch } = props
  const nav = useNavigate()
  const { pathname } = useLocation()
  const [searchParams] = useSearchParams()
  const [form] = Form.useForm()
  const [expand, setExpand] = useState(false)

  const { run: onValuesChange } = useDebounceFn(
    (_, values: any) => {
      nav({
        pathname,
        search: Object.entries(cleanObject(values))
          .reduce((prev, [key, value]) => prev + `${key}=${value}&`, '?')
          .slice(0, -1),
      })
    },
    { wait: 300 }
  )

  useEffect(() => {
    form.setFieldsValue(getSearchParams(searchParams))
  }, [searchParams])

  const onReset = () => {
    form.resetFields()
    nav(pathname)
  }

  return (
    <Form onValuesChange={onValuesChange} form={form}>
      <Form.Item label={'标题'} name={SEARCH_KEY_TITLE}>
        <Input placeholder="请输入标题" />
      </Form.Item>
      {expand && (
        <>
          <Form.Item
            name={SEARCH_KEY_SELECT}
            label="Select"
            hasFeedback
            rules={[{ required: true, message: 'Please select your country!' }]}
          >
            <Select
              placeholder="请选择一个国家"
              options={[
                { value: 'china', label: 'China' },
                { value: 'usa', label: 'U.S.A' },
              ]}
            ></Select>
          </Form.Item>

          <Form.Item
            name={SEARCH_KEY_MULTIPLE}
            label="多选"
            rules={[
              { required: true, message: 'Please select your favourite colors!', type: 'array' },
            ]}
          >
            <Select
              mode="multiple"
              placeholder="Please select favourite colors"
              options={[
                { value: 'red', label: 'Red' },
                { value: 'green', label: 'Green' },
                { value: 'blue', label: 'Blue' },
              ]}
            ></Select>
          </Form.Item>

          <Form.Item label="InputNumber">
            <Form.Item name={SEARCH_KEY_NUMBER} noStyle>
              <InputNumber min={1} max={10} />
            </Form.Item>
            <span className="ant-form-text" style={{ marginLeft: 8 }}>
              machines
            </span>
          </Form.Item>
          <Form.Item name={SEARCH_KEY_SWITCH} label="Switch" valuePropName="checked">
            <Switch />
          </Form.Item>

          <Form.Item name={SEARCH_KEY_SLIDER} label="Slider">
            <Slider marks={marks} />
          </Form.Item>

          <Form.Item name={SEARCH_KEY_RADIO} label="Radio">
            <Radio.Group
              options={[
                { label: 'item 1', value: 'a' },
                { label: 'item 2', value: 'b' },
                { label: 'item 3', value: 'c' },
              ]}
            ></Radio.Group>
          </Form.Item>

          <Form.Item name={SEARCH_KEY_CHECKBOX} label="Checkbox">
            <Checkbox.Group
              options={[
                { label: 'A', value: 'a' },
                { label: 'B', value: 'b' },
                { label: 'C', value: 'c' },
                { label: 'D', value: 'd' },
                { label: 'E', value: 'e' },
                { label: 'F', value: 'f' },
              ]}
            ></Checkbox.Group>
          </Form.Item>
        </>
      )}
      <Space>
        <Button onClick={onSearch}>搜索</Button>
        <Button onClick={onReset}>重置</Button>
        <div onClick={() => setExpand(!expand)} style={{ cursor: 'pointer' }}>
          {expand ? <DownOutlined /> : <UpOutlined />}
        </div>
      </Space>
    </Form>
  )
}
Search.defaultProps = {
  onSearch: () => {
    //
  },
}
export default Search
