import styled from "styled-components"

export const ContainerCover = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url('https://www.salles.imb.br/admin/fotos_destaque/13232908_1604013343248088_6302168264450648482_n.jpg');
  background-size: cover;
  background-position: center;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

    background: linear-gradient(to bottom right, var(--color-brand1), var(--color-brand3));
    opacity: 0.55;
  }

  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  h1 {
    font-size: 24px;
    color: #fff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    text-align: center;
    z-index: 1;
  }
`