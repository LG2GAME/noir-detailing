<template>
  <div :class="[styles.navigationWrapper, { [styles.open]: isOpen }]">
    <div :class="styles.brand">
      <a href="/" :class="logoStyles.logo">Noir<span>/detailing</span></a>
      <button type="button" :class="styles.burger" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
    <nav :class="styles.navigation">
      <ul :class="styles.menu">
        <li><a href="/">home</a></li>
        <li><a href="/services">services</a></li>
        <li><a href="/portfolio">portfolio</a></li>
        <li><a href="/about">about</a></li>
      </ul>
      <div :class="styles.career">
        <p>Looking for a new career?</p>
        <a href="/contact">Get in touch</a>
      </div>
      <a href="/contact" :class="buttonStyles.button">Contact</a>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import styles from './navigationLayout.module.scss'
import logoStyles from '@/components/ui/logo/logoComponent.module.scss'
import buttonStyles from '@/components/ui/button/buttonComponent.module.scss'

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>
