import { Link } from "react-router-dom"
import type { Blog } from "../models/Blog"

type BlogProps = {
    blog: Blog
}


const BlogComponents = ({ blog }: BlogProps) => {
    return (
        <div className="bg-amber-50 p-2 rounded-2xl w-[300px] h-[200px] flex flex-col justify-evenly items-center hover:bg-amber-400 transition shadow-md hover:shadow-lg">
            <p className="text-[18px] tracking-[2px] text-shadow-lg/10">-{blog.name.toUpperCase()}-</p>
            <p>{blog.date.split("T")[0]}</p>
            <Link to={`/details/${blog.id}`}><button className="text-[14px] hover:text-white h-[28px] font-semibold ">Daha Fazla</button></Link>
        </div>
    )
}

export default BlogComponents
