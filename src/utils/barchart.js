import React from 'react';

import { ResponsiveBar } from '@nivo/bar'

const MyResponsiveBar = ({ data, keys, indexby, ytitle, xtitle, xaxixEnabled, leftaxisdisabled,
     showLegends, isHorizontal, myonclick, margin, colors, axisBottomTickRotation, axisBottomlegendOffset, colorBy  /* data prop */ }) => (
    <ResponsiveBar
        data={data}
        onClick={myonclick}
        valueFormat=" >-,"
        keys={[...keys]}
        indexBy={indexby}
        margin={ margin || { top: 50, right: 50, bottom: 50, left: 80 }}
        padding={0.3}
        layout={isHorizontal? "horizontal": "vertical"}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={colors || { scheme: 'blues'}}
        colorBy= {colorBy || "indexValue"}
        enableGridY={false}
        axisBottom={xaxixEnabled ? {
            tickSize: 5,
            tickPadding: 5,
            tickRotation: axisBottomTickRotation || 0,
            legend: xtitle || indexby,
            legendPosition: 'middle',
            legendOffset: axisBottomlegendOffset || 32
        } : null}
        axisLeft={!leftaxisdisabled?{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: ytitle,
            legendPosition: 'middle',
            legendOffset: -40,
            format: value => `${ isNaN(value)? value : Number(value).toLocaleString()}`,
        }: null}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        legends={!showLegends? []: [
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
    />
)

export default MyResponsiveBar