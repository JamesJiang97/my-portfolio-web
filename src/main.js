// 重置样式
import 'normalize.css'
import VAnimateCss from 'animate.css';

import '@/styles/icon/iconfont.css'

import i18n from '@/i18n'

import { createApp } from 'vue'
import App from './App.vue'


createApp(App).
use(i18n).
use(VAnimateCss).
mount('#app')




