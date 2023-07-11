import React, { Component } from "react";

export default class Header extends Component {
    render() {
        return (
            <div>
                <header
                    style={{
                        height: "50px",
                        backgroundColor: "rgb(31, 31, 31)",                      
                    }}
                >
                    <div className="container">
                        <h4
                            style={{
                                color: "white",
                                textAlign: "center",
                                paddingTop: "10px",
                            }}
                        >
                            TRY GLASSES APP ONLINE
                        </h4>
                    </div>
                </header>
            </div>
        );
    }
}
