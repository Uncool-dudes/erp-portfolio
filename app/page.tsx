"use client";
import { SignedOut } from "@clerk/clerk-react";
import Home from "./signedout";

export default function Index() {
  return (
    <SignedOut>
      <Home />
    </SignedOut>
  );
}

