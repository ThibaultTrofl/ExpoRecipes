import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AppStore {
    user: string
    setUser: (user: AppStore['user']) => void;
    logout: () => void;
}

export const useBoardingStore = create<AppStore>()(
    persist(
        (set) => ({
            user: "null",
            setUser: (user) => set({ user }),
            logout: () => set({ user: "null" }),
        }),
        {
            name: 'app-storage', // Nom unique pour identifier le storage
            storage: createJSONStorage(() => AsyncStorage),
            partialize: (state) => ({
                user: state.user,
            }),
        }
    )
);