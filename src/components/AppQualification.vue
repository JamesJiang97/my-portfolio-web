<template>
  <section class="qualification section">
    <h2 class="section__title">
      {{ $t("qualification__title") }}
    </h2>
    <div class="container">
      <div class="qualification__tabs">
        <div :class="[curSeleced === 'education' ? 'qualification__button--active' : '']"
          class="qualification__button button--flex" @click="curSeleced='education'">
          <i class="alicon alicon-graduation qualification__icon"></i>
          <span>{{ $t("education") }}</span>
        </div>

        <div :class="[curSeleced === 'work' ? 'qualification__button--active' : '']"
          class="qualification__button button--flex" @click="curSeleced = 'work'">
          <i class="alicon alicon-brief-bag qualification__icon"></i>
          <span>{{ $t("work") }}</span>
        </div>
      </div>
      <div class="qualification__sections">
        <!--==================== QUALIFICATION CONTENT 1 ====================-->

        <div id="education" v-show="curSeleced === 'education'">
          <TheQualificationItemVue :list="educationList"></TheQualificationItemVue>
        </div>
  
        <!--==================== QUALIFICATION CONTENT 2 ====================-->

        <div class="qualification__content" v-show="curSeleced === 'work'">
          <TheQualificationItemVue :list="workList"></TheQualificationItemVue>
        </div>

      </div>
    </div>
  </section>
</template>
<script>
import { ref } from 'vue'
import TheQualificationItemVue from './TheQualificationItem.vue'
export default {
  name: 'AppQualification',
  components: {
    TheQualificationItemVue 
  },
  setup() {
    // 当前选中的是教育还是工作
    const curSeleced = ref('education')
    // i18n 对应 key
    const educationList = ref([
      {
        title: 'qualification1__title',
        describe: 'qualification1__describe',
        time: '2018~2022'
      },
      {
        title: 'qualification2__title',
        describe: 'qualification2__describe',
        time: '2022~2024'
      }
    ])
    const workList = ref([
      {
        title: 'qualification3__title',
        describe: 'qualification3__describe',
        time: '2022.6~2022.9'
      },
      {
        title: 'qualification4__title',
        describe: 'qualification4__describe',
        time: '2023.3'
      },
      {
        title: 'qualification5__title',
        describe: 'qualification5__describe',
        time: '2023.4~2023.7'
      },
      {
        title: 'qualification6__title',
        describe: 'qualification6__describe',
        time: '2024.4~now'
      }
    ])
    return { curSeleced,educationList,workList }
  },
}
</script>
<style lang="scss" scoped>

.container {
  padding-top: 3rem;
}
.qualification {
  &__tabs {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: var(--mb-2);
    @include min-screen(768px) {
      justify-content: center;
    }
  }
  &__button {
    font-size: var(--h3-font-size);
    font-weight: var(--font-medium);
    cursor: pointer;
    &:hover {
      color: var(--first-color);
    }
    &--active {
      color: var(--first-color);
    }
    @include min-screen(768px) {
      margin: 0 var(--mb-1);
    }
  }
  &__icon {
    font-size: 1.8rem;
    margin-right: var(--mb-0-25);
  }
  &__sections {
    @include min-screen(568px) {
      display: grid;
      grid-template-columns: 0.6fr;
      justify-content: center;
    }
    @include min-screen(768px) {
      grid-template-columns: 0.5fr;
    }
  }
}




</style>