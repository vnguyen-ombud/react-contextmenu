"use strict";

import React from "react";
import store from "./redux/store";
import ContextMenuContainer from "./menu-container";

let { PropTypes } = React;

const ContextMenu = React.createClass({
    displayName: "ContextMenu",
    propTypes: {
        identifier: PropTypes.string.isRequired
    },
    getInitialState() {
        return store.getState();
    },
    componentDidMount() {
        this.unsubscribe = store.subscribe(this.handleUpdate);
    },
    componentWillUnmount() {
        if (this.unsubscribe) this.unsubscribe();
    },
    handleUpdate() {
        this.setState(this.getInitialState());
    },
    render() {
        return (
            <ContextMenuContainer {...this.props} {...this.state}/>
        );
    }
});

export default ContextMenu;
