import React, { useState, useEffect } from 'react';
import { Container } from './style';
import api from '../../services/api';

interface IProduct {
    id: number;
    photo: string;
    name: string;
    description: string;
    price: number;
}

const Home: React.FC = () => {
    const [data, setData] = useState<IProduct[]>([]);
    const [cart, setCart] = useState<IProduct[]>([]);

    useEffect(() => {
        api.get('').then(
            response => {
                setData(response.data)
            }
        )
    }, [])

    const handleCart = (index: number) => {
        let product = data[index];
        let push: any = [...cart, cart.push(product)]
       
        setCart(push)
        console.log(cart);
        const productStore = JSON.stringify(cart);
        localStorage.setItem(`@carte`, productStore)
    }
    
    return (
    
        <Container>
            <div className="nav">
                <img src="data:image/png;base64,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" alt="gamaacademy" width="150px" height="auto" />   
                <img src="data:image/png;base64,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" alt="vtex" width="150px" height="auto" />
                <form className="formulario">
                    <h3> Faça sua compra e ganhe descontos em nosso Programa de Vantagens </h3>
                    <h4> Carrinho contém {cart.length} produto(s) Selecionado(s)</h4>
                </form>
            </div>

            <section>
                {data.map((prod, index) => (
                    <div className="product-content" key={prod.id}>
                        <img src={prod.photo} alt="ferrari1" width="200px" height="auto" />
                        <h3> {prod.name} </h3>
                        <span> {prod.description} </span>
                        <h5>preço: {prod.price} </h5>
                        <button onClick={() => handleCart(index)}> Adicionar ao Carrinho </button>
                    </div>
                ))}
            </section>
        </Container>
    );
}

export default Home;
