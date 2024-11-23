'use client'
import { fetchAuthSession, getCurrentUser, signInWithRedirect, signOut } from "aws-amplify/auth";

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
      <button onClick={()=>{
        getCurrentUser().then(x=>{
          console.log(x)
        })
        fetchAuthSession().then(x=>{
          console.log(x)
        })
      }}>detail</button>
    </div>
  );
}
