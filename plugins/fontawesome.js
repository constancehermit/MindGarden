import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false

library.add(fab, faMoon, faSun)

Vue.component('font-awesome-icon', FontAwesomeIcon)

