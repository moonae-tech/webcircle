import styles from './SearchField.module.css'

const SearchField = ({ searchQuery, onSearchChange }) => {
  const handleInputChange = e => {
    onSearchChange(e.target.value)
  }

  return (
    <div className={styles.wrapper}>
      <input
        placeholder='Filter dishes...'
        type='text'
        value={searchQuery}
        onChange={handleInputChange}
      />
    </div>
  )
}

export default SearchField
