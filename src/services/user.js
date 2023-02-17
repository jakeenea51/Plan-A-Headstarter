import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "./firebase";

export const loginUser = async ({ email, password }) => {
  const response = await signInWithEmailAndPassword(auth, email, password);
  return response;
};

export const registerUser = async ({ name, email, password }) => {
  const response = await createUserWithEmailAndPassword(auth, email, password);
  if (response.user) {
    await updateProfile(auth.currentUser, { displayName: name });
  }

  return response;
};

export const getUser = () => {
  if (auth.currentUser == null) return;
  const currentUser = auth;
  return {
    name: currentUser.displayName,
    email: currentUser.email,
    verified: currentUser.verified,
    uid: currentUser.uid
  };
};
