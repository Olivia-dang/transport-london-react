import React from 'react'
import { Link } from 'react-router-dom'

export default function BikePointList({bikePointList}) {  
    return (
        bikePointList ? (
            <div>
                <h1>List of Bike Points</h1>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Common Name</th>
                            <th>Longtitude</th>
                            <th>Latitude</th>
                            <th>Place Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bikePointList.map(bikePoint => (
                                <tr key={bikePoint.id} >
                                    <td>{bikePoint.id}</td>
                                    <td><Link to={`/bikepoints/${bikePoint.id}`}>{bikePoint.commonName}</Link></td>
                                    <td>{bikePoint.lat}</td>
                                    <td>{bikePoint.lon}</td>
                                    <td>{bikePoint.placeType}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                
            </div>
        ) : (
            <div>Loading&hellip;</div>
        )
    )
}
