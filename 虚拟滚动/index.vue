<template>
  <div>
    <virtual-list
      :data="data"
      :itemHeight="30"
      ref="virtualListRef"
      style="height: 300px"
      @scroll="scroll"
      @scrollBottom="scrollBottom"
    >
      <div slot-scope="{ item, index }">{{ item }}</div>
    </virtual-list>
    <button style="margin-top: 10px" @click="scrollTopTest">滚动到顶部</button>
  </div>

</template>
<script>
import VirtualList from "./components/virtual.vue";
export default {
  name: "ScrollbarExample",
  props: {},
  data() {
    return {
      data: []
    };
  },
  components: {
    VirtualList,
  },
  watch: {},
  computed: {},
  created() {
    const data = []
    for(let i = 0;i < 100; i++){
      data.push(i)
    }
    this.data = data
  },
  mounted() {},
  methods: {
    scrollBottom() {
      console.log('scrollBottom')
    },
    scroll(data) {
      console.log('data:', data)
    },
    scrollTopTest() {
      this.$refs.virtualListRef.scrollToTop()
    }
  },
  beforeDestroy() {},
};
</script>
<style lang="less" scoped>
</style>
