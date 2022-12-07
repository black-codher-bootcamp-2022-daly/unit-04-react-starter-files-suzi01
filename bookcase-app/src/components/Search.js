import React, { useState } from "react"


const Search = (props) => {
    const {keyword, setKeyword, findBooks} = props

    return (<form style={{alignContent:'center', textAlign:"center", padding:"5px"}}>
        {/* <p style={{color:"red"}}><em>{keyword && 'Keywords Typed: ' + keyword}</em></p> */}
        <input style={{borderRadius:"15px", width:"60%"}} type="text" 
            value={props.keyword} 
            onChange={(e) => props.setKeyword(e.target.value)}>
        </input>
        <input style={{borderRadius:"10px", border:"solid 1px", marginLeft:"5px"}} type="submit" value="Search" onClick={(event) => {
            event.preventDefault()
            props.findBooks(props.keyword)
                }
            } />
    </form>)
}

export default Search