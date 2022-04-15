import axios from 'axios';
import { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';

export const TranslationForm = () => {
  const [text, setText] = useState("");
  const [resText, setResText] = useState("");
  const [validated, setValidated] = useState(false);

  const helperText = validated ? "半角英数字を入力してください。" : "";  // バリデーションエラーの有無で切り替え
  const apiId = process.env.REACT_APP_TRANSLATE_API_ID;
  const params = { source: "en", target: "ja" };

  // バリデーションチェック
  const isValidated = (str) => {
    const string = str.replace(/\s+/g, "");  // 空白を削除（連続する空白も含めすべて空文字に置換）
    const reg = new RegExp(/^[a-zA-Z0-9!-/:-@¥[-`{-~]*$/);  // 半角英数記号のみマッチさせる
    const isMatched = reg.test(string);
    return !isMatched;
  }

  const handleChange = (e) => {
    setText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidated(text)) {
      setValidated(true);
    } else {
      // text：翻訳するテキスト、source：翻訳前の言語、target：翻訳後の言語 をパラメータに指定しリクエストを送信
      axios.get(`https://script.google.com/macros/s/${apiId}/exec?text=${text}&source=${params.source}&target=${params.target}`)
        .then((response) => {
          setResText(response.data.text);
        }).catch((error) => {
          console.log(error);
        });
      if (validated) { setValidated(false) };
    }
  }

  return (
    <>
      {/* 制御されたフォーム */}
      <Box component="form" onSubmit={handleSubmit} my={5}>
        <TextField
          required
          multiline
          fullWidth
          id="outlined-required"
          label="English"
          placeholder="Enter keywords to translate English into Japanese"
          InputLabelProps={{
            shrink: true,
          }}
          value={text}  // 入力内容をtextで保持
          onChange={handleChange}  // Changeイベントのコールバックを割り当て
          error={validated} // bool型 バリデーションエラーの有無
          helperText={helperText}
        />
        <TextField
          disabled
          multiline
          fullWidth
          id="filled-basic"
          label="Japanese"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          value={resText}
        />
        <Button sx={{ marginTop: 1 }} type="submit" variant="contained">submit</Button>
      </Box>
    </>
  );
}