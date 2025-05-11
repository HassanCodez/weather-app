import CryptoJS from "crypto-js";
import { StateStorage } from "zustand/middleware";

const SECRET_KEY = process.env.NEXT_PUBLIC_SECRET_KEY;

const encryptData = (data: string): string => {
  return CryptoJS.AES.encrypt(data, SECRET_KEY!).toString();
};

const decryptData = (encryptedText: string): string => {
  const bytes = CryptoJS.AES.decrypt(encryptedText, SECRET_KEY!);
  return bytes.toString(CryptoJS.enc.Utf8);
};
export const encryptedStorage = (): StateStorage => {
  return {
    getItem: (name: string) => {
      const item = localStorage.getItem(name);
      if (!item) return null;
      return decryptData(item);
    },
    setItem: (name: string, value: string) => {
      localStorage.setItem(name, encryptData(value));
    },
    removeItem: (name: string) => {
      localStorage.removeItem(name);
    },
  };
};
