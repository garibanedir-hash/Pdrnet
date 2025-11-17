"use client";
import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Link from "next/link";

export default function NavbarUser() {
  const [user, setUser] = useState<null | { email: string | null }>(null);

  useEffect(() => {
    return onAuthStateChanged(auth, (u) => setUser(u ? { email: u.email } : null));
  }, []);

  if (!user) {
    return (
      <Link href="/auth" className="px-4 py-2 rounded-xl border hover:bg-emerald-50">Giriş Yap</Link>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-slate-600">{user.email}</span>
      <button
        className="px-3 py-2 text-sm rounded-xl bg-emerald-600 text-white"
        onClick={() => signOut(auth)}
      >
        Çıkış
      </button>
    </div>
  );
}
