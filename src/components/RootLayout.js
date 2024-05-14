import React from 'react'
import { Inter } from "next/font/google";
// import "../app/global.css";
import BottomBar from './BottomBar';

export default function RootLayout({ children }) {
    return (
        <div style={{
            backgroundColor: '#222222',

        }}>
            <div className='min-h-[100vh]'>
                {children}
            </div>
            <div className='sticky bottom-0'>

                <BottomBar />
            </div>
        </div>
    )
}

