import create from 'zustand';

const useStore = create((set) => ({
    user: {
        isLoggedIn: false,
        userInfo: null,
    },
    login: (userInfo) => set({
        user: {
            isLoggedIn: true,
            userInfo,
        }
    }),
    logout: () => set({
        user: {
            isLoggedIn: false,
            userInfo: null,
            token: null,
        }
    }),
}));

export default useStore;
