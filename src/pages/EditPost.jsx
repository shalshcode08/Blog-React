import React, { useEffect, useState } from 'react'
import appwriteService from '../appwrite/configService'
import Container from './../components/container/Container';
import { PostForm } from './../components/post-form/PostForm';
import { useNavigate, useParams } from 'react-router-dom';


function EditPost() {
    const [posts, setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(()=> {
        if(slug){
            appwriteService.getPost(slug).then((posts)=>{
                if(posts){
                    setPosts(posts)
                }
            })
        }
        else{
            navigate('/')
        }
    }, [slug, navigate])
  return posts ? (
    <div className='py-8'>
        <Container>
            <PostForm posts = {posts}/>
        </Container>
    </div>
  ) : null
}

export default EditPost