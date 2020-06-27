<template>
  <el-container>
      <Header></Header>
      <el-container style="padding-top: 60px">
        <Siderbar></Siderbar>
        <Container>
            <slot></slot>
        </Container>
      </el-container>
  </el-container>
</template>

<script>
import Header from '../Header/index'
import Siderbar from '../Siderbar/index'
import Container from '../Container/index'

export default {
    name: 'Layout',
    components: {
        Header,
        Siderbar,
        Container,
    }
}
</script>

<style lang="css">
.el-container {
    width: 100%;
    height: 100%;
}
</style>