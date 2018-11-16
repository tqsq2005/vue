<template>
    <div id="main">
        <el-form ref="form" :model="data" label-width="110px">
            <el-form-item label="菜单名称">
                <el-input v-model="data.name"></el-input>
            </el-form-item>
            <el-form-item label="菜单地址">
                <el-input v-model="data.url"></el-input>
            </el-form-item>
            <el-form-item label="状态">
                <el-select v-model="data.status" placeholder="请选择">
                    <el-option label="正常" value="1"></el-option>
                    <el-option label="禁用" value="0"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="备注信息">
                <el-input type="textarea" v-model="data.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
  // 组件的所有代码都在这里
  export default {
    name: 'menusCreate',
    data() {
      return {
        data: {
          name: '',
          url: '',
          status: '',
          desc: '',
        }
      }
    },
    methods: {
      //组件内的方法
      onSubmit() {
        console.log('submit');
      }
    },
    computed: {
      //计算属性
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
    #main {
        margin: 20px 10px;
    }
</style>
