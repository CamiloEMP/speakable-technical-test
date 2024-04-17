import { User } from "./user.schemas"

export interface Section {
  // The unique identifier for the section.
  id: string
  // The name of the section.
  name: string
  // The sis id of the section. This field is only included if the user has
  // permission to view SIS information.
  sis_section_id: string
  // Optional: The integration ID of the section. This field is only included if
  // the user has permission to view SIS information.
  integration_id: string
  // The unique identifier for the SIS import if created through SIS. This field
  // is only included if the user has permission to manage SIS information.
  sis_import_id: number
  // The unique Canvas identifier for the course in which the section belongs
  course_id: number
  // The unique SIS identifier for the course in which the section belongs. This
  // field is only included if the user has permission to view SIS information.
  sis_course_id: string
  // the start date for the section, if applicable
  start_at: string
  // the end date for the section, if applicable
  end_at: string | null
  // Restrict user enrollments to the start and end dates of the section
  restrict_enrollments_to_section_dates: null
  // The unique identifier of the original course of a cross-listed section
  nonxlist_course_id: string | null
  // optional: the total number of active and invited students in the section
  total_students: number
  // optional: if (students param) is included
  students?: User[]
}

export interface SectionGetParams {
  include:
    | "students"
    | "avatar_url"
    | "enrollments"
    | "total_students"
    | "passback_status"
    | "permissions"
  search_term: string
}
