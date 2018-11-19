<template>
    <div class="panel panel-default">
        <div class="panel-heading">菜单列表</div>
        <ul class="list-group">
            <li class="list-group-item"
                v-for="row in lists">
                <span class="label label-success" v-if="row.status">正常</span>
                {{ row.name }}
                <span class="pull-right">{{ row.desc }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
  // 组件的所有代码都在这里
  import { mapState, mapActions } from 'vuex';

  export default {
    name: 'menuList',
    computed: mapState({
      lists: state => state.menus.lists
    }),
    created() {
      this.getMenuLists();
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      //组件内的方法
      ...mapActions([
        'getMenuLists'
      ]),
    },

    mounted() {
      //元素装载完后执行的动作
      //this.(function () {
      // 代码保证 this. 在 document 中 已被渲染

      //})
    }
  }
</script>

<style scoped>
    /* CSS 在这里
   * 通过包含 `scoped`, 我们确保所有的 CSS
   * 仅作用于这个组件！
   */
</style>
