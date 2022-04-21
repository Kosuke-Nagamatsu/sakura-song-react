メンターさん、同期生の皆さん、お元気ですか。
皆さんへ桜という歌を歌ってみました。もしお気づきになった方は、さりげなく聴いていただきたいです。アフリカのメンターさんは日本の桜をご存知ですかね。。とても綺麗な花です。それと同じくらい綺麗な日本語が出てくる歌なので、喜んでもらえたら嬉しいです！

URL: [https://fast-basin-96000.herokuapp.com/](https://fast-basin-96000.herokuapp.com/)

# 使用技術
- HTML
- CSS
- React 18.0.0
  - axios 0.26.1
  - css: styled components 5.3.5
  - material ui 5.6.1
  - react animations 1.0.0

# 翻訳機能
英⇄日 の翻訳機能を入れました。必要であれば、皆さんの用途に応じてご使用ください。
## Google Apps Script（GAS）
Google翻訳APIを調べたところ、`最初の 500,000 文字 *（1 か月あたり） 無料`と記載がありました。制限なく無料で使いたいと思い、[Google翻訳APIを無料で作る方法](https://qiita.com/satto_sann/items/be4177360a0bc3691fdf)を参照させていただきました。GASはJavaScriptベースの言語であり、基本的な文法は同じのようです。フロントエンドからリクエストを送り、下記APIで翻訳語にレスポンスを返す流れになります。

<img width="754" alt="スクリーンショット 2022-04-17 23 14 39" src="https://user-images.githubusercontent.com/83779040/163718375-a78c39c2-9eae-4c29-b82f-1e12219da42b.png">

## TranslationFormコンポーネント
Material UIのようにコンポーネントにpropsを渡し、カスタムできるようにしました。
### 初期値の設定
**src/components/TranslationForm.jsx**
``` js
12  const { source = "en", target = "ja", sourceName = "English", targetName = "Japanese" } = props;  // propsがない場合（ {} の場合 ）、デフォルト値を設定
13  const [languages, setLanguages] = useState({
14    src: source,
15    tgt: target,
16    srcName: sourceName,
17    tgtName: targetName
18  });
```

### Props
|  名前 |  デフォルト値  |  説明  |
| ---- | ---- | ---- |
|  source  |  'en'  |  翻訳前の言語コードです。デフォルトの場合、英文が翻訳対象になります。  |
|  target  |  'ja'  |  翻訳後の言語コードです。デフォルトの場合、日本語に翻訳されます。  |
|  sourceName  |  'English'  |  入力エリアのラベル、プレースホルダの一部に表示するテキストです。  |
|  targetName  |  'Japanese'  |  出力エリアのラベルに表示するテキストです。  |

※ sourceNameとtargetNameの値は、[Material UIのTextFieldコンポーネント](https://mui.com/material-ui/api/text-field/)に渡しています。labelとplaceholder Propsの値です

### デモ
試しに日本語をルワンダ語に翻訳してみます。

**src/App.js**
``` jsx
<TranslationForm source="ja" target="rw" sourceName="Japanese" targetName="Kinyarwanda" />
```
すると、、

<a href="https://fast-basin-96000.herokuapp.com/">
  <img width="605" alt="スクリーンショット 2022-04-19 23 56 48" src="https://user-images.githubusercontent.com/83779040/164481171-c131d9a7-a340-468b-9acc-8c9ecb5db1b7.png">
</a>

翻訳後は全くわかりませんが、正しいですか。

# 実行手順
```
$ git clone git@github.com:Kosuke-Nagamatsu/sakura-song-react.git
$ cd sakura-song-react
$ npm install
$ npm start
```