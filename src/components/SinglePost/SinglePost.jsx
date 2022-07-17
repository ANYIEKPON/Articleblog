import React from 'react';
import { EditOff, DeleteOutline } from '@mui/icons-material';
import './SinglePost.css'

function SinglePost() {
  return (
    <div className='singlepost'>
        <div className="singlePostWrapper">
            <img 
              src="https://pixta.jp/img/og-image.jpg" 
              alt="" 
              className='singlePostImg'
            />
            <h1 className="singlePostTitle">
                The Best way To enjoy Bitter-Leaf
                <div className="singlePostEdit">
                    <div className='firstIcon'><EditOff className='singlePostIcon' /></div>
                    <div className='secondIcon'><DeleteOutline className='singlePostIcon' /></div>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className='singlePostAuthor'>Author: <b>King</b></span>
                <span className='singlePostAuthor'> 1 hour ago</span>
            </div>
            <div className='singlePostDesc'>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Suscipit quos voluptatibus quaerat maiores corporis minus 
                    error ab vero rerum consequuntur esse non eius assumenda omnis
                    nulla at dolore, doloribus voluptatum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Suscipit quos voluptatibus quaerat maiores corporis minus 
                    error ab vero rerum consequuntur esse non eius assumenda omnis
                    nulla at dolore, doloribus voluptatum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Suscipit quos voluptatibus quaerat maiores corporis minus 
                    error ab vero rerum consequuntur esse non eius assumenda omnis
                    nulla at dolore, doloribus voluptatum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Suscipit quos voluptatibus quaerat maiores corporis minus 
                    error ab vero rerum consequuntur esse non eius assumenda omnis
                    nulla at dolore, doloribus voluptatum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Suscipit quos voluptatibus quaerat maiores corporis minus 
                    error ab vero rerum consequuntur esse non eius assumenda omnis
                    nulla at dolore, doloribus voluptatum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Suscipit quos voluptatibus quaerat maiores corporis minus 
                    error ab vero rerum consequuntur esse non eius assumenda omnis
                    nulla at dolore, doloribus voluptatum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Suscipit quos voluptatibus quaerat maiores corporis minus 
                    error ab vero rerum consequuntur esse non eius assumenda omnis
                    nulla at dolore, doloribus voluptatum.
                </p>
            </div>
        </div>

    </div>
  )
}

export default SinglePost