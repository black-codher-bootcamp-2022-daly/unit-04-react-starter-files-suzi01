import React, { useState } from "react"


const Search = (props) => {
    const {keyword, setKeyword} = props

    return (<form>
        {/* <p style={{color:"red"}}><em>{keyword && 'Keywords Typed: ' + keyword}</em></p> */}
        <input type="text" 
            value={props.keyword} 
            onChange={(e) => props.setKeyword(e.target.value)}>
        </input>
        <input type="submit" value="Search"></input>
    </form>)
}

export default Search