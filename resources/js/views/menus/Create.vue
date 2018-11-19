<template>
    <div id="main">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/menus' }">菜单列表</el-breadcrumb-item>
            <el-breadcrumb-item>新增菜单</el-breadcrumb-item>
        </el-breadcrumb>
        <el-form id="appForm" ref="form" :model="data" :rules="rules" label-width="110px">
            <el-form-item label="菜单名称" prop="name">
                <el-input v-model="data.name"></el-input>
            </el-form-item>
            <el-form-item label="菜单地址" prop="url">
                <el-input v-model="data.url"></el-input>
            </el-form-item>
            <el-form-item label="类型" prop="type">
                <el-select v-model="data.type" allowCreate="" filterable="" placeholder="请选择">
                    <el-option label="后台" value="backend"></el-option>
                    <el-option label="前台" value="fontend"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="状态" prop="status">
                <el-radio-group v-model="data.status">
                    <el-radio border label="1">正常</el-radio>
                    <el-radio border label="0">禁用</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="备注信息" prop="desc">
                <el-input type="textarea" v-model="data.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('form')">立即创建</el-button>
                <el-button @click="resetForm('form')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
  // 组件的所有代码都在这里
  let initData = {
    name: '',
    url: '',
    status: '1',
    desc: '',
    type: 'backend',
  };
  export default {
    name: 'menusCreate',
    data() {
      return {
        //数据
        data: initData,
        //表单验证规则
        rules: {
          name: [
            { required: true, message: '请输入菜单名称', trigger: 'blur' },
            { min: 1, max: 30, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          type: [
            { required: true, message: '请选择类型', trigger: 'change' },
          ],
          status: [
            { required: true, message: '请选择状态', trigger: 'change' }
          ],
        }
      }
    },

    methods: {
      //表单提交
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          //防止数据重复提交
          const loading = this.$loading({
            lock: true,
            text: '正在提交数据..',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
          });
          if (valid) {
            axios.post('/api/menus', this.data)
              .then(response => {
                if (response.status === 200) {
                  // 提交成功将要执行的代码
                  this.$refs[formName].resetFields();
                  this.$message.success(response.data.message);
                  loading.close();
                }
              })
              .catch(function(error) {
                console.log(error)
                this.$message.error('数据存档出错!');
                loading.close();
              });
            return false;
          } else {
            this.$message.error('表单验证失败!');
            console.log('valid error');
            loading.close();
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
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
    .el-breadcrumb {
        margin: 20px;
    }
    .el-select {
        display: block;
    }
</style>
