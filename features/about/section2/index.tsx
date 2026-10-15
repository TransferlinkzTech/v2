import { Reveal } from "@/components/reveal";

const STORY = [
  "Every day, thousands of guests land in an unfamiliar airport expecting someone to be waiting for them. Behind that simple promise sits a surprisingly fragile chain: an Excel manifest, a string of emails to suppliers, a driver with a name board, and an operations team on standby in case anything slips.",
  "When one link breaks, a flight lands early, a driver is at the wrong exit or a supplier never confirmed, the guest calls the operator, the operator calls the supplier, and a five-minute problem becomes an escalation. Most of these moments are avoidable. The information simply lives in too many places.",
  "TransferLinkz puts that information in one place. Operators upload the manifest they already use, suppliers confirm and assign drivers, guests get a temporary link with the meeting point and live status, and operations teams see only the transfers that genuinely need a person.",
];

export function Section2() {
  return (
    <section className="overflow-hidden border-y border-line-light bg-white">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-10 border-x border-line-light px-[29px] py-16 lg:h-[610px] lg:flex-row lg:justify-between lg:gap-0 lg:py-0 lg:pt-[151px]">
        <Reveal className="text-navy">
          <p className="text-xs leading-5 font-light uppercase">Our story</p>
          <h2 className="mt-[11px] max-w-[460px] text-[34px] leading-[1.2] font-semibold text-black lg:text-[48px] lg:leading-[58px]">
            Why TransferLinkz exists
          </h2>
        </Reveal>

        <div className="flex flex-col gap-3 text-sm leading-6 font-light text-navy lg:-mt-0.5 lg:w-[550px] lg:shrink-0">
          {STORY.map((paragraph, index) => (
            <Reveal as="p" key={paragraph} delay={index * 120}>
              {paragraph}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
