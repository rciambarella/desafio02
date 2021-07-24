import styled from 'styled-components';
// constante de estilo e inserir no componente //permite criar componentes de acordo com a tag, no caso usado <div/>

export const Container = styled.div`
    width: 80%;
    margin: auto;
    
    .nav{
        display: flex;
        align-items: center;
        justify-content: space-between;
        }

    .cart{
        display: flex;
        flex-wrap: wrap;
        justify-content: right;
        align-items: right;       
    }

    .formulario{
        display: grid;
        text-align: center;
        borderRadius: 12px;
        background: black;
       
   }

    section{
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        height: 60vh;
        borderRadius: 12px;
        justify-content: space-around;
                
        .product-content{
            display: grid;
            text-align: center;
            height: 300px;
            borderRadius: 12px;
            padding: 12px;
        }
    }
`
