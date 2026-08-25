"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { checkAuthSession, loginAdmin, getApiBaseUrl } from "@/lib/api";
import GalleryManager from "@/components/admin/GalleryManager";

export default function AdminPage() {
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [user, setUser] = useState(null);
  const [backendUrl, setBackendUrl] = useState("");

  // Login form state
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState("");

  useEffect(() => {
    setBackendUrl(getApiBaseUrl());

    async function verifyAuth() {
      try {
        setCheckingAuth(true);
        const res = await checkAuthSession();
        if (res && res.loggedIn && res.user) {
          setUser(res.user);
        } else {
          setUser(null);
        }
      } catch (err) {
        setUser(null);
      } finally {
        setCheckingAuth(false);
      }
    }

    verifyAuth();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError("");

    if (!username.trim() || !password.trim()) {
      setLoginError("Please enter both username and password");
      return;
    }

    try {
      setLoginLoading(true);
      const res = await loginAdmin(username.trim(), password);

      if (res && res.success && res.data) {
        setUser(res.data);
      } else {
        setLoginError(res.message || "Invalid username or password");
      }
    } catch (err) {
      setLoginError(err.message || "Failed to communicate with backend server");
    } finally {
      setLoginLoading(false);
    }
  };

  // Initial loading screen
  if (checkingAuth) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="w-10 h-10 border-3 border-[#0F6E57] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
          <p className="text-sm text-gray-500 font-medium">Checking session...</p>
        </div>
      </div>
    );
  }

  // Authenticated: Render Admin Dashboard
  if (user) {
    return <GalleryManager user={user} onLogout={() => setUser(null)} />;
  }

  // Unauthenticated: Render Admin Login Form
  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-50 via-gray-50 to-emerald-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md px-4 ">
        {/* Brand Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-4 group">
            <div className="w-12 h-12 rounded-2xl bg-[#0F6E57] text-white flex items-center justify-center text-2xl font-bold shadow-md group-hover:scale-105 transition-transform">
              S
            </div>
          </Link>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            SRF Admin Portal
          </h2>
          <p className="mt-2 text-sm text-gray-500 max-w-xs mx-auto">
            Sign in to manage gallery collections and foundation content.
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white py-8 px-6 sm:px-10 shadow-xl rounded-3xl border border-gray-100/80">
          {loginError && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 text-sm rounded-2xl flex items-start gap-3 animate-in fade-in duration-200">
              <svg className="w-5 h-5 text-red-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            {/* Username Input */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                Username
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="admin"
                  required
                  autoFocus
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0F6E57] focus:bg-white transition-all"
                />
                <svg
                  className="w-5 h-5 text-gray-400 absolute left-3.5 top-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full pl-10 pr-11 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0F6E57] focus:bg-white transition-all"
                />
                <svg
                  className="w-5 h-5 text-gray-400 absolute left-3.5 top-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600 focus:outline-none p-0.5"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loginLoading}
              className="w-full py-3.5 px-4 rounded-xl text-sm font-semibold text-white bg-[#0F6E57] hover:bg-[#0c5946] shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0F6E57] transition-all disabled:opacity-60 flex items-center justify-center gap-2 mt-6"
            >
              {loginLoading && (
                <svg className="animate-spin w-4 h-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
              )}
              <span>{loginLoading ? "Authenticating..." : "Sign In to Admin Portal"}</span>
            </button>
          </form>

          {/* Backend Info & Back link */}
          <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col items-center gap-2 text-center">
            {backendUrl && (
              <span className="text-[11px] text-gray-400 font-mono">
                API: {backendUrl}
              </span>
            )}
            <Link
              href="/"
              className="text-xs font-medium text-gray-500 hover:text-[#0F6E57] transition-colors inline-flex items-center gap-1.5 mt-1"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Back to main website</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
