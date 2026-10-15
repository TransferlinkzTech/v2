import { Hero } from "./hero";
import { Section3 } from "./section3";
import { Section4 } from "./section4";
import { Section5 } from "./section5";
import { Section6 } from "./section6";
import { Section7 } from "./section7";
import { Section8 } from "./section8";

// Sections are added here one at a time as they are built, then composed in
// this file. The header and footer live in the root layout.
export function Home() {
  return (
    <>
      <Hero />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
    </>
  );
}
