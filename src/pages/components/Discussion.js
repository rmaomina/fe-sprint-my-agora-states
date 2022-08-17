import { useState } from 'react'

function Discussion({discussion}) {
  const [likes, setLikes] = useState(0);
  const [isToggleOpened, setIsToggleOpened] = useState(0);

  const { avatarUrl, author, url, title, createdAt, answer } = discussion
  let answerContents

  return (
    <li className="discussion__container">
      <div className="discussion__avatar--wrapper">
        <img className="discussion__avatar--image"
          src={avatarUrl}
          alt={`avatar of ${author}`} />
        <div className={`discussion__likes ${(likes >= 1)?'checked':''}`} onClick={() => {setLikes(likes + 1)}}>{likes}</div>
      </div>
      <div className="discussion__content">
        <h2 className="discussion__title"><a href={url}>{title}</a></h2>
        <div className="discussion__information">
          <span>{author} | {createdAt}</span>
          {answer?<span onClick={() => {isToggleOpened?setIsToggleOpened(false):setIsToggleOpened(true)}}>✅</span>:null}
        </div>
        
      </div>
      {answer?<div className={`discussion__answered ${isToggleOpened?'opened':''}`} dangerouslySetInnerHTML={{__html: answer.bodyHTML}}></div>:null}
    </li>
  );
}

export default Discussion;
