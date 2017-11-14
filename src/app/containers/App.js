import React from "react";
import { connect } from "react-redux";

import { Data } from "../components/Data";
import { Main } from "../components/Main";
import { Header } from "../components/Header";

import { setName } from "../actions/userActions";
import { setList } from "../actions/tickerActions";

class App extends React.Component {

    render() {

        let listParams = {}

        return (

            <div className="container">
                <div>
                    <Header />
                </div>
                <div>
                    <div className="container" >
                        <Main updateTickerList={(listParams) => this.props.setList(listParams)} />
                        <Data tickerParams={this.props.ticker} />
                    </div>
                </div>
            </div>



        );
    }
}

const mapStateToProps = (state) => {
    return {
        ticker: state.ticker
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setList: (listParams) => {
            dispatch(setList(listParams));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
