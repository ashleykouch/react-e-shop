// create all the functions that are needed to create, read, update and delete data from firestore

import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firestore";

export const getTeaData = async () => {
  const collectionRef = collection(db, "tea");

  const querySnapshot = await getDocs(collectionRef);

  const data = querySnapshot.docs.map((doc) => {
    const id = doc.id;
    const restOfData = doc.data();

    return { id, ...restOfData };
  });

  return data;
};
