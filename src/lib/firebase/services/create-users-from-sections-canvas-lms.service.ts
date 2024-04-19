import { Section } from "@/schemas/section.schemas"
import { UserCollection } from "../firebase.collections"
import { UserCanvasLMS } from "@/schemas/user.schemas"
import { FirebaseError } from "@/errors/custom-errors"

export async function createUsersFromSectionsCanvasLMS(sections: Section[]) {
  const users: UserCanvasLMS[] = sections
    .map((section) => section.students)
    .flat()
    .filter((i) => i == null) as UserCanvasLMS[]

  if (!users) return

  try {
    const batch = UserCollection.firestore.batch()

    users.forEach((user) => {
      const userRef = UserCollection.doc(user.id.toString())

      batch.set(userRef, {
        username: user.name,
        last_name: user.last_name,
        first_name: user.first_name,
        sortable_name: user.sortable_name,
        short_name: user.short_name,
        sis_user_id: user.sis_user_id,
        sis_import_id: user.sis_import_id,
        integration_id: user.integration_id,
        login_id: user.login_id,
        avatar_url: user.avatar_url ?? null,
        avatar_state: user.avatar_state,
        enrollments: user.enrollments ?? null,
        email: user.email,
        locale: user.locale,
        last_login: user.last_login,
        time_zone: user.time_zone,
        bio: user.bio
      })
    })

    await batch.commit()
  } catch (error) {
    console.error("Error creating users:", error)

    throw new FirebaseError("Error creating users")
  }
}
