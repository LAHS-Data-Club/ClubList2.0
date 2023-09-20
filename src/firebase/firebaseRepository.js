import { db } from "./firebaseConfiguration.js";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { sanitize } from "../utilities.js";

export const fbClubsCollection = collection(db, "clubs-2023");

export async function readClubsFromFirestore(resolve) {
    const clubs = [];

    const querySnapshot = await getDocs(fbClubsCollection);

    querySnapshot.forEach((doc) => {
        let clubData = { ...doc.data(), id: doc.id };
        // console.log(clubData);

        clubs.push(clubData);
    });

    localStorage.setItem("last_loaded", new Date());
    localStorage.setItem("clubs", JSON.stringify(clubs));

    resolve(clubs);
}

// export async function readClubFromFirestore(resolve, reject, id) {
//     const querySnapshot = await getDoc(doc(db, "clubs-2023", id));

//     querySnapshot.forEach((doc) => {
//         let clubData = { ...doc.data(), id: doc.id };
//         // console.log(clubData);

//         clubs.push(clubData);
//     });

//     localStorage.setItem("last_loaded", new Date());
//     localStorage.setItem("clubs", JSON.stringify(clubs));

//     resolve(clubs);
// }
