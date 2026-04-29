import svgPaths from "./svg-uyejqot5bo";

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1ffe6e50} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="absolute bg-[rgba(37,99,235,0.1)] content-stretch flex items-center justify-center left-[94px] rounded-[16px] size-[48px] top-[24px]" data-name="ContactPage">
      <Icon />
    </div>
  );
}

function ContactPage1() {
  return (
    <div className="absolute content-stretch flex h-[31.188px] items-start left-[24px] top-[88px] w-[188px]" data-name="ContactPage">
      <p className="basis-0 font-['Outfit:Bold',sans-serif] font-bold grow leading-[31.2px] min-h-px min-w-px relative shrink-0 text-[#3f3f3f] text-[24px] text-center">Email Support</p>
    </div>
  );
}

function ContactPage2() {
  return (
    <div className="absolute h-[24px] left-[24px] top-[127.19px] w-[188px]" data-name="ContactPage">
      <a className="[white-space-collapse:collapse] absolute block font-['Outfit:Regular',sans-serif] font-normal leading-[0] left-[98.5px] text-[#3f3f3f] text-[16px] text-center text-nowrap top-0 translate-x-[-50%]" href="mailto:support@prionetprovider.com">
        <p className="[text-underline-position:from-font] cursor-pointer decoration-solid leading-[24px] underline whitespace-pre">support@prionetprovider.com</p>
      </a>
    </div>
  );
}

function ContactPage3() {
  return (
    <div className="absolute h-[24px] left-[24px] top-[159.19px] w-[188px]" data-name="ContactPage">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-[94.34px] text-[#3f3f3f] text-[16px] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">Response within 24 hours</p>
    </div>
  );
}

function CardContent() {
  return (
    <div className="h-[207.188px] relative shrink-0 w-[236px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <ContactPage />
        <ContactPage1 />
        <ContactPage2 />
        <ContactPage3 />
      </div>
    </div>
  );
}

export default function Card() {
  return (
    <div className="bg-white relative rounded-[16px] size-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#cccccc] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-px pl-[25px] pr-px pt-[25px] relative size-full">
          <CardContent />
        </div>
      </div>
    </div>
  );
}