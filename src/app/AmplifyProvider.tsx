"use client";

import { Amplify } from "aws-amplify";
import output from "../../amplify_output.json";
import { ReactNode } from "react";
Amplify.configure(output);
interface AppProps {
  children: ReactNode;
}
const AmplifyProvider = ({ children }: AppProps) => {
  return children;
};

export default AmplifyProvider;
