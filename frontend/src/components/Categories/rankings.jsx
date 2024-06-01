import React, { useState, useEffect } from 'react';
import './rankings.css'; // Importa los estilos CSS aquí
import RocketButton from './rocketButton';

const Rankings = ({ stats }) => {
  

  return (
    <div>
        <div className='main'>

            <div className='part-1'>
                <div className='stat-1'>
                    <div className='stat-1-1'>
                        <h1 className=''>3,452,939</h1>
                    </div>
                    <div className='stat-1-2'>
                        <svg
                            viewBox="0 0 16 16"
                            height="1em"
                            width="1em"
                            >
                            <path d="M11 6a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path d="M2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2zm12 1a1 1 0 011 1v12a1 1 0 01-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 01-1-1V2a1 1 0 011-1h12z" />
                        </svg>
                    </div>
                </div>
                <h2>Total users</h2>
            </div>

            <div className='part-2'>
                    <div className='stat-1'>
                        <div className='stat-1-1'>
                            <h1 className=''>Stars</h1>
                        </div>
                        <div className='stat-1-2'>
                            <svg
                                viewBox="0 0 1024 1024"
                                height="1em"
                                width="1em"
                                >
                                <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
                            </svg>
                        </div>
                    </div>
                <h2>Repository Stars</h2>
            </div>

            <div className='part-3'>
                <div className='stat-1'>
                        <div className='stat-1-1'>
                            <h1 className=''>46,827</h1>
                        </div>
                        <div className='stat-1-2'>
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                                height="1em"
                                width="1em"
                                >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M5 7l5 5-5 5M13 17h6" />
                            </svg>
                        </div>
                </div>
                <h2>Prompts per minute</h2>
            </div>

            <div className='part-4'>
            <div className='stat-1'>
                <div className='stat-1-1'>
                    <h1 className=''>$20</h1>
                    </div>
                    <div className='stat-1-2'>
                        <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            height="1em"
                            width="1em"
                            >
                            <path d="M21 4H3a1 1 0 00-1 1v14a1 1 0 001 1h18a1 1 0 001-1V5a1 1 0 00-1-1zm-1 11a3 3 0 00-3 3H7a3 3 0 00-3-3V9a3 3 0 003-3h10a3 3 0 003 3v6z" />
                            <path d="M12 8c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z" />
                        </svg>
                    </div>
                </div>
                <h2>Monthly price</h2>
            </div>
        </div>
    </div>
  );
};

export default Rankings;
