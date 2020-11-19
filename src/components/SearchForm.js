import React from 'react'
import { useGlobalContext } from '../context'


export default function SearchForm() {
  const { setSearchTerm, setSearchType } = useGlobalContext()
  const searchValue = React.useRef('')

  React.useEffect(() => {
    searchValue.current.focus()
  }, [])

  function searchCocktail() {
    setSearchTerm(searchValue.current.value)
  }

  const onRadioChange = (e) => {
    setSearchType(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>search your favorite cocktail</label>
          <input
            type='text'
            name='name'
            id='name'
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
        <div>
          <input
            type='radio'
            name='search type'
            id='search'
            value='search.php?s='
            onChange={onRadioChange}
            defaultChecked='true'
          /><label>Search by name</label>
          <input
            type='radio'
            name='search type'
            id='ingredient'
            value='filter.php?i='
            onChange={onRadioChange}
          /><label>Search by ingredient</label>
        </div>
      </form>
    </section>
  )
}
