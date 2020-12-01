import React from 'react';
// import { WeekList, FullWeekList } from './WeekList';
// import { SeasonList } from './SeasonList';
import ProduceList from './ProduceList.js';
import MarketList from './MarketList.js';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

class FarmersController extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      // marketVisibleOnPage: true,
      // produceVisibleOnPage: false
    };
  }

  handleMarketClick = () => {
    // this.setState({ marketVisibleOnPage: true, produceVisibleOnPage: false})
    const { dispatch } = this.props;
    const action = {
      type: 'TOGGLE_MARKET'
    }
    dispatch(action);
  }

  handleProduceClick = () => {
    // this.setState({ marketVisibleOnPage: false, produceVisibleOnPage: true})
    const { dispatch } = this.props;
    const action = {
      type: 'TOGGLE_PRODUCE'
    }
    dispatch(action);
  }

  render() {
    let currentVisibleState = null;
    if (this.props.produceVisibleOnPage){
      currentVisibleState = <ProduceList />;
    } else {
      currentVisibleState = <MarketList />;
    }

    return (
      <React.Fragment>
        <button onClick={this.handleMarketClick}>Market Schedule</button>
        <button onClick={this.handleProduceClick}>Produce Schedule</button>
        {currentVisibleState}
      </React.Fragment>
    );
  }


}

FarmersController.propTypes = {
  marketVisibleOnPage: PropTypes.bool,
  produceVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    marketVisibleOnPage: state.marketVisibleOnPage,
    produceVisibleOnPage: state.produceVisibleOnPage
  }
}


FarmersController = connect(mapStateToProps)(FarmersController);

export default FarmersController;