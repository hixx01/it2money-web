<!--
 * @Descripttion: 
 * @version: 
 * @Author: xiexing
 * @Date: 2020-06-28 10:05:53
 * @LastEditors: xiexing
 * @LastEditTime: 2020-08-13 16:16:58
--> 
<template>
  <Layout>
      <TableFirst @getDataFirst="getDataFirst"></TableFirst>
      <TableSecond @getSecondData="getSecondData"></TableSecond>
      <el-button type="success" style="{ margin: '20px' }" @click="submit">计算结果</el-button>
      <TableResult :result="result"></TableResult>
  </Layout>
</template>

<script>
import { Layout } from '../../components/index'
import TableFirst from './components/TableFirst'
import TableSecond from './components/TableSecond'
import TableResult from './components/TableResult'

export default {
  name: 'list',
  components: {
      Layout,
      TableFirst,
      TableSecond,
      TableResult
  },
  data() {
      return {
        capitalAsset: [],
        correlationMatrix: [],
        result: []
      }
  },
  methods: {
    getDataFirst(data) {
      this.capitalAsset = data
    },
    getSecondData(data) {
      this.correlationMatrix = data
    },
    submit() {
      const { capitalAsset, correlationMatrix } = this
      this.$http.post('/api/portfolio', {
          capitalAsset,
          correlationMatrix
        }).then(res => {
          if (res.length) {
            this.result = res
          }
        }).catch(e => {
          this.$message.error(e || '计算出错了，请稍后再试');
        })
    }
  },
}
</script>

