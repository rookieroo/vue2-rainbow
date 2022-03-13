<template>
  <div
    :style="{ background: o[k].background, color: o[k].color }"
    class="bubble-box"
  >
    <span class="bubble-text">
      {{ o[k].text }}
    </span>
    <i class="right-arrow"> </i>
    <span
      :style="{ borderTop: `5px solid ${o[k].background}` }"
      class="bubble-arrow"
    >
    </span>
  </div>
</template>

<script>
export default {
  name: "bubble",
  props: {
    k: {
      type: String,
      default: "1"
    }
  },
  computed: {
  },
  data() {
    return {
      o: {
        "1": {
          text: "OnActivate",
          background: "#cec626",
          color: "#FFF"
        },
        "2": {
          text: "OnGoing",
          background: "#3d6adc",
          color: "#FFF"
        },
        "3": {
          text: "Failed",
          background: "#86280c",
          color: "#FFF"
        }
      }
    };
  }
};
</script>
<style scoped>
.bubble-box {
  width: auto;
  padding: 0 5px;
  height: 20px;
  margin-right: 12px;
  position: relative;
  background-color: #292929;
  line-height: 20px;
  color: white;
  text-align: center;
  border-radius: 2px;
  right: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
.bubble-text {
  font-size: 12px;
  font-weight: 400;
  color: #ffffff;
  line-height: 20px;
}
.bubble-arrow {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #ff933b;
  position: relative;
  top: 3%;
  right: -12px;
  -webkit-transform: rotate(-90deg);
  transform: rotate(-90deg);
}
.right-arrow {
  width: 5px;
  height: 5px;
  border: 1px solid #f3f0f0;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  border-left: 1px solid transparent;
  border-top: 1px solid transparent;
}
</style>
