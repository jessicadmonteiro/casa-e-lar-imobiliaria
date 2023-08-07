import { IData } from "../../interfaces/data"
import { Ul } from "./style"
import { useNavigate } from "react-router-dom"

interface AdvertsProps {
    data: IData[];
    searchTerm: string;
}

export const Adverts = ({data, searchTerm}: AdvertsProps) => {

    const navigate = useNavigate()

    const handleViewMoreClick = (id: number) => {
   
        navigate(`/adverts/${id}`)
    }

    return (
        <>
            <Ul> 
                {
                    data.length !== 0 ? (
                        data.map((data) => (
                            <li key={data.id} onClick={() => {handleViewMoreClick(data.id)}}>
                                <figure>
                                    <img src={data.image.image1} alt="" />
                                </figure>
                                <div>
                                    <h4>{data.category}</h4>
                                    <p>{data.address.city} - {data.address.state}</p>
                                    <p>{data.value}</p>
                                    <button onClick={() => {handleViewMoreClick(data.id)}}>Veja Mais</button>
                                </div>
                            </li>
                        ))
                    ) : 
                        <div id="container-search-not-found">
                            <h2>Nenhum resultado encontrado para: {searchTerm}</h2>
                        </div>
                }
            </Ul>
         
        </>
    )
}

