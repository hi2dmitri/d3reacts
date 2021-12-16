/* eslint-disable no-unused-vars */
import "./App.css"
import BarChart from "./charts/BarChart/BarChart"
import LineChart from "./charts/LineChart/LineChart"
import AreaChart from "./charts/AreaChart/AreaChart"
import ScatterPlot from "./charts/ScatterPlot/ScatterPlot"
import PieChart from "./charts/PieChart/PieChart"
import unemployment from "./data/unemployment.json"
import penguins from "./data/penguins.json"
import portfolio from "./data/portfolio.json"
import fruit from "./data/fruit.json"
import skinny_fruit from "./data/skinny_fruit.json"

function App() {
  return (
    <div className="App" >
        <PieChart
          data={fruit}
          label= "label"
          value = "value"
        />
   
        <PieChart
          data={fruit}
          label= "label"
          value = "value"
          innerRadius = "70%"
          outerRadius = "80%"
        />
      

        <AreaChart
          data={penguins}
          height="100%"
          width="100%"
          xData={{ key: "body_mass_g", dataType: "number" }}
          yData={{ key: "culmen_length_mm", dataType: "number" }}
          xGrid={true}
          yGrid={true}
        />
        <AreaChart
          data={skinny_fruit}
          xData={{ key: "date", dataType: "date" }}
          yData={{ key: "value", dataType: "number" }}
          groupBy='fruit'
          xGrid={true}
          yGrid={true}
          xAxisLabel="Date"
          yAxisLabel="Number of fruit" 
        />

        <ScatterPlot
          data={penguins}
          xData={{ key: "flipper_length_mm", dataType: "number" }}
          yData={{ key: "body_mass_g", dataType: "number" }}
          groupBy="species"
          xAxis="top"
          yAxis="right"
          xGrid={true}
          yGrid={true}
          xAxisLabel="Date"
          yAxisLabel="Value"
        />

        <BarChart
          data={skinny_fruit}
          xData={{ key: "date"}}
          yData={{ key: "value"}}
          groupBy='fruit'
          xAxis="bottom"
          yAxis="left"
          yGrid={true}
          xAxisLabel="Date"
          yAxisLabel="Value"
        />
        <BarChart
          data={skinny_fruit}
          xData={{ key: "date"}}
          yData={{ key: "value"}}
          // groupBy='fruit'
          xAxis="bottom"
          yAxis="left"
          yGrid={true}
          xAxisLabel="Date"
          yAxisLabel="Value"
        />

        <LineChart
          data={unemployment}
          xData={{ key: "date", dataType: "date" }}
          yData={{ key: "unemployment", dataType: "number" }}
          groupBy="division"
          xAxis="bottom"
          yAxis="left"
          xGrid={true}
          yGrid={true}
          xAxisLabel="Date"
          yAxisLabel="Unemployment"
        />
        <LineChart
          data={portfolio}
          xData={{ key: "date", dataType: "date" }}
          yData={{ key: "value", dataType: "number" }}
          xAxis="bottom"
          yAxis="left"
          xGrid={true}
          yGrid={true}
          xAxisLabel="Date"
          yAxisLabel="Value"
        />

    
    </div>
  )
}

export default App
