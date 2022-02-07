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

/* This test works */
test('displays message', () => {
  const wrapper = mount(TestComponent, {
    props: {
      msg: 'Hello world'
    }
  })
  expect(wrapper.text()).toContain('Hello world')
})

// TODO : The Webpack setup for Vue 3 + Jest is not working! Facing Error on import { mount } from '@vue/test-utils'; : SyntaxError: Cannot use import statement outside a module
// I have tried multiple approaches to fix it via babel, somehow it's not suporting ES6 modules for unit test.

test('Loads Navbar', () => {
  const wrapper = mount(NavBar)
  expect(wrapper.text()).toContain('Home')
});