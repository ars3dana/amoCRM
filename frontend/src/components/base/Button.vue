<template>
  <button :class="{ loading: isLoading, button__disabled: isLoading || isDisabled}" :disabled="isLoading || isDisabled"
          @click="handleClick">
    <slot v-if="!isLoading"></slot>
    <div class="spinner" v-if="isLoading">
      <!--      <div class="circle"></div>-->
      <!--      <div class="circle"></div>-->
      <!--      <div class="circle"></div>-->
      <!--      <div class="circle"></div>-->
    </div>
  </button>
</template>

<script lang="ts">
import {defineComponent, toRef} from 'vue';
import type {PropType} from 'vue'

export default defineComponent({
  props: {
    isLoading: {
      type: Boolean as PropType<boolean>,
      required: true,
      default: true
    },
    isDisabled: {
      type: Boolean as PropType<boolean>
    },
    handleClick: {
      type: Function as PropType<() => void>,
      required: true,
    },
  },

  setup(props) {
    const isLoading = toRef(props, 'isLoading');
    const isDisabled = toRef(props, 'isDisabled');

    const handleClick = () => {
      if (!isLoading.value) {
        props.handleClick();
      }
    };

    return {
      isLoading,
      isDisabled,
      handleClick,
    };
  },
});
</script>
<style scoped>

button {
  width: 100px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px;
  color: #000000;
  background: #53F8C2FF;
  border: 2px solid #53f8c2;
  border-radius: 5px;
  font-size: 15px;
  cursor: pointer;
  transition: .5s ease-in-out all;
}

.button__disabled {
  transition: .5s ease-in-out all;
  background: none;
  color: #53f8c2;
}

.spinner {
  height: 15px;
  width: 15px;
  border-left: 3px solid #53f8c2;
  border-bottom: 3px solid #53f8c2;
  border-right: 3px solid #53f8c2;
  border-top: 3px solid transparent;
  border-radius: 50%;
  animation: spinner 1s linear infinite;
}

@keyframes spinner {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>