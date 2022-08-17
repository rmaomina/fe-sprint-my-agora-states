import './Discussions.css';
import Discussion from './components/Discussion'

function Discussions({ discussions }) {
  if (discussions.length === 0) {
    return <div className="">목록이 없습니다</div>;
  }

  return (
    discussions.map((discussion) => {
      return (
        <Discussion 
          key={discussion.id}
          discussion={discussion}
        />)
    })
  )
}

export default Discussions;
