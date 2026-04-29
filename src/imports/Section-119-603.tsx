function Heading() {
  return (
    <div className="content-stretch flex h-[57.594px] items-start relative shrink-0 w-full" data-name="Heading 2">
      <p className="basis-0 font-['Roboto:Bold',sans-serif] font-bold grow leading-[57.6px] min-h-px min-w-px relative shrink-0 text-[#3f3f3f] text-[48px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>{`System Requirements & Access`}</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-[415.5px] text-[#3f3f3f] text-[16px] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">Technical requirements and access information for Priority Pay Network portals.</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[97.594px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Paragraph />
    </div>
  );
}

function ProductsPage() {
  return (
    <div className="h-[83.188px] relative shrink-0 w-full" data-name="ProductsPage">
      <p className="absolute font-['Outfit:Bold',sans-serif] font-bold leading-[41.6px] left-0 text-[#3f3f3f] text-[32px] top-[-1px] w-[204px]">Access Requirements</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#3f3f3f] text-[16px] top-0 w-[230px]">• Authorized healthcare provider credentials</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#3f3f3f] text-[16px] text-nowrap top-0 whitespace-pre">• Valid business license verification</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#3f3f3f] text-[16px] text-nowrap top-0 whitespace-pre">• HIPAA compliance agreement</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#3f3f3f] text-[16px] text-nowrap top-0 whitespace-pre">• Security training completion</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#3f3f3f] text-[16px] text-nowrap top-0 whitespace-pre">• Regular access review and renewal</p>
    </div>
  );
}

function ProductsPage1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[176px] items-start relative shrink-0 w-full" data-name="ProductsPage">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
      <ListItem4 />
    </div>
  );
}

function CardContent() {
  return (
    <div className="h-[323.188px] relative shrink-0 w-[350px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[16px] h-[323.188px] items-start pb-0 pt-[24px] px-[24px] relative w-[350px]">
        <ProductsPage />
        <ProductsPage1 />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col h-[421.188px] items-start pb-px pl-[25px] pr-px pt-[25px] relative rounded-[16px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#cccccc] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <CardContent />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex h-[421px] items-start justify-center relative shrink-0" data-name="Container">
      <Card />
    </div>
  );
}

export default function Section() {
  return (
    <div className="bg-[rgba(229,231,235,0.2)] relative size-full" data-name="Section">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[21px] items-center px-[32px] py-0 relative size-full">
          <Container />
          <Container1 />
        </div>
      </div>
    </div>
  );
}