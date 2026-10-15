export type WaitlistField = "name" | "email" | "company";

export type WaitlistValues = Record<WaitlistField, string>;

// What the form gets back from the server action. On an error the entered
// values come back too, because React clears the form after every submit.
export type WaitlistState =
  | { status: "idle" }
  | { status: "success" }
  | {
      status: "error";
      // A problem that isn't about one field, such as the database being down
      message?: string;
      fieldErrors?: Partial<Record<WaitlistField, string>>;
      values: WaitlistValues;
    };

export const INITIAL_WAITLIST_STATE: WaitlistState = { status: "idle" };
