import React, {Component} from 'react';

export default class ImportOrCreate extends Component {

    render() {
        return (
            <div>
            <div className="importOrCreate">
                <h3>Welcome to BitPass</h3>
                <p>Bitpass is a Hierarchical Deterministic password manager.
                Bit pass works similar to HD Bitcoin wallets. To get started,
                we first need to generate a 12 word recovery phrase.</p>
            </div>
                <div className="but-50" style={{paddingRight: '10px'}}>
                    <div className="button">
                        <span>Generate Key</span>
                    </div>
                </div>
                <div className="but-50"style={{paddingLeft: '10px'}}>
                    <div className="button">
                        <span>Restore Key</span>
                    </div>
                </div>
                <div className="clearfix"></div>
            </div>
        );
    }
}
