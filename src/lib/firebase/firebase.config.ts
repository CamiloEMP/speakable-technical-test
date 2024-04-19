import firebaseAdmin from "firebase-admin"

import serviceAccount from "../../../serviceAccountKey.json"
import { getFirestore } from "firebase-admin/firestore"

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(
    serviceAccount as firebaseAdmin.ServiceAccount
  )
})

export const firestore = getFirestore()
