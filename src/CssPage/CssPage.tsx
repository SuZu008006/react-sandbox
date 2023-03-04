import {Box} from '@mui/material'
import {createContext} from 'react'
import {PageHeader} from '../CommonPage/PageHeader'


export const MyContext = createContext('hello')

export function CssPage() {
    return (
        <>
            <PageHeader title="css"></PageHeader>

            <section>高さを親要素で限定しつつも大きい要素はスクロールできるようにして、end contentsをfotterとして表示するようにする</section>
            <div style={{
                height: '100px',
                width: '100px',
                background: 'blue',
                display: 'flex',
                flexDirection: 'column',
            }}>
                <div style={{
                    color: 'red',
                    height: '100%',
                    overflow: 'scroll',
                }}>
                    <ul>
                        <li>A</li>
                        <li>B</li>
                        <li>C</li>
                        <li>D</li>
                        <li>E</li>
                        <li>F</li>
                    </ul>
                </div>
                <div>end contents</div>
            </div>
        </>
    )
}