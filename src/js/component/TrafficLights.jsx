import React, { useState } from "react";

export const TrafficLights = () => {
    const [activeLight, setActiveLight] = useState(null);

    const glowEffects = {
        red: '0 0 20px 10px rgba(255, 0, 0, 0.5)',
        amber: '0 0 20px 10px rgba(255, 255, 0, 0.5)',
        green: '0 0 20px 10px rgba(0, 255, 0, 0.5)',
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 position-relative">
            <div
                className="position-absolute bg-dark"
                style={{
                    width: '16px',
                    height: '50vh',
                    top: '0',
                    left: '50%',
                    transform: 'translateX(-50%)',
                }}
            ></div>
            <div
                className="bg-dark d-flex flex-column align-items-center rounded p-3 position-absolute"
                style={{
                    width: '140px',
                    height: '320px',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
            >
                <div
                    onClick={() => setActiveLight(activeLight === 'red' ? null : 'red')}
                    className="rounded-circle bg-danger mb-3"
                    style={{
                        width: '100px',
                        height: '100px',
                        boxShadow: activeLight === 'red' ? glowEffects.red : 'none',
                        border: '3px solid #000',
                        cursor: 'pointer',
                    }}
                ></div>
                <div
                    onClick={() => setActiveLight(activeLight === 'amber' ? null : 'amber')}
                    className="rounded-circle bg-warning mb-3"
                    style={{
                        width: '100px',
                        height: '100px',
                        boxShadow: activeLight === 'amber' ? glowEffects.amber : 'none',
                        border: '3px solid #000',
                        cursor: 'pointer',
                    }}
                ></div>
                <div
                    onClick={() => setActiveLight(activeLight === 'green' ? null : 'green')}
                    className="rounded-circle bg-success"
                    style={{
                        width: '100px',
                        height: '100px',
                        boxShadow: activeLight === 'green' ? glowEffects.green : 'none',
                        border: '3px solid #000',
                        cursor: 'pointer',
                    }}
                ></div>
            </div>
        </div>
    );
};
