<demo>
基础用法
</demo>

<template>
  <Switch v-model:value="checked" @update:value="handleChange" ></Switch>
</template>

<script lang="ts">

import Switch from '../../lib/Switch.vue';
import {ref} from 'vue';

export default {
  name: 'SwitchDemo',
  components: {Switch},
  setup() {
    const checked = ref(false);
    const handleChange = (value: boolean) => {
  console.log('value change', value);
};
    
    return {handleChange,checked};
  }
};
</script>

<style lang="scss" scoped>
</style>