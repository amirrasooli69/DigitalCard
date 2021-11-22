import React, {Component} from "react";
import './App.css';
import QRCode from "react-qr-code";



class App extends Component {  
        
    // a = "BEGIN:VCARD\r\nFN:Amir Rasooli\r\nTITLE:Developer\r\nADR;Home:Modiran,Semnan,pelak,35\r\nADR;WORK:baghfamily,fari4,golfam;;;;;;\r\nTEL;HOME:02333445422\r\nTEL;WORK:02399887766\r\nTEL;MOBILE:09127173428\r\nURL;Site:www.papiloo.ir\r\nEMAIL;INTERNET,HOME:amirrasooli69@gmail.com\r\nEND:VCARD"
   
    qr = "BEGIN:VCARD\r\nFN:"
        + this.props.name
        + "\r\nTITLE:"
        + this.props.title 
        + "\r\nADR;Home:"
        + this.props.addHome
        + "\r\nADR;WORK:"
        + this.props.addWrok
        + "\r\nTEL;HOME:"
        + this.props.telHome
        + "\r\nTEL;WORK:"
        + this.props.telWork
        + "\r\nTEL;MOBILE:"
        + this.props.mobile
        + "\r\nURL;Site:"
        + this.props.site
        + "\r\nEMAIL;home:"
        + this.props.emailPrivacy
        + "\r\nEMAIL;work:"
        + this.props.emailWork
        + "\r\nEND:VCARD"


    render () {
        return(
            <div >
                {/* <div>{console.log(this.qr)}</div> */}
                <QRCode value={ this.qr } size= '200' bgColor= "#F4F1BB" fgColor="#45404F" level= 'H' />

            </div>
        )
    }
}
export default App;