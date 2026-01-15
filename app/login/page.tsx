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
    <div className="site-bg min-h-[60vh] py-12">
      <div className="container-center">
        <div className="card mx-auto max-w-md">
          <div className="card-body">
            <h2 className="text-2xl card-title">Login</h2>

            {message && <div className="rounded bg-yellow-50 p-2 text-sm">{message}</div>}

            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input mt-1"
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
                  className="input mt-1"
                  placeholder="Minimal 6 karakter"
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <button type="submit" className="btn-primary">Login</button>
                <Link href="/register" className="text-sm muted">Buat akun baru</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
