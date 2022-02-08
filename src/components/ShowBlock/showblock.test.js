import ShowBlock from "./ShowBlock.vue";
import { shallowMount } from "@vue/test-utils";
import showDetails from "../../utils/showDetails.mock.js";

describe("ShowBlock.vue", () => {
  it("render the component", () => {
    const wrapper = shallowMount(ShowBlock, {
      props: {
        showDetails: showDetails.singleShowDetails,
      },
    });
    expect(wrapper.exists()).toBe(true);
  });
  it("render the component with image", () => {
    const wrapper = shallowMount(ShowBlock, {
      props: {
        showDetails: showDetails.singleShowDetails,
      },
    });
    const ImgElem = wrapper.get("img");
    expect(ImgElem.exists()).toBe(true);
    expect(ImgElem.attributes().src).toBe(
      showDetails.singleShowDetails.image.medium
    );
  });
});
