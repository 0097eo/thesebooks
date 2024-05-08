// src/AuthDetails.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthDetails.css'; // Import the CSS file
import { onAuthStateChanged, signOut } from 'firebase/auth'; // Import signOut here
import { auth } from './firebase'; // Import auth from your firebase file

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const signUserOut = () => {
    signOut(auth).then(() => navigate('/'));
  };

  return (
    <div className="sign-out-container">
      {authUser ? (
        <>
          <p>{`Signed In as ${authUser.email}`}</p>
          <button onClick={signUserOut}>Sign Out</button>
        </>
      ) : (
        <p>Signed Out</p>
      )}
    </div>
  );
};

export default AuthDetails;