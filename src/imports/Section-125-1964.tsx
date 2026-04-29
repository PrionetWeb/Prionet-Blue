function Heading() {
  return (
    <div className="content-stretch flex h-[57.594px] items-start relative shrink-0 w-full" data-name="Heading 2">
      <p className="basis-0 font-['Roboto:Bold',sans-serif] font-bold grow leading-[57.6px] min-h-px min-w-px relative shrink-0 text-[#3f3f3f] text-[48px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        Frequently Asked Questions
      </p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-[416.3px] text-[#3f3f3f] text-[16px] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">Common questions about Priority Pay Network and our services.</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[53px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Paragraph />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row justify-center size-full">
        <div className="h-[36px] w-full" />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-blue-600 box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[17px] py-[9px] relative rounded-[16px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">FAQ Page</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0 w-full" data-name="container">
      <Button />
    </div>
  );
}

export default function Section() {
  return (
    <div className="bg-[rgba(229,231,235,0.2)] relative size-full" data-name="Section">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[21px] items-start justify-center px-[32px] py-0 relative size-full">
          <Container />
          <Container1 />
          <Container2 />
        </div>
      </div>
    </div>
  );
}