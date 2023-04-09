<template>
  <section class="paper section" id="paper">
    <h2 class="section__title" >{{ $t('paper__title') }}</h2>
    <div class="container">
        
        <a href="https://deim-management-system.github.io/deim2023_program/index.html#1b-6" target="_blank">Zhongqing Jiang, Zengqing Wu, Chuan Xiao,  Token-Free Cross-Lingual Named Entity Recognition for Classical Chinese, DEIM 2023, Gifu, Japan</a>
    </div>


  </section>
</template>

<script>

</script>

<style lang="scss" scoped>

.container {
  padding-top: 3rem;
  @include min-screen(568px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @include min-screen(768px) {
    column-gap: 5rem; 
  }
}

a{
    color: #000;
}

</style>