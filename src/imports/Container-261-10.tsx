function AboutPage() {
  return (
    <div className="absolute content-stretch flex h-[57.594px] items-start left-0 top-0 w-[1216px]" data-name="AboutPage">
      <p className="basis-0 font-['Roboto:Bold',sans-serif] font-bold grow leading-[57.6px] min-h-px min-w-px relative shrink-0 text-[#3f3f3f] text-[48px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        What Makes Us Different
      </p>
    </div>
  );
}

function AboutPage1() {
  return (
    <div className="absolute h-[48px] left-[272px] top-[73.59px] w-[672px]" data-name="AboutPage">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-[336.33px] text-[#3f3f3f] text-[16px] text-center top-0 translate-x-[-50%] w-[670px]">Priority Payment Network is specifically designed to facilitate health care debt management between patients and providers, enabling them to agree on mutual payment arrangements through fair, friendly, and bi-directional accountability.</p>
    </div>
  );
}

export default function Container() {
  return (
    <div className="relative size-full" data-name="Container">
      <AboutPage />
      <AboutPage1 />
    </div>
  );
}