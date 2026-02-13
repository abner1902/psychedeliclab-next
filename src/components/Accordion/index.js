import React, { useState } from 'react'
import styled from 'styled-components'

const AccordionWrapper = styled.div`
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 4px;
  margin-bottom: 8px;
  overflow: hidden;
  &:first-of-type { margin-top: 0; }
`

const AccordionSummary = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: white;
  font-size: 15px;
  font-weight: 400;
  text-align: left;
  transition: background 0.2s;
  &:hover { background: rgba(255, 255, 255, 0.08); }
  &:focus { outline: none; }
`

const ExpandIcon = styled.span`
  display: inline-flex;
  transition: transform 0.3s;
  transform: ${({ expanded }) => (expanded ? 'rotate(180deg)' : 'rotate(0)')};
  margin-left: 8px;
`

const AccordionDetails = styled.div`
  padding: 0 24px;
  max-height: ${({ expanded }) => (expanded ? '2000px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease;
`

const AccordionContent = styled.div`
  padding-bottom: 16px;
  color: #ccc;
  font-size: 14px;
  line-height: 1.6;
`

export default function Accordion({ summary, children, defaultExpanded = false }) {
  const [expanded, setExpanded] = useState(defaultExpanded)
  return (
    <AccordionWrapper>
      <AccordionSummary
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        {summary}
        <ExpandIcon expanded={expanded}>▼</ExpandIcon>
      </AccordionSummary>
      <AccordionDetails expanded={expanded}>
        <AccordionContent>{children}</AccordionContent>
      </AccordionDetails>
    </AccordionWrapper>
  )
}
