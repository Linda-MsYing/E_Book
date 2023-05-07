import React from 'react';
import { Button, Input, AutoComplete } from 'antd';
import { Link } from 'react-router-dom';

function SearchBox() {
    return (
        <div className='input-areas'>
            <form>
            <input type="text" id="grayInput" placeholder="Search for books!"/>
                <Button
                    className="search-btn"
                    style={{ marginRight: -20 }}
                    size="large"
                    type="Default"
                >
                    Go to Search!
                </Button>
            </form>
        </div>

    );
}

export default SearchBox;

