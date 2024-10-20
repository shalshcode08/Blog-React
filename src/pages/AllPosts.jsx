import React, { useEffect, useState } from 'react'
import appwriteService from '../appwrite/configService'
import Container from './../components/container/Container';
import { PostForm } from './../components/post-form/PostForm';

function AllPosts() {
    conts [post , setPost] = useState([]);
    useEffect(()=>{}, [])
    appwriteService.getAllPost([]).then((post)=> {
        if(post){
            setPost(post.documents)
        }
    })
    return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {post.map((posts)=>(
                    <div key={posts.$id} className='p-2 w-1/4'>
                        <PostForm posts={posts}/>
                    </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPosts