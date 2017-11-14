import React from "react";
import Moment from 'react-moment';

Moment.globalFormat = 'llll';
Moment.globalLocale = 'en-GB';

export class Data extends React.Component {


    render() {

        const items = this.props.tickerParams.listParams.chartData;
        const threshold = this.props.tickerParams.listParams.threshold
        let j = 0
        let lis = [];

        for (let i = 0; i < items.length; i++) {
            if (items[i].close > threshold) {
                lis.push(
                    <tr key={++j}>
                        <th scope="row">{j}</th>
                        <td><Moment unix>{items[i].date}</Moment></td>
                        <td>{items[i].open}</td>
                        <td>{items[i].close}</td>
                        <td>{items[i].low}</td>
                        <td>{items[i].high}</td>
                        <td>{items[i].volume}</td>
                    </tr>
                )
            }
        }

        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <h4>Results</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <p>Ticker: {this.props.tickerParams.listParams.ticker}</p>
                        <p>Threshold: {this.props.tickerParams.listParams.threshold}</p>
                        <p>Length: {lis.length}</p>
                        <hr />
                    </div>
                </div>
                <div>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th className="bg-info">#</th>
                                <th className="bg-info">Date</th>
                                <th className="bg-info">Open</th>
                                <th className="bg-info">Close</th>
                                <th className="bg-info">Low</th>
                                <th className="bg-info">High</th>
                                <th className="bg-info">Volume</th>
                            </tr>
                        </thead>
                        <tbody>
                            {lis.reverse()}
                        </tbody>
                    </table>
                </div >
            </div >
        );
    }
}