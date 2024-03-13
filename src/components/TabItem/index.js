import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiceTabId, isActive} = props
  const {tabId, displayText} = tabDetails
  const onTabItem = () => {
    updateActiceTabId(tabId)
  }
  const activeClassName = isActive ? 'active-tab-btn' : ''
  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeClassName}`}
        onClick={onTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
