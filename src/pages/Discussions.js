import './Discussions.css';
import Pagination from './Pagination';

function Discussions() {
  return (
    <section className="discussion__wrapper">
      <Pagination />
      <ul className="discussions__container"></ul>
    </section>
  );
}

export default Discussions;
