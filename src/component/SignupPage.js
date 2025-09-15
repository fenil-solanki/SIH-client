import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "./Card";
import { Button } from "./Button";
import { Input } from "./Input";
import { motion } from "framer-motion";

export default function SignupPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = () => {
    // ✅ Replace with actual signup API call
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Signup Successful:", form);
    navigate("/"); // redirect back to chatbot after signup
  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-400 via-blue-500 to-indigo-600 px-4">
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="w-full max-w-md"
  >
    <Card className="bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl">
      {/* ... rest of your signup form */}
      <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-purple-600">
              ✨ Create Your Account
            </CardTitle>
            <p className="text-gray-500 text-sm mt-1">
              Join us to integrate NAMASTE ↔ ICD-11
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              type="text"
              name="name"
              placeholder="👤 Full Name"
              value={form.name}
              onChange={handleChange}
              className="rounded-xl border-gray-300 focus:ring-2 focus:ring-purple-500"
            />
            <Input
              type="email"
              name="email"
              placeholder="📧 Email Address"
              value={form.email}
              onChange={handleChange}
              className="rounded-xl border-gray-300 focus:ring-2 focus:ring-purple-500"
            />
            <Input
              type="password"
              name="password"
              placeholder="🔑 Password"
              value={form.password}
              onChange={handleChange}
              className="rounded-xl border-gray-300 focus:ring-2 focus:ring-purple-500"
            />
            <Input
              type="password"
              name="confirmPassword"
              placeholder="🔑 Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              className="rounded-xl border-gray-300 focus:ring-2 focus:ring-purple-500"
            />
            <Button
              onClick={handleSignup}
              className="w-full py-2 mt-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 text-white rounded-xl font-semibold shadow-lg"
            >
              🚀 Sign Up
            </Button>
            <p className="text-center text-sm text-gray-500 mt-3">
              Already have an account?{" "}
              <span
                className="text-purple-600 font-semibold cursor-pointer hover:underline"
                onClick={() => navigate("/login")}
              >
                Login here
              </span>
            </p>
          </CardContent>
    </Card>
  </motion.div>
</div>


    // <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 px-4">
    //   <motion.div
    //     initial={{ opacity: 0, y: 30 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 0.6 }}
    //     className="w-full max-w-md"
    //   >
    //     <Card className="bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl">
    //       <CardHeader className="text-center">
    //         <CardTitle className="text-2xl font-bold text-purple-600">
    //           ✨ Create Your Account
    //         </CardTitle>
    //         <p className="text-gray-500 text-sm mt-1">
    //           Join us to integrate NAMASTE ↔ ICD-11
    //         </p>
    //       </CardHeader>
    //       <CardContent className="space-y-4">
    //         <Input
    //           type="text"
    //           name="name"
    //           placeholder="👤 Full Name"
    //           value={form.name}
    //           onChange={handleChange}
    //           className="rounded-xl border-gray-300 focus:ring-2 focus:ring-purple-500"
    //         />
    //         <Input
    //           type="email"
    //           name="email"
    //           placeholder="📧 Email Address"
    //           value={form.email}
    //           onChange={handleChange}
    //           className="rounded-xl border-gray-300 focus:ring-2 focus:ring-purple-500"
    //         />
    //         <Input
    //           type="password"
    //           name="password"
    //           placeholder="🔑 Password"
    //           value={form.password}
    //           onChange={handleChange}
    //           className="rounded-xl border-gray-300 focus:ring-2 focus:ring-purple-500"
    //         />
    //         <Input
    //           type="password"
    //           name="confirmPassword"
    //           placeholder="🔑 Confirm Password"
    //           value={form.confirmPassword}
    //           onChange={handleChange}
    //           className="rounded-xl border-gray-300 focus:ring-2 focus:ring-purple-500"
    //         />
    //         <Button
    //           onClick={handleSignup}
    //           className="w-full py-2 mt-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 text-white rounded-xl font-semibold shadow-lg"
    //         >
    //           🚀 Sign Up
    //         </Button>
    //         <p className="text-center text-sm text-gray-500 mt-3">
    //           Already have an account?{" "}
    //           <span
    //             className="text-purple-600 font-semibold cursor-pointer hover:underline"
    //             onClick={() => navigate("/login")}
    //           >
    //             Login here
    //           </span>
    //         </p>
    //       </CardContent>
    //     </Card>
    //   </motion.div>
    // </div>
  );
}
