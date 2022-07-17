import React from 'react';
import './Post.css'

function Post() {
  return (
    <div className='post'>
        <img
            className='postImg' 
            src="https://pixta.jp/img/og-image.jpg" 
            alt="" 
        />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
                The Best way To enjoy Bitter-Leaf
            </span>
            <hr />
            <span className="postDate">1 hour ago</span>
            <p className='postDesc'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                At voluptate alias facere voluptatem, aliquid nisi mollitia
                 vel perspiciatis laudantium culpa maxime incidunt dolor 
                exercitationem, unde, dolorem corporis molestiae a vitae.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                At voluptate alias facere voluptatem, aliquid nisi mollitia
                 vel perspiciatis laudantium culpa maxime incidunt dolor 
                exercitationem, unde, dolorem corporis molestiae a vitae.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                At voluptate alias facere voluptatem, aliquid nisi mollitia
                 vel perspiciatis laudantium culpa maxime incidunt dolor 
                exercitationem, unde, dolorem corporis molestiae a vitae.
            </p>
        </div>
    </div>
  )
}

export default Post;