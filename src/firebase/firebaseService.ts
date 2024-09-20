import { signInWithEmailAndPassword } from "firebase/auth";
import {
  get,
  limitToLast,
  onChildAdded,
  query,
  ref,
  remove,
} from "firebase/database";
import { auth, database } from "./config";

async function authenticate() {
  const email = "esp32@gmail.com";
  const password = "esp32user";

  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("Authenticated successfully");
  } catch (error) {
    console.error("Authentication failed:", error);
    throw error;
  }
}

export async function fetchDataAndUpdate(
  setData: (data: any) => void,
  setNewData: (data: any) => void
) {
  await authenticate();

  const dataRef = ref(database, "ESP32Data");
  const dataQuery = query(dataRef, limitToLast(10));

  // Fetch the latest 10 entries initially
  const snapshot = await get(dataQuery);
  const initialData = snapshot.val();

  if (initialData) {
    console.log("Initial 10 entries:", initialData);
    setData(Object.values(initialData));
  } else {
    console.log("No data available");
    setData([]);
  }

  // Listen for new data
  onChildAdded(dataRef, (snapshot) => {
    const newData = snapshot.val();
    const newKey = snapshot.key;
    console.log("New data added:", newData);
    setNewData(newData);

    // Fetch all entries to check if there are more than 10
    get(dataRef).then((snapshot) => {
      const allData = snapshot.val();
      const allKeys = Object.keys(allData);

      // If there are more than 10 entries, delete the oldest one
      if (allKeys.length > 10) {
        const oldestKey = allKeys[0];
        remove(ref(database, `ESP32Data/${oldestKey}`));
      }
    });
  });
}
