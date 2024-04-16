export const state = () => ({
    isDarkMode: false,
});

export const mutations = {
    toggleDarkMode(state){
        state.isDarkMode = !state.isDarkMode;
    }
};

