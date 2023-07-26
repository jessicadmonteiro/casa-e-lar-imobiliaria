import CasaAconchegante from "../../assets/casa.png"
import CasaPalmeira from "../../assets/casa palmeira.png"
import { Ul } from "./style"

export const Adverts = () => {
    return (
        <>
        
            <Ul>
                <li>
                    <figure>
                        <img src={CasaAconchegante} alt="" />
                    </figure>
                    <div>
                        <h4>Categoria</h4>
                        <p>São Paulo - SP</p>
                        <p>1.500.000,00</p>
                        <button>Veja Mais</button>
                    </div>
                </li>
                <li>
                    <figure>
                        <img src={CasaPalmeira} alt="" />
                    </figure>
                    <div>
                        <h4>Categoria</h4>
                        <p>São Paulo - SP</p>
                        <p>1.500.000,00</p>
                        <button>Veja Mais</button>
                    </div>
                </li>
            </Ul>
         
        </>
    )
}