import TvBadges from "./TvBadges.vue";
import { shallowMount } from "@vue/test-utils";
import showDetails from "../../utils/showDetails.mock.js";

describe("TvBadges.vue", () => {
  it("render the component", () => {
    const wrapper = shallowMount(TvBadges, {
      props: {
        showDetails: showDetails.singleShowDetails,
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
