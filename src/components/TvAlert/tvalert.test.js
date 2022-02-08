import TvAlert from "./TvAlert.vue";
import { shallowMount } from "@vue/test-utils";
/* import { nextTick } from 'vue' */

describe("TvAlert.vue", () => {
  it("render the component", async () => {
    const wrapper = shallowMount(TvAlert, {
      props: {
        msg: "Test error message",
      },
    });
    await wrapper.setData({ currentMsg: "Test error message" });
    expect(wrapper.get(".error").exists()).toBe(true);
    expect(wrapper.text()).toMatch("Test error message");
  });
  it("render with close btn", async () => {
    const wrapper = shallowMount(TvAlert, {
      props: {
        showClose: true,
        msg: "Test",
      },
    });
    await wrapper.setData({ currentMsg: "Test error message" });
    const closeBtn = wrapper.get(".close");
    expect(closeBtn.exists()).toBe(true);
    await wrapper.find(".close").trigger("click");
    /* await nextTick(); */
    expect(wrapper.html()).toBe("<!--v-if-->");
  });
});
