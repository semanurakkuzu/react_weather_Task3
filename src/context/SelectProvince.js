import { createContext, useState } from 'react'
// selectProvince is created as a context
const SelectProvince = createContext()

export const SelectProvider = ({ children }) => {
  const [province, setProvince] = useState()
// The values ​​in the context are passed as values ​​to other pages to be used
  const values = {
    province,
    setProvince
  }

  return (
    <SelectProvince.Provider value={values}>{children}</SelectProvince.Provider>
  )
}

export default SelectProvince
