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
簡単な仕様になりますが、英→日 の翻訳機能を入れました。必要であれば、皆さんの用途に応じてご使用ください。
### Google Apps Script（GAS）
Google翻訳APIを調べたところ、`最初の 500,000 文字 *（1 か月あたり） 無料`と記載がありました。制限なく無料で使いたいと思い、次の情報を拝見し参照させていただきました。→ [Google翻訳APIを無料で作る方法](https://qiita.com/satto_sann/items/be4177360a0bc3691fdf)
GASはJavaScriptベースの言語であり、基本的な文法は同じのようです。フロントエンドからaxiosでリクエストを送り、下記APIで翻訳語にレスポンスを返す流れになります。

<img width="642" alt="translate_api_src" src="https://user-images.githubusercontent.com/83779040/163544342-b7b2bb71-9e2b-49d6-b6aa-93cd2ba631a6.png">

### 制御されたコンポーネント
Reactの公式情報です。
> ### 非制御コンポーネント
> ほとんどの場合では、フォームの実装には制御されたコンポーネント (controlled component) を使用することをお勧めしています。制御されたコンポーネントでは、フォームのデータは React コンポーネントが扱います。非制御コンポーネント (uncontrolled component) はその代替となるものであり、フォームデータを DOM 自身が扱います。

今回はお勧め通りに制御されたコンポーネントで作成することにしました。
[Material UIのTextFieldコンポーネントのドキュメント](https://mui.com/material-ui/api/text-field/)やデモ内容も参考にし、入力されるたびにstate（textという名前にしています）が更新され、コンポーネントが再レンダーされることを確認できました。まだまだ学習中ですが、再レンダーされたコンポーネント配下のコンポーネントも同じように再レンダーされるとのことで、今後に向けてメモ化などの対策の必要性を学べました。

### 実行手順
```
$ git clone git@github.com:Kosuke-Nagamatsu/sakura-song-react.git
$ cd sakura-song-react
$ npm install
$ npm start
```