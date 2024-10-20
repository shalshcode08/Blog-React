import React, { useEffect, useState } from 'react'
import appwriteService from '../appwrite/configService'
import Container from './../components/container/Container';
import Postcard from './../components/Postcard';

function AllPosts() {
    const [posts , setPost] = useState([]);
    useEffect(()=>{
        appwriteService.getAllPost([]).then((posts)=> {
            if(posts){
                setPost(posts.documents)
            }
        })
    }, [])
    
    return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post)=>(
                    <div key={post.$id} className='p-2 w-1/4'>
                        <Postcard {...post}/>
                    </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPosts