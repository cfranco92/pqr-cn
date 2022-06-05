import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";

export const firebaseConfig = {
  apiKey: "AIzaSyCitWZ_5lGgCrVjMcE-WMAMwCx6AntG-3Q",
  authDomain: "cb-eafit.firebaseapp.com",
  projectId: "cb-eafit",
  storageBucket: "cb-eafit.appspot.com",
  messagingSenderId: "599792148523",
  appId: "1:599792148523:web:209fadf0df46da44120a6e",
  measurementId: "G-9DSLX9NV9E",
};
const firebaseApp = initializeApp(firebaseConfig);

const storage = getStorage(firebaseApp);
export default storage;
