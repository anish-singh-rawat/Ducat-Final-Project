import { addDoc, collection, query, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

export const getProductFromFirebse = async () => {
  let ref = collection(db, "products");
  const q = query(ref);

  const querySnapshot = await getDocs(q);

  let data = [];


  querySnapshot.forEach((doc) => {

    let d = doc.data();
    d.id = doc.id

    data.push(d)

  });
  return data
}

export const addProducttofirebase = async (data) => {

  try {
    let ref = collection(db, "products");
    const docRef = await addDoc(ref, data);
    return true
  } catch (e) {
    return e.message
  }

}


export const deleteProductFromfirebase = async (data) => {

  try {
    let ref = doc(db, "products", data.id)
    await deleteDoc(ref);
    return true

  } catch (e) {
    return e.message
  }

}


export const updateProductFromfirebase = async (id, data) => {

  try {
    let ref = doc(db, "products", id)
    await updateDoc(ref, data);
    return true

  } catch (e) {
    return e.message
  }

}