(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{756:function(e,t,r){"use strict";r.r(t);var a=r(48),s=Object(a.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"upgrading-growi-to-v3-8-x"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#upgrading-growi-to-v3-8-x","aria-hidden":"true"}},[e._v("#")]),e._v(" Upgrading GROWI to v3.8.x")]),e._v(" "),r("p",[e._v("For those using Elasticsearch, the health check method has changed.")]),e._v(" "),r("h2",{attrs:{id:"the-health-check-method-for-elasticsearch"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#the-health-check-method-for-elasticsearch","aria-hidden":"true"}},[e._v("#")]),e._v(" The health check method for Elasticsearch")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("ul",[r("li",[e._v("If you are not using Elasticsearch or you are not using X-Pack\nrole-based access control, this change does not impact you.")]),e._v(" "),r("li",[e._v("If you are not using "),r("a",{attrs:{href:"https://docs.growi.org/redoc.html#tag/Healthcheck",target:"_blank",rel:"noopener noreferrer"}},[e._v("Healthcheck API"),r("OutboundLink")],1),e._v("\nbased service health monitoring, this change does not impact you.")])])]),e._v(" "),r("p",[e._v("Until GROWI v3.7, the "),r("a",{attrs:{href:"https://docs.growi.org/redoc.html#tag/Healthcheck",target:"_blank",rel:"noopener noreferrer"}},[e._v("Healthcheck API"),r("OutboundLink")],1),e._v("\nused Elasticsearch's information acquisition "),r("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/cluster-nodes-info.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nodes info API"),r("OutboundLink")],1),e._v(".\nHowever, this API requires a very high level privilege called "),r("code",[e._v("cluster:monitor/nodes/info")]),e._v(".\nTherefore, we have changed to use the "),r("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/cluster-health.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cluster health API"),r("OutboundLink")],1),e._v("\ninstead beginning with GROWI v3.8.")]),e._v(" "),r("p",[e._v("In accordance with this change, setting up X-Pack will require the\n"),r("code",[e._v("cluster:monitor/health")]),e._v(" privilege.")]),e._v(" "),r("h3",{attrs:{id:"setting-required-privileges"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#setting-required-privileges","aria-hidden":"true"}},[e._v("#")]),e._v(" Setting required privileges")]),e._v(" "),r("p",[e._v("Please proceed with the following steps to set up your privileges")]),e._v(" "),r("ol",[r("li",[e._v("Add the "),r("code",[e._v("cluster:monitor/health")]),e._v(" privilege to your Elasticsearch authenticated user role.")]),e._v(" "),r("li",[e._v("If the "),r("code",[e._v("cluster:monitor/nodes/info")]),e._v(" privilege is no longer otherwise needed,\nremove it from your Elasticsearch authenticated user role.")])]),e._v(" "),r("p",[e._v("Reference: "),r("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/authorization.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Elasticsearch Reference: User authorization"),r("OutboundLink")],1)]),e._v(" "),r("h3",{attrs:{id:"check-before-upgrading"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#check-before-upgrading","aria-hidden":"true"}},[e._v("#")]),e._v(" Check before Upgrading")]),e._v(" "),r("ul",{staticClass:"contains-task-list"},[r("li",{staticClass:"task-list-item"},[r("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),e._v(" Check if you are using Elasticsearch and/or X-Pack role-based access control.")]),e._v(" "),r("li",{staticClass:"task-list-item"},[r("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),e._v(" Check that your Elasticsearch authenticated user role has the "),r("code",[e._v("cluster:monitor/health")]),e._v(" privilege assigned.")]),e._v(" "),r("li",{staticClass:"task-list-item"},[r("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),e._v(" Check if you are using Healthcheck API based service health monitoring")])])])},[],!1,null,null,null);t.default=s.exports}}]);