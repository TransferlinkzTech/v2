// A small in-memory limiter for the forms. These forms send email to whatever
// address is typed in, so without a limit they could be used to spam someone.
//
// It counts per server process: good enough to stop casual abuse, but on a host
// that runs many short-lived copies of the site each copy counts separately.
// For a hard limit, move the counts to a shared store.

type Window = { count: number; resetAt: number };

const windows = new Map<string, Window>();

// Returns true if this attempt is allowed, false once `limit` attempts have
// been used within `windowMs`.
export function allow(key: string, limit: number, windowMs: number) {
  const now = Date.now();

  if (windows.size > 5_000) {
    for (const [k, w] of windows) if (w.resetAt <= now) windows.delete(k);
  }

  const current = windows.get(key);
  if (!current || current.resetAt <= now) {
    windows.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }
  if (current.count >= limit) return false;
  current.count += 1;
  return true;
}
