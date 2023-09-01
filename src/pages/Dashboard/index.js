import React, { useState,useEffect } from 'react'
import { Button } from '../../components/Button'
import axios from 'axios'
const Dashboard = () => {
    // const [count,setCount]  =useState(0)


    //   const handleClick=()=>{
    //     setCount(count+1)
    // }
    // console.log("count==",count)

    const [data, setData] = useState([])
    const getData = async()=>{
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        if(response){
         
          setData(response.data)
        }
        }
  
        useEffect(()=>{
          getData()
        },[])

    const [items, setItems] = useState(data)
    // const [isModalOpen, setIsModalOpen] = useState(true)
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')


    const handleClick = (e) => {
        e.preventDefault()
        let obj = {
            id: items.length + 1,
            title: title,
            author: author
        }
    //     // items.push(obj)
    //     setItems([...items])
    //     setIsModalOpen(false)
    //     reset();
    }
    // const handleEdit = (id) => {
    //     let find = items.find(item => item.id === id)
    //     setTitle(find.title)
    //     setAuthor(find.author)
    //     setIsModalOpen(true)
    // }
    // const handleDelete = (id) => {
    //     let filter = items.filter(item => item.id !== id)
    //     setItems(filter)

    // }
    const reset = () => {
        setAuthor('')
        setTitle('')
    }
    const handleModalclose = () => {
        // setIsModalOpen(false)
        reset();
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-sky-950">
            <div className="border border-gray-300 bg-slate-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                {/* <Button type="submit"
                    size="large"
                    className=""
                    onClick={() => setIsModalOpen(true)}>
                    Add
                </Button> */}
                <table className="table-auto">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 text-gray-600">Id</th>
                            <th className="px-4 py-2 text-gray-600">Title</th>
                            {/* <th className="px-4 py-2 text-gray-600">Actions</th> */}
                        </tr>

                    </thead>
                    <tbody>
                        {
                            data.map((item, index) => (
                                <tr key={index}>
                                    <td className="border border-gray-500 px-4 py-2 text-gray-600 font-medium">{item.id}</td>
                                    <td className=" border border-gray-500 px-4 py-2 text-gray-600 font-medium">{item.title}</td>
                                    {/* <div className="flex justify justify-center items-center">
                                        <Button type="submit"
                                            size="large"
                                            className="mr-3"
                                            onClick={() => handleEdit(item.id)}
                                        >
                                            Edit
                                        </Button>

                                        <Button type="button"
                                            size="large"
                                            variant="danger"
                                            onClick={() => handleDelete(item.id)}
                                        >Delete
                                        </Button>
                                    </div> */}
                                </tr>
                            ))
                        }


                    </tbody>
                </table>
            </div>
            <CreateModal
                // isModalOpen={isModalOpen}
                // handleModalclose={handleModalclose}
                // handleClick={handleClick}
                // setTitle={setTitle}
                // setAuthor={setAuthor}
                author={author}
                title={title}
            />
        </div>
    );
}
export default Dashboard

function CreateModal({ isModalOpen, handleModalclose, handleClick, title, setTitle, author, setAuthor }) {
    return (



        <div id="authentication-modal" aria-hidden="true" class={`fixed flex justify-center items-center z-50  w-full p-4  overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full ${isModalOpen ? '' : 'hidden'}`}>
            <div class="relative  w-full  max-w-md max-h-full">

                <div class="relative bg-gray-300  rounded-lg shadow dark:bg-gray-700">

                    {/* <button onClick={handleModalclose}
                        type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button> */}
                    <div class="px-6 py-6 lg:px-8">
                        {/* <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3> */}
                        <form class="space-y-6" onSubmit={handleClick}  >
                            <div className="mb-4">
                                {/* <label className="block text-gray-700 text-sm font-bold mb-2" >
                                    Ttile
                                </label> */}
                                {/* <input
                                    value={title}
                                    onChange={e => setTitle(e.target.value)}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Title" /> */}
                            </div>
                            {/* <div className="mb-4  ">
                                <label className="block text-gray-700 text-sm font-bold mb-2" >
                                    Author
                                </label>
                                <input value={author}
                                    onChange={e => setAuthor(e.target.value)}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="author" type="text" placeholder="Author" />
                            </div> */}
                            {/* <div className="flex justify justify-center items-center">
                                <Button type="submit"
                                    size="large"
                                    className="mr-3">
                                    Add
                                </Button>
                                <Button type="button"
                                    size="large"
                                    variant="danger"
                                    onClick={handleModalclose}
                                >Cancel
                                </Button> */}
                            {/* </div> */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}



