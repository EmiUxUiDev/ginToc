import React from 'react'
import ItemListContainer from '../ItemListContainer.js'

export default function Home({subject}) {
    return (
        <>
            <ItemListContainer subject={subject}/>
        </>
    )
}

