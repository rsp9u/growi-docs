(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{876:function(t,a,e){"use strict";e.r(a);var r=e(48),v=Object(r.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"システムの起動"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#システムの起動","aria-hidden":"true"}},[t._v("#")]),t._v(" システムの起動")]),t._v(" "),e("h2",{attrs:{id:"初回起動"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#初回起動","aria-hidden":"true"}},[t._v("#")]),t._v(" 初回起動")]),t._v(" "),e("p",[t._v("GROWI-Dev devcontainer 内のターミナルで作業します。")]),t._v(" "),e("h3",{attrs:{id:"依存ライブラリの取得"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#依存ライブラリの取得","aria-hidden":"true"}},[t._v("#")]),t._v(" 依存ライブラリの取得")]),t._v(" "),e("p",[t._v("npx を用いて lerna bootstrap を実行します。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("npx lerna bootstrap\n")])])]),e("div",{staticClass:"custom-block danger"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("monorepo を採用しているため、依存関係の管理には "),e("a",{attrs:{href:"https://lerna.js.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("lerna"),e("OutboundLink")],1),t._v(" を使います。\n"),e("code",[t._v("yarn install")]),t._v(" または、"),e("code",[t._v("npm install")]),t._v(" は利用しないでください")])]),t._v(" "),e("h3",{attrs:{id:"フロントエンド・バックエンドサーバーの起動"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#フロントエンド・バックエンドサーバーの起動","aria-hidden":"true"}},[t._v("#")]),t._v(" フロントエンド・バックエンドサーバーの起動")]),t._v(" "),e("p",[t._v("新たに2つのターミナルを作成し、それぞれフロントエンドビルドのサーバー、バックエンドのサーバーを起動します。"),e("br"),t._v("\nそれぞれ、"),e("code",[t._v("Ctrl-C")]),t._v("で終了できます。")]),t._v(" "),e("h4",{attrs:{id:"フロントエンド開発用サーバー"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#フロントエンド開発用サーバー","aria-hidden":"true"}},[t._v("#")]),t._v(" フロントエンド開発用サーバー")]),t._v(" "),e("ol",[e("li",[e("code",[t._v("cd packages/app")])]),t._v(" "),e("li",[e("code",[t._v("yarn dev:client")]),t._v(" "),e("ul",[e("li",[t._v("クライアントコードをビルドし、webpack-dev-server を起動します")]),t._v(" "),e("li",[t._v("クライアント用ファイル群の変更を検知し、リビルドします")])])])]),t._v(" "),e("h4",{attrs:{id:"バックエンド開発用サーバー"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#バックエンド開発用サーバー","aria-hidden":"true"}},[t._v("#")]),t._v(" バックエンド開発用サーバー")]),t._v(" "),e("ol",[e("li",[e("code",[t._v("cd packages/app")])]),t._v(" "),e("li",[e("code",[t._v("yarn dev:server")]),t._v(" "),e("ul",[e("li",[t._v("Express サーバーを起動します")]),t._v(" "),e("li",[t._v("サーバー用ファイル群の変更を検知し、Express サーバーをリスタートします")])])])]),t._v(" "),e("h2",{attrs:{id:"_2回目以降の起動"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2回目以降の起動","aria-hidden":"true"}},[t._v("#")]),t._v(" 2回目以降の起動")]),t._v(" "),e("p",[t._v("毎回、上記の "),e("a",{attrs:{href:"#%E5%88%9D%E5%9B%9E%E8%B5%B7%E5%8B%95"}},[t._v("初回起動")]),t._v(" のセクションを全て実行してください。")]),t._v(" "),e("p",[e("a",{attrs:{href:"#%E4%BE%9D%E5%AD%98%E3%83%A9%E3%82%A4%E3%83%96%E3%83%A9%E3%83%AA%E3%81%AE%E5%8F%96%E5%BE%97"}},[t._v("依存ライブラリの取得")]),t._v(" のセクションは、node_modules 内に lerna パッケージが存在する場合、yarn 経由で実行可能です。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("yarn lerna bootstrap\n")])])]),e("h2",{attrs:{id:"production-用の成果物をビルドして起動"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#production-用の成果物をビルドして起動","aria-hidden":"true"}},[t._v("#")]),t._v(" production 用の成果物をビルドして起動")]),t._v(" "),e("p",[t._v("上記の "),e("a",{attrs:{href:"#%E5%88%9D%E5%9B%9E%E8%B5%B7%E5%8B%95"}},[t._v("初回起動")]),t._v(" のセクションを参考に、以下を実行してください。")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("依存ライブラリの取得")])]),t._v(" "),e("li",[e("p",[t._v("production 用にフロントエンドをビルドし、バックエンドサーバーを起動")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("yarn start\n")])])])])]),t._v(" "),e("h2",{attrs:{id:"npm-コマンドリスト"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#npm-コマンドリスト","aria-hidden":"true"}},[t._v("#")]),t._v(" npm コマンドリスト")]),t._v(" "),e("p",[t._v("開発で使う主なコマンド紹介です。")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("以下のコマンドは "),e("code",[t._v("packages/app")]),t._v(" ディレクトリ下で実行してください。")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("command")]),t._v(" "),e("th",[t._v("詳細")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("dev:client")])]),t._v(" "),e("td",[t._v("開発用にクライアントのビルドを行い、webpack-dev-server を起動します"),e("br"),t._v("ファイルを監視し、変更時に自動で再ビルドします。")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("dev:server")])]),t._v(" "),e("td",[t._v("開発用に Express サーバーを起動します"),e("br"),t._v("ファイルを監視し、変更時に自動で再起動します。")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("test")])]),t._v(" "),e("td",[t._v("単体テスト、統合テストを実行します。")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("lint")])]),t._v(" "),e("td",[t._v("コードの linting を実施します。")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("migrate:create")])]),t._v(" "),e("td",[t._v("マイグレーションファイルを作成します。")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("migrate:status")])]),t._v(" "),e("td",[t._v("マイグレーションの適用状態をチェックします。")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("migrate:up")])]),t._v(" "),e("td",[t._v("全ての未適用のマイグレーションを適用します。")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("migrate:down")])]),t._v(" "),e("td",[t._v("適用済みのマイグレーションのうち、最新のもの1つを適用前の状態に戻します。")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("migrate")])]),t._v(" "),e("td",[e("em",[t._v("[エイリアス]")]),t._v(" "),e("code",[t._v("migrate:up")]),t._v(" を実行します")])])])])])},[],!1,null,null,null);a.default=v.exports}}]);