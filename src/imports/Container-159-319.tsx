import svgPaths from "./svg-g8chtur2p3";
import clsx from "clsx";
type Card4Props = {
  additionalClassNames?: string;
};

function Card4({ children, additionalClassNames = "" }: React.PropsWithChildren<Card4Props>) {
  return (
    <div className={clsx("bg-white h-[281.188px] justify-self-stretch relative rounded-[16px] shrink-0", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-[#cccccc] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[25px] relative size-full">{children}</div>
      </div>
    </div>
  );
}

function CardContent4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[11px] items-center px-[8px] py-[24px] relative w-full">{children}</div>
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
type ContactPageTextProps = {
  text: string;
};

function ContactPageText({ text }: ContactPageTextProps) {
  return (
    <div className="content-stretch flex h-[31.188px] items-start relative shrink-0 w-[188px]">
      <p className="basis-0 font-['Outfit:Bold',sans-serif] font-bold grow leading-[31.2px] min-h-px min-w-px relative shrink-0 text-[#3f3f3f] text-[24px] text-center">{text}</p>
    </div>
  );
}

function Icon() {
  return (
    <Icon4>
      <path d={svgPaths.p3256c00} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </Icon4>
  );
}

function ContactPage() {
  return (
    <div className="bg-[rgba(37,99,235,0.1)] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[48px]" data-name="ContactPage">
      <Icon />
    </div>
  );
}

function ContactPage1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[188px]" data-name="ContactPage">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-[94.16px] text-[#3f3f3f] text-[16px] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">(702) 570-5200</p>
    </div>
  );
}

function ContactPage2() {
  return (
    <div className="h-[48px] relative shrink-0 w-[188px]" data-name="ContactPage">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-[94.22px] text-[#3f3f3f] text-[16px] text-center top-0 translate-x-[-50%] w-[183px]">Available Monday-Friday, 8 AM - 6 PM PST</p>
    </div>
  );
}

function CardContent() {
  return (
    <CardContent4>
      <ContactPage />
      <ContactPageText text="Support Hotline" />
      <ContactPage1 />
      <ContactPage2 />
    </CardContent4>
  );
}

function Card() {
  return (
    <Card4 additionalClassNames="[grid-area:1_/_1]">
      <CardContent />
    </Card4>
  );
}

function Icon1() {
  return (
    <Icon4>
      <path d={svgPaths.p1ffe6e50} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </Icon4>
  );
}

function ContactPage3() {
  return (
    <div className="bg-[rgba(37,99,235,0.1)] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[48px]" data-name="ContactPage">
      <Icon1 />
    </div>
  );
}

function ContactPage4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="ContactPage">
      <a className="[white-space-collapse:collapse] block font-['Outfit:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#3f3f3f] text-[16px] text-center text-nowrap" href="mailto:support@prionetprovider.com">
        <p className="[text-underline-position:from-font] cursor-pointer decoration-solid leading-[24px] underline whitespace-pre">support@prionetprovider.com</p>
      </a>
    </div>
  );
}

function ContactPage5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[188px]" data-name="ContactPage">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-[94.34px] text-[#3f3f3f] text-[16px] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">Response within 24 hours</p>
    </div>
  );
}

function CardContent1() {
  return (
    <CardContent4>
      <ContactPage3 />
      <ContactPageText text="Email Support" />
      <ContactPage4 />
      <ContactPage5 />
    </CardContent4>
  );
}

function Card1() {
  return (
    <Card4 additionalClassNames="[grid-area:1_/_2]">
      <CardContent1 />
    </Card4>
  );
}

function Icon2() {
  return (
    <Icon4>
      <path d={svgPaths.p19fddb00} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </Icon4>
  );
}

function ContactPage6() {
  return (
    <div className="bg-[rgba(37,99,235,0.1)] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[48px]" data-name="ContactPage">
      <Icon2 />
    </div>
  );
}

function ContactPage7() {
  return (
    <div className="h-[24px] relative shrink-0 w-[188px]" data-name="ContactPage">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-[94.48px] text-[#3f3f3f] text-[16px] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">Monday - Friday</p>
    </div>
  );
}

function ContactPage8() {
  return (
    <div className="h-[24px] relative shrink-0 w-[188px]" data-name="ContactPage">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-[94.27px] text-[#3f3f3f] text-[16px] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">8:00 AM - 6:00 PM PST</p>
    </div>
  );
}

function CardContent2() {
  return (
    <CardContent4>
      <ContactPage6 />
      <ContactPageText text="Business Hours" />
      <ContactPage7 />
      <ContactPage8 />
    </CardContent4>
  );
}

function Card2() {
  return (
    <Card4 additionalClassNames="[grid-area:1_/_3]">
      <CardContent2 />
    </Card4>
  );
}

function Icon3() {
  return (
    <Icon4>
      <path d={svgPaths.p150db00} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </Icon4>
  );
}

function ContactPage9() {
  return (
    <div className="bg-[rgba(37,99,235,0.1)] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[48px]" data-name="ContactPage">
      <Icon3 />
    </div>
  );
}

function ContactPage10() {
  return (
    <div className="h-[24px] relative shrink-0 w-[188px]" data-name="ContactPage">
      <a className="[white-space-collapse:collapse] absolute block font-['Outfit:Regular',sans-serif] font-normal leading-[0] left-[93.5px] text-[#3f3f3f] text-[16px] text-center text-nowrap top-[-0.31px] translate-x-[-50%]" href="mailto:security@prionetprovider.com">
        <p className="[text-underline-position:from-font] cursor-pointer decoration-solid leading-[24px] underline whitespace-pre">security@prionetprovider.com</p>
      </a>
    </div>
  );
}

function ContactPage11() {
  return (
    <div className="h-[48px] relative shrink-0 w-[188px]" data-name="ContactPage">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-[94.08px] text-[#3f3f3f] text-[16px] text-center top-0 translate-x-[-50%] w-[175px]">Report security concerns immediately</p>
    </div>
  );
}

function CardContent3() {
  return (
    <CardContent4>
      <ContactPage9 />
      <ContactPageText text="Security Issues" />
      <ContactPage10 />
      <ContactPage11 />
    </CardContent4>
  );
}

function Card3() {
  return (
    <Card4 additionalClassNames="[grid-area:1_/_4]">
      <CardContent3 />
    </Card4>
  );
}

export default function Container() {
  return (
    <div className="gap-[24px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] relative size-full" data-name="Container">
      <Card />
      <Card1 />
      <Card2 />
      <Card3 />
    </div>
  );
}