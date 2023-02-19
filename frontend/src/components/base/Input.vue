<template>
  <input :value="modelValue" @input="updateValue"/>
</template>

<script>
import { ref } from 'vue';

export default {
  props: {
    modelValue: [String, Number],
    placeholder: String,
  },
  setup(props, { emit }) {
    const input = ref(null);

    const updateValue = (event) => {
      emit('update:modelValue', event.target.value);
    };

    return {
      updateValue,
    };
  }
}
</script>

<style scoped>
input {
  height: 30px;
  outline: #53f8c2;
}

input:focus {
  transition: all ease-in-out .3s;
  border:2px solid #53f8c2;
  border-radius: 3px;
}
</style>