import { Section } from "@/schemas/section.schemas"
import { SectionCollection } from "../firebase.collections"
import { FirebaseError } from "@/errors/custom-errors"

export async function createSectionCanvasLMS(sections: Section[]) {
  try {
    const batch = SectionCollection.firestore.batch()

    sections.forEach((section) => {
      const sectionRef = SectionCollection.doc(section.id.toString())

      // I do not use the spread operator here because I want to be explicit about the fields I am setting
      batch.set(sectionRef, {
        name: section.name,
        course_id: section.course_id,
        sis_section_id: section.sis_section_id,
        integration_id: section.integration_id,
        sis_import_id: section.sis_import_id,
        sis_course_id: section.sis_course_id,
        start_at: section.start_at,
        end_at: section.end_at ?? null,
        restrict_enrollments_to_section_dates:
          section.restrict_enrollments_to_section_dates ?? null,
        nonxlist_course_id: section.nonxlist_course_id ?? null,
        total_students: section.total_students
      })
    })

    await batch.commit()
  } catch (error) {
    console.error("Error creating sections:", error)

    throw new FirebaseError("Error creating sections")
  }
}
