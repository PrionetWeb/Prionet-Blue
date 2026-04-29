import svgPaths from "./svg-eugfwuvtz6";
import imgImageWithFallback from "figma:asset/37580bb4cfa59eb10ae033d4a76d46140e8629d6.png";

function ImageWithFallback() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="ImageWithFallback">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
    </div>
  );
}

function Text() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#3f3f3f] text-[16px] text-nowrap top-[-1px] whitespace-pre">PRIONET Provider Network</p>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="h-[40px] relative shrink-0 w-[261.281px]" data-name="Logo2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <ImageWithFallback />
        <Text />
      </div>
    </div>
  );
}

function MenuItem() {
  return (
    <div className="absolute bg-blue-600 h-[44px] left-0 rounded-[12px] top-0 w-[74.609px]" data-name="Menu Item">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-[37.5px] text-[16px] text-center text-nowrap text-white top-[10px] translate-x-[-50%] whitespace-pre">Home</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[44px] relative shrink-0 w-[74.609px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <MenuItem />
      </div>
    </div>
  );
}

function MenuItem1() {
  return (
    <div className="absolute h-[44px] left-0 rounded-[12px] top-0 w-[125.094px]" data-name="Menu Item">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-[63px] text-[#3f3f3f] text-[16px] text-center text-nowrap top-[10px] translate-x-[-50%] whitespace-pre">How It Works</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[44px] relative shrink-0 w-[125.094px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <MenuItem1 />
      </div>
    </div>
  );
}

function MenuItem2() {
  return (
    <div className="absolute h-[44px] left-0 rounded-[12px] top-0 w-[75.641px]" data-name="Menu Item">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-[38px] text-[#3f3f3f] text-[16px] text-center text-nowrap top-[10px] translate-x-[-50%] whitespace-pre">About</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[44px] relative shrink-0 w-[75.641px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <MenuItem2 />
      </div>
    </div>
  );
}

function MenuItem3() {
  return (
    <div className="absolute h-[44px] left-0 rounded-[12px] top-0 w-[163.453px]" data-name="Menu Item">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-[82px] text-[#3f3f3f] text-[16px] text-center text-nowrap top-[10px] translate-x-[-50%] whitespace-pre">Practitioner Portal</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="basis-0 grow h-[44px] min-h-px min-w-px relative shrink-0" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <MenuItem3 />
      </div>
    </div>
  );
}

function MenuItem4() {
  return (
    <div className="absolute h-[44px] left-0 rounded-[12px] top-0 w-[89.109px]" data-name="Menu Item">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-[45px] text-[#3f3f3f] text-[16px] text-center text-nowrap top-[10px] translate-x-[-50%] whitespace-pre">Support</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[44px] relative shrink-0 w-[89.109px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <MenuItem4 />
      </div>
    </div>
  );
}

function MenuBar() {
  return (
    <div className="h-[44px] relative shrink-0 w-[559.906px]" data-name="Menu Bar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative size-full">
        <ListItem />
        <ListItem1 />
        <ListItem2 />
        <ListItem3 />
        <ListItem4 />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[9.37%_9.37%_12.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-4%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
            <path d={svgPaths.p1f885d00} id="Vector" stroke="var(--stroke-0, #3F3F3F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[8px] size-[20px] top-[8px]" data-name="Container">
      <Icon />
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[44px] relative shrink-0 w-[651.906px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center pl-[40px] pr-0 py-0 relative size-full">
        <MenuBar />
        <Button />
      </div>
    </div>
  );
}

export default function Container2() {
  return (
    <div className="relative size-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] py-0 relative size-full">
          <Logo />
          <Container1 />
        </div>
      </div>
    </div>
  );
}