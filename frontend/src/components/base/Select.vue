<template>
  <select v-model="selectedValue" @change="updateValue">
    <option v-for="option in options" :value="option.value">{{option.label}}</option>
  </select>
</template>

<script>
import { ref, watchEffect } from 'vue'

export default {
  props: {
    modelValue: String,
    options: {
      type: Array,
      required: true
    }
  },
  setup(props, { emit }) {
    const selectedValue = ref(props.modelValue)

    // Update the model value prop when the selectedValue changes
    watchEffect(() => {
      emit('update:modelValue', selectedValue.value)
    })

    function updateValue(event) {
      selectedValue.value = event.target.value
    }

    return {
      selectedValue,
      updateValue
    }
  }
}
</script>

<style scoped>
select {
  height: 30px;
  background: none;
  border-radius: 5px;
  border: 2px solid #53f8c2;
  color: #53f8c2;
  font-size: 15px;
}

select:focus {
  outline: none;
}
</style>
