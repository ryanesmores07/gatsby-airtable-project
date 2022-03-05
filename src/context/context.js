import React, { useState } from 'react'
import sublinks from '../constants/links'

const GatsbyContext = React.createContext()

// Provider, Consumer

const GatsbyProvide = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [links, setLinks] = useState(sublinks)

  return (
    <GatsbyContext.Provider value={{ isSidebarOpen, links }}>
      {children}
    </GatsbyContext.Provider>
  )
}

export { GatsbyContext, GatsbyProvide }
