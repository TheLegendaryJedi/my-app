import React from 'react';
import { PopupContainer } from './popup.styles';
import Button from '../button/button';

const Popup = ({ title, description, type, setPopupProperties }) => {
    const handleNotify = () => {
        setPopupProperties({title:"Success", description:"Successfully notified!", type:"success"})
    }   
    return  title && description && type ? 
        (
        <PopupContainer>
                <div className={`popup popup--${type}`}>
                    <div className='popup__container'>
                        <button className='popup__close' onClick={()=>setPopupProperties({})}>x</button>
                        <div className='popup__content'>
                            <h5>{title}</h5>
                            {type === 'notify' ?
                            (
                                <>
                                    <input placeholder={description} />
                                    <br></br>
                                    <Button onClick={()=>handleNotify()}><span>Send me an Email!</span></Button>
                                </>
                            ) : (
                                <p>{description}</p>
                            )}
                        </div>
                    </div>
                </div>
        </PopupContainer>
    ) : null;
};

export default Popup;
