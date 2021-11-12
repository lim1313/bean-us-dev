import React from 'react';
import PostView from '../components/posts/postsView/PostView';
import { TopFrame } from '../styles/basicFrame/TopFrame';

function PostsView({ postId }) {
  return (
    <TopFrame>
      <div className='title'>게시물 열람</div>
      <PostView postId={postId} />
    </TopFrame>
  );
}

export default PostsView;