<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { useEmojiItem, useMediumZoom } from './composables'

const emoji = useEmojiItem()
const frontmatter = computed(() => useData().frontmatter.value)
const features = computed(() => frontmatter.value.czFeatures)
const pkgFeatureTitle = computed(() => frontmatter.value.pkgFeatureTitle)
const emojiFeature = computed(() => frontmatter.value.emojiFeature)
const footer = computed(() => frontmatter.value.footerHtml)
useMediumZoom()
</script>

<template>
  <div
    flex="~ wrap grow basis-30% md:row col"
    class="maauto max-w-1152px mt-14 lg:px-1 px-2 py-4 justify-between items-stretch"
  >
    <div v-for="(feat, i) in features" :key="i" class="feat" :class="{ relative: i !== 2 }">
      <h2 class="featTitle">
        {{ feat.title }}
      </h2>
      <p class="dark:c-gray-4 c-gray-5 text-4.2">
        {{ feat.details }}
      </p>
    </div>
    <div class="feat relative">
      <h2 class="featTitle">
        {{ pkgFeatureTitle }}
      </h2>
      <p class="dark:c-gray-4 c-gray-5 text-4.2">
        $ npm install -D cz-git<br>
        + cz-git
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        (<span c-orange-5> 1.5 MB </span>) <br>added &nbsp;<span c-orange-5>1</span>&nbsp; package
        in &nbsp;<span c-orange-5>0.461s</span>
      </p>
    </div>
    <div class="feat">
      <h2 class="featTitle">
        {{ emojiFeature.title }}
      </h2>
      <p class="dark:c-gray-4 c-gray-5 text-4.2">
        <span text-6>{{ emoji }}</span>&nbsp; {{ emojiFeature.details }}
      </p>
    </div>
  </div>
  <p class="maauto max-w-1152px mt-10 lg:px-1 px-2">
    <img
      class="max-w-100%"
      src="https://user-images.githubusercontent.com/40693636/165576782-a9339182-df7e-4185-aacc-212f62850f36.gif"
      alt="gif-demo"
    >
  </p>
  <footer
    class="maauto w-100% mt-18 text-center text-3.5 c-gray:90% px-2 pt-10 border-t-1 dark:border-gray-1:10% border-gray-1"
    v-html="footer"
  />
</template>
