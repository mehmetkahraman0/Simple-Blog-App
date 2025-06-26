import { Link } from "react-router-dom"
import logo from "../assets/logo.jpg"
const Navbar = () => {
    return (
        <div className="mx-auto mt-[20px] h-[40px] w-[90vw] flex flex-row justify-evenly items-center bg-amber-100 rounded-3xl">
            <ul className="list-none flex flex-row justify-between gap-60">
                <li><Link to="/">Ana Sayfa </Link></li>
                <li><Link to="/about">Hakkımızda</Link></li>
            </ul>
            <div >
                <Link to="/"><img className=" h-[80px] rounded-[50%]" src={logo} alt="logo" /></Link>
            </div>
            <ul className="flex flex-row justify-between gap-60">
                <li><Link to="/allblogs">Yazılarımız </Link></li>
                <li><Link to="/addblog">Yazı Ekle</Link></li>
            </ul>
        </div>
    )
}

export default Navbar
