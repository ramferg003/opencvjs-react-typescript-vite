import React from 'react';
import Webcam from 'react-webcam';

const width=320;
const height=240;

const Camera = () => {
    const webcamRef: React.Ref<Webcam> = React.useRef(null);

    return (
        <>
            <Webcam
            ref={webcamRef}
            forceScreenshotSourceSize
            style={{
                height,
                width,
                visibility: "hidden",
            }}
            />
        </>
    )
}

export default Camera;