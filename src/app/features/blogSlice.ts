import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Blog } from "../../models/Blog";

export interface BlogState {
    blogs: Blog[]
    itemCount: number
}

const initialState: BlogState = {
    blogs: JSON.parse(localStorage.getItem("blog") || "[]") as Blog[],
    itemCount: 0,
}

export const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {
        addBlog: (state, action: PayloadAction<Blog>) => {
            try {
                if (action.payload.name || action.payload.text) {
                    const newBlog: Blog = {
                        id: state.itemCount,
                        name: action.payload.name,
                        text: action.payload.text,
                        date: new Date().toISOString(),
                    }
                    state.blogs.push(newBlog)
                    localStorage.setItem("blog", JSON.stringify(state.blogs))
                    console.log("yeni blog kayıt edildi")
                    state.itemCount += 1
                }else{
                    console.log("kayıt işlemi yapılırken hata oluştu")
                }
            } catch (error) {
                console.log(error)
            }
        },
        deleteBlog: (state, action: PayloadAction<Blog>) => {
            state.blogs = state.blogs.filter(item => item.id != action.payload.id)
            localStorage.setItem("blog", JSON.stringify(state.blogs))
            console.log("blog silindi")
            state.itemCount -= 1
        }
    }
})
export const { addBlog, deleteBlog } = blogSlice.actions
export default blogSlice.reducer