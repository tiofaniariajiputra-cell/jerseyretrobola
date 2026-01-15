"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  function validateEmail(e: string) {
    return /\S+@\S+\.\S+/.test(e);
  }

  function validatePhone(p: string) {
    return /^[0-9()+\-\s]{6,20}$/.test(p);
  }

  function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    setMessage(null);
    if (!username.trim()) {
      setMessage("Username harus diisi.");
      return;
    }
    if (!validateEmail(email)) {
      setMessage("Email tidak valid.");
      return;
    }
    if (!validatePhone(phone)) {
      setMessage("Nomor HP tidak valid (hanya angka dan simbol +,-,spasi).");
      return;
    }
    if (password.length < 6) {
      setMessage("Password minimal 6 karakter.");
      return;
    }
    // Frontend only — backend integration later
    setMessage("Akun dibuat (frontend only). Anda bisa lanjut ke login.");
  }

  return (
    <div className="site-bg min-h-[60vh] py-12">
      <div className="container-center">
        <div className="card mx-auto max-w-md">
          <div className="card-body">
            <h2 className="text-2xl card-title">Buat Akun Baru</h2>

            {message && <div className="rounded bg-yellow-50 p-2 text-sm">{message}</div>}

            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <div>
                <label className="block text-sm font-medium">Username</label>
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="input mt-1"
                  placeholder="username"
                  required
                />
              </div>

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
                <label className="block text-sm font-medium">No. HP</label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="input mt-1"
                  placeholder="08123456789"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Password Baru</label>
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
                <button type="submit" className="btn-primary">Buat Akun</button>
                <Link href="/login" className="text-sm muted">Sudah punya akun? Login</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
