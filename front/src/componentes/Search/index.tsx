import { FormSearch } from "./style" 
import { ButtonBrand1 } from "../../styles/button";

interface SearchProps {
    onSearch(searchTerm: string): void;
    searchTerm: string;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
    setResultSearch: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Search = ({ onSearch, searchTerm, setSearchTerm, setResultSearch}: SearchProps) => {
    
    const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSearch(searchTerm)
        setResultSearch(true)
    }

    return (
        <>
            <FormSearch onSubmit={handleSearchSubmit}>
                <input
                    type="text"
                    placeholder="Pesquisar..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <ButtonBrand1 type="submit">Buscar</ButtonBrand1>
            </FormSearch>
        </>
    )
}
