export const state = () => ({
    isDarkMode: false
});

export const mutations = {
    setDarkMode(state, isDarkMode){
        state.isDarkMode = isDarkMode;
    },
    toggleDarkMode(state){
        state.isDarkMode = !state.isDarkMode;
    }
};

