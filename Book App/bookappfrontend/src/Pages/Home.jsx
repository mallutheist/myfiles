import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import Spinner from '../Components/Spinner'
// import { AiOutlineEdit } from 'react-icon/ai';
// import { BsInfoCircle } from 'react-icons/bs';
// import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

function Home() {
    const [books, setbooks] = useState([])
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:5555/book/')
            .then((response) => {
                // console.log("aliyaaaaaaaaaaaa" + res.data)
                setbooks(response.data)
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, [])
    return (
        <>
            <p className='bg-red-600'>{books.title}</p>

        </>
        // <div className='p-4'>
        //     <div className='flex justify-center items-center gap-x-4'>
        //         <h1 className='text-3xl my-8'>Book List</h1>
        //         <Link to='/books/create'>
        //             <div>hhhhhhhhh</div>
        //         </Link>
        //     </div>
        //     {loading ? (
        //         <p>this is loading</p>
        //     ) : (
        //         <table>
        //             <thead>
        //                 <tr>
        //                     <th className='rounded-md border border-slate-600'>No</th>
        //                     <th className='rounded-md border border-slate-600'>Title</th>
        //                     <th className='rounded-md border border-slate-600 max-md:hidden'>author</th>
        //                     <th className='rounded-md border border-slate-600 max-md:hidden'>publish year</th>
        //                     <th className='rounded-md border border-slate-600 '>operations</th>


        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 {books.map((book, index) => {
        //                     <tr key={book._id} className='h-8'>
        //                         <td className='border border-slate-600 rounded-md text-ellipsis'>{index + 1}</td>
        //                         <td className='border border-slate-600 rounded-md text-ellipsis'>{book.title}</td>
        //                         <td className='border border-slate-600 rounded-md text-ellipsis'>{book.author}</td>
        //                         <td className='border border-slate-600 rounded-md text-ellipsis'>{book.publishYear}</td>
        //                         <td className='border border-slate-600 rounded-md text-ellipsis'>
        //                             <div className='flex justify-center gap-x-4'>
        //                                 <Link to={`/books/details/${book._id}`}>
        //                                     <div className='bg-red-600'>......</div>
        //                                 </Link>
        //                             </div>
        //                         </td>
        //                     </tr>
        //                 })}
        //             </tbody>
        //         </table>
        //     )}
        // </div>
    )
}

export default Home
