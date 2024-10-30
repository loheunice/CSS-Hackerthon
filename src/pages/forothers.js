import React, { useEffect, useState } from 'react';
import { collection, getDocs, addDoc, doc } from 'firebase/firestore';
import  db  from '../lib/firebase'; // Correct import


const ForOthers = () => {
  const [name, setName] = useState(''); // State for name input
  const [subtext, setSubtext] = useState(''); // State for subtext input
  const [body, setBody] = useState(''); // State for body input

  // Fetch entries from Firestore
  useEffect(() => {
    const fetchEntries = async () => {
      const querySnapshot = await getDocs(collection(db, 'entries'));
      const entriesList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    };
    fetchEntries();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, 'blog'), { name, subtext, body });
    setName('');
    setSubtext('');
    setBody('');
  };

  return (
    <div>
      <h1>For Others</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Subtext"
          value={subtext}
          onChange={(e) => setSubtext(e.target.value)}
          required
        />
        <textarea
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ForOthers;
