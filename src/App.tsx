import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import DetailBlogPage from "./pages/DetailBlogPage"
import Navbar from "./components/Navbar"
import AddBlogPage from "./pages/AddBlogPage"
import BlogsPage from "./pages/BlogsPage"

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/addblog" element={<AddBlogPage />}></Route>
        <Route path="/allblogs" element={<BlogsPage />}></Route>
        <Route path="/details/:id" element={<DetailBlogPage />}></Route>
      </Routes>

    </div>
  )
}

export default App
