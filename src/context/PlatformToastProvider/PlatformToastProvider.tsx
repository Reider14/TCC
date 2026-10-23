"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";

type ToastContextType = {
  showToast: (message: string) => void;
};

const ToastContext = createContext<ToastContextType | null>(null);

export function PlatformToastProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [message, setMessage] = useState<string | null>(null);

  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  function showToast(text: string) {
    if (timer.current) clearTimeout(timer.current);

    setMessage(text);

    timer.current = setTimeout(() => {
      setMessage(null);
    }, 3000);
  }

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {children && (
        <div role="status">
          <span></span>
          <span>{message}</span>
        </div>
      )}
    </ToastContext.Provider>
  );
}

export function usePlatformToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("usePlatformToast precisa do PlatformToastProvider");
  }

  return context;
}
