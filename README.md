日本人メンターさん、同期生の皆さん、そしてアフリカのメンターさんお元気ですか。
皆さんへ桜という歌を歌ってみました。もしお気づきになった方は、さりげなく聴いていただきたいです。アフリカのメンターさんは日本の桜をご存知ですかね。。とても綺麗な花です。それと同じくらい綺麗な日本語が出てくる歌なので、喜んでもらえたら嬉しいです！

URL: [https://fast-basin-96000.herokuapp.com/](https://fast-basin-96000.herokuapp.com/)

## 使用技術
- HTML
- CSS
- React 18.0.0
  - axios
  - css: 
    - styled components
  - material ui
  - react animations

## 翻訳機能
英⇄日 の翻訳機能を入れました。必要であれば、皆さんの用途に応じてご使用ください。
### Google Apps Script（GAS）
Google翻訳APIを調べたところ、`最初の 500,000 文字 *（1 か月あたり） 無料`と記載がありました。制限なく無料で使いたいと思い、[Google翻訳APIを無料で作る方法](https://qiita.com/satto_sann/items/be4177360a0bc3691fdf)を拝見し参照させていただきました。
GASはJavaScriptベースの言語であり、基本的な文法は同じのようです。フロントエンドからリクエストを送り、下記APIで翻訳語にレスポンスを返す流れになります。

<img width="754" alt="スクリーンショット 2022-04-17 23 14 39" src="https://user-images.githubusercontent.com/83779040/163718375-a78c39c2-9eae-4c29-b82f-1e12219da42b.png">

### 実行手順
```
$ git clone git@github.com:Kosuke-Nagamatsu/sakura-song-react.git
$ cd sakura-song-react
$ npm install
$ npm start
```