
import React, {useState} from 'react'
import {FaSearch, FaWindowClose} from 'react-icons/fa'
import './SearchBar.css'

export const SearchBar = ({setResults}) => {
    const [input, setInput] = useState("")
    const [clearInput, setClearInput] = useState()
    const fetchData = (value) => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((json) => {
            const results = json.filter((user)=>{
                return(
                    value &&
                    user &&
                    user.name &&
                    user.name.toLowerCase().includes(value)
                );
            });
            setResults(results);
        });
    };
    const handleChange = (value)=> {
       
        fetchData(value);
    };
    const clearInputValue = (e)=>{
        setClearInput(e.target.value);
    }
    const clearText = () => {
        console.log(clearText);
        setClearInput('')
        fetchData();
        
    }
  return (
    <div className="input-wrapper">
        <FaSearch id='search-icon'/>
        
        <input placeholder='search'  values={input}
          onChange={(e) => handleChange(e.target.value)} onClick={clearInputValue}/>
          <FaWindowClose id="close-icon" onClick={clearText}/>

      
    </div>
  );
};
export default SearchBar