import { db } from "./firebaseConfiguration.js";
import { collection, getDocs } from "firebase/firestore";
import { sanitize } from "../utilities.js";

export const fbClubsCollection = collection(db, "clubs-2023");

export async function readClubsFromFirestore() {
    const clubs = [];

    const querySnapshot = await getDocs(collection(db, "clubs-2023"));

    querySnapshot.forEach((doc) => {
        let clubData = { ...doc.data(), id: doc.id };
        clubData.name = sanitize(clubData.name);
        clubData.description = sanitize(clubData.description);
        console.log(clubData);

        clubs.push(clubData);
    });
}
