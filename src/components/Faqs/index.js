import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {
    displayIds: [],
  }

  getShowId = id => {
    this.setState(prevState => {
      if (prevState.displayIds.includes(id)) {
        return {
          displayIds: prevState.displayIds.filter(
            displayId => displayId !== id,
          ),
        }
      } else {
        return {displayIds: [...prevState.displayIds, id]}
      }
    })
  }

  render() {
    const {faqsList} = this.props
    const {displayIds} = this.state

    return (
      <div className="bg-container">
        <div className="faqs-card">
          <h1 className="faqs-heading">FAQs</h1>
          <ul className="faqs-list">
            {faqsList.map(eachEle => (
              <FaqItem
                key={eachEle.id}
                faqDetails={eachEle}
                getShowId={this.getShowId}
                displayIds={displayIds}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
