import { useState } from "react";
import { Adverts } from "../../componentes/Adverts";
import { Footer } from "../../componentes/Footer";
import { Header } from "../../componentes/Header";
import { Search } from "../../componentes/Search";
import { Container } from "../../styles/container";
import {
    ContainerCover,
    ContainerResult,
    ContainerSearchFiltering,
    ContainerFilterCard,
} from "./style";
import { data } from "../../mock/data";
import { ButtonBrand1 } from "../../styles/button";

import { SearchFiltering } from "../../componentes/SearchFiltering";

export const Home = () => {
    const [filteredData, setFilteredData] = useState(data);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [resultSearch, setResultSearch] = useState<boolean>(false);

    const handleSearch = (searchTerm: string) => {
        const results = data.filter((item) =>
            Object.values(item).some(
                (value) =>
                    typeof value === "string" &&
                    value.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
        setFilteredData(results);
        setResultSearch(true);
    };

    const clearSearch = () => {
        setFilteredData(data);
        setSearchTerm("");
        setResultSearch(false);
    };

    return (
        <>
            <Header
                button1="Fazer Login"
                button2="Cadastrar"
                page1="/login"
                page2="register"
            />
            <Container>
                <ContainerCover>
                    <h1>
                        Encontre o lar dos seus sonhos, onde o futuro se
                        constrói e as memórias ganham vida.
                    </h1>
                </ContainerCover>
                <Search
                    onSearch={handleSearch}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    setResultSearch={setResultSearch}
                />
                {resultSearch && searchTerm !== "" && (
                        <ContainerResult>
                            <div id="container-text-result">
                                <h2>Resultados para:</h2>
                                <span>{searchTerm}</span>
                            </div>
                            <div>
                                <ButtonBrand1 onClick={clearSearch}>
                                    Limpar busca
                                </ButtonBrand1>
                            </div>
                        </ContainerResult>
                    )}
                <ContainerFilterCard>
                    <aside>
                        <ContainerSearchFiltering>
                            <SearchFiltering
                                data={data}
                                setFilteredData={setFilteredData}
                                keyExtractor={(item) => item.category}
                                label="Categoria"
                            />
                            <SearchFiltering
                                data={data}
                                setFilteredData={setFilteredData}
                                keyExtractor={(item) => item.address.city}
                                label="Cidade"
                            />
                            <SearchFiltering
                                data={data}
                                setFilteredData={setFilteredData}
                                keyExtractor={(item) => item.address.state}
                                label="Estado"
                            />
                            <ButtonBrand1 id="button-to-clean" onClick={clearSearch}>Limpar Busca</ButtonBrand1>
                        </ContainerSearchFiltering>
                    </aside>
                    <Adverts data={filteredData} searchTerm={searchTerm} />
                </ContainerFilterCard>
            </Container>
            <Footer />
        </>
    );
};
