angular.module("templateCache", []).run(["$templateCache", function($templateCache) {$templateCache.put("datetime/datetime.html","<div class=\"row parameter-row\">\n    <div class=\"col-xs-6 col-md-3 par-name-col\">\n        {{parameter.displayName}}\n    </div>\n    <div class=\"col-xs-5 col-md-8 par-value-col datetime-col\" ng-class=\"{\'has-error\': !isParameterValid}\">\n        <input ng-if=\"parameter.hasDate\" type=\"date\" ng-model=\"parameter.value\" class=\"form-control\" ng-disabled=\"!parameter.editable\">\n        <input ng-if=\"parameter.hasTime\" type=\"time\" step=\"60\" ng-model=\"parameter.value\" class=\"form-control\" ng-disabled=\"!parameter.editable\">\n        <div class=\"error-message\" ng-repeat=\"msg in parameter.message\">{{msg}}</div>\n    </div>\n    <div class=\"col-xs-1 info-col\">\n        <div class=\"info\" ng-if=\"parameter.description!=undefined && parameter.description!=\'\'\">i <span>{{parameter.description}}</span></div>\n    </div>\n</div>\n");
$templateCache.put("domains/domains.html","<div class=\"row parameter-row\">\n\n  <div class=\"col-xs-12 par-name-col map-container ng-binding\" ng-class=\"{\'disabled\' : !parameter.editable}\">\n    <div style=\"width:100%;height:{{height}}\" id=\"{{parameter.dbName}}map\" ng-class=\"{\'map-has-error\' : !isParameterValid}\"></div>\n    <div class=\"error-message\" ng-repeat=\"msg in parameter.message\">{{msg}}</div>\n    <div style=\"height:17px;width:100%\" ng-if=\"parameter.message.length==0\"></div>\n  </div>\n  <div class=\"col-xs-11\">\n    <div ng-show=\"parameter.drawDomains\" ng-repeat=\"val in parameter.value.domains track by $index\">\n      Domain number {{$index+1}} - South-West: ({{val.southWest.lat | number:4}}, {{val.southWest.long | number:4}}) North-East: ({{val.northEast.lat | number:4}}, {{val.northEast.long | number:4}})<br/>\n    </div>\n    <div ng-show=\"parameter.drawMarkers\" ng-repeat=\"mark in parameter.value.markers track by $index\">\n      Marker {{$index+1}}: ({{mark.lat | number:4}}, {{mark.long | number:4}})\n    </div>\n  </div>\n  <div class=\"col-xs-1 info-col\">\n    <div class=\"info\" ng-if=\"parameter.description!=undefined && parameter.description!=\'\'\">i <span>{{parameter.description}}</span></div>\n  </div>\n\n\n\n\n  <div class=\"modal fade\" id=\"{{parameter.dbName}}modal\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n          <h4 class=\"modal-title\">Delete domain</h4>\n        </div>\n        <div class=\"modal-body\">\n          <p>Do you want to delete domain number <span id=\"number\"></span><span ng-if=\"parameter.onlyNested\" id=\"lastDomain\"> and all his sub-domains</span>?</p>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-warning\" data-dismiss=\"modal\">No</button>\n          <button type=\"button\" class=\"btn btn-success\">Yes</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");
$templateCache.put("fileupload/fileupload.html","<div class=\"row parameter-row\" id=\"{{parameter.dbName}}\">\n    <div class=\"col-xs-6 col-md-3 par-name-col upload-name-col\">\n        {{parameter.displayName}}\n    </div>\n    <div class=\"col-xs-5 col-md-8 par-value-col file-container\" ng-class=\"{\'has-error\': !isParameterValid, \'disabled\' : !parameter.editable}\">\n        <!--        <div ngf-drop ngf-select ng-model=\"file\" class=\"drop-box\" ngf-drag-over-class=\"dragover\" ngf-multiple=\"true\" ngf-allow-dir=\"false\" accept=\"image/*,application/pdf\" ngf-pattern=\"\'image/*,application/pdf\'\">Drop Namelist</div>-->\n\n        <form  action=\"upload.php\" method=\"POST\" enctype=\"multipart/form-data\">\n\n            <fieldset>\n                <div>\n                    <input type=\"file\" id=\"fileselect\" name=\"fileselect[]\" multiple=\"multiple\"  style=\"visibility:hidden\"/>\n                    <div id=\"filedrag\" ng-click=\"openInput()\">Click or drop files here</div>\n                </div>\n\n                <div class=\"error-message\" ng-repeat=\"msg in parameter.message\">{{msg}}</div>\n                <div class=\"error-message\">\n                    <div ng-repeat=\"val in errorUpload\">{{val}}\n                    </div>\n                </div>\n                 <div class=\"success-message\" ng-show=\"parameter.value.length!=0\">\n                   Uploaded files:\n                   <ul>\n                    <li ng-repeat=\"file in parameter.value track by $index\">\n                        <span class=\"uploaded-file\">{{file.fileName}}</span>&nbsp;&nbsp;&nbsp;<span ng-if=\"parameter.editable\" ng-click=\"removeFile($index)\" class=\"file-unload\">Remove</span>\n                    </li>\n                  </ul>\n                </div>\n            </fieldset>\n\n        </form>\n    </div>\n    <div class=\"col-xs-1 info-col\" style=\"margin-top: 70px !important;\">\n        <div class=\"info\" ng-if=\"parameter.description!=undefined && parameter.description!=\'\'\">i <span>{{parameter.description}}</span></div>\n    </div>\n    <!--\n<div class=\"modal fade\" id=\"modal\">\n<div class=\"modal-dialog\">\n<div class=\"modal-content\">\n<div class=\"modal-header\">\n<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n<h4 class=\"modal-title\">Warning</h4>\n</div>\n<div class=\"modal-body\">\n</div>\n<div class=\"modal-footer\">\n<button type=\"button\" class=\"btn btn-warning\" data-dismiss=\"modal\">Ok</button>\n</div>\n</div>\n</div>\n</div>\n\n-->\n\n\n</div>\n");
$templateCache.put("float/float.html","<div class=\"row parameter-row\">\n    <div class=\"col-xs-6 col-md-3  par-name-col\">\n        {{parameter.displayName}}\n    </div>\n    <div class=\"col-xs-5 col-md-8 par-value-col\" ng-class=\"{\'has-error\': !isParameterValid}\">\n        <input type=\"number\" step=\"1\" ng-model=\"parameter.value\" class=\"form-control\" ng-disabled=\"!parameter.editable\">\n        <div class=\"error-message\" ng-repeat=\"msg in parameter.message\">{{msg}}</div>\n    </div>\n    <div class=\"col-xs-1 info-col\">\n        <div class=\"info\" ng-if=\"parameter.description!=undefined && parameter.description!=\'\'\">i <span>{{parameter.description}}</span></div>\n    </div>\n</div>\n");
$templateCache.put("json-gui/json-gui.html","<div class=\"container-fluid\" id=\"model-container\">\n    <div class=\"row\" scroll-spy y-offset=\"options.viewOffset\">\n        <div class=\"col-xs-12 col-md-10 groups\">\n            <div ng-repeat=\"group in data.parametersCategories\">\n                <div class=\"row group-container\">\n                  <div id=\"group{{group.value}}\" class=\"group\">\n                    <div class=\"group-name\">\n                        {{group.name}}\n                    </div>\n                  </div>\n                    <div class=\"group-parameters col-xs-12\">\n                        <div ng-repeat=\"(key, value) in hashToArray(obj.pars)\">\n                            <integer json-input ng-if=\"obj.pars[value].parameterCategory==group.value && obj.pars[value].parameterType==\'integer\'\" parameter=\"obj.pars[value]\" dependencies = \"dep[value]\"></integer>\n                            <float json-input ng-if=\"obj.pars[value].parameterCategory==group.value && obj.pars[value].parameterType==\'float\'\" parameter=\"obj.pars[value]\" dependencies = \"dep[value]\"></float>\n                            <datetime json-input ng-if=\"obj.pars[value].parameterCategory==group.value && obj.pars[value].parameterType==\'datetime\'\" parameter=\"obj.pars[value]\" dependencies = \"dep[value]\"></datetime>\n                            <json-select json-input ng-if=\"obj.pars[value].parameterCategory==group.value && obj.pars[value].parameterType==\'select\'\" parameter=\"obj.pars[value]\" dependencies =\" dep[value]\"></json-select>\n                            <json-text json-input ng-if=\"obj.pars[value].parameterCategory==group.value && obj.pars[value].parameterType==\'text\'\" parameter=\"obj.pars[value]\" dependencies = \"dep[value]\"></json-text>\n                            <domains json-input ng-if=\"obj.pars[value].parameterCategory==group.value && obj.pars[value].parameterType==\'domains\'\" parameter=\"obj.pars[value]\" dependencies = \"dep[value]\" validation=\"true\"></domains>\n                            <fileupload json-input ng-if=\"obj.pars[value].parameterCategory==group.value && obj.pars[value].parameterType==\'fileupload\'\" parameter=\"obj.pars[value]\" dependencies = \"dep[value]\"></fileupload>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n        <div class=\"col-md-2\" style=\"padding-left:0px\">\n            <ul id=\"nav\" class=\"nav hidden-xs hidden-sm\" style=\"margin-top:20px;padding-left:10px; border-left:1px solid #dedede;\">\n                <li ng-repeat=\"group in data.parametersCategories\">\n                    <a spy=\"group{{group.value}}\" y-offset=\"options.viewOffset\">{{group.name}}</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n");
$templateCache.put("integer/integer.html","<div class=\"row parameter-row\">\n    <div class=\"col-xs-6 col-md-3 par-name-col\">\n        {{parameter.displayName}}\n    </div>\n    <div class=\"col-xs-5 col-md-8 par-value-col\" ng-class=\"{\'has-error\': !isParameterValid}\">\n        <input type=\"number\" step=\"1\" ng-model=\"parameter.value\" class=\"form-control\" ng-disabled=\"!parameter.editable\">\n        <div class=\"error-message\" ng-repeat=\"msg in parameter.message track by $index\">{{msg}}</div>\n    </div>\n    <div class=\"col-xs-1 info-col\">\n        <div class=\"info\" ng-if=\"parameter.description!=undefined && parameter.description!=\'\'\">i <span>{{parameter.description}}</span></div>\n    </div>\n</div>\n");
$templateCache.put("text/text.html","<div class=\"row parameter-row\">\n    <div class=\"col-xs-6 col-md-3 par-name-col\">\n        {{parameter.displayName}}\n    </div>\n    <div class=\"col-xs-5 col-md-8 par-value-col\" ng-class=\"{\'has-error\': !isParameterValid}\">\n        <textarea ng-model=\"parameter.value\" ng-disabled=\"!parameter.editable\" class=\"form-control\" style=\"resize:none\"></textarea>\n        <div class=\"error-message\" ng-repeat=\"msg in parameter.message\">{{msg}}</div>\n    </div>\n    <div class=\"col-xs-1 info-col\" style=\"margin-top:16px !important\">\n        <div class=\"info\" ng-if=\"parameter.description!=undefined && parameter.description!=\'\'\">i <span>{{parameter.description}}</span></div>\n    </div>\n</div>\n");
$templateCache.put("select/select.html","<div class=\"row parameter-row\">\n    <div class=\"col-xs-6 col-md-3 par-name-col\">\n        {{parameter.displayName}}\n    </div>\n    <div class=\"col-xs-5 col-md-8 par-value-col\" ng-class=\"{\'has-error\': !isParameterValid}\">\n        <select ng-model=\"parameter.value\" ng-options=\"option.value as option.name for option in parameter.values\" class=\"form-control\" ng-disabled=\"!parameter.editable\"></select>\n        <div class=\"error-message\" ng-repeat=\"msg in parameter.message\">{{msg}}</div>\n    </div>\n    <div class=\"col-xs-1 info-col\">\n        <div class=\"info\" ng-if=\"parameter.description!=undefined && parameter.description!=\'\'\">i <span>{{parameter.description}}</span></div>\n    </div>\n</div>\n");}]);