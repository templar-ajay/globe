"use client";

import { Suspense } from "react";

const SuspenseWrapper = ({ children }) => {
  return <Suspense>{children}</Suspense>;
};

export default SuspenseWrapper;
