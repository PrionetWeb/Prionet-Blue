import svgPaths from "./svg-bqt9c2x5p1";

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p150db00} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
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
      <p className="basis-0 font-['Outfit:Bold',sans-serif] font-bold grow leading-[31.2px] min-h-px min-w-px relative shrink-0 text-[#3f3f3f] text-[24px] text-center">Security Issues</p>
    </div>
  );
}

function ContactPage2() {
  return (
    <div className="absolute h-[24px] left-[24px] top-[127.19px] w-[188px]" data-name="ContactPage">
      <a className="[white-space-collapse:collapse] absolute block font-['Outfit:Regular',sans-serif] font-normal leading-[0] left-[93.5px] text-[#3f3f3f] text-[16px] text-center text-nowrap top-[-0.31px] translate-x-[-50%]" href="mailto:security@prionetprovider.com">
        <p className="[text-underline-position:from-font] cursor-pointer decoration-solid leading-[24px] underline whitespace-pre">security@prionetprovider.com</p>
      </a>
    </div>
  );
}

function ContactPage3() {
  return (
    <div className="absolute h-[48px] left-[24px] top-[159.19px] w-[188px]" data-name="ContactPage">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-[94.08px] text-[#3f3f3f] text-[16px] text-center top-0 translate-x-[-50%] w-[175px]">Report security concerns immediately</p>
    </div>
  );
}

export default function CardContent() {
  return (
    <div className="relative size-full" data-name="CardContent">
      <ContactPage />
      <ContactPage1 />
      <ContactPage2 />
      <ContactPage3 />
    </div>
  );
}