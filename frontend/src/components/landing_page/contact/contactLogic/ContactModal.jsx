// import { useState } from "react";
// import { useContact } from "./useContact";

// export function ContactModal({ open, onClose }) {
//   const { submitContact, loading, status } = useContact();
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   if (!open) return null;

//   return (
//     <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
//       <div className="bg-white p-6 rounded-xl w-full max-w-md relative">

//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 text-gray-500"
//         >
//           ✕
//         </button>

//         <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>

//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             submitContact(form);
//           }}
//           className="space-y-4"
//         >
//           <input
//             placeholder="Name"
//             className="w-full p-3 border rounded"
//             onChange={(e) =>
//               setForm({ ...form, name: e.target.value })
//             }
//           />

//           <input
//             placeholder="Email"
//             className="w-full p-3 border rounded"
//             onChange={(e) =>
//               setForm({ ...form, email: e.target.value })
//             }
//           />

//           <textarea
//             placeholder="Message"
//             className="w-full p-3 border rounded"
//             onChange={(e) =>
//               setForm({ ...form, message: e.target.value })
//             }
//           />

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-3 rounded"
//             disabled={loading}
//           >
//             {loading ? "Sending..." : "Submit"}
//           </button>

//           {status === "success" && (
//             <p className="text-green-600 text-sm">Message sent</p>
//           )}
//           {status === "error" && (
//             <p className="text-red-600 text-sm">Failed to send</p>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";
// import { Mail, User, MessageSquare, X, CheckCircle } from "lucide-react";
// import { useContact } from "./useContact";

// export function ContactModal({ open, onClose }) {
//   const { submitContact, loading, status } = useContact();

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     company: "",
//     message: "",
//   });

//   if (!open) return null;

//   return (
//     <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4">
//       <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl relative overflow-hidden">

//         {/* Header */}
//         <div className="px-6 py-5 border-b bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
//           <h3 className="text-xl font-semibold">Get in Touch</h3>
//           <p className="text-sm text-blue-100">
//             Tell us a bit about your needs — we’ll take it from there.
//           </p>
//           <button
//             onClick={onClose}
//             className="absolute top-4 right-4 text-white/80 hover:text-white"
//           >
//             <X />
//           </button>
//         </div>

//         {/* Body */}
//         <div className="p-6 space-y-4">
//           {/* Name */}
//           <div className="relative">
//             {/* <User className="pl-60 absolute left-3 top-3.5 text-gray-400 w-5 h-5" /> */}
//             <input
//               className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
//               placeholder="Your name"
//               onChange={(e) =>
//                 setForm({ ...form, name: e.target.value })
//               }
//             />
//           </div>

//           {/* Email */}
//           <div className="relative">
//             {/* <Mail className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" /> */}
//             <input
//               type="email"
//               className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
//               placeholder="Work email"
//               onChange={(e) =>
//                 setForm({ ...form, email: e.target.value })
//               }
//             />
//           </div>

//           {/* Company (optional) */}
//           <div className="relative">
//             <input
//               className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
//               placeholder="Organization (optional)"
//               onChange={(e) =>
//                 setForm({ ...form, company: e.target.value })
//               }
//             />
//           </div>

//           {/* Message */}
//           <div className="relative">
//             {/* <MessageSquare className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" /> */}
//             <textarea
//               rows="4"
//               className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none resize-none"
//               placeholder="How can we help you?"
//               onChange={(e) =>
//                 setForm({ ...form, message: e.target.value })
//               }
//             />
//           </div>

//           {/* Submit */}
//           <button
//             onClick={() => submitContact(form)}
//             disabled={loading}
//             className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:opacity-90 transition"
//           >
//             {loading ? "loading..." : "Submit"}
//           </button>

//           {/* Status */}
//           {status === "success" && (
//             <div className="flex items-center gap-2 text-green-600 text-sm mt-2">
//               <CheckCircle className="w-4 h-4" />
//               Submitted successfully
//             </div>
//           )}

//           {status === "error" && (
//             <p className="text-red-600 text-sm">
//               Something went wrong. Try again.
//             </p>
//           )}

//           {/* Trust */}
//           <p className="text-xs text-gray-500 text-center mt-4">
//             We respect your privacy. No spam. No selling your data.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { X, CheckCircle } from "lucide-react";
import { useContact } from "./useContact";

export function ContactModal({ open, onClose }) {
  const { submitContact, loading, status } = useContact();

  const initialForm = {
    name: "",
    email: "",
    company: "",
    message: "",
  };

  const [form, setForm] = useState(initialForm);

  // ✅ SUCCESS ke baad form reset
  useEffect(() => {
    if (status === "success") {
      setForm(initialForm);
    }
  }, [status]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4">
      {/* <div className="bg-white rounded-2xl w-1/4 max-w-lg shadow-2xl relative overflow-hidden"> */}
      <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl relative overflow-hidden">
  
        {/* HEADER SECTION */}
        <div className="px-6 py-5 border-b bg-gradient-to-r from-blue-600 to-indigo-600 text-white relative">
            <h3 className="text-xl font-semibold">Get in Touch</h3>
            <p className="text-sm text-blue-100">
            Tell us a bit about your needs — we’ll take it from there.
            </p>

            {/* CLOSE BUTTON - Isse Header ke andar hona chahiye */}
            <button
            onClick={onClose}
            aria-label="Close contact form"
            className="absolute top-10 right-10 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all"
            >
            <X className="w-5 h-5 text-white" />
            </button>
        </div>

        {/* BODY */}
        <div className="p-6 space-y-4">
          <input
            value={form.name}
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Your name"
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            value={form.email}
            type="email"
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Work email"
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <input
            value={form.company}
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Organization (optional)"
            onChange={(e) =>
              setForm({ ...form, company: e.target.value })
            }
          />

          <textarea
            value={form.message}
            rows="4"
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none resize-none"
            placeholder="How can we help you?"
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
          />

          <button
            onClick={() => submitContact(form)}
            disabled={loading}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:opacity-90 transition disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>

          {status === "success" && (
            <div className="flex items-center gap-2 text-green-600 text-sm mt-2">
              <CheckCircle className="w-4 h-4" />
              Submitted successfully. You can submit again.
            </div>
          )}

          {status === "error" && (
            <p className="text-red-600 text-sm">
              Something went wrong. Try again.
            </p>
          )}

          <p className="text-xs text-gray-500 text-center mt-4">
            We respect your privacy. No spam. No selling your data.
          </p>
        </div>
      </div>
    </div>
  );
}
