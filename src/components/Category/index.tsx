import React from 'react';
import './styles.css';

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg';

export const Category = ({ cover= DEFAULT_IMAGE, path, emoji='?' }:any) => (
    <a href={path}>
        <img src={cover} />
        {emoji}
    </a>
)