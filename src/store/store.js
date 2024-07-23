import create from 'zustand';

const useStore = create((set) => ({
    user: {
        isLoggedIn: false,
        userInfo: null,
        token: null,
    },
    login: (userInfo, token) => set({
        user: {
            isLoggedIn: true,
            userInfo,
            token,
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
