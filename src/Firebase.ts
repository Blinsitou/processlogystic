import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  // Aquí va la configuración de Firebase
    apiKey: "AIzaSyAZgfQSCsBv_8_f5b54jwJMhlKRbqhTMqc",
    authDomain: "logisticreal-2bfe1.firebaseapp.com",
    projectId: "logisticreal-2bfe1",
    storageBucket: "logisticreal-2bfe1.appspot.com",
    messagingSenderId: "657912259113",
    appId: "1:657912259113:web:5fb4cc9937e233ecd27238"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);