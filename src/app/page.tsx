'use client'
import { signInWithRedirect } from "aws-amplify/auth";

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
    </div>
  );
}
