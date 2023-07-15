import React from 'react';
import { Link } from 'react-router-dom';
import PostImage from './post.jpg';
import './Post.css';

export default function Post({ post }) {
  const PF = 'https://blogappmanrajsingh.onrender.com/images/';

  const stripHtmlTags = (htmlString) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlString;
    return tempDiv.innerText;
  };

  return (
    <div className='post'>
      {post.photo && <img className='postImg' src={PF + post.photo} alt='' />}
      <div className='postInfo'>
        <div className='postCats'>
          {post.categories.map((c) => (
            <span className='postCat'>{c.name}</span>
          ))}
        </div>
        <Link className='link' to={`/post/${post._id}`}>
          <span className='postTitle'>{post.title}</span>
        </Link>
        <hr />
        <span className='postDate'>{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className='postDes' dangerouslySetInnerHTML={{ __html: stripHtmlTags(post.desc) }} />
    </div>
  );
}
