import {connect} from 'react-redux';
import { GuessingGameComponent } from '../components/GuessingGameComponent';

const mapStateToProps = (state) => {
    return {
        attempts: state.attempts ? state.attempts : 0,
        message: state.message ? state.message : ''
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        play: (guess) => dispatch({type: 'GAME_PLAY_ACTION', payload: { guess }})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GuessingGameComponent);
/**
 *   <ContextProvider value={{...}}>
      <GuessingGameComponent store={{...}} attempts={0} message="" play={[Function: play]} />
    </ContextProvider>
 * 
 */