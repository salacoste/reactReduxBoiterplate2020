import React from 'react'
import styled from 'styled-components'


import './mainLayout.scss'



const Wrapper = styled.div`
  height: 100%
`



export const MainLayout = (props) => {

  return (
    <Wrapper>
      { props.children }
    </Wrapper>
  )

}

export default MainLayout