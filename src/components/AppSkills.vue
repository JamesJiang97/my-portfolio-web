<template>
  <link rel="stylesheet" href="https://unicons.iconscout.com/release/v3.0.6/css/line.css" />


  <section class="skills section" id="skills">
    <h1 class="section__title">{{ $t("skills__title") }}
    </h1>


    <div class="skills__container container grid">
      <div>
        <!--==================== SKILLS 1 ====================-->
        <div class="skills__content">

          <div class="skills__header" @click="skillstate[0] = skillstate[0] === 'true' ? 'false' : 'true'">
            <i class="uil uil-server-network skills__icon"></i>

            <div>
              <h1 class="skills__title" i18n="skills__title2">
                {{ $t("skill__title1") }}
              </h1>
              <span class="skills__subtitle" i18n="skills__years2">{{ $t("skill__years1") }}</span>
            </div>
            <transition name="rotate" type="transition" >
              <i :class="['uil','uil-angle-down','skills__arrow',skillstate[0]]"></i>
            </transition>
          </div>

          <div class="skills__list grid" v-show="skillstate[0] === 'true'">
            <div v-for="skill in skills_1" :key="skill.title">
              <div class="skills__titles">
                <h3 class="skills__name">{{ skill.title }}</h3>
              </div>
              <div class="skills__bar">
                <div class="skills__percentage" :style="`width: ${skill.percentage}`"></div>
              </div>
            </div>
          </div>

        </div>
        <!--==================== SKILLS 2 ====================-->
        <div class="skills__content">

          <div class="skills__header" @click="skillstate[1] = skillstate[1] === 'true' ? 'false' : 'true'">
            <i class="uil uil-brackets-curly skills__icon"></i>

            <div>
              <h1 class="skills__title" i18n="home__subtitle">
                {{ $t("skill__title2") }}
              </h1>
              <span class="skills__subtitle" i18n="skills__years">{{ $t("skill__years2") }}</span>
            </div>

            <transition name="rotate" type="transition">
              <i :class="['uil','uil-angle-down','skills__arrow',skillstate[1]]"></i>
            </transition>
          </div>
          <!-- <transition class="animate__animated" enter-active-class="animate__fadeInDown" leave-active-class="animate__fadeOutUp"> -->
            <div class="skills__list grid" key="skills_2" v-show="skillstate[1] === 'true'">
              <div v-for="skill in skills_2" :key="skill.title">
                <div class="skills__titles">
                  <h3 class="skills__name">{{ skill.title }}</h3>
                </div>
                <div class="skills__bar">
                  <div class="skills__percentage" :style="`width: ${skill.percentage}`"></div>
                </div>
              </div>
            </div>
          <!-- </transition> -->
        </div>
        <!--==================== SKILLS 3 ====================-->
        <div class="skills__content">

          <div class="skills__header" @click="skillstate[2] = skillstate[2] === 'true' ? 'false' : 'true'">
            <i class="uil uil-cloud-computing skills__icon"></i>

            <div>
              <h1 class="skills__title" i18n="home__subtitle">
                {{ $t("skill__title3") }}
              </h1>
              <span class="skills__subtitle" i18n="skills__years">{{ $t("skill__years3") }}</span>
            </div>

            <transition name="rotate" type="transition">
              <i :class="['uil','uil-angle-down','skills__arrow',skillstate[2]]"></i>
            </transition>
          </div>

          <div class="skills__list grid" v-show="skillstate[2] === 'true'">
            <div v-for="skill in skills_3" :key="skill.title">
              <div class="skills__titles">
                <h3 class="skills__name">{{ skill.title }}</h3>
              </div>
              <div class="skills__bar">
                <div class="skills__percentage" :style="`width: ${skill.percentage}`"></div>
              </div>
            </div>
          </div>
        </div>



      </div>
    </div>
  </section>
</template>


<script>
import { ref } from 'vue'
export default {
  name: "AppSkills",
  setup() {
    const skills_1 = ref([
      {
        title: 'Java',
        percentage: '70%'
      },
      {
        title: 'Spring Framework',
        percentage: '40%'
      },
      {
        title: 'Python',
        percentage: '60%'
      },
      {
        title: 'C',
        percentage: '80%'
      },
      {
        title: 'SQL',
        percentage: '60%'
      },
    ])
    const skills_2 = ref([
      {
        title: 'HTML/CSS',
        percentage: '55%'
      },
      {
        title: 'Typescript',
        percentage: '40%'
      },
      {
        title: 'Vue',
        percentage: '45%'
      },
    ])
    const skills_3 = ref([
      {
        title: 'Linux',
        percentage: '70%'
      },
      {
        title: 'Google Cloud Platform',
        percentage: '60%'
      },
      {
        title: 'Amazon Web Services',
        percentage: '50%'
      },
      {
        title: 'Heroku',
        percentage: '20%'
      },
    ])

    const skillstate = ref(['true', 'false', 'false'])


    return { skills_1, skills_2, skills_3, skillstate }
  },
  // methods: {
  //   toggleSkills() {
  //     const skillsContent = document.querySelectorAll('.skills__content')
  //     skillsContent.forEach((el) => {
  //       el.classList.toggle('skills__close')
  //     })
  //   }
  // }

}


</script>
<style lang="scss" scoped>
.skills {
  &__container {
    padding-top: 3rem;
    row-gap: 0;
  }

  &__header {

    display: flex;
    align-items: center;
    margin-bottom: var(--mb-2-5);
    cursor: pointer;
  }

  &__icon,
  &__arrow {
    font-size: 2rem;
    color: var(--first-color);
    margin-right: var(--mb-0-75);
  }

  &__arrow {
    margin-left: auto;
    transition: .4s;
  }

  &__title {
    margin-bottom: var(--mb-0-75);
    font-size: var(--h2-font-size);
  }

  &__titles {
    display: flex;
    justify-content: space-between;
    margin-bottom: var(--mb-0-5);
  }

  &__subtitle {
    font-size: var(--small-font-size);
    color: var(--text-color-light);
  }

  &__list {
    row-gap: 1.5rem;
    padding: 0 2.7rem;
    transition: 0.4s;
  }

  &__name {
    font-size: var(--normal-font-size);
    font-weight: var(--font-medium);
  }

  &__bar {
    background-color: var(--first-color-lighter);
  }

  &__percentage {
    height: 5px;
    border-radius: 0.25rem;
    display: block;
    background-color: var(--first-color);
  }
}

.skills__close .skills__list {

  height: 0;
  overflow: hidden;

}

.true {
  transform: rotate(-180deg);
}

// .skills__open .skills__arrow {
//   transform: rotate(-180deg);
// }


.fade-enter-active {
	-webkit-animation: slide-in-blurred-top 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
  animation: slide-in-blurred-top 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
}

 @-webkit-keyframes fade-enter-active {
  0% {
    -webkit-transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
            transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
    -webkit-transform-origin: 50% 0%;
            transform-origin: 50% 0%;
    -webkit-filter: blur(40px);
            filter: blur(40px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0) scaleY(1) scaleX(1);
            transform: translateY(0) scaleY(1) scaleX(1);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
    -webkit-filter: blur(0);
            filter: blur(0);
    opacity: 1;
  }
}
@keyframes fade-enter-active {
  0% {
    -webkit-transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
            transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
    -webkit-transform-origin: 50% 0%;
            transform-origin: 50% 0%;
    -webkit-filter: blur(40px);
            filter: blur(40px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0) scaleY(1) scaleX(1);
            transform: translateY(0) scaleY(1) scaleX(1);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
    -webkit-filter: blur(0);
            filter: blur(0);
    opacity: 1;
  }
}


</style>