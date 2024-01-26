import CryptoJS from "crypto-js";

export function EncryptData (data: string) {
    try {
      return CryptoJS.AES.encrypt(JSON.stringify(data), import.meta.env.VITE_SECRET_KEY).toString();
    } catch (error) {
      console.log("🚀 ~ file: data-encrypt.js:9 ~ dataEncrpt ~ error:", error);
    }
  }