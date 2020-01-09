<template>
  <div>
    <div id="div3" />
    <button @click="click()">打印</button>
  </div>
</template>
<script>
import E from 'wangeditor'
export default {
  data: function() {
    return {
      editorContent: ''
    }
  },
  mounted() {
    var editor = new E('#div3')
    editor.customConfig.uploadImgShowBase64 = true
    editor.customConfig.onchange = html => {
      this.editorContent = html
    }
    editor.create()
  },
  methods: {
    click() {
      console.log(this.editorContent)
    }
  }
}
</script>
