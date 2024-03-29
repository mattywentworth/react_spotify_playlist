import React from 'react';
import styles from './LeftColumn.module.css';
import LeftColumnForm from './LeftColumnForm';
import LeftColumnSearchResults from './LeftColumnSearchResults';

//Create a new component that contains Header, Left Column, and Right Column?
//That way, state can flow down through each one of them from the containing component (the one yet to be created)
//Or should I just use App for that?

//When you add the api call, set the results to show in left column and set overflow of left colum to scroll OR better yet paginate it?

export default function LeftColumn( {handleInputChange, stateInput, handleFormSubmitAPI, apiReturn, handleAddToPlaylistClick} ) {
    return (
        <div className={styles.divWrapper}>
            <div className={styles.leftColumnHeader}>
                <h2>Explore Spotify's Catalog</h2>
                <LeftColumnForm handleInputChange={handleInputChange} stateInput={stateInput} handleFormSubmitAPI={handleFormSubmitAPI}></LeftColumnForm>
            </div>
            <div className={styles.divWrapperSearchResults}>
                <LeftColumnSearchResults apiReturn={apiReturn} handleAddToPlaylistClick={handleAddToPlaylistClick}/>
            </div>
        </div>
    );
}