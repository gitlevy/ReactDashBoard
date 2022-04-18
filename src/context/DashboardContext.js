import React, { CreateContext, useState } from 'react'
import { createContext } from 'react/cjs/react.production.min'
import fulldata from './fulldata'

export const DashboardContext = createContext()

const DashboardContextProvider = props => {

    const [dataChart, setDataChart] = useState(fulldata["2020"])
    const [yearData, setYearData] = useState("2020")

    const changeYear = year => {
        setDataChart(fulldata[year.target.value])
        setYearData(year.target.value)
    }

    return (
        <DashboardContext.Provider value={{changeYear, dataChart, yearData}}>
            {props.children}
        </DashboardContext.Provider>
    )
}

export default DashboardContextProvider