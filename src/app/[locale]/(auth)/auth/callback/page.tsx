"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { API_BASE_URL } from "@/lib/constants";

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    fetch(`${API_BASE_URL}/auth/profile`, {
      credentials: "include",
    })
      .then(async (res) => {
        if (!res.ok) throw new Error("No autorizado");
        return res.json();
      })
      .then(() => {
        router.replace("/dashboard");
      })
      .catch(() => {
        router.replace("/login");
      });
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen">
      <h2 className="text-xl font-semibold">Validando autenticación…</h2>
    </div>
  );
}
