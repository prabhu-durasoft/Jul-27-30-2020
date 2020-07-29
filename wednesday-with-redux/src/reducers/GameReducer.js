const initialState = {
    target: Math.round(Math.random() * 100),
    attempts: 0,
    message: ''
}
export const GameReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GAME_PLAY_ACTION':
            let { attempts, message, target } = state; 

            attempts++;
            let {guess} = action.payload;
            if ( guess > target) {
                message = "Aim Lower";
            } else if(guess < target) {
                message = "Aim Higher";
            } else if (guess == target) {
                message = `You've got it in ${attempts} attempts`;
            }
            return { ... state, attempts, message  };
    
        default:
            return state;
    }
};