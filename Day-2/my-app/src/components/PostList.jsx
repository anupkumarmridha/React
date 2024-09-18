import React, { useEffect, useState } from 'react'
import PostCard from './PostCard'
import dummyData from '../data/dummy.json'
import './PostList.css'
const PostList = () => {
  const [posts, setPosts]=useState([])

  useEffect(()=>{
    setPosts(dummyData.posts);
  },[])
  return (
    <div>
      <h1>Total Posts: {posts.length}</h1>
      <div className="posts">

      {posts.map(post => (
        <PostCard key={post.id} post={post} showButtons={post.userId === 123} />
      ))}
      </div>
    </div>
  )
}

export default PostList;