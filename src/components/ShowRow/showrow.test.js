import ShowRow from "./ShowRow.vue";
import { shallowMount } from "@vue/test-utils";
import showDetails from "../../utils/showDetails.mock.js";

describe("ShowRow.vue", () => {
  it("render the component", () => {
    const wrapper = shallowMount(ShowRow, {
      props: {
        showListData: showDetails.showRowData,
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
