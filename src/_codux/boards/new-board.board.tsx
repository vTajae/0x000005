import { createBoard } from '@wixc3/react-board';
import React, { useState } from 'react';
import { TextField, Grid } from '@mui/material';

export default createBoard({
    name: 'New Board',
    Board: () => <div>
        <header>
            <span>text</span>

        </header>
    </div>
});
