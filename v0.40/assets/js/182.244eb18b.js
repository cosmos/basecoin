(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{858:function(e,t,a){"use strict";a.r(t);var s=a(1),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"chain-upgrade-guide-to-v0-40"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chain-upgrade-guide-to-v0-40"}},[e._v("#")]),e._v(" Chain Upgrade Guide to v0.40")]),e._v(" "),a("p",{attrs:{synopsis:""}},[e._v("This document explains how to perform a chain upgrade from v0.39 to v0.40.")]),e._v(" "),a("h2",{attrs:{id:"risks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#risks"}},[e._v("#")]),e._v(" Risks")]),e._v(" "),a("p",[e._v("As a validator, performing the upgrade procedure on your consensus nodes carries a heightened risk of double-signing and\nbeing slashed: if your validator node votes for a block, and, in the same block time, restarts the upgraded node, this may lead to double-voting on a block.")]),e._v(" "),a("p",[e._v("The riskiest thing a validator can do is to discover that they made a mistake and repeat the upgrade procedure again during\nthe network startup. If you discover a mistake in the process, the best thing to do is wait for the network to start\nbefore correcting it. If the network is halted and you have started with a different genesis file than the expected one,\nseek advice from the validator community.")]),e._v(" "),a("h2",{attrs:{id:"recovery"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#recovery"}},[e._v("#")]),e._v(" Recovery")]),e._v(" "),a("ul",[a("li",[e._v("Prior to exporting the state, the validators are encouraged to take a full data snapshot at exported height. Exported\nheight will be determined by a governance proposal. Data backup is usually done by copying daemon home directory,\ne.g.: "),a("code",[e._v("~/.simd")])])]),e._v(" "),a("p",[a("strong",[e._v("Note:")]),e._v(' we use "simd" as our app throughout this doc, be sure to replace with the name of your own binary.')]),e._v(" "),a("p",[e._v("It is critically important to back-up the validator state file, e.g.: "),a("code",[e._v("~/.simd/data/priv_validator_state.json")]),e._v(" file\nafter stopping your daemon process. This file is updated every block as your validator participates in a consensus\nrounds. It is a critical file needed to prevent double-signing, in case the upgrade fails, and the previous chain needs\nto be restarted.")]),e._v(" "),a("p",[e._v("In the event that the upgrade does not succeed, validators and operators must downgrade back to old version of the\nsoftware and restore to their latest snapshot before restarting their nodes.")]),e._v(" "),a("h2",{attrs:{id:"upgrade-procedure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-procedure"}},[e._v("#")]),e._v(" Upgrade procedure")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("The procedure is to export the state from the old binary, and import it with the new binary. First, verify your old binary version (which should use "),a("code",[e._v("github.com/cosmos/cosmos-sdk@0.39.*")]),e._v(") before exporting the state.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"c2ltZCB2ZXJzaW9uIC0tbG9uZwo="}})],1),e._v(" "),a("li",[a("p",[e._v("Export the state from existing chain using the old binary.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"c2ltZCBleHBvcnQgLS1mb3ItemVyby1oZWlnaHQgLS1oZWlnaHQgJmx0O2hlaWdodCZndDsgJmd0OyB2MDM5X2V4cG9ydGVkX3N0YXRlLmpzb24K"}})],1),e._v(" "),a("li",[a("p",[e._v("Verify the SHA256 of the (sorted) exported genesis file:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"JCBqcSAtUyAtYyAtTSAnJyB2MDM5X2V4cG9ydGVkX3N0YXRlLmpzb24gfCBzaGFzdW0gLWEgMjU2CltTSEFTVU1fUExBQ0VIT0xERVJdICB2MDM5X2V4cG9ydGVkX3N0YXRlLmpzb24K"}})],1),e._v(" "),a("li",[a("p",[e._v("Cross check the hash with other peers (other validators) in the chat rooms.")])]),e._v(" "),a("li",[a("p",[e._v("Install the latest binary (which uses "),a("code",[e._v("github.com/cosmos/cosmos-sdk@0.40.*")]),e._v(").")])]),e._v(" "),a("li",[a("p",[e._v("Migrate the exported state to "),a("code",[e._v("github.com/cosmos/cosmos-sdk@0.40.*")]),e._v(" compatible genesis state.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"c2ltZCBtaWdyYXRlIHYwLjQwIHYwMzlfZXhwb3J0ZWRfc3RhdGUuanNvbiAtLWNoYWluLWlkICZsdDtuZXdfY2hhaW5faWQmZ3Q7IC0tZ2VuZXNpcy10aW1lICZsdDtuZXdfZ2VuZXNpc190aW1lX2luX3V0YyZndDsgJmd0OyBuZXdfdjA0MF9nZW5lc2lzLmpzb24K"}}),e._v(" "),a("p",[a("strong",[e._v("Note:")]),e._v(" The migrate command takes an input genesis state and migrates it to a targeted version. New "),a("code",[e._v("genesis-time")]),e._v(" will be as mentioned in the governance proposal.")])],1),e._v(" "),a("li",[a("p",[e._v("All the necessary state changes are handled in the "),a("code",[e._v("simd migrate v0.40")]),e._v(" migration command. However, Tendermint parameters are "),a("strong",[e._v("not")]),e._v(" handled in this command. You might need to update these parameters manually.")]),e._v(" "),a("p",[e._v("In the recent versions of Tendermint, the following changes have been made:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("consensus_params.evidence.max_num")]),e._v(" has been renamed to "),a("code",[e._v("consensus_params.evidence.max_bytes")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("consensus_params.evidence.max_age")]),e._v(" has been removed, and replaced by "),a("code",[e._v("consensus_params.evidence.max_age_duration")]),e._v(" and "),a("code",[e._v("consensus_params.evidence.max_age_num_blocks")]),e._v(".")])]),e._v(" "),a("p",[e._v("Make sure that your genesis JSON files contains the correct values specific to your chain. If the "),a("code",[e._v("simd migrate")]),e._v(" errors with a message saying that the genesis file cannot be parsed, these are the fields to check first.")])]),e._v(" "),a("li",[a("p",[e._v("Verify the SHA256 of the migrated genesis file with other validators to make sure there are no manual errors in the process.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"JCBqcSAtUyAtYyAtTSAnJyBuZXdfdjA0MF9nZW5lc2lzLmpzb24gfCBzaGFzdW0gLWEgMjU2CltTSEFTVU1fUExBQ0VIT0xERVJdICBuZXdfdjA0MF9nZW5lc2lzLmpzb24K"}})],1),e._v(" "),a("li",[a("p",[e._v("Make sure to update the genesis parameters in the new genesis if any. All these details will be generally present in\nthe governance proposal.")])])]),e._v(" "),a("ol",[a("li",[a("p",[e._v("If your chain is using IBC, make sure to add IBC initial genesis state to the genesis file. You can use the following command to add IBC initial genesis state to the genesis file.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"Y2F0IG5ld18wNDBfZ2VuZXNpcy5qc29uIHwganEgJy5hcHBfc3RhdGUgfD0gLiArIHsmcXVvdDtpYmMmcXVvdDs6eyZxdW90O2NsaWVudF9nZW5lc2lzJnF1b3Q7OnsmcXVvdDtjbGllbnRzJnF1b3Q7OltdLCZxdW90O2NsaWVudHNfY29uc2Vuc3VzJnF1b3Q7OltdLCZxdW90O2NyZWF0ZV9sb2NhbGhvc3QmcXVvdDs6ZmFsc2V9LCZxdW90O2Nvbm5lY3Rpb25fZ2VuZXNpcyZxdW90Ozp7JnF1b3Q7Y29ubmVjdGlvbnMmcXVvdDs6W10sJnF1b3Q7Y2xpZW50X2Nvbm5lY3Rpb25fcGF0aHMmcXVvdDs6W119LCZxdW90O2NoYW5uZWxfZ2VuZXNpcyZxdW90Ozp7JnF1b3Q7Y2hhbm5lbHMmcXVvdDs6W10sJnF1b3Q7YWNrbm93bGVkZ2VtZW50cyZxdW90OzpbXSwmcXVvdDtjb21taXRtZW50cyZxdW90OzpbXSwmcXVvdDtyZWNlaXB0cyZxdW90OzpbXSwmcXVvdDtzZW5kX3NlcXVlbmNlcyZxdW90OzpbXSwmcXVvdDtyZWN2X3NlcXVlbmNlcyZxdW90OzpbXSwmcXVvdDthY2tfc2VxdWVuY2VzJnF1b3Q7OltdfX0sJnF1b3Q7dHJhbnNmZXImcXVvdDs6eyZxdW90O3BvcnRfaWQmcXVvdDs6JnF1b3Q7dHJhbnNmZXImcXVvdDssJnF1b3Q7ZGVub21fdHJhY2VzJnF1b3Q7OltdLCZxdW90O3BhcmFtcyZxdW90Ozp7JnF1b3Q7c2VuZF9lbmFibGVkJnF1b3Q7OmZhbHNlLCZxdW90O3JlY2VpdmVfZW5hYmxlZCZxdW90OzpmYWxzZX19LCZxdW90O2NhcGFiaWxpdHkmcXVvdDs6eyZxdW90O2luZGV4JnF1b3Q7OiZxdW90OzEmcXVvdDssJnF1b3Q7b3duZXJzJnF1b3Q7OltdfX0nICZndDsgbmV3XzA0MF9nZW5lc2lzLmpzb24K"}}),e._v(" "),a("p",[a("strong",[e._v("Note:")]),e._v(" This would add IBC state with IBC's "),a("code",[e._v("send_enabled: false")]),e._v(" and "),a("code",[e._v("receive_enabled: false")]),e._v(". Make sure to update them to "),a("code",[e._v("true")]),e._v(" in the above command if are planning to enable IBC transactions with chain upgrade. Otherwise you can do it via a governance proposal.")])],1),e._v(" "),a("li",[a("p",[e._v("Reset the old state.")]),e._v(" "),a("p",[a("strong",[e._v("Note:")]),e._v(" Be sure you have a complete backed up state of your node before proceeding with this step.\nSee Recovery for details on how to proceed.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"c2ltZCB1bnNhZmUtcmVzZXQtYWxsCg=="}})],1),e._v(" "),a("li",[a("p",[e._v("Move the new genesis.json to your daemon config directory. Ex")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"Y3AgbmV3X3YwNDBfZ2VuZXNpcy5qc29uIH4vLnNpbWQvY29uZmlnL2dlbmVzaXMuanNvbgo="}})],1),e._v(" "),a("li",[a("p",[e._v("Update "),a("code",[e._v("~/.simd/config/app.toml")]),e._v(" to include latest app configurations. "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.40.0-rc6/server/config/toml.go#L11-L164",target:"_blank",rel:"noopener noreferrer"}},[e._v("Here is the link"),a("OutboundLink")],1),e._v(" to the default template for v0.40's "),a("code",[e._v("app.toml")]),e._v(". Make sure to\nupdate your custom configurations as per your validator design, e.g. "),a("code",[e._v("gas_price")]),e._v(".")]),e._v(" "),a("p",[e._v("Compared to v0.39, some notable updates to "),a("code",[e._v("app.toml")]),e._v(" are:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("API server is now configured to run in-process with daemon, previously it was a separate process, invoked by running rest-server\ncommand i.e., "),a("code",[e._v("gaiacli rest-server")]),e._v(". Now it is in-process with daemon and can be enabled/disabled by API configuration:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"yaml",base64:"W2FwaV0KIyBFbmFibGUgZGVmaW5lcyBpZiB0aGUgQVBJIHNlcnZlciBzaG91bGQgYmUgZW5hYmxlZC4KZW5hYmxlID0gZmFsc2UKIyBTd2FnZ2VyIGRlZmluZXMgaWYgc3dhZ2dlciBkb2N1bWVudGF0aW9uIHNob3VsZCBhdXRvbWF0aWNhbGx5IGJlIHJlZ2lzdGVyZWQuCnN3YWdnZXIgPSBmYWxzZQo="}}),e._v(" "),a("p",[a("code",[e._v("swagger")]),e._v(" setting refers to enabling/disabling swagger docs API, i.e, "),a("code",[e._v("/swagger/")]),e._v(" API endpoint.")])],1),e._v(" "),a("li",[a("p",[e._v("gRPC Configuration")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"yaml",base64:"W2dycGNdCiMgRW5hYmxlIGRlZmluZXMgaWYgdGhlIGdSUEMgc2VydmVyIHNob3VsZCBiZSBlbmFibGVkLgplbmFibGUgPSB0cnVlCiMgQWRkcmVzcyBkZWZpbmVzIHRoZSBnUlBDIHNlcnZlciBhZGRyZXNzIHRvIGJpbmQgdG8uCmFkZHJlc3MgPSAmcXVvdDswLjAuMC4wOjkwOTAmcXVvdDsK"}})],1),e._v(" "),a("li",[a("p",[e._v("State Sync Configuration")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"yaml",base64:"IyBTdGF0ZSBzeW5jIHNuYXBzaG90cyBhbGxvdyBvdGhlciBub2RlcyB0byByYXBpZGx5IGpvaW4gdGhlIG5ldHdvcmsgd2l0aG91dCByZXBsYXlpbmcgaGlzdG9yaWNhbAojIGJsb2NrcywgaW5zdGVhZCBkb3dubG9hZGluZyBhbmQgYXBwbHlpbmcgYSBzbmFwc2hvdCBvZiB0aGUgYXBwbGljYXRpb24gc3RhdGUgYXQgYSBnaXZlbiBoZWlnaHQuCltzdGF0ZS1zeW5jXQojIHNuYXBzaG90LWludGVydmFsIHNwZWNpZmllcyB0aGUgYmxvY2sgaW50ZXJ2YWwgYXQgd2hpY2ggbG9jYWwgc3RhdGUgc3luYyBzbmFwc2hvdHMgYXJlCiMgdGFrZW4gKDAgdG8gZGlzYWJsZSkuIE11c3QgYmUgYSBtdWx0aXBsZSBvZiBwcnVuaW5nLWtlZXAtZXZlcnkuCnNuYXBzaG90LWludGVydmFsID0gMAojIHNuYXBzaG90LWtlZXAtcmVjZW50IHNwZWNpZmllcyB0aGUgbnVtYmVyIG9mIHJlY2VudCBzbmFwc2hvdHMgdG8ga2VlcCBhbmQgc2VydmUgKDAgdG8ga2VlcCBhbGwpLgpzbmFwc2hvdC1rZWVwLXJlY2VudCA9IDIK"}})],1)])]),e._v(" "),a("li",[a("p",[e._v("Kill if any external "),a("code",[e._v("rest-server")]),e._v(" process is running.")])]),e._v(" "),a("li",[a("p",[e._v("All set now! You can (re)start your daemon to validate on the upgraded network. Make sure to check your binary version\nbefore starting the daemon:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"c2ltZCB2ZXJzaW9uIC0tbG9uZwo="}})],1)]),e._v(" "),a("h2",{attrs:{hide:"",id:"next"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[e._v("#")]),e._v(" Next")]),e._v(" "),a("p",[e._v("Once your chain is upgraded, make sure to "),a("RouterLink",{attrs:{to:"/migrations/rest.html"}},[e._v("update your clients' REST endpoints")]),e._v(".")],1)])}),[],!1,null,null,null);t.default=o.exports}}]);