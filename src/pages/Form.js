import './Form.css';

function Form() {
  return (
    <section className="form__container">
      <form action="" method="get" className="form">
        <div className="form__input--wrapper">
          <div className="form__input--name">
            <label htmlFor="name">Enter your name: </label>
            <input type="text" name="name" id="name" placeholder="이름을 입력하세요" required />
          </div>
          <div className="form__input--title">
            <label htmlFor="name">Enter your title: </label>
            <input type="text" name="name" id="title" placeholder="제목을 입력하세요" required />
          </div>
          <div className="form__textbox">
            <label htmlFor="story">Your question: </label>
            <textarea id="story" name="story" placeholder="질문을 작성하세요" required></textarea>
          </div>
        </div>
        <div className="form__submit">
          <input type="submit" value="submit" />
        </div>
      </form>
    </section>
  );
}

export default Form;
