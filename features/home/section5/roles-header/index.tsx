import { Reveal } from "@/components/reveal";

export function RolesHeader() {
  return (
    <Reveal className="text-center text-white">
      <p className="text-xs leading-5 font-light uppercase">
        Purpose-built experiences
      </p>
      <h2 className="mt-[13px] text-[28px] leading-10 font-semibold lg:text-[40px] lg:leading-[58px]">
        One operation.
        <br />
        The right view for every role.
      </h2>
    </Reveal>
  );
}
