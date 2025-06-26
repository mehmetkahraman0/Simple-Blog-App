import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import type { RootState } from "../app/store"

const DetailBlogPage = () => {
    const { id } = useParams()
    const blogs = useSelector((state: RootState) => state.blog.blogs)
    const selectedBlog = blogs.filter((item) => item.id.toString() == id)
    console.log(selectedBlog)

    return (
        <div className="w-[88vw] mx-auto mt-4 bg-amber-50 p-3 rounded-xl shadow-lg">
            <div className="flex flex-row justify-between w-full items-center mb-3">
                <p className="text-[30px] tracking-[2px] text-shadow-lg">{selectedBlog[0].name.toUpperCase()}</p>
                <p className="font-thin  ">{selectedBlog[0].date.split("T")[0]}</p>
            </div>
            <p className="">{selectedBlog[0].text}</p>
        </div>
    )
}

export default DetailBlogPage
