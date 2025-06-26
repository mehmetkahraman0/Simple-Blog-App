import { Link } from "react-router-dom"
import bgImage from "../assets/homepage.jpg"

const HomePage = () => {
  return (
    <div style={{ backgroundImage: `url(${bgImage})` }} className="w-[90vw] mx-auto mt-6 mb-1 bg-cover bg-center h-[88vh] rounded-3xl">
      <div className="relative h-[88vh] ">
        <div className="absolute bottom-15 left-0 flex flex-col items-start ml-4">
          <p className="text-[60px] tracking-[3px] font-bold text-amber-50">BİZE KATILIN</p>
          <p className="text-[50px] tracking-[2px] font-medium text-amber-100">Fikirlerinizi Paylaşın</p>
          <Link to="/addblog"><button className="bg-amber-50 py-1 px-4 mt-1 text-[16px]  tracking-[1px] hover:bg-amber-100 transition cursor-pointer">Yazını Eklemek İster misin ?</button></Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage