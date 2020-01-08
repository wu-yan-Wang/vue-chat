<template>
  <div class="login-wapper">
    <div class="login-form">
      <h1>登录</h1>
      <a-form
        id="components-form-demo-normal-login"
        :form="form"
        @submit="handleSubmit"
      >
        <a-form-item>
          <a-input
            v-decorator="[
              'userName',
              {
                rules: [
                  { required: true, message: 'Please input your username!' }
                ],
                initialValue: 'admin'
              }
            ]"
            placeholder="Username"
          >
            <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="[
              'password',
              {
                rules: [
                  { required: true, message: 'Please input your Password!' }
                ],
                initialValue: '123456'
              }
            ]"
            type="password"
            placeholder="Password"
          >
            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-checkbox
            v-decorator="[
              'remember',
              {
                valuePropName: 'checked',
                initialValue: true
              }
            ]"
          >
            Remember me
          </a-checkbox>
          <a class="login-form-forgot" href="">
            Forgot password
          </a>
          <a-button type="primary" html-type="submit" class="login-form-button">
            Log in
          </a-button>
          Or
          <a href="">
            register now!
          </a>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
import {
  Form as AForm,
  Icon as AIcon,
  Checkbox as ACheckbox
} from 'ant-design-vue'
const AFormItem = AForm.Item
export default {
  name: 'Login',
  components: {
    AForm,
    AFormItem,
    AIcon,
    ACheckbox
  },
  data() {
    return {}
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, {
      name: 'normal_login'
    })
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          this.$router.push('/chat')
          console.log('Received values of form: ', values)
        }
      })
    }
  }
}
</script>

<style lang="less">
.login-wapper {
  background-color: bisque;
  height: 100%;
  width: 100%;

  .login-form {
    text-align: center;
    margin: auto;
    max-width: 500px;
    padding: 200px 0 0 0;

    .login-form-forgot {
      float: right;
    }

    .login-form-button {
      width: 100%;
    }
  }
}
</style>
