import { shallow } from 'enzyme'
import React from 'react'
import toJSON from 'enzyme-to-json'
import Header from '../../components/Header'

test('should render header correctly', () => {
  const wrapper = shallow(<Header />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})
