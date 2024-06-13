// stores/userStore.js
import create from "zustand";
import { persist } from "zustand/middleware";

const useUserStore = create(
  persist(
    (set) => ({
      user: null,
      setUser: (user: any) => set({ user }),
    }),
    {
      name: "user-storage", // unique name
      //   getStorage: () => localStorage, // use localStorage
      getStorage: (): any =>
        typeof window !== "undefined" ? localStorage : null, // use localStorage only in the browser
    }
  )
);

export default useUserStore;
