import React, { Component } from 'react';
import qrcodeandvcard from 'qr-code-and-vcard';
class BuildCard extends Component {
    constructor() {
        super();
        this.state = {
            testCard: {
                version: '3.0',
                lastName: 'Нижинский',
                middleName: 'D',
                firstName: 'Костя',
                nameSuffix: 'JR',
                namePrefix: 'MR',
                nickname: 'Test User',
                gender: 'M',
                organization: 'ACME Corporation',
                workPhone: '312-555-1212444',
                homePhone: '312-555-1313333',
                cellPhone: '312-555-1414111',
                pagerPhone: '312-555-1515222',
                homeFax: '312-555-1616',
                workFax: '312-555-1717',
                birthday: "20140112",
                anniversary: "20140112",
                title: 'Crash Test Dummy',
                role: 'Crash Testing',
                email: 'john.doe@testmail',
                workEmail: 'john.doe@workmail',
                url: 'http://johndoe',
                workUrl: 'http://acemecompany/johndoe',
                homeAddress: {
                    label: 'Home Address',
                    street: '123 Main Street',
                    city: 'Chicago',
                    stateProvince: 'IL',
                    postalCode: '12345',
                    countryRegion: 'United States of America'
                },
        
                workAddress: {
                    label: 'Work Address',
                    street: '123 Corporate Loop\nSuite 500',
                    city: 'Los Angeles',
                    stateProvince: 'CA',
                    postalCode: '54321',
                    countryRegion: 'California Republic'
                },
        
                source: 'http://sourceurl',
                note: 'dddddd',
                socialUrls: {
                    facebook: 'johndoe',
                    linkedIn: 'johndoe',
                    twitter: 'johndoe',
                    flickr: 'johndoe',
                    skype:"test_skype",
                    custom: 'johndoe'
                }
            }
        
        }
    }
    createVcard = () => {
        document.getElementById('vcard').innerHTML = Vcard.qrCode.createVCard(this.state.testCard);

    }
    render() {
        return (
            <div>
                {
                    
                }
                <h1>Create Card</h1>
                {/* <script src="../dist/QrCode.js" type="application/javascript"></script>  */}
                {/* <div id="qr1"></div>
                <div id="qr2"></div>
                <div id="qr_vcard"></div> */}
                <pre id="vcard"></pre>

          
                {/* document.getElementById('qr_vcard').innerHTML = qrCode.createVCardQr(testCard, {typeNumber: 30, cellSize: 5});
                
                document.getElementById('qr1').innerHTML = qrCode.createQr({typeElement:"createSvg", data:"text QR", typeNumber: 5, cellSize: 5});
                document.getElementById('qr2').innerHTML = qrCode.createQr("test QR 2");
                 */}
                 <button onClick={this.createVcard}>Create Vcard</button>
    
    
 
 
            </div>
        );
    }
}

export default BuildCard;