import styled from 'styled-components';
import axios from 'axios';
import { useState } from 'react';
import { IconButton, TextField } from '@mui/material';
import SwapVertIcon from '@mui/icons-material/SwapVert';

export const TranslationForm = () => {
  const apiId = process.env.REACT_APP_TRANSLATE_API_ID;
  const [resText, setResText] = useState("");
  const [languages, setLanguages] = useState({ source: "en", target: "ja", srcName: "English", tgtName: "Japanese" });
  const { source, target, srcName, tgtName } = languages;

  const handleClick = () => {
    const newSrc = target;
    const newTgt = source;
    const newSrcName = tgtName;
    const newTgtName = srcName;

    // 英→日 を 日→英 のように対象言語を入れ替える
    setLanguages((prev) => ({
      ...prev,
      source: newSrc,
      target: newTgt,
      srcName: newSrcName,
      tgtName: newTgtName
    }));
  }

  const handleChange = (e) => {
    const text = e.target.value;

    // text：翻訳するテキスト、source：翻訳前の言語、target：翻訳後の言語 をパラメータに指定しリクエストを送信
    axios.get(`https://script.google.com/macros/s/${apiId}/exec?text=${text}&source=${source}&target=${target}`)
      .then((response) => {
        setResText(response.data.text);
      }).catch((error) => {
        console.log(error);
      });
  }

  return (
    <SDiv>
      <TextField
        required
        multiline
        fullWidth
        id="outlined-required"
        label={srcName}
        placeholder={`Enter keywords to translate ${srcName} into ${tgtName}`}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={handleChange}
      />
      <IconButton disableRipple={true} onClick={handleClick}>
        <SwapVertIcon />
      </IconButton>
      <TextField
        disabled
        multiline
        fullWidth
        id="filled-basic"
        label={tgtName}
        InputLabelProps={{
          shrink: true,
        }}
        variant="filled"
        value={resText}
      />
    </SDiv>
  );
}

const SDiv = styled.div`
  margin: 1rem 0;
`