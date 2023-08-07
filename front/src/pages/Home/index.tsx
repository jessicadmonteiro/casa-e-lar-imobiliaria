import { useState } from "react"
import { Adverts } from "../../componentes/Adverts"
import { Footer } from "../../componentes/Footer"
import { Header } from "../../componentes/Header"
import { Search } from "../../componentes/Search"
import { Container } from "../../styles/container"
import { ContainerCover, ContainerResult } from "./style"
import { data } from "../Adverts/data"
import { ButtonBrand1 } from "../../styles/button"

export const Home = () => {
  const [filteredData, setFilteredData] = useState(data)
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [resultSearch, setResultSearch] = useState<boolean>(false)

  const handleSearch = (searchTerm: string) => {

    const results = data.filter((item) =>
      Object.values(item).some(
        (value) =>
          typeof value === "string" &&
          value.toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
    setFilteredData(results)
    setResultSearch(true)
  }

  const clearSearch = () => {
    setFilteredData(data)
    setSearchTerm("")
    setResultSearch(false)
  }

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
            Encontre o lar dos seus sonhos, onde o futuro se constrói e as memórias ganham vida.
          </h1>
        </ContainerCover>
        <Search
          onSearch={handleSearch}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          setResultSearch={setResultSearch}
        />
        {
            resultSearch && searchTerm !== "" &&(
                <ContainerResult>
                    <div id="container-text-result">
                        <h2>Resultados para:</h2>
                        <span>{searchTerm}</span>
                    </div>
                    <div>
                        <ButtonBrand1 onClick={clearSearch}>Limpar busca</ButtonBrand1>
                    </div>
                </ContainerResult>
            )
        }
        <Adverts
          data={filteredData} searchTerm={searchTerm}
        />
      </Container>
      <Footer />
    </>
  )
}
