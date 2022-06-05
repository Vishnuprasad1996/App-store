import './index.css'

const TabItem = props => {
  const {tabDetails, onClickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTabButton = () => {
    onClickTabItem(tabId)
  }

  const activeTabClass = isActive ? 'active' : ''

  return (
    <li className="tab-list-item">
      <button
        onClick={onClickTabButton}
        type="button"
        className={`tab-list-item-name ${activeTabClass} `}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
