import React from 'react';
import Imagem from '../components/Imagem';
import Label from '../components/label';
import Text from '../components/Text';
import Textfield from '../components/Textfield';
import Button from '../components/button';
import Style from '../views/App.css';

const Caixa = () => {
    return (<>

        <div className='cssContainer'>
            <Imagem />
            <Label />
            <Textfield/>
            <Text/>
            <Button/>
        </div>
    
    
    </>)
    
}
 
export default Caixa;