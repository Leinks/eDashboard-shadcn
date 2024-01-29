
import CryptoJS from "crypto-js";

export function DecryptData (data: string) {
  try {
    const bytes = CryptoJS.AES.decrypt(data, import.meta.env.VITE_SECRET_KEY);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  } catch (error) {
    console.log("🚀 ~ file: data-decrypt.js:9 ~ dataDecrypt ~ error:", error);
  }
}