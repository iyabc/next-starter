"use client";

import { useActiveAccount } from "thirdweb/react";

export default function NewPage() {
  const account = useActiveAccount();
  console.log("ACCOUNT IN NEW", account);

  return <>Hello!</>;
}
