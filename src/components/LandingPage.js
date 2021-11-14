import React from 'react';
import Button from '@mui/material/Button';
import ErrorIcon from '@mui/icons-material/Error';
import LoopIcon from '@mui/icons-material/Loop';
import CheckIcon from '@mui/icons-material/Check';
import SendIcon from '@mui/icons-material/Send';
import { TextField } from '@mui/material';

class LandingPage extends React.Component {
    state = {
        pageNumber: 1,
        submitted: false
    };

    buttonStyle = {
        display: "inline-block",
        fontFamily: 'Open Sans'
    };

    componentDidUpdate(prevProps, prevState) {
        if (this.state.pageNumber < 4) {
            setTimeout(() => {
                this.setState({pageNumber: this.state.pageNumber+1})
            }, 5000);
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const body = {"email": event.target[0].value};

        fetch('https://europe-central2-mutablesecurity.cloudfunctions.net/enter_waiting_list', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(body),
            redirect: 'follow'
        }).then(response => response.text())
        .then(result => this.setState({submitted: true}))
        .catch(error => console.log('error', error));
    }

    pageClick = () => {
        this.setState({pageNumber: this.state.pageNumber+1})
    }

    page1 = () => {
        return (
            <div>
                <h1>Hai să îți arătăm cât de ușor este să-ți îmbunătățești securitatea în organizația ta</h1>
                <Button variant="contained" style={{...this.buttonStyle, display: 'flex', margin: '0 auto'}} onClick={this.pageClick}>Click aici pentru demo</Button>
            </div>
        );
    }

    page2 = () => {
        return (
            <div>
                <h1>Mai întai îți arătăm tot ceea ce am putea securiza pentru organizația ta:</h1>
                <ul className="red fade second">
                    <li><ErrorIcon/> Am găsit 2 echipamente de securitate.</li>
                    <li><ErrorIcon/> Am identificat 3 configurații nesecurizate.</li>
                    <li><ErrorIcon/> Am găsit alte 74 de probleme.</li>
                </ul>
            </div>
        );
    }

    page3 = () => {
        return (
            <div>
                <h1>Mai apoi, securizăm echipamentele, instalăm configurațiile și rezolvăm problemele găsite:</h1>
                <ul className="orange fade third">
                    <li><LoopIcon className="rotating"/> Setăm echipamentele de securitate...</li>
                    <li><LoopIcon className="rotating"/> Securizăm configurațiile...</li>
                    <li><LoopIcon className="rotating"/> Rezolvam cele 74 de probleme găsite...</li>
                </ul>
            </div>
        );
    }

    page4 = () => {
        return (
            <div>
                <h1>La final, îți arătăm rezultatele</h1>
                <ul className="green fade">
                    <li><CheckIcon/> Echipamentele de securitate au fost setate!</li>
                    <li><CheckIcon/> Configurațiile au fost securizate!</li>
                    <li><CheckIcon/> Problemele au fost rezolvate!</li>
                    <li/>
                    <li>Acum ai o infrastructură securizată!</li>
                </ul>
                <div className="separator"/>
                
                <div className="delay">
                    Credem că măsurile de securitate esențiale trebuie să fie implementate fără efort. Dacă și tu crezi același lucru, introdu adresa ta de email aici și te vom anunța când vom lansa platforma precum și viitoarele funcționalități:
                    <div className="separator"/>
                    {!this.state.submitted && <div>
                        <form onSubmit={this.handleSubmit}>
                            <TextField id="email" label="Adresa de email" variant="outlined" ref={node => (this.inputNode = node)}/>
                            <Button endIcon={<SendIcon />} variant="contained" style={this.buttonStyle} onClick={this.submit} type="submit">Submit</Button>
                        </form>
                    </div>}
                    {this.state.submitted && <div className="green thank-you">
                        Vă mulțumim! Revenim de îndată ce avem vești.
                    </div>}
                </div>
            </div>
        );
    }

    render() {
        return(
            <div className="pages">
                {this[`page${this.state.pageNumber}`]()}
            </div>
        );
    }
}

export default LandingPage;
