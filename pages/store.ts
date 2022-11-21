import create from 'zustand';

interface Logindata {
  email: string;
  password: string;
  loginaction: () => void;
}

export const login_test = create<Logindata>((data) => ({}));
