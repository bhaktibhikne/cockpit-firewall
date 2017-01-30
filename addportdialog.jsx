(function() {
    "use strict";

    var cockpit = require("cockpit");

    var React = require("react");
    var Select = require("cockpit-components-select.jsx");

    var _ = cockpit.gettext;

    /* Sample dialog body
     */
    var PatternDialogBody = React.createClass({
        selectChanged: function(value) {
            console.log("new value: " + value);
        },
        render: function() {
            return (
                <div className="modal-body">
                    <table className="form-table-ct">
                        <tr>
                            <td className="top">
                                <label className="control-label" for="control-1">
                                    Port Number
                                </label>
                            </td>
                            <td>
                                <input id="control-1" className="form-control" type="text"/>
                            </td>
                        </tr>
                        <tr>
                            <td className="top">
                                <label className="control-label">
                                  Description  
                                </label>
                            </td>
                            <td>
                                <input id="control-1" className="form-control" type="text"/>
                              
                            </td>
                        </tr>
                        <tr>
                            <td className="top">
                                <label className="control-label">
                                    Protocol
                                </label>
                            </td>
                            <td>
                                <Select.Select initial="TCP">
                                    <Select.SelectEntry data="TCP">One</Select.SelectEntry>
                                    <Select.SelectEntry data="UDP">Two</Select.SelectEntry>
                                    <Select.SelectEntry data="ICMP">Three</Select.SelectEntry>
                                </Select.Select>
                            </td>
                        </tr>
                       
                    </table>
                </div>
            );
        }
    });

    module.exports = PatternDialogBody;
}());
