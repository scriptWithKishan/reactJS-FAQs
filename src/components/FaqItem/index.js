import './index.css'

const FaqItem = props => {
  const {faqDetails, getShowId, displayIds} = props
  const {id, questionText, answerText} = faqDetails

  const showAnswer = () => {
    getShowId(id)
  }

  const isDisplayed = displayIds.includes(id)
  const expandImg = isDisplayed
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
  const expandAlt = isDisplayed ? 'minus' : 'plus'

  return (
    <li className="faq-item">
      <div className="question-card">
        <h1 className="question-heading">{questionText}</h1>
        <button className="expand-btn" onClick={showAnswer}>
          <img src={expandImg} alt={expandAlt} className="expand-img" />
        </button>
      </div>
      {isDisplayed && (
        <>
          <hr />
          <p className="answer-text">{answerText}</p>
        </>
      )}
    </li>
  )
}

export default FaqItem
