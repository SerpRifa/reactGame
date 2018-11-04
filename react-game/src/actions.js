import {createActions} from 'redux-actions'
const {
    moveLeft,
    moveRight,
    moveUp,
} = createActions(
    'MOVE_LEFT',
    'MOVE_RIGHT',
    'MOVE_UP'
);

export {
    moveLeft,
    moveRight,
    moveUp,
};