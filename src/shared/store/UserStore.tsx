import create from 'zustand';

interface UserStore {
  userName: string;
  email: string;
  setUser: (userName: string, email: string) => void;
  clearUser: () => void;
}

const useUserStore = create<UserStore>((set) => ({
  userName: '',
  email: '',
  setUser: (userName, email) =>
    set(() => ({
      userName,
      email,
    })),
  clearUser: () =>
    set(() => ({
      userName: '',
      email: '',
    })),
}));

export default useUserStore;
