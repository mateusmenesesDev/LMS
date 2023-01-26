import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBMBDscIgJmJEWGjDaVcXThVFrS0QX4TKc',
  authDomain: 'lms-project-90323.firebaseapp.com',
  projectId: 'lms-project-90323',
  storageBucket: 'lms-project-90323.appspot.com',
  messagingSenderId: '424404098497',
  appId: '1:424404098497:web:9b34b748edb9ac8834e340',
};

import { getFirestore } from 'firebase/firestore';
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);