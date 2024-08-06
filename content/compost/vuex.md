- Vuex is a library. 
  - It's used for state management. 
- Nuxt includes vuex. 
  - Each .js file inside /store is treated as a namespaced module.
    - aka. no need to write vue.use(vuex) or manually add modules.
- A store includes: 
  - State (exports a function)
  - Mutations (change state immediately)
  - Actions (might contain async ops, dont directly change state but call mutations)
  - Getters
- You can access the store using this.$store.state etc
  - .commit is for mutations
  - .dispatch is for actions