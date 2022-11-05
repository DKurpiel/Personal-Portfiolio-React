import React from 'react'
import './education.css'

const Education = () => {
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th> Degree </th>
                    <th> Departament </th>
                    <th> Institute </th>
                    <th> Year </th>

                </tr>
            </thead>
            <tr>
                <td>AAA</td>
                <td>Lorem</td>
                <td>Lorem ipsum dolor sit amet.</td>
                <td>2015 - 2018</td>
            </tr>

            <tr>
                <td>BBB</td>
                <td>Lorem</td>
                <td>Lorem ipsum dolor sit amet.</td>
                <td>2019 - 2021</td>
            </tr>

            <tr>
                <td>CCC</td>
                <td>Lorem</td>
                <td>Lorem ipsum dolor sit amet.</td>
                <td>2021 - Present</td>
            </tr>

        </table>
    );
}

export default Education;