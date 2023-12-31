import { useParams } from "react-router-dom";
import { data } from "../../mock/data";
import { Header } from "../../componentes/Header";
import { ContainerSpecificAd } from "./style";
import { Footer } from "../../componentes/Footer";
import { Container } from "../../styles/container";
import { ContainerButtons } from "../../componentes/ModalBase/styles";
import { AdvertImagesModal } from "../../componentes/ModalBase";
import { useState } from "react";
import { Depositions } from "../../componentes/Depositions";
import { Link } from "react-router-dom";

export const SpecificAd = () => {
    const [showImagesModal, setShowImagesModal] = useState<boolean>(false);
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [openImage, setOpenImage] = useState<boolean>(false);

    const { id } = useParams();

    const specificAd = data.find((ad) => ad.id === parseInt(id!));

    const realtorNumber = '556200000000'; 
    const message = `Olá, estou interessado no imóvel que se localiza na Cidade de ${specificAd?.address.city}, ${specificAd?.address.street}, N ${specificAd?.address.number}.`;

    if (!specificAd) {
        return <div>Anúncio não encontrado.</div>;
    }

    const toggleModal = () => {
        setShowImagesModal(!showImagesModal);
    };

    const handleImageClick = (image: string) => {
        setSelectedImage(image);
        setOpenImage(true);
        toggleModal();
    };

    const handleNextImageClick = () => {
        const totalImages = Object.values(specificAd.image).length;
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
        setOpenImage(false);
    };

    const handlePrevImageClick = () => {
        const totalImages = Object.values(specificAd.image).length;
        setCurrentImageIndex(
            (prevIndex) => (prevIndex - 1 + totalImages) % totalImages
        );
        setOpenImage(false);
    };

    return (
        <>
            {showImagesModal ? (
                <AdvertImagesModal toggleModal={toggleModal}>
                    <div>
                        <ContainerButtons>
                            <button onClick={handlePrevImageClick}>
                                {"<"}
                            </button>
                            <button onClick={handleNextImageClick}>
                                {">"}
                            </button>
                        </ContainerButtons>
                        <li key={specificAd.id}>
                            <figure>
                                {openImage ? (
                                    <img
                                        src={selectedImage || undefined}
                                        alt=""
                                    />
                                ) : (
                                    <img
                                        src={
                                            Object.values(specificAd.image)[
                                                currentImageIndex
                                            ]
                                        }
                                        alt=""
                                    />
                                )}
                            </figure>
                        </li>
                    </div>
                </AdvertImagesModal>
            ) : (
                ""
            )}
            <Header button1="Home" page1="/" page2="" />
            <Container>
                <ContainerSpecificAd>
                    <div id="main-image">
                        {Object.values(specificAd.image).map(
                            (imageUrl, index) => (
                                <figure key={specificAd.id}
                                    onClick={() => {
                                        handleImageClick(imageUrl);
                                    }}
                                >
                                    <img
                                        key={index}
                                        src={imageUrl}
                                        alt={`Imagem ${index + 1}`}
                                    />
                                </figure>
                            )
                        )}
                    </div>

                    <aside>
                        <h3>Detalhes do Imóvel</h3>
                        <p id="description">{specificAd.description}</p>
                        <p id="property-details">
                            Tamanho: {specificAd.size} m²
                        </p>
                        <p id="property-details">Quartos: {specificAd.room}</p>
                        <p id="property-details">
                            Banheiros: {specificAd.bathroom}
                        </p>
                        <p id="property-details">
                            Categoria: {specificAd.category}
                        </p>
                        <p id="property-details">
                            Endereço: {specificAd.address.street},{" "}
                            {specificAd.address.number}
                        </p>
                        <p id="property-details">
                            {specificAd.address.city},{" "}
                            {specificAd.address.state} - CEP:{" "}
                            {specificAd.address.zipCode}
                        </p>
                    </aside>

                    <div id="container-button-schedule">
                        <Link id="link-schedule" target="_blank" to={`https://api.whatsapp.com/send?phone=${realtorNumber}&text=${encodeURIComponent(message)}`}>Agendar visita</Link>
                    </div>
                </ContainerSpecificAd>
                <Depositions />
            </Container>
            <Footer />
        </>
    );
};
