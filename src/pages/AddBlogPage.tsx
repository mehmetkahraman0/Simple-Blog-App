import { useState } from 'react';
import type { Blog } from '../models/Blog';
import { useDispatch } from 'react-redux';
import { addBlog } from '../app/features/blogSlice';
import type { AppDispatch } from '../app/store';
import { useNavigate } from 'react-router-dom';
const AddBlogPage = () => {
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [text, setText] = useState("")

    const handleButton = () => {
        dispatch(addBlog({ name, text } as Blog))
        if(name != "" || text != ""){
            alert("Blog yazınız başarılı bir şekilde kayıt edilmiştir.")
            navigate("/")
        }
    }

    return (
        <div className='w-[88vw] mx-auto mt-[30px] flex flex-col bg-amber-50 rounded-2xl'>
            <header className='text-[25px] tracking-[2px] text-shadow-lg mb-3 p-2'>Blog Yazını Ekle</header>
            <div className='w-[88vw] rounded-xl p-2'>
                <div className='mb-[10px]'>
                    <input className='w-full border rounded-xl p-1 shadow-md' placeholder='Blog Başlığı Giriniz' onChange={(e) => setName(e.target.value)} type="text" />
                </div>
                <div className='mb-[5px]'>
                    <textarea className='w-full h-[60vh] border rounded-xl p-1' placeholder='Blog İçeriği Giriniz' onChange={(e) => setText(e.target.value)} />
                </div>
                <button className='bg-amber-200 p-2 rounded-xl text-[14px] hover:bg-amber-500 hover:text-white transition' onClick={handleButton}>Kaydet</button>
            </div>
        </div>
    )
}

export default AddBlogPage
