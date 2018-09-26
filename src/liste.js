import React, { Component } from 'react'
import Request from "react-http-request";

export class Liste extends Component {
    render() {
        const kitapListesi = this.getKitapList();
        return (
            <div>
                {kitapListesi}
            </div>
        );
    }

    getKitapList() {
        return <Request
            url="http://5ba7a64668c16e0014c4eeff.mockapi.io/kitap"
            method="get"
            accept="application/json"
        // verbose={true}
        >
            {({ error, result, loading }) => {
                if (loading) {
                    return <div>loading...</div>;
                } else {
                    const listeHtml = result.body.map((item, i) => {
                        debugger;
                        const yazarAdiSoyadi = this.getYazar(item.yazarId);
                        return (
                            <div key={i}>
                                {i} - {item.kitapAdi} - {yazarAdiSoyadi}
                            </div>
                        );
                    });
                    return <div> {listeHtml}</div>;
                }
            }}
        </Request>
    }

    getYazar(yazarId: number) {
        const url = "http://5ba7a64668c16e0014c4eeff.mockapi.io/yazar/" + yazarId.toString()
        return <Request
            url={url}
            method="get"
            accept="application/json"
        // verbose={true}
        >
            {({ error, result, loading }) => {
                if (loading) {
                    return <div>loading...</div>;
                } else {
                    const listeHtml = result.body.map((item, i) => {
                        return (
                            <div key={i}>
                                {item.yazarAdi} {item.yazarSoyadi}
                            </div>
                        );
                    });
                    return <div> {listeHtml}</div>;
                }
            }}
        </Request>
    }
}

export default Liste
