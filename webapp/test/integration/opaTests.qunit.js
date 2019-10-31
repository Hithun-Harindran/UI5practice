/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"Practice/UI5Practice/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});