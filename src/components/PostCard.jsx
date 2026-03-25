import { useState } from 'react'

function PostCard({ author, avatar, time, content, images, likes }) {
  const [likeCount, setLikeCount] = useState(0)
  const [commentCount, setCommentCount] = useState(0)
  const [isLiked, setIsLiked] = useState(false)

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1)
    } else {
      setLikeCount(likeCount + 1)
    }
    setIsLiked(!isLiked)
  }

  const handleComment = () => {
    setCommentCount(commentCount + 1)
  }

  return (
    <div className="w3-container w3-card w3-white w3-round w3-margin">
      <br />
      <img
        src={avatar}
        alt={author}
        className="w3-left w3-circle w3-margin-right"
        style={{ width: 60 }}
      />
      <span className="w3-right w3-opacity">{time}</span>
      <h4>{author}</h4>
      <br />
      <hr className="w3-clear" />
      <p>{content}</p>

      {images && images.length > 0 && (
        <div className="w3-row-padding" style={{ margin: '0 -16px' }}>
          {images.map((img, index) => (
            <div key={index} className="w3-half">
              <img src={img} style={{ width: '100%' }} alt="" className="w3-margin-bottom" />
            </div>
          ))}
        </div>
      )}

      <button 
        type="button" 
        className={`w3-button w3-margin-bottom ${isLiked ? 'w3-theme-d1' : 'w3-theme-l4'}`}
        onClick={handleLike}
      >
        <i className="fa fa-thumbs-up"></i> Like {likeCount > 0 && `(${likeCount})`}
      </button>
      <button 
        type="button" 
        className="w3-button w3-theme-d2 w3-margin-bottom"
        onClick={handleComment}
      >
        <i className="fa fa-comment"></i> Comment {commentCount > 0 && `(${commentCount})`}
      </button>
    </div>
  )
}

export default PostCard
