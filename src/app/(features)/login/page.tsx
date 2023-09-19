'use client'


import React from 'react';
import { withAuthenticator, WithAuthenticatorProps } from '@aws-amplify/ui-react';


function App({ signOut, user }: WithAuthenticatorProps) {
  return (
    <body>
      <h1>Hello {user?.username}</h1>
      <button onClick={signOut}>Sign out</button>
    </body>
  );
}

export default withAuthenticator(App);