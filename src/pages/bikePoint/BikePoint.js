import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { getBikePoint } from '../../api/bikePointsService'
import {useParams} from 'react-router-dom'
import MapContainer from '../../components/map/Map'

export default function BikePoint() {
    const [bikePoint, setBikePoint] = useState()
    const {id} = useParams()

    useEffect(() => {
        getBikePoint(id)
            .then(point => setBikePoint(point))
            .catch(() => setBikePoint(null))
    }, [id])

    return (
        bikePoint ? (
            <div>
                <h2>ID: {bikePoint.id} </h2>
                <p>Common Name: {bikePoint.commonName}</p>
                <p>Latitude: {bikePoint.lat}</p>
                <p>Longtitude: {bikePoint.lon}</p>
                <MapContainer location={bikePoint} zoomLevel={14} />
                <Link to="/bikepoints">&larr;&nbsp;Bike Points</Link>
            </div>
        ) : (
            <div>Loading&hellip;</div>
        )
    )
}