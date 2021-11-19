                /* JS comes here */
                import React, { Component } from 'react';
                
                class script extends Component {
                    render() {
                        return (
                            <div>
                                <div>
                                    <input value={qrcode} id="qr-text" type="text" placeholder="Name and Family" onChange={this.changeHandler}/>
                                    <br/>
                                    <br/>
                                    <input value={email} id="email" type="text" placeholder="E-mail"/>
                                </div>
                                <br/>
                                <div>
                                    <button class="qr-btn" onclick="generateQRCode()">Create QR Code</button>
                                </div>
                                <br/>
                                {/* <p id="qr-result">This is deault QR code:</p> */}
                                <canvas id="qr-code"></canvas>
                            </div>
                        
                        );
                    }
                }
                
                export default script;


                let qr;
                (function() {
                        qr = new QRious({
                        element: document.getElementById('qr-code'),
                        size: 50,
                        value: 'https://papiloo.ir'
                    });
                })();
                
                function generateQRCode() {
                    let qrtext = document.getElementById("qr-text").value;
                    
                    document.getElementById("email").innerHTML = qrtext ;
                    alert("your Card Generat");
                    qr.set({
                        foreground: 'black',
                        size: 50,
                        value: qrtext
                    });
                }