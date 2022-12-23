// create all the functions that are needed to create, read, update and delete data from firestore

import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../Firestore";

export const getCoffeeData = async () => {
  const collectionRef = collection(db, "coffee");

  const querySnapshot = await getDocs(collectionRef);

  //   i want this function to return an aray of data, so i can set state to it, then map to render a data card

  const data = querySnapshot.docs.map((doc) => {
    const id = doc.id;
    const restOfData = doc.data();

    return { id, ...restOfData };
  });

  return data;
};

// export const addCoffee = async (data) => {
//   const { productName, productBrand, productPrice } = data;
//   const coffee = { productName, productBrand, productPrice };

//   const collectionRef = collection(db, "coffee");

//   const newDoc = await addDoc(collectionRef, coffee);

//   console.log(newDoc, "new doc added");

//   return newDoc;
// };
