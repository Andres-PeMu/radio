import React from 'react';
import { Category } from '../Category';
import './styles.css'

export const ListOfCategories = () => {
    return (
        <ul>
            {
                [1, 2, 3, 4, 5, 6, 7, 8, 9].map(category =>
                    <li key={category}>
                        <Category />
                    </li>
                )
            }
        </ul>
    );
};