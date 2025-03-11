import { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import { useAuth } from "../context/authContext";

function MembersList() {
  const { currentUser } = useAuth();
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, `members(${currentUser.email})`),
      (snapshot) => {
        setMembers(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      }
    );

    return () => unsubscribe();
  }, []);

  const deleteMember = async (id) => {
    await deleteDoc(doc(db, `members(${currentUser.email})`, id));
    alert("Member Deleted");
  };

  return (
    <div className="p-4 bg-white shadow rounded">
      <h3 className="text-lg font-bold">Members</h3>
      {members.map((member) => (
        <div key={member.id} className="flex justify-between p-2 border-b">
          <p>
            {member.name} ({member.email})
          </p>
          <button
            onClick={() => deleteMember(member.id)}
            className="text-red-500"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default MembersList;
