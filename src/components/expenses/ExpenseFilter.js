
import React from 'react'
import styled from 'styled-components'

export const ExpenseFilter = ({selected,getValue}) => {
  return (
    <div>
        <FilteredYear>
            <lebel style={{color:"white"}} > Filter by year</lebel>
            <select value={selected} onChange={getValue} style={{width:"120px"}}>
            <option value={"2023"}>2023</option>
            <option value={"2022"}>2022</option>
            <option value={"2021"}>2021</option>
            <option value={"2020"}>2020</option>
            </select>
        </FilteredYear>
    </div>
  )
}

const FilteredYear = styled('div')`
margin: 0 12px 15px 500px;

`;


