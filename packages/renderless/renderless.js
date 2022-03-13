const Renderless = {
  props: {
    o: {
      type: Object
    }
  },
  watch: {
    o: {
      handler(n, o) {
        if (n.isConn) {
          this.isConn = true;
        }
      },
      deep: true
    }
  },
  name: "renderless",
  data() {
    return {
      isConn: false
    };
  },
  methods: {
    toggleShop() {
      this.isConn = !this.isConn;
    },
    toBing() {
      window.location.href = "https://cn.bing.com/"
    }
  },
  render() {
    return this.$scopedSlots.default({
      isConn: this.isConn,
      toggleShop: this.toggleShop,
      toBing: this.toBing
    });
  }
};
/*
 *
 *
 * */
export default Renderless;
