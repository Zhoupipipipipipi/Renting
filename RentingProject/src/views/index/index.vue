<template>
    <div>
        <top></top>
        <router-view></router-view>
    </div>
</template>
<script>
import Top from './components/top'
export default {
  components: {
    Top
  }
}
</script>
