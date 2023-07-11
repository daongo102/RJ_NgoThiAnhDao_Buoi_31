import React, { Component } from "react";
import { Glasses } from "./glasses";

export default class Body extends Component {
    state = {
        glass: "./img/v5.png",
        nameG: "PRADA P8750",
        priceG: "40",
        descG: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.",
    };
    
    changeGlass = (url, name, price, des) => {
        return () => {
            this.setState({
                glass: url,
                nameG: name,
                priceG: price,
                descG: des,
            });
        };
    };

    renderListGlasses = () => {
        const result = Glasses.map((item) => {
            return (
                <div className="col-4 mb-5" key={item.id}>
                    <button
                        onClick={this.changeGlass(
                            item.url,
                            item.name,
                            item.price,
                            item.desc,
                        )}
                    >
                        <img style={{ width: "100%" }} src={item.url} />
                    </button>
                </div>
            );
        });
        return result;
    };

    render() {
        return (
            <div>
                <div className="container my-5">
                    <div className="row">
                        <div
                            className="col-4"
                            style={{ position: "relative", padding: 0 }}
                        >
                            <img
                                style={{
                                    width: "100%",
                                }}
                                src="./img/model.jpg"
                            />
                            <img
                                style={{
                                    width: "50%",
                                    position: "absolute",
                                    top: "30%",
                                    left: "50%",
                                    transform: "translate(-50%,-50%)",
                                }}
                                src={this.state.glass}
                            />
                            <div
                                className="titleG"
                                style={{
                                    background: "rgba(0, 0, 0, 0.5)",
                                    position: "absolute",
                                    bottom: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "35%",
                                    padding: "0.5rem 1rem",
                                    color: "white",
                                }}
                            >
                                <h4 style={{ marginBottom: "0.5rem" }}>
                                    {this.state.nameG}
                                </h4>
                                <p
                                    style={{
                                        marginBottom: "0.5rem",
                                        color: "yellow",
                                    }}
                                >
                                    {this.state.priceG}$
                                </p>
                                <p style={{ fontSize: "0.8rem" }}>
                                    {this.state.descG}
                                </p>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="row">
                                {this.renderListGlasses()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
