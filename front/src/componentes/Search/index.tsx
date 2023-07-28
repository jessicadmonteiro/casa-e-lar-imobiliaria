import { FormSearch } from "./style"

export const Search = () => {

    return (
        <>
             <FormSearch >
                <input
                    type="text"
                    placeholder="Pesquisar..."
                />
                <button type="submit">Buscar</button>
            </FormSearch>
        </>
    )
}