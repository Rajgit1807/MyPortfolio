
interface FooterProps {
  nomodal:boolean
}

const Footer:React.FC<FooterProps> = ({nomodal}) => {

  return (
    <div className="flex justify-center w-full">
    <div className={`w-full max-w-[1800px] mt-16 sm:mt-28 flex flex-col items-center ${nomodal ? "sm:pb-16 pb-8":"pb-8 sm:pb-16 sm:mb-12 mb-9 "} `}>
<div className="h-[0.1px] bg-[#888484] px-14 w-full"></div>
<p className="text-white pt-8 sm:pt-14 w-fit text-center text-[14px] sm:text-[16px]">© Copyright 2024. Made <span className="text-[#FF2B51]">by</span> <span className="font-semibold underline">Rudra Raj Shrivastava</span> 💪</p>
</div>
</div>

  )
}

export default Footer