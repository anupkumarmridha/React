import React from 'react';
import './PostCard.css';
import { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faThumbsUp, faThumbsDown} from '@fortawesome/free-solid-svg-icons';

const PostCard = ({ post, showButtons }) => {
  const [likes, setLikes] = useState(post.reactions.likes);
  const [dislikes, setDislikes] = useState(post.reactions.dislikes);

  const handleLike = () => {
    setLikes(likes + 1);
  };
  const handleDislike = () => {
    setDislikes(dislikes + 1);
  }

  return (
    <div className="post-card">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p className='reactions'>

        <FontAwesomeIcon className="likes" icon={faThumbsUp} onClick={handleLike} />
        {likes} &nbsp;
        <FontAwesomeIcon className='dislikes' icon={faThumbsDown} onClick={handleDislike} />
        {dislikes} &nbsp;
      </p>
      {showButtons && (
        <div>
          <button className='btn-edit'>Edit</button>
          <button className='btn-delete'>Delete</button>
        </div>
      )}
    </div>
  );
};

export default PostCard;
