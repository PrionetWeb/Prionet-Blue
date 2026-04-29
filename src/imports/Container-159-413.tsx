import svgPaths from "./svg-9ng9mq4jxc";

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[251.188px] relative shrink-0 w-[236px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}

function CardContent4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[236px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white place-self-stretch relative rounded-[16px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#cccccc] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <div className="size-full">{children}</div>
    </div>
  );
}
type Card5Props = {
  additionalClassNames?: string;
};

function Card5({ children, additionalClassNames = "" }: React.PropsWithChildren<Card5Props>) {
  return (
    <Wrapper additionalClassNames={additionalClassNames}>
      <div className="content-stretch flex flex-col items-start pl-[25px] pr-px py-[25px] relative size-full">{children}</div>
    </Wrapper>
  );
}
type Card4Props = {
  additionalClassNames?: string;
};

function Card4({ children, additionalClassNames = "" }: React.PropsWithChildren<Card4Props>) {
  return (
    <Wrapper additionalClassNames={additionalClassNames}>
      <div className="content-stretch flex flex-col items-start pb-px pl-[25px] pr-px pt-[25px] relative size-full">{children}</div>
    </Wrapper>
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

function Icon() {
  return (
    <Icon4>
      <path d={svgPaths.pdd7de00} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </Icon4>
  );
}

function ProductsPage() {
  return (
    <div className="absolute bg-[rgba(37,99,235,0.1)] content-stretch flex items-center justify-center left-[94px] rounded-[16px] size-[48px] top-[24px]" data-name="ProductsPage">
      <Icon />
    </div>
  );
}

function ProductsPage1() {
  return (
    <div className="absolute content-stretch flex h-[31.188px] items-start left-[24px] top-[88px] w-[188px]" data-name="ProductsPage">
      <p className="font-['Outfit:Bold',sans-serif] font-bold leading-[31.2px] relative shrink-0 text-[#3f3f3f] text-[24px] text-center text-nowrap whitespace-pre">Data Encryption</p>
    </div>
  );
}

function ProductsPage2() {
  return (
    <div className="absolute h-[96px] left-[24px] top-[131.19px] w-[188px]" data-name="ProductsPage">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-[94.3px] text-[#3f3f3f] text-[16px] text-center top-0 translate-x-[-50%] w-[167px]">All data is encrypted in transit and using industry-standard protocols.</p>
    </div>
  );
}

function CardContent() {
  return (
    <Wrapper1>
      <ProductsPage />
      <ProductsPage1 />
      <ProductsPage2 />
    </Wrapper1>
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
      <path d={svgPaths.p7f68dc0} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </Icon4>
  );
}

function ProductsPage3() {
  return (
    <div className="absolute bg-[rgba(37,99,235,0.1)] content-stretch flex items-center justify-center left-[94px] rounded-[16px] size-[48px] top-[24px]" data-name="ProductsPage">
      <Icon1 />
    </div>
  );
}

function ProductsPage4() {
  return (
    <div className="absolute content-stretch flex h-[31.188px] items-start left-[24px] top-[88px] w-[188px]" data-name="ProductsPage">
      <p className="basis-0 font-['Outfit:Bold',sans-serif] font-bold grow leading-[31.2px] min-h-px min-w-px relative shrink-0 text-[#3f3f3f] text-[24px] text-center">Access Logging</p>
    </div>
  );
}

function ProductsPage5() {
  return (
    <div className="absolute h-[96px] left-[24px] top-[131.19px] w-[188px]" data-name="ProductsPage">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-[94.47px] text-[#3f3f3f] text-[16px] text-center top-0 translate-x-[-50%] w-[186px]">Comprehensive logging of all system access and activities for security monitoring.</p>
    </div>
  );
}

function CardContent1() {
  return (
    <Wrapper1>
      <ProductsPage3 />
      <ProductsPage4 />
      <ProductsPage5 />
    </Wrapper1>
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
      <path d={svgPaths.p150db00} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </Icon4>
  );
}

function ProductsPage6() {
  return (
    <div className="absolute bg-[rgba(37,99,235,0.1)] content-stretch flex items-center justify-center left-[94px] rounded-[16px] size-[48px] top-[24px]" data-name="ProductsPage">
      <Icon2 />
    </div>
  );
}

function ProductsPage7() {
  return (
    <div className="absolute h-[62.375px] left-[24px] top-[88px] w-[188px]" data-name="ProductsPage">
      <p className="absolute font-['Outfit:Bold',sans-serif] font-bold leading-[31.2px] left-[94.19px] text-[#3f3f3f] text-[24px] text-center top-0 translate-x-[-50%] w-[131px]">HIPAA Compliance</p>
    </div>
  );
}

function ProductsPage8() {
  return (
    <div className="absolute h-[96px] left-[24px] top-[162.38px] w-[188px]" data-name="ProductsPage">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-[94.2px] text-[#3f3f3f] text-[16px] text-center top-0 translate-x-[-50%] w-[176px]">Full compliance with healthcare privacy regulations and data protection requirements.</p>
    </div>
  );
}

function CardContent2() {
  return (
    <CardContent4>
      <ProductsPage6 />
      <ProductsPage7 />
      <ProductsPage8 />
    </CardContent4>
  );
}

function Card2() {
  return (
    <Card5 additionalClassNames="[grid-area:1_/_3]">
      <CardContent2 />
    </Card5>
  );
}

function Icon3() {
  return (
    <Icon4>
      <path d={svgPaths.pb67ee00} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </Icon4>
  );
}

function ProductsPage9() {
  return (
    <div className="absolute bg-[rgba(37,99,235,0.1)] content-stretch flex items-center justify-center left-[94px] rounded-[16px] size-[48px] top-[24px]" data-name="ProductsPage">
      <Icon3 />
    </div>
  );
}

function ProductsPage10() {
  return (
    <div className="absolute h-[62.375px] left-[24px] top-[88px] w-[188px]" data-name="ProductsPage">
      <p className="absolute font-['Outfit:Bold',sans-serif] font-bold leading-[31.2px] left-[94.05px] text-[#3f3f3f] text-[24px] text-center top-0 translate-x-[-50%] w-[168px]">Privacy</p>
    </div>
  );
}

function ProductsPage11() {
  return (
    <div className="absolute h-[96px] left-[24.5px] top-[120.03px] w-[188px]" data-name="ProductsPage">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-[94.11px] text-[#3f3f3f] text-[16px] text-center top-0 translate-x-[-50%] w-[188px]">Patient data remains within the network and is never shared with external parties.</p>
    </div>
  );
}

function CardContent3() {
  return (
    <CardContent4>
      <ProductsPage9 />
      <ProductsPage10 />
      <ProductsPage11 />
    </CardContent4>
  );
}

function Card3() {
  return (
    <Card5 additionalClassNames="[grid-area:1_/_4]">
      <CardContent3 />
    </Card5>
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