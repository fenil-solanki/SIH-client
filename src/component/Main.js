import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Stethoscope, PlusCircle } from "lucide-react";
import { Button } from "./Button";
import { Input } from "./Input";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();
  const [consultations, setConsultations] = useState([
    {
      id: 1,
      messages: [{ role: "bot", text: "👋 Welcome to NAMASTE ↔ ICD-11 Chatbot!" }],
    },
  ]);
  const [activeConsultation, setActiveConsultation] = useState(1);
  const [input, setInput] = useState("");

  // Start a new consultation
  const startNewConsultation = () => {
    const newId = consultations.length + 1;
    const newConsult = {
      id: newId,
      messages: [{ role: "bot", text: "👋 New consultation started." }],
    };
    setConsultations([...consultations, newConsult]);
    setActiveConsultation(newId);
  };

  // Send message in current consultation
  const sendMessage = () => {
    if (!input.trim()) return;
    const updatedConsults = consultations.map((c) =>
      c.id === activeConsultation
        ? { ...c, messages: [...c.messages, { role: "user", text: input }] }
        : c
    );
    setConsultations(updatedConsults);
    setInput("");
    // 🔮 Example bot reply (replace with NAMASTE ↔ ICD-11 API call)
    setTimeout(() => {
      const botReply = {
        role: "bot",
        text: `🤖 Processing "${input}" using NAMASTE ↔ ICD-11 integration...`,
      };
      setConsultations((prev) =>
        prev.map((c) =>
          c.id === activeConsultation
            ? { ...c, messages: [...c.messages, botReply] }
            : c
        )
      );
    }, 800);
  };

  // Get current consultation
  const currentConsultation = consultations.find(
    (c) => c.id === activeConsultation
  );

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-72 bg-white shadow-xl border-r flex flex-col">
        <div className="p-4 border-b">
          <Button
            onClick={startNewConsultation}
            className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg flex items-center justify-center gap-2 hover:opacity-90 shadow-md"
          >
            <PlusCircle className="w-5 h-5" /> New Consultation
          </Button>
        </div>
        <div className="flex-1 overflow-y-auto p-2">
          {consultations.map((c) => (
            <div
              key={c.id}
              onClick={() => setActiveConsultation(c.id)}
              className={`p-3 mb-2 rounded-lg cursor-pointer transition ${
                activeConsultation === c.id
                  ? "bg-blue-100 border border-blue-400"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              <h2 className="font-semibold text-gray-800">
                Consultation {c.id}
              </h2>
              <p className="text-sm text-gray-600 truncate">
                {c.messages[c.messages.length - 1]?.text}
              </p>
            </div>
          ))}
        </div>
      </aside>

      {/* Chat Area */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
         <header className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-green-600 via-blue-600 to-indigo-600 text-white shadow-lg">
      <h1 className="text-xl font-bold flex items-center gap-2">
        NAMASTE ↔ ICD-11 Chatbot
      </h1>
      <div className="flex gap-3">
        <Button
          className="bg-green-500 text-white hover:bg-green-600 px-4 rounded-lg shadow-md"
          onClick={() => navigate("/login")}   // ✅ go to login page
        >
          Login
        </Button>
        <Button
  className="bg-blue-500 text-white hover:bg-blue-600 px-4 rounded-lg shadow-md"
  onClick={() => navigate("/signup")}
>
  Signup
</Button>
      </div>
    </header>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {currentConsultation?.messages.map((m, i) => (
            <div
              key={i}
              className={`flex ${
                m.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`px-4 py-2 rounded-2xl shadow-sm max-w-lg ${
                  m.role === "user"
                    ? "bg-blue-500 text-white rounded-br-none"
                    : "bg-green-100 text-gray-800 rounded-bl-none"
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}
        </div>

       {/* Input Area */}
<div className="p-4 border-t bg-gradient-to-r from-blue-50 to-purple-50 flex items-center justify-center">
  <div className="w-full max-w-3xl relative">
    <Input
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          sendMessage();
        }
      }}
      placeholder="💬 Ask about NAMASTE ↔ ICD-11..."
      className="w-full rounded-full px-6 py-4 pr-14 
                 shadow-lg bg-white/80 backdrop-blur-md
                 border border-transparent
                 focus:border-transparent focus:outline-none
                 focus:ring-2 focus:ring-purple-400/50
                 placeholder-gray-500 text-gray-800
                 transition-all duration-300 ease-in-out"
    />
    {/* Send button inside input */}
    <Button
      onClick={sendMessage}
      disabled={!input.trim()}
      className={`absolute right-3 top-1/2 -translate-y-1/2 
                  rounded-full p-3 transition-all duration-300 shadow-md
                  ${
                    input.trim()
                      ? "bg-gradient-to-r from-purple-500 to-blue-500 hover:scale-105 hover:shadow-xl text-white"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
    >
      <Send className="w-5 h-5" />
    </Button>
  </div>
</div>





      </main>
    </div>
  );
}



// import React, { useState } from 'react'
// import {Button} from './Button'
// // import Card from './Card'
// import { Input } from './Input'
// import {Search} from './Search'
// import { Card } from './Card'
// import { CardHeader } from './Card'
// import { CardContent } from './Card'
// import { CardTitle } from './Card'

// const Main = () => {

//     const [query, setQuery] = useState("");
// const [results, setResults] = useState([]);
// const [loading, setLoading] = useState(false);

//     const handleSearch = async () => {
//         setLoading(true);
//         // Simulate API call
//         setTimeout(() => {
//             setResults([
//                 {
//                     code: "TM2-123",
//                     title: "Traditional Medicine Disorder Example",
//                     description:
//                         "A sample disorder description retrieved from ICD-11 TM2/NAMASTE API.",
//                 },
//                 {
//                     code: "TM2-456",
//                     title: "Herbal Treatment Category",
//                     description:
//                         "Example entry for herbal treatments as per NAMASTE/ICD-11 classification.",
//                 },
//             ]);
//             setLoading(false);
//         }, 1200);
//     };


//     return (

//         <div className="min-h-screen bg-gray-50 p-6">
//             <div className="max-w-3xl mx-auto">
//                 <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
//                     NAMASTE & ICD-11 TM2 Integration
//                 </h1>


//                 {/* Search Bar */}
//                 <div className="flex gap-2 mb-6">
//                     <Input
//                         placeholder="Search ICD-11 TM2 / NAMASTE codes..."
//                         value={query}
//                         onChange={(e) => setQuery(e.target.value)}
//                         className="flex-1"
//                     />
//                     <Button onClick={handleSearch} disabled={!query || loading}>
//                         <Search className="h-4 w-4 mr-1" /> Search
//                     </Button>
//                 </div>


//                 {/* Results */}
//                 {loading ? (
//                     <p className="text-center text-gray-500">Searching...</p>
//                 ) : results.length > 0 ? (
//                     <div className="space-y-4">
//                         {results.map((item, idx) => (
//                             <Card key={idx} className="shadow-md hover:shadow-lg transition">
//                                 <CardHeader>
//                                     <CardTitle>
//                                         {item.code} - {item.title}
//                                     </CardTitle>
//                                 </CardHeader>
//                                 <CardContent>
//                                     <p className="text-gray-700">{item.description}</p>
//                                 </CardContent>
//                             </Card>
//                         ))}
//                     </div>
//                 ) : (
//                     <p className="text-center text-gray-400">
//                         Enter a keyword to search NAMASTE/ICD-11 TM2 records.
//                     </p>
//                 )}
//             </div>
//         </div>

//     );
// }

// export default Main