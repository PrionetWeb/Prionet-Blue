import svgPaths from "./svg-eq8xdlakdx";

function Icon() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p32a1ba00} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ProductsPage() {
  return (
    <div className="absolute bg-[rgba(37,99,235,0.1)] content-stretch flex items-center justify-center left-[159px] rounded-[16px] size-[64px] top-[24px]" data-name="ProductsPage">
      <Icon />
    </div>
  );
}

function ProductsPage1() {
  return (
    <div className="absolute content-stretch flex h-[41.594px] items-start left-[4.5px] top-[104.22px]" data-name="ProductsPage">
      <p className="font-['Outfit:Bold',sans-serif] font-bold leading-[41.6px] relative shrink-0 text-[#3f3f3f] text-[32px] text-center text-nowrap whitespace-pre">Secure Practitioner Login</p>
    </div>
  );
}

function ProductsPage2() {
  return (
    <div className="absolute h-[48px] left-[24px] top-[161.59px] w-[334px]" data-name="ProductsPage">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-[167.33px] text-[#3f3f3f] text-[16px] text-center top-0 translate-x-[-50%] w-[333px]">Access requires authorized healthcare provider credentials and secure authentication.</p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-blue-600 box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center left-[24px] px-[16px] py-[8px] rounded-[16px] top-[233.59px] w-[334px]" data-name="Button">
      <p className="basis-0 font-['Outfit:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white">Login to Provider Portal</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-white border border-[#cccccc] border-solid h-[36px] left-[24px] rounded-[16px] top-[285.59px] w-[334px]" data-name="Button">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-[136.5px] text-[#3f3f3f] text-[16px] text-nowrap top-[4.63px] whitespace-pre">Register</p>
    </div>
  );
}

function CardContent() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[382px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[382px]">
        <ProductsPage />
        <ProductsPage1 />
        <ProductsPage2 />
        <Button />
        <Button1 />
      </div>
    </div>
  );
}

export default function Card() {
  return (
    <div className="bg-white relative rounded-[16px] size-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#cccccc] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pl-[33px] pr-px py-[33px] relative size-full">
          <CardContent />
        </div>
      </div>
    </div>
  );
}