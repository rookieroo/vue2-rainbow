import Bubble from "./bubble.vue";

export default {
  title: "COMM/Bubble",
  component: Bubble,
  argTypes: {}
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Bubble },
  template: '<bubble v-bind="$props" />'
});

// Template.bind({}) is a standard JavaScript technique for making a copy of a function.
// We copy the Template so each exported story can set its own properties on it.
//👇 Each story then reuses that template
export const OnGoing = Template.bind({});
OnGoing.args = { k: "1" };

export const Failed = Template.bind({});
Failed.args = { k: "2" };

export const OnActivate = Template.bind({});
OnActivate.args = { k: "3" };
