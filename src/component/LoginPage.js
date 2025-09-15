import React, { useState } from "react";
import { motion } from "framer-motion";
import { Stethoscope, Lock, Mail } from "lucide-react";
import { Button } from "./Button";
import { Input } from "./Input";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login:", { email, password });
    // 🔗 Later: call your API for authentication
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-r from-green-400 via-blue-500 to-indigo-600">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/20 backdrop-blur-lg p-10 rounded-2xl shadow-2xl w-full max-w-md"
      >
        {/* Logo */}
        <div className="flex items-center justify-center mb-6 text-white">
          <Stethoscope className="w-10 h-10 mr-2" />
          <h1 className="text-2xl font-bold tracking-wide">
            NAMASTE ↔ ICD-11
          </h1>
        </div>

        {/* Title */}
        <h2 className="text-center text-xl font-semibold text-white mb-6">
          🔐 Login to your account
        </h2>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="w-full pl-12 pr-4 py-3 rounded-full bg-white/80 shadow-md focus:ring-2 focus:ring-blue-400 border-none text-gray-800"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full pl-12 pr-4 py-3 rounded-full bg-white/80 shadow-md focus:ring-2 focus:ring-blue-400 border-none text-gray-800"
            />
          </div>

          {/* Login Button */}
          <Button
            type="submit"
            className="w-full rounded-full py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold shadow-md hover:opacity-90 transition"
          >
            Login
          </Button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-white mt-6">
          Don’t have an account?{" "}
          <a href="/signup" className="underline font-medium hover:text-yellow-200">
            Sign up
          </a>
        </p>
      </motion.div>
    </div>
  );
}
