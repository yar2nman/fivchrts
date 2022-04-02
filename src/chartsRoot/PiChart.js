import React from "react";

import { ResponsivePie } from '@nivo/pie'


const MyResponsivePie = ({ data, colors /* see data tab */ }) => (
    <ResponsivePie
        data={data}
        onClick={(data) => {
            console.log(data);
        }}
        valueFormat=" >-,"
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.7}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        colors={colors || { scheme: 'reds' }}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color', modifiers: [['darker', 0.8]] }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
     
    />
)

export default MyResponsivePie;