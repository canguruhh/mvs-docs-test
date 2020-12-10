(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{112:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var a=t(0),r=t.n(a);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=r.a.createContext({}),p=function(e){var n=r.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return r.a.createElement(d.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,b=u["".concat(c,".").concat(m)]||u[m]||l[m]||s;return t?r.a.createElement(b,o(o({ref:n},d),{},{components:t})):r.a.createElement(b,o({ref:n},d))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,c=new Array(s);c[0]=m;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var d=2;d<s;d++)c[d]=t[d];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},78:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return i})),t.d(n,"Highlight",(function(){return d})),t.d(n,"default",(function(){return u}));var a=t(3),r=t(7),s=(t(0),t(112)),c={id:"mdx",title:"account"},o={unversionedId:"user/mdx",id:"user/mdx",isDocsHomePage:!1,title:"account",description:"You can write JSX and use React components within your Markdown thanks to MDX.",source:"@site/docs/user/mdx.md",slug:"/user/mdx",permalink:"/docs/user/mdx",version:"current",sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/docs/user/"},next:{title:"Guide",permalink:"/docs/guide"}},i=[{value:"Description",id:"description",children:[]},{value:"API Methods",id:"api-methods",children:[{value:"<code>getnewaccount</code>",id:"getnewaccount",children:[]},{value:"<code>getnewaddress</code>",id:"getnewaddress",children:[]},{value:"<code>listaddresses</code>",id:"listaddresses",children:[]},{value:"<code>validateaddress</code>",id:"validateaddress",children:[]},{value:"<code>importaccount</code>",id:"importaccount",children:[]},{value:"<code>importkeyfile</code>",id:"importkeyfile",children:[]},{value:"<code>dumpkeyfile</code>",id:"dumpkeyfile",children:[]},{value:"<code>changepasswd</code>",id:"changepasswd",children:[]},{value:"<code>deleteaccount</code>",id:"deleteaccount",children:[]},{value:"<code>getaccount</code>",id:"getaccount",children:[]},{value:"<code>getpublickey</code>",id:"getpublickey",children:[]}]}],d=function(e){var n=e.children,t=e.color;return Object(s.b)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},n)},p={rightToc:i,Highlight:d};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("p",null,"You can write JSX and use React components within your Markdown thanks to ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://mdxjs.com/"}),"MDX"),"."),Object(s.b)(d,{color:"#25c2a0",mdxType:"Highlight"},"Docusaurus green")," and ",Object(s.b)(d,{color:"#1877F2",mdxType:"Highlight"},"Facebook blue")," are my favorite colors.",Object(s.b)("p",null,"I can write ",Object(s.b)("strong",{parentName:"p"},"Markdown")," alongside my ",Object(s.b)("em",{parentName:"p"},"JSX"),"!"),Object(s.b)("h2",{id:"description"},"Description"),Object(s.b)("hr",null),Object(s.b)("h2",{id:"api-methods"},"API Methods"),Object(s.b)("hr",null),Object(s.b)("h3",{id:"getnewaccount"},Object(s.b)("inlineCode",{parentName:"h3"},"getnewaccount")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),'Generate a new account from this wallet if account is specified.\nGenerate a new address and private key if account is not specified.\n* Parameters (optional)\n1. `-l` or `[--language]` Options are \'en\', \'es\', \'ja\', \'zh_Hans\', \'zh_Hant\' and \'any\', defaults to \'en\'.\n* Parameters (positional)\n1. `ACCOUNTNAME` Account name, default "".\n2. `ACCOUNTAUTH` Account password/authorization, default "".\n```js\nparams:[\n    "ACCOUNTNAME", \n    "ACCOUNTAUTH"\n]\n ```\n* Returns\n`Object` - \n1. `mnemonic` - the master private key of your account\n2. `default_address` - address of the account\n\n* Example: generate a new account\n```js\n// Request\ncurl -X POST --data \'{"jsonrpc":"2.0","method":"getnewaccount",\n"params":["test", "123456", {"language": "en"}],"id":7}\' http://127.0.0.1:8820/rpc/v3\n\n// Response\n{\n    "jsonrpc" : "2.0", \n    "id": 7, \n    "result": {\n        "name": "test",\n        "mnemonic": "actor slam shove essence person between lucky harsh myself hole tomorrow sausage buddy young kitten motor traffic rare wisdom month payment drill vanish oval", \n        "addresses": \n        [\n            "MDtdyESeZB73RCYR1G4b7443ModzGwYWrF"\n        ]\n    }\n}\n```\n\n* Example: generate a new address and private key.\n```js\n// Request\ncurl -X POST --data \'{"jsonrpc":"2.0","method":"getnewaccount",\n"params":[{"language": "en"}],"id":7}\' http://127.0.0.1:8820/rpc/v3\n\n// Response\n{\n    "id" : 7,\n    "jsonrpc" : "2.0",\n    "result" : \n    {\n        "address" : "MLycTCqV9BiQrfnRPxi6AFBLC7m1cG6btQ",\n        "mnemonic" : "deal elite opinion exhaust shop usage habit hard muscle glimpse want matter brain shoot uncle insect corn glare depth asthma move input person pill",\n        "private_key" : "76fb26353250f00529c51362411a517b4d005d72fe33e5ccea28eaab3b33f8ac",\n        "public_key" : "03643ceeab22462641c5259bfcb7a7898b23b9fbbf5360eb35b3df86eba24522c9",\n        "wif" : "L1CzdkB3f2gRS2NtZUe2fGubzGMYZAWPqbyXNiKC7c9w9Z6F6gHC"\n    }\n}\n```\n')),Object(s.b)("hr",null),Object(s.b)("h3",{id:"getnewaddress"},Object(s.b)("inlineCode",{parentName:"h3"},"getnewaddress")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),'Generate new address for this account.\n* Parameters (optional)\n1. `-n` or `[--number]` The address count.\n* Parameters (positional)\n1. `ACCOUNTNAME` Account name.\n2. `ACCOUNTAUTH` Account password/authorization.\n```js\nparams:[\n    "ACCOUNTNAME", \n    "ACCOUNTAUTH"\n]\n ```\n* Returns\n`Array` - return a list of new address\n\n* Example\n```js\n// Request\ncurl -X POST --data \'{"jsonrpc":"2.0","method":"getnewaddress",\n"params":["test", "123456", {"number": 2}],"id":8}\' http://127.0.0.1:8820/rpc/v3\n\n// Response\n{\n    "jsonrpc" : "2.0", \n    "id": 8, \n    "result": [\n        "MM6VxRZ9b1GzbapkVCnWwqo3gbe5sDgf9G", \n        "MDuwgNWVp4rHGLcDRro7joees9Z75s9o9X"\n    ]\n}\n```\n')),Object(s.b)("hr",null),Object(s.b)("h3",{id:"listaddresses"},Object(s.b)("inlineCode",{parentName:"h3"},"listaddresses")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),'List available addresses of this account.\n* Parameters (positional)\n1. `ACCOUNTNAME` Account name.\n2. `ACCOUNTAUTH` Account password/authorization.\n```js\nparams:[\n    "ACCOUNTNAME", \n    "ACCOUNTAUTH"\n]\n ```\n* Returns\n`Array` - return the list of generated address\n\n* Example\n```js\n// Request\ncurl -X POST --data \'{"jsonrpc":"2.0","method":"listaddresses",\n"params":["test", "123456"],"id":11}\' http://127.0.0.1:8820/rpc/v3\n\n// Response\n{\n    "jsonrpc" : "2.0", \n    "id": 11, \n    "result": [\n        "MBVDxEdhpyA1SvAnFhRxuUmsh5TsaURieV", \n        "MEhwjsxeqVwPzWFqxzAPcFqnh3HSdgUuS2"\n    ]\n}\n```\n')),Object(s.b)("hr",null),Object(s.b)("h3",{id:"validateaddress"},Object(s.b)("inlineCode",{parentName:"h3"},"validateaddress")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),'validate address\n* Parameters (positional)\n1. `ADDRESS` address\n```js\nparams:[\n    "ADDRESS"\n]\n ```\n* Returns\n`Object` -\n1. `address_type` - address type\n2. `is_valid` - the address is valid or not\n3. `message` - message like "valid address"\n4. `testnet` - if the address is in test-net\n\n* Example\n```js\n// Request\ncurl -X POST --data \'{"jsonrpc":"2.0","method":"validateaddress",\n"params":["MEhwjsxeqVwPzWFqxzAPcFqnh3HSdgUuS2"],"id":16}\' http://127.0.0.1:8820/rpc/v3\n\n// Response\n{\n    "jsonrpc" : "2.0", \n    "id": 16, \n    "result":\n    {\n        "address_type" : "p2kh(test-net)",\n        "is_valid" : true,\n        "message" : "valid address ",\n        "testnet" : true\n    }\n}\n```\n')),Object(s.b)("hr",null),Object(s.b)("h3",{id:"importaccount"},Object(s.b)("inlineCode",{parentName:"h3"},"importaccount")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),'importaccount\n* Parameters (optional)\n1. `-i` or `[--hd_index]` Teh HD index for the account.\n2. `-l` or `[--language]` The language identifier of the dictionary of the mnemonic. Options are \'en\', \'es\', \'ja\', \'zh_Hans\', \'zh_Hant\' and \'any\', defaults to \'any\'.\n3. `-n` or `[--accountname]` Account name.\n4. `-p` or `[--password]` Account password.\n* Parameters (positional)\n1. `WORD` The set of words that that make up the mnemonic. If not specified the words are read from STDIN.\n```js\nparams:[\n    "WORD"\n]\n ```\n* Returns\n`Object` - \n1. `name` - account name.\n2. `mnemonic` - master private key\n3. `addresses` - address list\n\n* Example\n```js\n// Request\ncurl -X POST --data \'{"jsonrpc":"2.0","method":"importaccount",\n"params":["mother ride despair impose degree truck pet scrub mind art brain galaxy sadness cover crater waste arrest invest hip crush loan brisk pave cheap",\n{"accountname":"test","password":"123456","hd_index":3,"language":"en"}],"id":9}\' http://127.0.0.1:8820/rpc/v3\n\n// Response\n{\n    "jsonrpc" : "2.0", \n    "id": 9, \n    "result": {\n        "mnemonic": "mother ride despair impose degree truck pet scrub mind art brain galaxy sadness cover crater waste arrest invest hip crush loan brisk pave cheap", \n        "addresses": [\n            "MBVDxEdhpyA1SvAnFhRxuUmsh5TsaURieV", \n            "MEhwjsxeqVwPzWFqxzAPcFqnh3HSdgUuS2", \n            "MS9m8zpVPkDYAXhmeHmhE3TgJugP3zHtAL"\n        ], \n        "name": "test"\n    }\n}\n```\n')),Object(s.b)("hr",null),Object(s.b)("h3",{id:"importkeyfile"},Object(s.b)("inlineCode",{parentName:"h3"},"importkeyfile")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),'import account from file\n* Parameters (positional)\n1. `ACCOUNTNAME` Account name.\n2. `ACCOUNTAUTH` Account password/authorization. This is also used to decrypt the keyfile.\n3. `FILE` key file path.\n4. `FILECONTENT` key file content. This will omit the `FILE` argument if specified.\n```js\nparams:[\n    "ACCOUNTNAME",\n    "ACCOUNTAUTH",\n    "FILE",\n    "FILECONTENT"\n]\n ```\n* Returns\n`null` - \n\n* Example\n```js\n// import key file by file path\ncurl -X POST --data \'{"jsonrpc":"2.0","method":"importkeyfile",\n"params":["test", "123456", "~/.metaverse/mvs-test.json"],"id":10}\' http://127.0.0.1:8820/rpc/v3\n\n// Response\n{\n    "jsonrpc" : "2.0", \n    "id": 10, \n    "result": null\n}\n\n```\n')),Object(s.b)("hr",null),Object(s.b)("h3",{id:"dumpkeyfile"},Object(s.b)("inlineCode",{parentName:"h3"},"dumpkeyfile")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),'export account as file, file name is `mvs_keystore_$accountname.json`.\n* Parameters (positional)\n1. `ACCOUNTNAME` Account name.\n2. `ACCOUNTAUTH` Account password/authorization. This is also used to encrypt the keyfile.\n3. `LASTWORD` The last word of your master private-key phrase.\n4. `DESTINATION` account info storage file directory, **optional, default to ~/.metaverse/mvs-htmls/keys/**\n```js\nparams:[\n    "ACCOUNTNAME", \n    "ACCOUNTAUTH", \n    "LASTWORD", \n    "DESTINATION"\n]\n ```\n* Returns\n`String` - \n\n* Example\n```js\n// Request\ncurl -X POST --data \'{"jsonrpc":"2.0","method":"dumpkeyfile",\n"params":["test", "123456", "lastword", "~/.metaverse/"],"id":4}\' http://127.0.0.1:8820/rpc/v3\n\n// Response\n{\n    "jsonrpc" : "2.0", \n    "id": 4, \n    "result": "~/.metaverse/mvs_keystore_test.json"\n}\n```\n')),Object(s.b)("hr",null),Object(s.b)("h3",{id:"changepasswd"},Object(s.b)("inlineCode",{parentName:"h3"},"changepasswd")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),'changepasswd\n* Parameters (optional)\n1. `-p` or `[--password]` New password/authorization.\n* Parameters (positional)\n1. `ACCOUNTNAME` Account name.\n2. `ACCOUNTAUTH` Account password/authorization.\n```js\nparams:[\n    "ACCOUNTNAME", \n    "ACCOUNTAUTH" \n]\n ```\n* Returns\n`Object` -\n1. `name` - account name\n2. `status` - operation status\n\n* Example\n```js\n// Request\ncurl -X POST --data \'{"jsonrpc":"2.0","method":"changepasswd",\n"params":["test", "123456", {"password": "test123456"}],"id":1}\' http://127.0.0.1:8820/rpc/v3\n\n// Response\n{\n    "jsonrpc" : "2.0", \n    "id": 1, \n    "result":\n    {\n        "name": "test",\n        "status": "changed successfully"\n    }\n}\n```\n')),Object(s.b)("hr",null),Object(s.b)("h3",{id:"deleteaccount"},Object(s.b)("inlineCode",{parentName:"h3"},"deleteaccount")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),'deleteaccount\n* Parameters (positional)\n1. `ACCOUNTNAME` Account name.\n2. `ACCOUNTAUTH` Account password/authorization.\n3. `LASTWORD` The last word of your private-key phrase.\n```js\nparams:[\n    "ACCOUNTNAME", \n    "ACCOUNTAUTH", \n    "LASTWORD"\n]\n ```\n* Returns\n`Object` -\n1. `name` - account name\n2. `status` - operation status\n\n* Example\n```js\n// Request\ncurl -X POST --data \'{"jsonrpc":"2.0","method":"deleteaccount",\n"params":["test", "123456", "lastword"],"id":2}\' http://127.0.0.1:8820/rpc/v3\n\n// Response\n{\n    "jsonrpc" : "2.0", \n    "id": 2, \n    "result":\n    {\n        "name": "test",\n        "status": "removed successfully"\n    }\n}\n```\n')),Object(s.b)("hr",null),Object(s.b)("h3",{id:"getaccount"},Object(s.b)("inlineCode",{parentName:"h3"},"getaccount")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),'Show account details\n* Parameters (positional)\n1. `ACCOUNTNAME` Account name.\n2. `ACCOUNTAUTH` Account password/authorization.\n3. `LASTWORD` The last word of your master private-key phrase.\n```js\nparams:[\n    "ACCOUNTNAME", \n    "ACCOUNTAUTH", \n    "LASTWORD"\n]\n ```\n* Returns\n`Object` - \n1. `name` - account name\n2. `mnemonic` - master private key\n3. `address_count` - addresses created\n4. `user_status` - 0:locked, 2: normal\n\n* Example\n```js\n// Request\ncurl -X POST --data \'{"jsonrpc":"2.0","method":"getaccount",\n"params":["test", "123456", "lastword"],"id":5}\' http://127.0.0.1:8820/rpc/v3\n\n// Response\n{\n    "jsonrpc" : "2.0", \n    "id": 5, \n    "result": {\n        "name": "test", \n        "mnemonic": "mother ride despair impose degree truck pet scrub mind art brain galaxy sadness cover crater waste arrest invest hip crush loan brisk pave cheap", \n        "address_count": "2"\n    }\n}\n```\n')),Object(s.b)("hr",null),Object(s.b)("h3",{id:"getpublickey"},Object(s.b)("inlineCode",{parentName:"h3"},"getpublickey")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),'Show public key of address\nIf wallet version >= 0.9.0, the ADDRESS paramenter can be Did/Address/Publickey/PrivateKey(WIF).\n* Parameters (positional)\n1. `ACCOUNTNAME` Account name.\n2. `ACCOUNTAUTH` Account password/authorization.\n3. `ADDRESS` Address.\n```js\nparams:[\n    "ACCOUNTNAME", \n    "ACCOUNTAUTH", \n    "ADDRESS"\n]\n ```\n* Returns\n`Object` - string\n\n* Example\n```js\n// Request\ncurl -X POST --data \'{\n    "jsonrpc":"2.0",\n    "method":"getpublickey",\n    "id":5,\n    "params":[\n        "test", \n        "123456", \n        "MLTxV5JAu5sFhQmJYNRmPuu31CkNWrF5rj"\n    ]\n}\' http://127.0.0.1:8820/rpc/v2\n\n// Response\n{\n    "id" : 5,\n    "jsonrpc" : "2.0",\n    "result" : \n    {\n        "address" : "MLTxV5JAu5sFhQmJYNRmPuu31CkNWrF5rj",\n        "public_key" : "031c7ac7f12a05ea4952289801fa52142aa421f11efe8ab7090fb823562156a321"\n    }\n}\n```\n')),Object(s.b)("hr",null))}u.isMDXComponent=!0}}]);