import { User } from 'firebase/auth';
import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';

export async function addUserToFirestore(user: User) {
  const id = user.uid;
  const usersRef = collection(db, 'users');
  try {
    await setDoc(doc(usersRef, id), {
      email: user.email,
    });
  } catch (error) {
    console.log(error);
  }
}

