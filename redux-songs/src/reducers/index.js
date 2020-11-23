import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {
            title: 'No Scrubs',
            duration: '2:30'
        },
        {
            title:'Macarene',
            duration:'2:15'
        },
        {
            title:'All star',
            duration: '3:16'
        },
        {
            title: 'I wnat it that way',
            duration: '2.51'
        }

    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});

