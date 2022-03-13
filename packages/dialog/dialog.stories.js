import MyDialog from "./dialog.vue";
import {
  withKnobs,
  text, boolean
} from "@storybook/addon-knobs";

export default {
  title: "COMM/Dialog",
  component: MyDialog,
  argTypes: {},
  decorators: [withKnobs]
};

const Template = () => ({
  props: {
    text: {
      default: text("text", "haha")
    },
    flag: {
      default: boolean("flag", false)
    },
  },
  components: { MyDialog },
  template:
    '<my-dialog :flag="flag" :text="text" />'
});

// Template.bind({}) is a standard JavaScript technique for making a copy of a function.
// We copy the Template so each exported story can set its own properties on it.
//👇 Each story then reuses that template
export const setText = Template.bind({});

