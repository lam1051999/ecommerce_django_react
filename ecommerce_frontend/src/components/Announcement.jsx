import React from 'react'
import styled from 'styled-components'

const AnnouncementText = styled.div`
    background-color: teal;
    text-align: center;
    color: white;
    font-weight: bold;
    padding: 10px 0px;
`
export default function Announcement() {
  return (
    <AnnouncementText>
        Super Deal! Free Shipping on Orders Over $100
    </AnnouncementText>
  )
}
