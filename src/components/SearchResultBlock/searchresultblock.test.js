import SearchResultBlock from './SearchResultBlock.vue';
import { shallowMount } from '@vue/test-utils';
import showDetails from '../../utils/showDetails.mock.js';

describe('SearchResultBlock.vue', () => {
  it('render the component', () => {
    const wrapper = shallowMount(SearchResultBlock,{
        props: {
            showDetails: showDetails.singleShowDetails
        }
    });
    expect(wrapper.element).toMatchSnapshot()
  })
})