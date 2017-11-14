import React from "react";

//export const Main = (props) => {
export class Main extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            listParams: {
                ticker: '',
                threshold: 0,
                chartData: {}
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {

        const target = event.target;
        const fvalue = target.type === 'checkbox' ? target.checked : target.value;
        const fname = target.name;

        let listParams = this.state.listParams;
        listParams[fname] = fvalue;
        this.setState({ listParams: listParams });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateTickerList(this.state.listParams);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-10">
                        <h4>Cryptocurrency Threshold Evaluator (past 24hrs)</h4>
                    </div>
                </div>
                <br />
                <form id="getTickerForm" onSubmit={this.handleSubmit}>

                    <div className="row">
                        <div className="col-xs-5">
                            <div className="form-group">
                                <label>Choose currency</label>
                                <select name="ticker" className="form-control" value={this.state.listParams.ticker} onChange={this.handleChange} >
                                    <option value=""></option>
                                    <option value="LSK">Lisk</option>
                                    <option value="ETH">Etherium</option>
                                    <option value="XMR">Monero</option>
                                    <option value="STRAT">Stratis</option>
                                    <option value="BCH">Bitcoin Cash</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-xs-5">
                            <div className="form-group">
                                <label>Enter threshold</label>
                                <input type="text" className="form-control" name="threshold" value={this.state.listParams.threshold} onChange={this.handleChange} placeholder="BTC 00,00" />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-5">
                            <div className="form-group">
                                <button type="submit" className="btn btn-default">Submit</button>
                            </div>
                        </div>
                    </div>

                </form>
            </div >

        );
    }
};