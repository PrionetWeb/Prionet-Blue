import svgPaths from "./svg-2kl9w2atfd";

function Heading() {
  return (
    <div className="content-stretch flex h-[57.594px] items-start relative shrink-0 w-full" data-name="Heading 2">
      <p className="basis-0 font-['Roboto:Bold',sans-serif] font-bold grow leading-[57.6px] min-h-px min-w-px relative shrink-0 text-[#3f3f3f] text-[48px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        Contact Prionet
      </p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p14aff780} id="Vector" stroke="var(--stroke-0, #3F3F3F)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p6b8c500} id="Vector_2" stroke="var(--stroke-0, #3F3F3F)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[24px] relative shrink-0 w-[291.094px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[291.094px]">
        <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-[146px] text-[#3f3f3f] text-[16px] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">Serving Healthcare Providers Nationwide</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Icon />
      <Text />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-[416.44px] text-[#3f3f3f] text-[16px] text-center top-0 translate-x-[-50%] w-[831px]">Priority Pay Network operates as a secure online platform serving healthcare providers and patients across the United States. Our support team is available to assist with any questions or technical issues.</p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-blue-600 h-[36px] relative rounded-[16px] shrink-0 w-[144.688px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[16px] py-[8px] relative w-[144.688px]">
        <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">(702) 570-5200</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white h-[36px] relative rounded-[16px] shrink-0 w-[230.984px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#cccccc] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[17px] py-[9px] relative w-[230.984px]">
        <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#3f3f3f] text-[16px] text-nowrap whitespace-pre">support@prioritypaynet.org</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row justify-center size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[36px] items-start justify-center pl-0 pr-[0.016px] py-0 relative w-full">
          <Button />
          <Button1 />
        </div>
      </div>
    </div>
  );
}

export default function Section() {
  return (
    <div className="bg-[rgba(229,231,235,0.2)] relative size-full" data-name="Section">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start px-[32px] py-0 relative size-full">
          <Heading />
          <Container />
          <Paragraph />
          <Container1 />
        </div>
      </div>
    </div>
  );
}