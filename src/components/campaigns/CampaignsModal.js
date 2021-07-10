import React, { useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import pubG from '../assets/Images/inspect/Front-End/Page 1/Dashboard-Popup/Popup/Bitmap.png';

const CampaignsModal = (props) => {
    
    console.log("model trigger", props)
    return (
        <div>

            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title><div className="modalTittle">
                        <img className="gamePic" src={props.modalData.image} alt="pubG"></img>
                        <div className="gameName">
                            {props.modalData.title}
                        </div>
                        <div className="colRegion">
                            {props.modalData.region}
                        </div>

                    </div></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h2>Pricing</h2>
                    <div>
                       <span>1 Week - 1 Month</span><span>$100</span></div>
                    <div>6 Months<span>$100</span></div>
                    <div>1 Year <span>$100</span></div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
};
export default CampaignsModal;
