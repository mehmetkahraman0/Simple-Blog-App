import { useSelector } from "react-redux"
import BlogComponents from "../components/BlogComponents"
import type { RootState } from "../app/store"

const BlogsPage = () => {

    const blogs = useSelector((state: RootState) => state.blog.blogs)

    return (
        <div className="w-[88vw] mx-auto mt-10 flex flex-row flex-wrap gap-10 justify-between">
            {blogs.map((item, index) => (
                <BlogComponents key={index} blog={item} />
            ))}
        </div>
    )
}

export default BlogsPage
