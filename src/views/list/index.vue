<!--
 * @Descripttion: 
 * @version: 
 * @Author: xiexing
 * @Date: 2020-06-28 10:05:53
 * @LastEditors: xiexing
 * @LastEditTime: 2020-06-30 20:54:58
--> 
<template>
  <Layout>
      <TableFirst></TableFirst>
      <TableSecond></TableSecond>
  </Layout>
</template>

<script>
import { Layout } from '../../components/index'
import TableFirst from './components/TableFirst'
import TableSecond from './components/TableSecond'

export default {
  name: 'list',
  components: {
      Layout,
      TableFirst,
      TableSecond
  },
  data() {
      return {}
  },
  methods: {
    handleClick(row) {
      console.log(row);
    }
  },
}
</script>

