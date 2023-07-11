import React, { Component } from "react";
import Style from "./style.module.css";
import { Glasses } from "./glasses";

export default class Body extends Component {
    state = {
        glass: "./img/v2.png",
    };
    changeGlass = (glass) => {
        return () => {
            this.setState({ glass: "./img/" + glass + ".png" });
        };
    };

    render() {
        return (
            <div>
                <div className={Style.BgImg}>
                    <div className="container my-5">
                        <div className="row">
                            <div className="col-4">
                                <img
                                    style={{
                                        width: "100%",
                                        position: "relative",
                                    }}
                                    src="./img/model.jpg"
                                />
                                <div>
                                    <img
                                        style={{
                                            width: "15%",
                                            position: "absolute",
                                            top: "37%",
                                            left: "13.4%",
                                        }}
                                        src={this.state.glass}
                                    />
                                </div>
                            </div>
                            <div className="col-8">
                                <div className="row">
                                    <div className="col-4">
                                        <button onClick={this.changeGlass("v1")}>
                                            <img
                                                style={{ width: "100%" }}
                                                src="./img/v1.png"
                                            />
                                        </button>
                                    </div>
                                    <div className="col-4">
                                        <button onClick={this.changeGlass("v2")}>
                                            <img
                                                style={{ width: "100%" }}
                                                src="./img/v2.png"
                                            />
                                        </button>
                                    </div>
                                    <div className="col-4">
                                        <button onClick={this.changeGlass("v3")}>
                                            <img
                                                style={{ width: "100%" }}
                                                src="./img/v3.png"
                                            />
                                        </button>
                                    </div>
                                    <div className="col-4 my-5">
                                        <button onClick={this.changeGlass("v4")}>
                                            <img
                                                style={{ width: "100%" }}
                                                src="./img/v4.png"
                                            />
                                        </button>
                                    </div>
                                    <div className="col-4 my-5">
                                        <button onClick={this.changeGlass("v5")}>
                                            <img
                                                style={{ width: "100%" }}
                                                src="./img/v5.png"
                                            />
                                        </button>
                                    </div>
                                    <div className="col-4 my-5">
                                        <button onClick={this.changeGlass("v6")}>
                                            <img
                                                style={{ width: "100%" }}
                                                src="./img/v6.png"
                                            />
                                        </button>
                                    </div>
                                    <div className="col-4">
                                        <button onClick={this.changeGlass("v7")}>
                                            <img
                                                style={{ width: "100%" }}
                                                src="./img/v7.png"
                                            />
                                        </button>
                                    </div>
                                    <div className="col-4">
                                        <button onClick={this.changeGlass("v8")}>
                                            <img
                                                style={{ width: "100%" }}
                                                src="./img/v8.png"
                                            />
                                        </button>
                                    </div>
                                    <div className="col-4">
                                        <button onClick={this.changeGlass("v9")}>
                                            <img
                                                style={{ width: "100%" }}
                                                src="./img/v9.png"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
