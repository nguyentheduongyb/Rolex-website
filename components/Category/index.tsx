import Link from 'next/link';
import React from 'react'
import { useState } from 'react';

const Category = ({ arrays }: any) => {
        const [tab, setTab] = useState(1)

        const handleChangeTab = (e: any) => {
                setTab(e.currentTarget.getAttribute('id'))
        }
        return (
                <div>
                        <div className="flex flex-wrap gap-[32px] border-b py-4">
                                <button id="1" onClick={handleChangeTab} className={`py-2 px-5 font-bold flex rounded-xl items-center btn-category white-glassmorphism ${tab == 1 ? "active" : ""}`}>Tất cả</button>
                                <button id="2" onClick={handleChangeTab} className={`py-2 px-5 font-bold flex rounded-xl items-center btn-category white-glassmorphism ${tab == 2 ? "active" : ""}`}>Quần</button>
                                <button id="3" onClick={handleChangeTab} className={`py-2 px-5 font-bold flex rounded-xl items-center btn-category white-glassmorphism ${tab == 3 ? "active" : ""}`}>Áo</button>
                                <button id="4" onClick={handleChangeTab} className={`py-2 px-5 font-bold flex rounded-xl items-center btn-category white-glassmorphism ${tab == 4 ? "active" : ""}`}>Váy</button>
                                <button id="5" onClick={handleChangeTab} className={`py-2 px-5 font-bold flex rounded-xl items-center btn-category white-glassmorphism ${tab == 5 ? "active" : ""}`}>Giày</button>
                                <button id="6" onClick={handleChangeTab} className={`py-2 px-5 font-bold flex rounded-xl items-center btn-category white-glassmorphism ${tab == 6 ? "active" : ""}`}>Trang sức</button>
                                <button id="7" onClick={handleChangeTab} className={`py-2 px-5 font-bold flex rounded-xl items-center btn-category white-glassmorphism ${tab == 7 ? "active" : ""}`}>Nước hoa</button>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 mt-8 mb-14">
                                <Link href="/cart" className='border'>
                                        <div className={`w-full pt-[100%] bg-no-repeat bg-center bg-cover rounded-[2px]`} style={{ backgroundImage: 'url("https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/442477349_1514832182580211_8198719412932738581_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG620670GvGzZVULPC7QH92xz5vnaCl8RDHPm-doKXxEJ_-EhPN124jjdJJN7a-x9R-ocNwTkDwZHTtNTsyPTQC&_nc_ohc=QdHkvvoJOqgQ7kNvgHCJKH8&_nc_ht=scontent.fhan17-1.fna&cb_e2o_trans=q&oh=00_AYCjq5EYGRu1GiweyDI6NieXRaLXLnLVlgEOn63quWYjFQ&oe=665E7458")' }}></div>
                                        <div className='p-2 space-y-4'>
                                                <h6 className="leading-none my-3 line-clamp-2 capitalize">Áo Len Nam Nữ Quảng Châu</h6>
                                                <div className='flex gap-2 line-clamp-1'>
                                                        <span className='text-xs border border-orange-400 text-orange-400 px-1'>#news</span>
                                                        <span className='text-xs border border-orange-400 text-orange-400 px-1'>#news</span>
                                                        <span className='text-xs border border-orange-400 text-orange-400 px-1'>#news</span>
                                                        <span className='text-xs border border-orange-400 text-orange-400 px-1'>#news</span>
                                                        <span className='text-xs border border-orange-400 text-orange-400 px-1'>#news</span>
                                                </div>
                                                <div className="space-y-1 pt-4 overflow-hidden">
                                                        <p className='flex items-center line-through text-[#ccc] text-xs'>
                                                                <span className='text-[8px]'>đ</span>
                                                                <span>2222</span>
                                                        </p>
                                                        <p className='flex items-center text-sm'>
                                                                <span className='text-xs underline'>đ</span>
                                                                <span>400.00</span>
                                                        </p>
                                                </div>
                                        </div>
                                </Link>
                                <Link href="/cart" className='border'>
                                        <div className={`w-full pt-[100%] bg-no-repeat bg-center bg-cover rounded-[2px]`} style={{ backgroundImage: 'url("https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/442477349_1514832182580211_8198719412932738581_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG620670GvGzZVULPC7QH92xz5vnaCl8RDHPm-doKXxEJ_-EhPN124jjdJJN7a-x9R-ocNwTkDwZHTtNTsyPTQC&_nc_ohc=QdHkvvoJOqgQ7kNvgHCJKH8&_nc_ht=scontent.fhan17-1.fna&cb_e2o_trans=q&oh=00_AYCjq5EYGRu1GiweyDI6NieXRaLXLnLVlgEOn63quWYjFQ&oe=665E7458")' }}></div>
                                        <div className='p-2 space-y-4'>
                                                <h6 className="leading-none my-3 line-clamp-2 capitalize">Áo Len Nam Nữ Quảng Châu</h6>
                                                <div className='flex gap-2 line-clamp-1'>
                                                        <span className='text-xs border border-orange-400 text-orange-400 px-1'>#news</span>
                                                        <span className='text-xs border border-orange-400 text-orange-400 px-1'>#news</span>
                                                        <span className='text-xs border border-orange-400 text-orange-400 px-1'>#news</span>
                                                        <span className='text-xs border border-orange-400 text-orange-400 px-1'>#news</span>
                                                        <span className='text-xs border border-orange-400 text-orange-400 px-1'>#news</span>
                                                </div>
                                                <div className="space-y-1 pt-4 overflow-hidden">
                                                        <p className='flex items-center line-through text-[#ccc] text-xs'>
                                                                <span className='text-[8px]'>đ</span>
                                                                <span>2222</span>
                                                        </p>
                                                        <p className='flex items-center text-sm'>
                                                                <span className='text-xs underline'>đ</span>
                                                                <span>400.00</span>
                                                        </p>
                                                </div>
                                        </div>
                                </Link>
                        </div>
                </div>
        )
}

export default Category
