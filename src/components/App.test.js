import React from 'react'
import { shallow } from 'enzyme'
import App from './App'


describe('App', () => {
  const app = shallow(<App />)

  it('renders correctly', () => {
    expect(app).toMatchSnapshot()
  })

  it('initialises the `state` with an empty list of gifts', () => {
    expect(app.state().gifts).toEqual([])
  })

  describe('when clicking the `add-gift` button', () => {
    // before each of the below `it` block tests run..
    beforeEach(() => {
      // find dom elements with the classname of 'btn-add' and simulate a user click
      app.find('.btn-add').simulate('click')
    })
    // after each of the below `it` block tests....
    afterEach(() => {
      // set state.gifts back to an empty array
      app.setState({ gifts: [] })
    })

    it('adds a new gift to `state`', () => {
      expect(app.state().gifts).toEqual([{ id: 1}])
    })

    it('adds a new gift to the rendered list', () => {
      expect(app.find('.gift-list').children().length).toEqual(1)

    })


  })


})
