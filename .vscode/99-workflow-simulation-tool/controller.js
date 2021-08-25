sap.ui.define(["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel", "com/tfnsw/ptp/ZPR_WF_SIMULATION/util/formatter"], function (e, t, s) {
            "use strict";
            var o, r, a, l;
            return e.extend("com.tfnsw.ptp.ZPR_WF_SIMULATION.controller.InitialPage", {
                    formatter: s,
                    onI +
                    nit: function () {
                        var e = {
                            SelectedType: " ",
                            DocumentType: [{
                                DocType: "PO",
                                Name: "Purchase Order"
                            }, {
                                DocType: "SES",
                                Name: "Service Entry Sheet"
                            }, {
                                DocType: "Inv",
                                Name: "Invoice"
                            }]
                        };
                        var s = this.getView();
                        var o = new t(e);
                        s.setModel(o, "doctype");
                        this._oModel = new t({
                            inputPop +
                            ulated: "",
                            dropPopulated: "",
                            messageText: "",
                            showContent: "",
                            showExpense: "",
                            showFinancial: "",
                            showApproval: "",
                            showMessage: "true"
                        });
                        this._oModel.setSizeLimit(1e6);
                        s.setModel(this._oModel);
                        this._oDocumentInput = this.byId("documentInput");
                        this._oDocumentDrop = this +
                            .byId("idDropdown");
                        var r = new sap.ui.model.resource.ResourceModel({
                            bundleName: "com.tfnsw.ptp.ZPR_WF_SIMULATION.i18n.i18n"
                        });
                        sap.ui.getCore().setModel(r, "i18n")
                    },
                    _setDataModel: function () {
                        var e = "/sap/opu/odata/sap/ZGWP_WF_SIMULATION_SRV/";
                        o = new sap.ui.mode +
                            l.odata.v2.ODataModel(e);
                        return o
                    },
                    handleDocTypeChange: function () {
                        this._oDocumentInput.focus()
                    },
                    handleInputSubmit: function (e) {
                        var t = this._oDocumentInput.getValue(),
                            s = t !== "";
                        var o = this._oDocumentDrop._getSelectedItemText();
                        this._oModel.setProperty("/input+
                            Populated ",s);if(!o){var r=sap.ui.getCore().getModel("
                            i18n ");var a=r.getProperty("
                            DropError ");this._oModel.setProperty(" / messageText ",a)}if(s&&o){this._setSelectedDocumentAndUpdateInput(t)}},_handleException:function(e){var t=this;var s=JSON.parse(e.resp+
                            onseText);
                        var o = s.error.message.value;
                        t._oModel.setProperty("/messageText", o);
                        t._oModel.setProperty("/showMessage", "true");
                        t._oModel.setProperty("/showContent", null);
                        t._oModel.setProperty("/showApproval", null);
                        t._oModel.setProperty("/showExpense", null);
                        t +
                            ._oModel.setProperty("/showFinancial", null);
                        return o
                    },
                    _setSelectedDocumentAndUpdateInput: function (e) {
                        var s = this;
                        var r = s.getView();
                        var a = r.byId("idDropdown")._getSelectedItemText();
                        var l = r.byId("idDropdown").getSelectedKey();
                        var i = sap.ui.getCore().getMode +
                            l("i18n");
                        var n = i.getProperty("RequestedBy");
                        var d = i.getProperty("PersonResponsible");
                        r.byId("idDocInfo").setTitle(a + " " + "Information");
                        if (l === "PO") {
                            r.byId("idRequested").setTitle(n);
                            r.byId("idPoValue").setVisible(true);
                            r.byId("idServiceValue").setVisibl +
                                e(false);
                            r.byId("idLegacyValue").setVisible(true);
                            r.byId("idInvValue").setVisible(false)
                        } else if (l === "SES") {
                            r.byId("idServiceValue").setVisible(true);
                            r.byId("idPoValue").setVisible(false);
                            r.byId("idInvValue").setVisible(false);
                            r.byId("idLegacyValue").set +
                                Visible(true);
                            r.byId("idRequested").setTitle(d)
                        } else {
                            r.byId("idServiceValue").setVisible(false);
                            r.byId("idPoValue").setVisible(false);
                            r.byId("idInvValue").setVisible(true);
                            r.byId("idLegacyValue").setVisible(true);
                            r.byId("idRequested").setTitle(d)
                        }
                        o = s._se +
                            tDataModel();
                        o.metadataLoaded().then(function () {
                                var l = o.createKey("/ZETS_HEADER", {
                                    DocumentNumber: e,
                                    DocumentType: a
                                });
                                o.read(l, {
                                        success: function (o) {
                                            var a = new t;
                                            a.setData(o);
                                            s.getView().setModel(a, "Header");
                                            var l = r.byId("idFingrp");
                                            var i = r.byId("idPgrp");
                                            if +
                                            (o.FinAppr || o.BusiCert) {
                                                l.setVisible(true);
                                                i.setVisible(false)
                                            } else {
                                                l.setVisible(false);
                                                i.setVisible(true)
                                            }
                                            if (o.NonPoInv) {
                                                r.byId("idRequested").setTitle(n);
                                                r.byId("idLegacyValue").setVisible(false)
                                            }
                                            if (o.FinAppr) {
                                                s._oModel.setProperty("/showContent", "true+
                                                    ");s._oModel.setProperty(" / showApproval ","
                                                    true ");s._oModel.setProperty(" / showExpense ","
                                                    true ");s._oModel.setProperty(" / showFinancial ","
                                                    true ");s._oModel.setProperty(" / showMessage ",null);s._setExpenseTable(e);s._setApproveTable(e)}else if(o.PgrpAppr){s._oMo+
                                                    del.setProperty("/showContent", "true"); s._oModel.setProperty("/showApproval", "true"); s._oModel.setProperty("/showExpense", null); s._oModel.setProperty("/showFinancial", null); s._oModel.setProperty("/showMessage", null); s._setApproveTable(e)
                                                }
                                                else {
                                                    s._oModel.s +
                                                        etProperty("/showContent", "true");
                                                    s._oModel.setProperty("/showApproval", "true");
                                                    s._oModel.setProperty("/showExpense", "true");
                                                    s._oModel.setProperty("/showFinancial", null);
                                                    s._oModel.setProperty("/showMessage", null);
                                                    s._setExpenseTable(e);
                                                    s._setApproveTable(+
                                                        e)
                                                }
                                            }, error: function (e) {
                                                s._handleException(e)
                                            }
                                        })
                                })
                        }, _setFilter: function (e) {
                            var t = this;
                            var s = t.getView();
                            var o = s.byId("idDropdown")._getSelectedItemText();
                            r = [];
                            r.push(new sap.ui.model.Filter("DocumentType", sap.ui.model.FilterOperator.EQ, o));
                            r.push(new sap. +
                                ui.model.Filter("DocumentNumber", sap.ui.model.FilterOperator.EQ, e));
                            return r
                        }, _setExpenseTable: function (e) {
                            var t = this;
                            o = t._setDataModel();
                            r = t._setFilter(e);
                            o.read("/ZETS_EXP_TOTAL", {
                                filters: r,
                                success: function (e) {
                                    l = new sap.ui.model.json.JSONModel;
                                    a = {
                                        Table +
                                        : e.results
                                    };
                                    l.setData(a);
                                    t.getView().byId("idExpendTable").setModel(l, "ExpendTable")
                                },
                                error: function (e) {
                                    t._handleException(e)
                                }
                            })
                        }, _setApproveTable: function (e) {
                            var t = this;
                            o = t._setDataModel();
                            r = t._setFilter(e);
                            o.read("/ZETS_APPROVAL_HISTORY", {
                                filters: r,
                                suc +
                                cess: function (s) {
                                    l = new sap.ui.model.json.JSONModel;
                                    a = {
                                        Table: s.results
                                    };
                                    l.setData(a);
                                    t.getView().byId("idApproveTable").setModel(l, "ApproveTable");
                                    t._setFinanceTable(e)
                                },
                                error: function (e) {
                                    t._handleException(e)
                                }
                            })
                        }, _setFinanceTable: function (e) {
                            var t = this;
                            o + = t._setDataModel();
                            r = t._setFilter(e);
                            o.read("/ZETS_DYNAMIC_FIELD", {
                                filters: r,
                                urlParameters: {
                                    $expand: "ZDATASET"
                                },
                                success: function (e) {
                                    sap.ui.core.BusyIndicator.hide();
                                    a = e;
                                    t.writeData(a)
                                },
                                error: function (e) {
                                    t._handleException(e)
                                }
                            })
                        }, writeData: function (e) {
                            var +
                            t = this;
                            var s = 0;
                            var o = e.results[0].ZDATASET.results;
                            if (o.length > 0) {
                                var r = new sap.ui.model.json.JSONModel;
                                r.setData({
                                    rows: o,
                                    columns: e.results
                                });
                                var a = t.getView().byId("idFinanceTable");
                                a.setModel(r);
                                a.bindAggregation("columns", "/columns", function (e, t) {
                                    var +
                                    s = t.getObject().Label;
                                    var o = new sap.m.Column({
                                        header: new sap.m.Label({
                                            text: s
                                        })
                                    });
                                    if (s === "Approver Position" || s === "Approver Name") {
                                        o.setHAlign("Left")
                                    } else {
                                        o.setHAlign("Right")
                                    }
                                    if (s === "POSITION NAME") {
                                        o.setProperty("visible", false)
                                    }
                                    return o
                                });
                                a.bindItems +
                                    ("/rows", function (t, r) {
                                        var a = new sap.m.ColumnListItem;
                                        for (var l in e.results) {
                                            var i = e.results[l].ZDATASET.results[s].Value;
                                            var n = e.results[l].ZDATASET.results[s].Label;
                                            if (n === "Approver Position") {
                                                var d = 1;
                                                var p = e.results[d].ZDATASET.results[s].Value;
                                                var u + = new sap.m.ObjectIdentifier;
                                                u.setTitle(p);
                                                u.setText(i);
                                                u.setTextDirection("LTR");
                                                u.addStyleClass("sapUiTinyMarginTop");
                                                a.addCell(u)
                                            } else if (n === "Approver Name") {
                                                var c = new sap.m.Text;
                                                c.setText(i);
                                                c.addStyleClass("sapUiTinyMarginTop");
                                                a.addCell(c)
                                            } else if (+
                                                n === "POSITION NAME") {
                                                var y = new sap.m.Text;
                                                y.setText(i);
                                                y.setVisible(false);
                                                a.addCell(y)
                                            } else {
                                                if (/\d/.test(i) === false) {
                                                    var b = new sap.m.Text;
                                                    b.setText(i);
                                                    b.addStyleClass("sapUiTinyMarginTop");
                                                    a.addCell(b)
                                                } else {
                                                    var v = new sap.m.ObjectNumber;
                                                    v.setNumber(i);
                                                    v. +
                                                        setUnit("AUD");
                                                    v.addStyleClass("sapUiTinyMarginTop");
                                                    a.addCell(v)
                                                }
                                            }
                                        }
                                        if (s < o.length - 1) {
                                            s++
                                        } else {
                                            s = 0
                                        }
                                        return a
                                    })
                            }
                        }
                    })
            });