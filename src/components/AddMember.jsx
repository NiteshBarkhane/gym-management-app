import { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc, setDoc } from "firebase/firestore";
import { useAuth } from "../context/authContext";

function AddMember() {
  const { currentUser } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const addMember = async () => {
    // await setDoc(collection(db, "members"), currentUser.email);
    await addDoc(collection(db, `members(${currentUser.email})`), {
      name,
      email,
    });
    alert("Member added successfully!");
    setName("");
    setEmail("");
  };

  return (
    <div className="p-4 bg-white shadow rounded">
      <h3 className="text-lg font-bold">Add Member</h3>
      <input
        type="text"
        placeholder="Name"
        className="border p-2 w-full my-2"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        className="border p-2 w-full my-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        onClick={addMember}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Add
      </button>
    </div>
  );
}

export default AddMember;
