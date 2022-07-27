import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

const CustomizedPieChart = (props) => {
    const { children, ...otherProps } = props;
    const { proteinConsumed, fatConsumed, crabsConsumed, className } = otherProps
    return (
        <div
            className={className}
            style={{
                position: 'relative',
                width: '80px',
                height: '80px',
            }}
        >
            <div style={{ position: 'absolute' }}>
                <PieChart
                    paddingAngle={0}
                    lineWidth={30}
                    data={[
                        { title: 'Crabs', value: (crabsConsumed / 150) * 100, color: '#F5C90F' },
                        { title: 'Fat', value: (fatConsumed / 150) * 100, color: '#03C7FC' },
                        { title: 'Protein', value: (proteinConsumed / 150) * 100, color: '#F45C84' },
                    ]}
                />
            </div>
            <div
                style={{
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {props.children}
            </div>
        </div>
    );
};

export default CustomizedPieChart;