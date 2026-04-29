import svgPaths from "./svg-op408im1ko";
import clsx from "clsx";

function ServicesPage3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[542px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative size-full">{children}</div>
    </div>
  );
}
type Container10Props = {
  additionalClassNames?: string;
};

function Container10({ children, additionalClassNames = "" }: React.PropsWithChildren<Container10Props>) {
  return (
    <div className={clsx("basis-0 grow min-h-px min-w-px relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">{children}</div>
    </div>
  );
}

function Container9({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[rgba(37,99,235,0.1)] relative rounded-[12px] shrink-0 size-[48px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">{children}</div>
    </div>
  );
}
type Card3Props = {
  additionalClassNames?: string;
};

function Card3({ children, additionalClassNames = "" }: React.PropsWithChildren<Card3Props>) {
  return (
    <div className={clsx("bg-white relative rounded-[12px] shrink-0 w-full", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-[#cccccc] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pl-[25px] pr-px py-[25px] relative size-full">{children}</div>
      </div>
    </div>
  );
}

function Icon4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}
type ParagraphTextProps = {
  text: string;
};

function ParagraphText({ text }: ParagraphTextProps) {
  return (
    <div className="h-[24px] relative shrink-0 w-full">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#3f3f3f] text-[16px] text-nowrap top-0 whitespace-pre">{text}</p>
    </div>
  );
}
type HeadingTextProps = {
  text: string;
};

function HeadingText({ text }: HeadingTextProps) {
  return (
    <div className="content-stretch flex h-[31.188px] items-start relative shrink-0 w-full">
      <p className="basis-0 font-['Outfit:Bold',sans-serif] font-bold grow leading-[31.2px] min-h-px min-w-px relative shrink-0 text-[#3f3f3f] text-[24px]">{text}</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex h-[57.594px] items-start relative shrink-0 w-full" data-name="Heading 2">
      <p className="basis-0 font-['Roboto:Bold',sans-serif] font-bold grow leading-[57.6px] min-h-px min-w-px relative shrink-0 text-[#3f3f3f] text-[48px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        For Practitioners
      </p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#3f3f3f] text-[16px] top-0 w-[581px]">Access our secure database to efficiently check for patient debts while maintaining strict privacy compliance.</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[121.594px] items-start left-0 top-0 w-[592px]" data-name="Container">
      <Heading />
      <Paragraph />
    </div>
  );
}

function Icon() {
  return (
    <Icon4>
      <path d={svgPaths.p150db00} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </Icon4>
  );
}

function Container1() {
  return (
    <Container9>
      <Icon />
    </Container9>
  );
}

function Container2() {
  return (
    <Container10 additionalClassNames="h-[63.188px]">
      <HeadingText text="Strengthen Relationship" />
      <ParagraphText text="Make payment arrangements; keep your patient" />
    </Container10>
  );
}

function ServicesPage() {
  return (
    <ServicesPage3>
      <Container1 />
      <Container2 />
    </ServicesPage3>
  );
}

function Card() {
  return (
    <Card3 additionalClassNames="h-[113.188px]">
      <ServicesPage />
    </Card3>
  );
}

function Icon1() {
  return (
    <Icon4>
      <path d={svgPaths.pb67ee00} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </Icon4>
  );
}

function Container3() {
  return (
    <Container9>
      <Icon1 />
    </Container9>
  );
}

function Container4() {
  return (
    <Container10 additionalClassNames="h-[63.188px]">
      <HeadingText text="Compassion Sustainability" />
      <ParagraphText text="Keep clinic open, respected and financially healthy" />
    </Container10>
  );
}

function ServicesPage1() {
  return (
    <ServicesPage3>
      <Container3 />
      <Container4 />
    </ServicesPage3>
  );
}

function Card1() {
  return (
    <Card3 additionalClassNames="h-[113.188px]">
      <ServicesPage1 />
    </Card3>
  );
}

function Icon2() {
  return (
    <Icon4>
      <path d={svgPaths.p6b12f00} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </Icon4>
  );
}

function Container5() {
  return (
    <Container9>
      <Icon2 />
    </Container9>
  );
}

function Paragraph1() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#3f3f3f] text-[16px] top-0 w-[466px]">Instantly check if patients have outstanding medical debts over 90 days old</p>
    </div>
  );
}

function Container6() {
  return (
    <Container10 additionalClassNames="h-[87.188px]">
      <HeadingText text="Quick Debt Verification" />
      <Paragraph1 />
    </Container10>
  );
}

function ServicesPage2() {
  return (
    <ServicesPage3>
      <Container5 />
      <Container6 />
    </ServicesPage3>
  );
}

function Card2() {
  return (
    <Card3 additionalClassNames="h-[137.188px]">
      <ServicesPage2 />
    </Card3>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[395.563px] items-start left-0 top-[153.59px] w-[592px]" data-name="Container">
      <Card />
      <Card1 />
      <Card2 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[166.05px] size-[16px] top-[13px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M9 3L14 8M14 8L9 13M14 8H2" id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function SlotClone() {
  return (
    <div className="absolute border border-blue-600 border-solid h-[44px] left-0 rounded-[12px] top-[573.16px] w-[196.047px]" data-name="SlotClone">
      <p className="absolute font-['Outfit:Medium',sans-serif] font-medium leading-[17.143px] left-[12px] text-[12px] text-blue-600 text-nowrap top-[12.42px] whitespace-pre">Access Practitioner Portal</p>
      <Icon3 />
    </div>
  );
}

export default function Container8() {
  return (
    <div className="relative size-full" data-name="Container">
      <Container />
      <Container7 />
      <SlotClone />
    </div>
  );
}