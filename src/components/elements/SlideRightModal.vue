<template>
    <transition name="slide-right">
      <div v-show="show" class="modal-wrapper">
        <div class="modal">
          <button @click="$emit('close')">Close</button>
          <p>This is a slide-right modal!</p>
          <slot></slot>
        </div>
      </div>
    </transition>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const { show } = defineProps(['show']);
  </script>
  
  <style scoped>
  .slide-right-enter-active,
  .slide-right-leave-active {
    transition: all 0.3s ease;
  }
  .slide-right-enter-from,
  .slide-right-leave-to {
    transform: translateX(100%);
  }
  .slide-right-enter-to,
  .slide-right-leave-from {
    transform: translateX(0);
  }
  
  .modal-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  
  .modal {
    background: white;
    margin-top: 100px;
    padding: 20px;
    width: 300px;
    height: 100%;
  }
  </style>
  