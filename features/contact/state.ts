export type ContactField = "name" | "email" | "company" | "role" | "message";

export type ContactValues = Record<ContactField, string>;

// What the form gets back from the server action. On an error the entered
// values come back too, because React clears the form after every submit.
export type ContactState =
  | { status: "idle" }
  | { status: "success" }
  | {
      status: "error";
      // A problem that isn't about one field, such as the email not sending
      message?: string;
      fieldErrors?: Partial<Record<ContactField, string>>;
      values: ContactValues;
    };

export const INITIAL_CONTACT_STATE: ContactState = { status: "idle" };
