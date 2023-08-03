import { Ul } from "./style"
import { data } from "../../pages/Adverts/data"
import { useNavigate } from "react-router-dom"

export const Adverts = () => {

    const navigate = useNavigate()

    const handleViewMoreClick = (id: number) => {
   
        navigate(`/adverts/${id}`)
    }

    return (
        <>
        
            <Ul> 
                {
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
                }
            </Ul>
         
        </>
    )
}

