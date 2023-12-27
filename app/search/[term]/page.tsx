import { notFound } from 'next/navigation';

type Props = {
    params: {
        term: string;
    };
};

function SearchPage({ params: { term } }: Props) {
    if (!term) notFound();

    const termToUse = decodeURI(term)

    //todo API call to get the Searched movies
    //todo APi call to get the populer movies


    return <div>welcome to the SearchPage: {termToUse}</div>
}

export default SearchPage