import { useState, useEffect } from "react";
import { Container } from "./style";

interface FilterProps<T, K extends React.ReactNode> {
    data: T[];
    setFilteredData: React.Dispatch<React.SetStateAction<T[]>>;
    keyExtractor: (item: T) => K;
    label: string;
}

export const SearchFiltering = <T, K extends React.ReactNode>({
    data,
    setFilteredData,
    keyExtractor,
    label,
}: FilterProps<T, K>) => {
    const [word, setWord] = useState<K | null>();
    const itemMap = new Map<K, T>();

    data.forEach((item) => {
        const key = keyExtractor(item);
        if (!itemMap.has(key)) {
            itemMap.set(key, item);
        }
    });

    const items = Array.from(itemMap.keys());

    const handleWordClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const clickedWord = (event.target as HTMLButtonElement).textContent;
        setWord(clickedWord as K);
    };

    useEffect(() => {
        if (word) {
            const filteredData = data.filter(
                (item) => keyExtractor(item) === word
            );
            setFilteredData(filteredData);
        }
    }, [word, setFilteredData]);

    return (
        <>
            <Container>
                <h3>{label}</h3>
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>
                            <button onClick={handleWordClick}>{item}</button>
                        </li>
                    ))}
                </ul>
            </Container>
        </>
    );
};
