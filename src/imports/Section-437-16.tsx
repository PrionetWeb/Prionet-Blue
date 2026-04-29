function Heading() {
  return (
    <div className="absolute h-[115.188px] left-[32px] top-0 w-[832px]" data-name="Heading 2">
      <p className="-translate-x-1/2 absolute font-['Roboto:Bold',sans-serif] font-bold leading-[57.6px] left-[416.17px] text-[#3f3f3f] text-[48px] text-center top-[-1px] w-[732px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Need Help? We're Here to Support.`}</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[48px] left-[112px] top-[131.19px] w-[672px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-[336.06px] text-[#3f3f3f] text-[16px] text-center top-0 w-[660px] whitespace-pre-wrap">{`Whether you're a health care practitioner looking to access our database or a patient needing help in navigating, our support team is ready to assist.`}</p>
    </div>
  );
}

function HomePage() {
  return (
    <div className="h-[24px] relative shrink-0 w-[112.688px]" data-name="HomePage2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-[56.5px] text-[16px] text-center text-white top-0">(702) 570-5200</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#2563eb] content-stretch flex h-[44px] items-center justify-center left-[260.94px] overflow-clip rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-0 w-[144.688px]" data-name="Button">
      <HomePage />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#ccc] content-stretch flex h-[44px] items-center justify-center left-[421.63px] overflow-clip px-[16px] py-[8px] rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-0 w-[149.438px]" data-name="Button">
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#3f3f3f] text-[16px] text-center">Contact Support</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[44px] left-[32px] top-[211.19px] w-[832px]" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

export default function Section() {
  return (
    <div className="bg-[rgba(229,231,235,0.2)] relative size-full" data-name="Section">
      <Heading />
      <Paragraph />
      <Container />
    </div>
  );
}