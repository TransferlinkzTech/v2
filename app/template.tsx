import { ViewTransition, type ReactNode } from "react";

// A template re-mounts on every navigation, so React plays the page's exit and
// the next page's enter as a browser view transition. The header and footer
// sit outside it and stay put. Browsers without the View Transitions API
// simply navigate as normal (see the "Page transitions" CSS in globals.css).
export default function Template({ children }: { children: ReactNode }) {
  return (
    <ViewTransition enter="page-enter" exit="page-exit" default="none">
      {children}
    </ViewTransition>
  );
}
