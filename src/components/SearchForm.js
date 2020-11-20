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

  const override = (e) => {
    setSearchTerm(e.target.value)
    setSearchType("filter.php?i=");
  }

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <h4 htmlFor="name">search your favorite cocktail</h4>
          <input
            type="text"
            name="name"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
        <div className="radios">
          <p>Please choose how to search</p>
          <div className="upper">
            <div>
              <input
                type="radio"
                name="search type"
                id="search"
                value="search.php?s="
                onChange={onRadioChange}
                defaultChecked="true"
                className="radio"
              />
              <label>Search by name</label>
            </div>
            <div>
              <input
                type="radio"
                name="search type"
                id="ingredient"
                value="filter.php?i="
                onChange={onRadioChange}
                className="radio"
              />
              <label>Search by ingredient</label>
            </div>
          </div>
          <p>Quick search by Alcohol</p>
          <div className="lower">
            <div>
              <input
                type="radio"
                name="search type"
                id="search"
                value="vodka"
                onChange={override}
                className="radio"
              />
              <label>Vodka</label>
            </div>
            <div>
              <input
                type="radio"
                name="search type"
                id="ingredient"
                value="gin"
                onChange={override}
                className="radio"
              />
              <label>Gin</label>
            </div>
            <div>
              <input
                type="radio"
                name="search type"
                id="search"
                value="rum"
                onChange={override}
                className="radio"
              />
              <label>Rum</label>
            </div>
            <div>
              <input
                type="radio"
                name="search type"
                id="ingredient"
                value="tequila"
                onChange={override}
                className="radio"
              />
              <label>Tequila</label>
            </div>
            <div>
              <input
                type="radio"
                name="search type"
                id="search"
                value="scotch"
                onChange={override}
                className="radio"
              />
              <label>Scotch</label>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
