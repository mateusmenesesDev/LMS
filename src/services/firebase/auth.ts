import { auth } from './firebaseConfig';
import { signInWithEmailAndPassword,  User, createUserWithEmailAndPassword  } from 'firebase/auth';
import { addUserToFirestore } from './firestore';



export async function login(email:string, password:string) {
  return await signInWithEmailAndPassword(auth, email, password);
}

export async function register(email:string, password:string) {
  const user = await createUserWithEmailAndPassword(auth, email, password);
  await addUserToFirestore(user.user);
}

export async function updateUserProfile(user:User) {
  return null;
}

