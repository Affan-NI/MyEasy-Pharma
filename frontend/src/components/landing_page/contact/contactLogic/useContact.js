// import { useState } from "react";
// import { postContact } from "./api";

// export function useContact() {
//   const [loading, setLoading] = useState(false);
//   const [status, setStatus] = useState(null);

//   const submitContact = async (formData) => {
//     setLoading(true);
//     setStatus(null);

//     try {
//       await postContact(formData);
//       setStatus("success");
//     } catch {
//       setStatus("error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return { submitContact, loading, status };
// }

import { useState } from "react";

export function useContact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const submitContact = async (formData) => {
    setLoading(true);
    setStatus(null);

    console.log("CONTACT FORM DATA:", formData);

    // ✅ TEMP FAKE API
    setTimeout(() => {
      setStatus("success");
      setLoading(false);
    }, 1000);
  };

  return { submitContact, loading, status };
}

