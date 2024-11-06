// import { db } from "./../../../firebase";
// import { collection, writeBatch, doc } from "firebase/firestore";

// import { competitionData } from "./../competition/data";
// import { bootcampData } from "./../bootcamp/data";
// import { DataHome } from "./../home/data";
// import { Data } from "./../meetup/data";

// export default async function Batch() {
//   const dataImport = Data.dataMeetup;
//   const collectionDB = "meetup";

//   const batch = writeBatch(db);
//   const collectionRef = collection(db, collectionDB);

//   dataImport.forEach((data) => {
//     const docRef = doc(collectionRef);
//     batch.set(docRef, data);
//   });

//   try {
//     await batch.commit();
//     console.log("Batch insert completed successfully.");
//   } catch (error) {
//     console.error("Error executing batch insert:", error);
//   }
// }
