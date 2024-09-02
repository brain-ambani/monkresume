"use client";

import { useState } from "react";

import { SignInFlow } from "../types";
import { SignIncard } from "./sign-in-card";
import { SignUpCard } from "./sign-up-card";

export const AuthScreen = () => {
  const [state, setState] = useState<SignInFlow>("signIn");

  return (
    <div className="h-screen flex items-center justify-center bg-indigo-300">
      <div className="md:h-auto md:w-[420px]">
        {state === "signIn" ? (
          <SignIncard setState={setState} />
        ) : (
          <SignUpCard setState={setState} />
        )}
      </div>
    </div>
  );
};
