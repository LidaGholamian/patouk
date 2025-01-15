"use client";

import { useEffect, useState } from "react";
import { Navbar } from "../Navbar";
import { Topics } from "../topics/topics";

export const Navigation: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return isDesktop ? <Navbar /> : <Topics />;
};
