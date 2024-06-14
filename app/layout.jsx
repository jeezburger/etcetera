import React from 'react'
import './globals.css'
import Nav from '@/components/nav'
const RootLayout = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                <div>
                    <div />
                </div>

                <main>
                    <Nav />

                    {children}
                </main>
            </body>
        </html>
    )
}

export default RootLayout
