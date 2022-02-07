/**
 * @jest-environment jsdom
 */

import { mount } from '@vue/test-utils';
import NavBar from './NavBar.vue';


// The component to test
const TestComponent = {
  template: '<p>{{ msg }}</p>',
  props: ['msg']
}

test('displays message', () => {
  const wrapper = mount(TestComponent, {
    props: {
      msg: 'Hello world'
    }
  })
  expect(wrapper.text()).toContain('Hello world')
})

test('Loads Navbar', () => {
  const wrapper = mount(NavBar)
  expect(wrapper.text()).toContain('Home')
});