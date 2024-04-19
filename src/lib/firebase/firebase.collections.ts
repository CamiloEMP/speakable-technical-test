import { firestore } from "./firebase.config"

export const UserCollection = firestore.collection("users")
export const SectionCollection = firestore.collection("sections")
