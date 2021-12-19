import React, { Component, useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import NameCard from './NameCard';
import axios from 'axios';

const NameCards = () => {
    const apiURL = 'http://localhost:5000/api/data'
    const [namecards, setNamecards] = useState([]);
    useEffect(() => {

        axios.get(apiURL).then(res => {
            setNamecards(res.data.data);
        }).catch(function (error) {
            // handle error
            console.log(error);
        });
    }, []);

    namecards.sort(function (a, b) {
        return a.id - b.id;
    })
    return (
        <>
            <div>
                {!!namecards ? (
                    <div>
                        <Grid container spacing={24} style={{ padding: 24 }}>
                            {namecards.map(namecard => (
                                <Grid item xs={11} sm={5} lg={3} xl={2}>
                                    <NameCard namecard={namecard} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ) : "No courses found"}
            </div>
        </>
    );
}

export default NameCards;
