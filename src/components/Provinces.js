import { useContext, useState, useEffect } from 'react'
import SelectProvince from '../context/SelectProvince'
import provincesData from '../MockData/provinceData.json'

function Provinces() {
  const { setProvince } = useContext(SelectProvince)
  const [region, setRegion] = useState('Marmara')
  const [filterProvince, setFilterProvince] = useState([])

  const provinceData = provincesData
  // Istanbul data is displayed by default when the page is opened
  useEffect(() => {
    const defaultProvince = provinceData.filter((province) => {
      return province.name === 'İstanbul'
    })[0]

    setProvince(defaultProvince)
  }, [])

  //When the region changes, provinceData is filtered and the information is transferred to filterProvince
  useEffect(() => {
    const filteredData = provinceData.filter((item) => {
      return item.region === region
    })
    setFilterProvince([...filteredData])
  }, [region])

  // Province is selected and ProvinceData is filtered according to the selected province
  const handleSelect = (event) => {
    let value = event.target.value

    const filteredProvince = provinceData.filter((item) => {
      return item.name === value
    })
    setProvince(filteredProvince[0])
  }
  // Region selection is made
  const handleSelectRegion = (event) => {
    let value = event.target.value
    setRegion(value)
  }

  return (
    <div className="pl-4 pb-10">
      <select
        id="region"
        className="border-zinc-500 text-zinc-700 text-md rounded-lg p-2.5 w-64 mr-4"
        onChange={handleSelectRegion}
        defaultValue={'Marmara'}
      >
        <option value="Marmara">Marmara</option>
        <option value="Ege">Ege</option>
        <option value="Karadeniz">Karadeniz</option>
        <option value="Doğu Anadolu">Doğu Anadolu</option>
        <option value="Güneydoğu Anadolu">Güneydoğu Anadolu</option>
        <option value="Akdeniz">Akdeniz</option>
        <option value="İç Anadolu">İç Anadolu</option>
      </select>
      <select
        id="province"
        className="border-zinc-500 text-zinc-700 text-md rounded-lg p-2.5 w-64"
        onChange={handleSelect}
        value={'İstanbul'}
      >
        {filterProvince.map((province) => {
          return (
            <option key={province.id} value={`${province.name}`}>
              {province.name}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default Provinces
