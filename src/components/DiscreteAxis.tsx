import React, { useMemo } from "react"
import * as d3 from "d3"
import { useD3 } from "../hooks/useD3"
import { DiscreteAxisProps } from "../../types"
import { getAxisLabelCoordinates } from "../utils"

const Axis = ({
  x,
  y,
  scale,
  type,
  label,
  width,
  height,
  margin,
}: DiscreteAxisProps): JSX.Element => {
  const gRef = useD3(
    (anchor) => {
      let axis = d3.axisBottom(scale).tickPadding(10)

      switch (type) {
        case "bottom":
          axis = d3.axisBottom(scale).tickPadding(10)
          break
        case "top":
          axis = d3.axisTop(scale).tickPadding(10)
          break
        case "left":
          axis = d3.axisLeft(scale).tickPadding(10)
          break
        case "right":
          axis = d3.axisRight(scale).tickPadding(10)
          break
        default:
          axis = d3.axisRight(scale).tickPadding(10)
          break
      }

      anchor.call(axis)
    },
    [type, scale]
  )

  const { axisLabelX, axisLabelY, rotate } = useMemo(
    () => getAxisLabelCoordinates(x, y, height, width, margin, type),
    [x, y, width, height, margin, type]
  )

  return (
    <g>
      <g ref={gRef} transform={`translate(${x}, ${y})`}></g>
      <text
        transform={`translate(${axisLabelX}, ${axisLabelY}) rotate(${rotate})`}
        textAnchor="middle"
      >
        {label}
      </text>
      ;
    </g>
  )
}

export default Axis
