
interface TitleProps {
    title: string;
    content:string;
  }
const Title: React.FC<TitleProps> = ({title,content}) => {
  return (
    <div className="flex flex-col items-center">
      <div>
        <p className="text-3xl sm:text-4xl font-semibold text-white tracking-wider">
            {title}
        </p>
      </div>
      <div className="w-8 bg-[#E40037] h-[6.5px] mt-5 sm:mt-7 rounded-lg"></div>
      <div className="text-[#FF2B51] mt-4 sm:mt-5 text-[16px] sm:text-[18px] tracking-wider max-w-[50rem] text-center">
        <p>
          
          {content}
        </p>
      </div>
      </div>

  )
}

export default Title