const ul = document.querySelector('ul.discussions__container');
const form = document.querySelector('form.form')

// LocalStorage에 객체를 저장합니다. 
const saveDataLocalStorage = (obj) => {
  localStorage.setItem('agoraData', JSON.stringify(obj));
  return;
}

// LocalStorage에서 객체를 가져옵니다. 
const getDataLocalStorage = (name) => {
  let localData = JSON.parse(localStorage.getItem(name))
  return localData;
}

// 객체를 받아 Discussion HTML을 작성합니다.
const convertToDiscussion = (obj) => {
  const li = document.createElement('li'); 
  li.className = 'discussion__container';

  const avatarWrapper = document.createElement('div');
  avatarWrapper.className = 'discussion__avatar--wrapper';
  const discussionContent = document.createElement('div');
  discussionContent.className = 'discussion__content';
  const discussionAnswered = document.createElement('div');
  discussionAnswered.className = 'discussion__answered';

  const discussionLikes = document.createElement('div')
  discussionLikes.classList.add('discussion__likes')
  discussionLikes.addEventListener('click', likesEventHandler)
  avatarWrapper.append(discussionLikes)

  // 좋아요 기능 -> 좋아요가 0개 이상이라도 있으면 checked
  obj.likes > 0?discussionLikes.textContent = obj.likes:discussionLikes.textContent = 0

  const avatarImage = document.createElement('img');
  avatarImage.classList.add('discussion__avatar--image')
  avatarImage.src = obj.avatarUrl;
  avatarImage.alt = `avatar of ${obj.author}`
  avatarWrapper.append(avatarImage)

  const discussionTitle = document.createElement('h2')
  discussionTitle.classList.add('discussion__title')
  const discussionAnchor = document.createElement('a')
  discussionAnchor.href = obj.url
  discussionAnchor.textContent = obj.title
  discussionTitle.append(discussionAnchor)

  const discussionInfo = document.createElement('div')
  discussionInfo.textContent = `${obj.author} | ${obj.createdAt}`
  discussionInfo.classList.add('discussion__information')
  discussionContent.append(discussionTitle, discussionInfo)

  const discussionChecked = document.createElement('p')
  discussionAnswered.textContent = '☑'
  discussionAnswered.append(discussionChecked)


  li.append(avatarWrapper, discussionContent, discussionAnswered);
  return li;
};

// element에 추가합니다. 
const render = (element) => {
  ul.innerHTML = ''
  let localData = getDataLocalStorage('agoraData')
  for (let i = 0; i < localData.length; i += 1) {
    element.append(convertToDiscussion(localData[i]));
  }
  return;
};

// Submit button click시 discussion 객체를 생성합니다.
const createAgoraDiscussion = (event) => {
  event.preventDefault()

  let userName = document.querySelector('#name').value
  let userTitle = document.querySelector('#title').value
  let userStory = document.querySelector('#story').value

  if (userName && userTitle && userStory) {
    let date = new Date
    let createDate = date.toLocaleString()
    let newObj = {
      id: 'dummy_ID',
      createdAt: createDate,
      title: userTitle,
      url: 'https://github.com/codestates-seb/agora-states-fe/discussions/45',
      author: userName,
      answer: {},
      bodyHTML: userStory,
      avatarUrl:
        'https://avatars.githubusercontent.com/u/97888923?s=64&u=12b18768cdeebcf358b70051283a3ef57be6a20f&v=4',
    }
  
    let localData = getDataLocalStorage('agoraData')
    localData.unshift(newObj)
    saveDataLocalStorage(localData)
    render(ul)

    userName = ''
    userTitle = ''
    userStory = ''

  } else {
    alert('모든 항목을 입력해 주세요.')
  }
}

const likesEventHandler = (event) => {  
  let target = event.target
  if (target.classList.contains('checked')) {
    target.classList.remove('checked')
    target.textContent = parseInt(target.textContent) - 1
  } else if (!target.classList.contains('checked')) {
    target.classList.add('checked')
    target.textContent = parseInt(target.textContent) + 1
  }
}

// 브라우저가 처음 실행되면,
// LocalStorage에 저장된 내용이 없으면 Dummy Data를 저장합니다. 
if (!localStorage.getItem('agoraData')) {
  saveDataLocalStorage(agoraStatesDiscussions)
}

// LocalStorage에 있는 내용을 HTML에 그려줍니다. 
render(ul);

// Submit button EventHandler
form.addEventListener('submit', createAgoraDiscussion)

const likesBtn = document.querySelector('.discussion__likes')
// Likes button EventHandler
likesBtn.addEventListener('click', likesEventHandler)

