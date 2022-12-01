import {useEffect, useState} from 'react';
import {AiOutlineSearch} from 'react-icons/ai';

export const Searchbar = (): JSX.Element =>
{

  const [searchInput, setSearchInput] =  useState<string>('');
  const [resultData, setResultData] = useState();
  const [hasResults, setHasResults] = useState<boolean>(false);
  
  const updateSearchResults = (searchInput: string): void =>
  {
    let resultsContainer = document.getElementById('search-results');
    setSearchInput(searchInput);

    if(searchInput.length !== 0 && resultsContainer)
    {
      resultsContainer.style.display = 'block'

      // find results
    }
    else if(resultsContainer)
    {
      resultsContainer.style.display = 'none';
    }
  }

  useEffect(() => 
  {
    
  }, [searchInput])
  

  return (
    <>
      <div 
      className="w-full px-[5vw] py-2 relative z-10"
      id="search-container"
      > 
        <div 
        className="w-full relative pl-4 py-1 flex items-center border border-slate-400"
        id="input-container"
        >
          <input 
          className="mx-auto block w-full border-none placeholder:text-black text-black"
          id="searchbar"
          onChange={(e) => updateSearchResults(e.target.value)}
          placeholder="Search"
          type="text"
          value={searchInput} 
          />
          <AiOutlineSearch 
          className="relative left-[-10px] text-[32.5px]"
          />
        </div>
        <div 
        className="border border-black p-4 mt-4 relative hidden z-10 relative bg-white"
        id="search-results"
        >
          {searchInput.length <= 2 &&
            <p>
              You must enter at least 2 characters.
            </p>
          }
          {
            searchInput.length > 2 && !hasResults &&
            <p>
              No results found for your search
            </p>
          }
        </div>
      </div>
    </>
  )
}