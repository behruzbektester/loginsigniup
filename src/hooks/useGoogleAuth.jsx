// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { auth } from "../firebase/config";
// import { useState } from "react";

// import { login } from "../app/features/userSlice";
// import { useDispatch } from "react-redux";

// export function useGoogleAuth() {
//   const dispatch = useDispatch();
//   const [isPending, setIsPending] = useState(false);
//   const signInGoogle = async () => {
//     const provider = new GoogleAuthProvider();
//     try {
//       setIsPending(true);
//       const req = await signInWithPopup(auth, provider);

//       if (!req.user) {
//         throw new Error("Something went wrong");
//       }

//       const user = req.user;
//       dispatch(login(user));
//     } catch (error) {
//       console.log(error.message);
//     } finally {
//       setIsPending(false);
//     }
//   };
//   return { signInGoogle, isPending };
// }
