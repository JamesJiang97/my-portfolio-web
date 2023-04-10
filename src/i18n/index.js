
import { createI18n } from "vue-i18n"
import enLocale from './en' // 导入项目中用到的英文语言包
import zhLocale from './zh'// 导入项目中用到的中文语言包
import jaLocale from './ja'// 导入项目中用到的日文语言包

const messages = {
  en: {
    ...enLocale,
  },
  zh: {
    ...zhLocale,
  },
  ja: {
    ...jaLocale,
  },
 
}
 
const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('i18n') || 'ja', // 设置语种
  messages, // 设置全局当地语言包,
  fallbackLocale: 'ja',
})
 
export default i18n