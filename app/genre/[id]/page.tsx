
import React from 'react'
type Props = {
    params: {
        id: string
    }
    searchParams: {
        genre: string
    }
}

const GenrePage = ({ params: { id }, searchParams: { genre } }: Props) => {


    return (
        <>

            <div  >Welcome to the genre page with ID: {id} & name {genre}</div>


        </>
    )
}

export default GenrePage