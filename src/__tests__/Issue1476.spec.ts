import { describe, it, expect } from "vitest";
import { reactive } from "vue";
import { mount, type ComponentMountingOptions } from "@vue/test-utils";
import Issue1476 from "../Issue1476.vue";

async function testCase(
  props: ComponentMountingOptions<typeof Issue1476>["props"],
) {
  // https://github.com/vuejs/test-utils/issues/1476
  const wrapper = mount(Issue1476, { props });

  expect(wrapper.find(".subField").exists()).toBe(false);

  await wrapper.findAll(".field")[0]?.trigger("click");

  expect(wrapper.find(".selectedField").exists()).toBe(true);
  expect(wrapper.find(".selectedField").text()).toBe("Animals");

  await wrapper.findAll(".field")[1]?.trigger("click");

  expect(wrapper.find(".selectedField").exists()).toBe(true);
  expect(wrapper.find(".selectedField").text()).toBe("Cities");
}

describe("Issue1476", () => {
  it("raw (should be broken, is not)", async () => {
    await testCase({
      availableFields: [{ name: "Animals" }, { name: "Cities" }],
    });
  });

  it("reactive (functional)", async () => {
    await testCase({
      availableFields: reactive([{ name: "Animals" }, { name: "Cities" }]),
    });
  });
});
