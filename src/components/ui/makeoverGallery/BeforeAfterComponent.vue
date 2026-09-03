<script setup lang="ts">
import { VueCompareImage } from 'vue3-compare-image'

import afterImage from '@/assets/images/gallery_after_1.webp'
import beforeImage from '@/assets/images/gallery_before_1.webp'
</script>

<template>
  <VueCompareImage
    :left-image="beforeImage.src"
    :right-image="afterImage.src"
    class="makeoverSlider"
  />
</template>

<style scoped lang="scss">
.makeoverSlider {
  max-height: 100vh;
}
</style>
