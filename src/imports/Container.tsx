import svgPaths from "./svg-7etw8w67m5";

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p7f68dc0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-blue-600 relative rounded-[12px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[40px]">
        <Icon />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex h-[31.188px] items-start relative shrink-0 w-full" data-name="Heading 4">
      <p className="basis-0 font-['Outfit:Bold',sans-serif] font-bold grow leading-[31.2px] min-h-px min-w-px relative shrink-0 text-[#3f3f3f] text-[24px]">User-Friendly</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#3f3f3f] text-[12px] top-0 w-[522px]">Intuitive dashboard designed for busy healthcare professionals. Get the information you need quickly without complicated workflows or training.</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="basis-0 grow h-[75.188px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-[75.188px] items-start relative w-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

export default function Container2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative size-full" data-name="Container">
      <Container />
      <Container1 />
    </div>
  );
}