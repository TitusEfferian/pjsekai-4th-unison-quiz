'use client'
import { signInWithRedirect, signOut } from "aws-amplify/auth";

export default function Home() {
  return (
    <div>
      <h1>hell</h1>
      <button
        onClick={() => {
          signInWithRedirect({
            provider: {
              custom: "auth0-unison",
            },
          });
        }}
      >
        click
      </button>
      <button onClick={()=>{
        signOut();
      }}>
        signout
      </button>
    </div>
  );
}
