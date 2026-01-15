"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  function validateEmail(e: string) {
    return /\S+@\S+\.\S+/.test(e);
  }

  function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    setMessage(null);
    if (!validateEmail(email)) {
      setMessage("Masukkan email yang valid.");
      return;
    }
    if (password.length < 6) {
      setMessage("Password minimal 6 karakter.");
      return;
    }
    // Frontend only — backend integration later
    setMessage("Login submitted (frontend only)");
  }

  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4 rounded border p-6 shadow-sm bg-white">
        <h2 className="text-2xl font-semibold">Login</h2>

        {message && <div className="rounded bg-yellow-50 p-2 text-sm">{message}</div>}

        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full rounded border px-3 py-2"
            placeholder="nama@contoh.com"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full rounded border px-3 py-2"
            placeholder="Minimal 6 karakter"
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <button type="submit" className="rounded bg-black px-4 py-2 text-white">
            Login
          </button>
          <Link href="/register" className="text-sm text-blue-600">
            Buat akun baru
          </Link>
        </div>
      </form>
    </div>
  );
}
