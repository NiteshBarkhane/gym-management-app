import { createContext, useContext, useState, useEffect } from "react";
import { auth, db } from "../firebaseConfig";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Loader } from "../components";

export const context = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Sign up function
  const signupUser = async (email, password, role) => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (userCredential) {
        const user = userCredential.user;

        // Save role in Firestore
        await setDoc(doc(db, "users", user.uid), {
          email: user.email,
          role,
        });

        setCurrentUser({ uid: user.uid, email: user.email, role });
        navigate("/");
      }
    } catch (error) {
      alert("User already exists.");
    }
    setLoading(false);
  };

  // Sign in function
  const loginUser = async (email, password) => {
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential) {
        const user = userCredential.user;

        // Fetch user role from Firestore
        const userRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userRef);

        if (userDoc.exists()) {
          setCurrentUser({
            uid: user.uid,
            email: user.email,
            role: userDoc.data().role,
          });
          navigate("/");
        }
      }
    } catch (error) {
      alert("User doesn't Exist.");
    }
    setLoading(false);
  };

  // Logout function
  const logoutUser = async () => {
    await signOut(auth);
    setCurrentUser(null);
  };

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
          setCurrentUser({
            uid: user.uid,
            email: user.email,
            role: userDoc.data().role,
          });
        }
      } else {
        setCurrentUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return !loading ? (
    <context.Provider
      value={{ currentUser, loginUser, signupUser, logoutUser }}
    >
      {children}
    </context.Provider>
  ) : (
    <div className="h-screen flex items-center justify-center bg-gray-800">
      <Loader />
    </div>
  );
};

export const useAuth = () => {
  return useContext(context);
};
