import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';

const CusomizedProgressBar = (props) => {
    const { children, ...otherProps } = props;

    return (
        <div
            style={{
                position: 'relative',
                width: '80px',
                height: '80px',
            }}
        >
            <div style={{ position: 'absolute' }}>
                <CircularProgressbar {...otherProps} />
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

export default CusomizedProgressBar;