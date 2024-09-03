function insertGuideCode() {
  var url = window.location.href;
  var lang = navigator.language || navigator.userLanguage;
  lang = lang.split('-')[0].toLowerCase(); // 'en-US' -> 'en'

  // 言語とURLのマッピング
  var languageUrls = {
    'en': {
      'womp': 'https://lean-system.co.jp/guide/womp/?lang=en',
      'sumo': 'https://lean-system.co.jp/guide/sumo/?lang=en',
      'doodle3d': 'https://lean-system.co.jp/guide/?p=5',
      'doodle3d': 'https://lean-system.co.jp/guide/?p=5',
      'vagon': 'https://lean-system.co.jp/guide/?p=151',
    },
    'zh': {
      'womp': 'https://lean-system.co.jp/guide/womp/?lang=zh',
      'sumo': 'https://lean-system.co.jp/guide/sumo/?lang=zh',
      'doodle3d': 'https://lean-system.co.jp/guide/?p=5',
      'vagon': 'https://lean-system.co.jp/guide/?p=154',
    },
    'ja': {
      'womp': 'https://lean-system.co.jp/guide/womp/',
      'sumo': 'https://lean-system.co.jp/guide/sumo/',
      'doodle3d': 'https://lean-system.co.jp/guide/?p=119',
      'vagon': 'https://lean-system.co.jp/guide/?p=125',
    }
  };

  // デフォルトは日本語
  var defaultLang = 'en';

  // 言語が対応していない場合はデフォルト言語を使用
  if (!languageUrls.hasOwnProperty(lang)) {
    lang = defaultLang;
  }

  var guideUrl;
  if (url.includes('womp.com')) {
    guideUrl = languageUrls[lang].womp;
  } else if (url.includes('sumo.app')) {
    guideUrl = languageUrls[lang].sumo;
  } else if (url.includes('doodle3d.com')) {
    guideUrl = languageUrls[lang].doodle3d;
  } else if (url.includes('doo.modeltown.world')) {
    guideUrl = languageUrls[lang].doodle3d;
  } else if (url.includes('vagon')) {
    guideUrl = languageUrls[lang].vagon;
  }

  if (guideUrl) {
    var guideCode = `
      <div class="insert-leanwrap">
        <div class="guide-iframe">
          <iframe src="${guideUrl}"></iframe>
        </div>
        <div class="guide-show-button">
          <span class="text">GUIDE</span>
          <span class="arrow"></span>
        </div>
      </div>
      
      <style>
      /* -------------------------------------------------------------------------------- */
      /*	CSS Reset
      /* -------------------------------------------------------------------------------- */
      @import url("https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;500;700;900&display=swap");
      * {
        font-family: "M PLUS Rounded 1c", sans-serif !important;
        font-weight: bold !important;
      }
      body strong, body em, body strong mark {
        font-weight: 900 !important;
      }
      html, body {
        margin: 0;
        padding: 0;
        /* background-color: #2f3336; */
      }
      h1, h2, h3, h4, h5, h6, p, blockquote, address, big, cite, code, font, img, small, strike, sub, sup, li, ol, ul, fieldset, form, label, legend, button, table, caption, tr, th, td {
        margin: 0;
        padding: 0;
        border: 0;
        font-weight: normal;
        font-style: normal;
        font-size: 100%;
        line-height: 1;
        font-family: inherit;
        text-align: left;
      }
      table {
        border-collapse: collapse;
        border-spacing: 0;
      }
      blockquote:before, blockquote:after {
        content: "";
      }
      input[type=search] {
        -moz-appearance: none;
        -webkit-appearance: none;
      }
      input[type="search"]::-webkit-search-decoration, input[type="search"]::-webkit-search-cancel-button, input[type="search"]::-webkit-search-results-button, input[type="search"]::-webkit-search-results-decoration {
        display: none;
      }
      /* -------------------------------------------------------------------------------- */
      /*	Document setup
      /* -------------------------------------------------------------------------------- */
      .guide-iframe {
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: -100vh;
        left: 0;
        z-index: 999998;
        transition: all 0.2s ease;
        background: #fff9c8;
      }
      .guide-iframe.show {
        top: 0;
      }
      .guide-iframe iframe {
        width: 100%;
        height: 100%;
        border: 0;
      }
      .guide-show-button {
        position: fixed;
        width: calc(512px * 0.15);
        height: calc(512px * 0.15);
        bottom: 44px;
        left: 50px;
        width: calc(512px* 0.1);
        height: calc(512px* 0.15);
        bottom: 6px;
        left: 20px;
        z-index: 999999;
        cursor: pointer;
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDIgNzkuYTZhNjM5NiwgMjAyNC8wMy8xMi0wNzo0ODoyMyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjkgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNC0wNy0xMVQwOTozNDowNiswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjQtMDctMTFUMTA6MjY6MDIrMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQtMDctMTFUMTA6MjY6MDIrMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjExNWFhODU5LTMyMzctY2U0Mi04N2NiLWYxZmFkMTFkYjA5ZCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxMTVhYTg1OS0zMjM3LWNlNDItODdjYi1mMWZhZDExZGIwOWQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxMTVhYTg1OS0zMjM3LWNlNDItODdjYi1mMWZhZDExZGIwOWQiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjExNWFhODU5LTMyMzctY2U0Mi04N2NiLWYxZmFkMTFkYjA5ZCIgc3RFdnQ6d2hlbj0iMjAyNC0wNy0xMVQwOTozNDowNiswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI1LjkgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiKYdS8AAByqSURBVHic7d3Lj1zZfdjxH1/d7CFBUqMZyZJlDYwYM9LCWQSWBxICqwYBZGT8d2QVxID2CchG1sEA1t/gjbPyIhPYG9YYwciyYW+8SDiwYsiKZD3mQXJIdnc9s+iqZrFY1V2PW/eec8/nAwyGItldd0DN/L73nHOrLo3H4wAAynK56QsAAOonAACgQAIAAAokAACgQAIAAAokAACgQAIAAAokAACgQAIAAAokAACgQAIAAAokAACgQAIAAAokAACgQAIAAAokAACgQAIAAAokAACgQAIAAAokAACgQAIAAAokAACgQAIAAAokAACgQAIAAAokAACgQAIAAAokAACgQAIAAAokAACgQAIAAAokAACgQAIAAAokAACgQAIAAAokAACgQAIAAAokAACgQAIAAAokAACgQAIAAAokAACgQAIAAAokAACgQAIAAAokAACgQAIAAAokAACgQAIAAAokAACgQAIAAAokAACgQAIAAAokAACgQAIAAAp0NSJif3+/6esAgDh5+KATEZ2IiP07b91r8lra4uTkZOHPXxqPxwIAgNrNDvuIuDv/6/t33rpU5/W01bIAuFrzdQBQqJOHD+5NfvjdeD74aYgAAKByM3f3hn2iBAAAW3N3nx8BAMBaLtq7Jw8CAIBzWc5vJwEAwAsM/DIIAIDCGfhlEgAAhTHwiRAAAK1n4LOIAABoGQOfVQgAgBaYeQ7fY3msRAAAZGjmLt/AZyMCACADlvWpmgAASJRlfXZJAAAkZDL03eWzcwIAoEH28mmKAAComaV9UiAAAGpgaZ/UCACAHTH0SZkAAKiQoU8uKguAf/6LXide/j989+t/uNet6jV+/g9/de+V2zfj4NaNF15j/85blb0GwLoM/fZ79NO/vzf/c08fPul+9Xf/oFvVa9QxR2ddGo/Hsb+/v/YXPv7h2YV+98lxdAa9c397NyI+iIj4+h/u3VvndX7+D381fZ27ERELAmDe4fQ1hQGwK4b+7u3feetS3a85N+jPPaT59OGT6Q8Pv/q7f3DvnN+60D//RW/6NRceBr22F90b1+ODW99eb4ZGRJycnCz8+bUCYGbo342IOBlEHD1b91LOHEYsD4LJ4L8bc/9yrRAAS18rRAGwBUO/XrsOgEc//ftObPHuijMBMHUYEQtXBebu7jd++uPglYj907X7w1VjYKsAmAz+s2E8GEQ82XzwL3MYEXH1q38dcc4fxoYBMK8bkxWJ/Ttv3dv2mwHt5Tn95lQZADPDPqKiP8sFATDVHf74Bx+MD/40YgfBeHUv4ub1s/95YQhsHACPf9i7HzMXv6PhHxERr179nfjp0R/H7Td+f+nvqSgAFrFKAESEoZ+KbQJg27v7VZwTAKfX8JO/id86+JP4dPCPlb/2XAREnBMCawfA5K7//uzP7Wr4rzL4p3YYAPO6cbpKIAigEJb407JOAMzs3df253dRAEztKgQWRED31rf33pn/fWsFwKLhHxHx8PEWV7rAOoN/qsYAmNcNQQCt424/XecFwMzAb+zPbdUAmNpFCMycCZj1zq1vP39yYOUAWDb8tzzw94JNBv9UgwEwrxuCALI1uds39BM2GwApDPx56wbAVNUhcOfWwp8+i4CVAmDZ8I+o5u5/m8E/lVAAzOuGIICkudvPy/HnTw8j4T+rTQNgqqoQWLIKcLYdsGoAvHDgb2rbu/8qBv9UwgEwrxuCAJJgbz9Px58/bfoSzrVtAExtGwJLAiBicjDwwgB4/MPevVhSWpsGQJWDfyqjAJjXDUEAtbLMn7dSAmBqmxBYsg0Qt769d2mVABgv+8ZPjiMueKe/F+xi8E9lHADzuiEIoHKTZf6X3kSM/JQWAFPDH/8gJu8hsLJlARARh/v/Znxv0S9cjjjb+19qneEfEfHZ52/vZPi3TCdO/yN1/+Thg/HJwwf3Zz4jHFjTycMHnZOHD+7H6TmmTsOXA6lYugI23TXo1HMdnKMTEZ2Thw+mf1iHEd6pEC5ifx824+OA03X6eQsvBoHtApiwvw/bEQD5uBsRd08ePohwfoCCGfxQDQGQp87krxeCwHYBbWbwk5Lecb/pS9iaAGiHTjg/QEsZ/LAbAqCdZs8PdMN2ARky+GG3BED7dcJ2ARnxHD/UQwCUpxO2C0iQwQ/1EgDYLqBxkzfw6TR9HVASAcCsTtguoEb2+aE5AoDzdMJ2ATtguR+aJwBYh+0CtuauH9IgANhUJ17cLrA6wLkmd/33m74O4JQAoCpWB1jKIT9IjwBgFzrhMCHhrh9SdrnpC6AInTiNgfHkr3uTwUCLTfb6DX9IlBUAmvDSJxtaHWgPJ/whDwKApnXi5UcNnR3IlCV/yIctAFJzNyLuT7YK7k+WkcmAJX/IixUAUtYJqwNZcMof8mMFgJxYHUjMycMHHcMf8mQFgFx1wupAo+z3Q96sANAWVgdqZPhD/gQAbdQJ7zuwM4Y/tIMAoARWBypi+EN7OANAaTrx/OxAN3xmwcoMf2gXAUDJOuETDVdi+EP7CAB47qVPNBQDhj+0lTMAsFgnHCQ0/KHFBACsZvYgYUkxcPfi3wLkSADA+oqIAe/wB+0mAGA7rXzEcPLP0Wn4MoAdEgBQnU48PzeQbQxMVjQs/UPLCQDYjU7ke4jQoT8ogACAemRxbmCy7w8UQABA/ZI8NzCJkk7DlwHURABAszqRzrkB+/5QEAEA6ehEQzHg1D+URwBAmjpRbwy4+4fCCABIXyeex0DlBwhTOYMA1MuHAUFe7sZpDHQj4oNf/ui3t/6G//K///buV775ra2/D5AXAQB56kRE58tv/1N8/OF7MbzyJxt/o2uf/a+IEABQGlsAkLnXvvP9+PLb/xRXhn+88dcD5REA0BLTEPjClX+98tdsGg1A/gQAtMze7/15jG792Uoh0P/Cv63hioAUCQBooa9881ux93t/fmEEOPwH5RIA0GLT1YBFLP9D2QQAtNxXvvmthRFg+R/KJgCgAIsiwPI/lE0AQCG+8s1vrfWEANBuAgAKMj0YaP8fEABQmE9u/OemLwFIgACAwtj7ByIEAAAUSQBAgTwCCAgAKJBtAEAAAECBBAAAFCi7AOgd95q+BADIXnYBMDgRAACwrewCAADYngAAgAIJAAAokAAAgAIJAAAokAAAgAIJAAAokAAAgAIJAAAokAAAgAIJAAAokAAAgAIJAAAokAAAgAIJAAAokAAAgAIJAAAokAAAgAIJAAAokAAAgAIJAAAokAAAgAIJAAAokAAAgAIJAAAokAAAgAIJAAAokAAAgAIJAAAokAAAgAIJAAAokAAAgAIJAAAokAAAgAIJAAAokAAAgAIJAABYU//4pOlL2JoAAIACCQAAKJAAAIACCQAAKJAAAIACCQAAKJAAAIACCQAAKJAAAIACCQAAKJAAAIACCQAAKJAAAIACCQAAKJAAAIACCQAAKJAAAIACCQAAKJAAAIACCQAAKJAAAIACCQAAKJAAAIACCQAAKJAAAIACCQAAKJAAAIACCQAAKJAAAIACCQAAKJAAAIACCQAAKJAAAIACCQAAKJAAAIACCQAAKJAAAIACCQAAKJAAAIACCQAAKJAAAIACCQAAKJAAAIACCQAAKJAAAIACCQAAKJAAAIACCQAAKJAAAIACCQAAKJAAAIACCQAAKJAAAIACCQAAKFCWAdA/6Td9CQCQtKfHp38tc7W+S6nO4KQX1/avNX0ZAJCE3jCi34/oDSLm75FfXfI1WQYAAJSsN4joRcTJIOKkfyleHY7X/h4CAAASNz/wqyAAACAxTwanf398VM2wX0QAAEDDhoNhRET0+/0YHz2Ox4PdDf4pAQAANRqNxjEejSLidOA3RQAAwA5NB/5wOIzRZPCnQAAAQIVSHfjzBAAAbGG6f5/6wJ8nAADgAqPRKEaD0enfh6MYDoaN7t9XQQAAwJxB7/Q5vOnAn5f78I8QAABwNvAH/UHDV1IfAQBAcUoc+PMEAACtNr9/zykBAECrGPirEQAAZM3A34wAACAr9u+rIQAASJqBvxsCAIAkHT89bvoSWk0AAJCE4eQOf+hOvxYCAIBGGPjNEgAA7NxoOIzxaBwRBn4qBAAAlZsO/NFoHOPhsOnLYQEBAMDWDPz8CAAA1mb/Pn8CAIALGfjtIwAAeIEDe2UQAACFs39fJgEAUBgDnwgBANB69u9ZRAAAtIyBzyoEAEDGHNhjUwIAICP276mKAABI2PSu3sCnagIAICH276mLAABokIFPUwQAQE3s35MSAQCwIwZ+Ow0H7fizFAAAFXFgrwyj4ajpS6iEAADYkP17ciYAAFZk4NMmAgBgAfv3tJ0AAAgDn/IIAKBIDuxROgEAFMH+PbxIAACt4xPy4GICAMie/XtYnwAAsmPgw/YEAJA8+/dQPQEAJMfAh90TAECjHNiDZggAoFb27yENAgDYKW+4A2kSAECl7N9DHgQAsBUDH/IkAICV2b+H9hAAwFIGPrSXAADOWM6HcggAKJiBD+USAFAIb7gDzBIA0FL274HzCABoCQMfWIcAgEzZvwe2IQAgEwY+UCUBAAmynA/smgCABBj4QN0EADTAcj7QNAEANTDwgdQIAKiYN9wBciAAYEv274EcCQBY0/Su3sAHciYA4AL274E2EgAwx8AHSiAAKJr9e6BUAoCiGPgApwQArWY5H2AxAUCrGPgAqxEAZMtyPsDmBADZMPABqiMASJblfIDdEQAkw8AHqI8AoBE+MAegWQKAWti/B0iLAGAnfGAOQNoEAJWwfw+QFwHA2uzfA+RPAHAh+/cA7SMAeIn9e4D2EwDYvwcokAAojP17ACIEQOvZvwdgEQHQMvbvAViFAMic/XsANpFlADx79CQObt1o+jJqZ/8egKpkGQClsH8PwK4IgITYvwegLgKgQfbvAWiKAKiJ/XsAUiIAdsT+PQApEwAVsZwPQE4EwIYMfAByJgBWYDkfgLYRAAt4HA+AthMAYTkfgPIUFwAexwOAAgLA/j0AvKx1AWD/HgAuln0A2L8HgPVlFQCj0TjGo1EMh8PoPTtu+nIAIFtJB8BwcLqEPxwOYzQaNXw1ANAeSQXAdOD3+/2GrwQA2q2xAJhdznd3DwD1qi0ALOcDQDp2FgCW8wEgXZUEQG8Q0YuIk0HESf9SfOnr/yHC4AeAZG0UAE8mj9xPBz4AkJcLA+Bo8HzgPz4y7AGgDV4KgKeT99fpDSJO+hFHo4ijY4MfANrkakTELz5r+jIAgDpdbvoCAID6CQAAKJAAAIACCQAAKJAAAIACCQAAKJAAAIACCQAAKJAAAIACCQAAKJAAAIACCQAAWMNgMGj6EiohAABgDaPhsOlLqIQAAIACCQAAKJAAAIACCQAAKJAAAIACCQAAKNDVpi8AACJOH68bDkcx7A9b86hdygQAALWbDvuIiP5xr+GrKZMAAGDn+r1+RIS7+4QIAAAq5e4+DwIAgK3Yu8+TAABgLdPlfHf3eRMAAJzLwG8nAQDAGcv55RAAAAUz8MslAAAKYuAzJQAAWq7f6xv4vEQAALSMQ3usQgAAZG66rG/gsw4BAJAZ+/hUQQAAZMCyPlUTAAAJcpfPrgkAgETYy6dOAgCgQR7RoykCAKBmhj4pEAAAO2ZpnxQJAIAdMPRJnQAAqIihT04EAMAWDH1yJQAA1mTo0wYCAGBF/V7f0Kc1BADAOTyyR1sJAIA5lvgpgQAAmLDET0kEAFA0S/yUSgAARXK3zyb6vV4Me/24snet6UvZWnYBMBqNYtgbxP/7Pz+JiIj9G9dj/5X9iIi49cU7DV4ZkLrRcBi94767fVbS7/Vi0BtERMTR42cv/NpoNI4re1fj8uXLTVxaJbIKgGGvH4Pei//injw9jpOnxxER8fjXj85+/tbrtyMiYv/g4CwQgDK52+ci5w37RUaDUYwGvbi6dyXb1YAsAmB61z8ajFb+mucxIAqgRE7ys8zRk+cDfpVhf55Bb5jtakDyAbDorn9TogDazzI/s6bDfnDSj/5JfyevketqQLIBsMld/ybOi4II5wogF07zU8ewP09uqwFJBkCVd/2bmD1LMP2xw4aQJvv7ZWp62C+T02pAUgFQ113/JhYdNhQF0ByDvwzrHs5LRQ6rAckEQNN3/ZsQBVA/g7+9ch32y6S+GnBhAOxdjjja4QWkfNe/iYuiwGFD2IzB3y5tG/bnSXU14MIAuLLDF8/xrn8Ts1HgCQRYj8Gfv5KG/TIprgY0sgXQtrv+TXksEZYz+PNU5TP2bZTSakDtAVDKXf+mRAGlGw2HcXy2YkbKUj2Jn7pUVgNqCwB3/ZsTBZTAG/ikzbCvXlWrAQfXxxt9XS0B4K6/eouiwBMI5Or46bHBnxDDvj5NrgasFAAH18dxdHxp7W/urr9eHkskN/b5m2fYp2F2NWD9abuZqxERb767d++j93t3q/zG4x//t+h/+T9W+S3ZgCggRZb76+ckfvqmqwHXLq/378XBhrsHl8bjcezv78dH7/fO3UT49NnmTfLW7ZvxySffiYiI/pe+v/H3YXdEAXVx1797hn1env7sw7hz7UcREfHx1b9c62v3Lo/j5vXzf88b/268cICvHABHo9hoG2AZUZA+b2BElZzu3w3DPi/bDPtFbr8yvvD9epYFwMqHAA8uRwwvj6M3qiYCHjx6EjH9h//09O+zUfCw/3bc+M3vVPJabMYbGFEVh/yqYdjnZeGwP4j4uKLvv8rwj4jDZb+w1lMAN69HPDmuLgLmvRAFV/8yHn16+sPXBt+LCFGQCo8lsip7/Zsz7POy62E/7+D6SsP/XLMB0I2IzkVfcPN6xNFos6cCNvWxKEieKGCevf7VOYmfl7qH/bwV7/wvNBsAH8QKARBxuh1w8Mq48nMB6xAF6RMF5bLkv5xhn5emh/2sg+vjTU78d5f9wuwhwE5E3N/koo5GEcNe7GxrYBuiIH2ioD0c9HuRYZ+Xa7967+zHVRzQq8LB9XHsXd78g/nefHfv0snJycJfOwuAiLjwSYBVDCOiN3nfn6ZWBy4iCtInCvJT+vA37PMyHfZf/OKHp+fPErB3eRxX9k5/vOmz/XMO33x3796yAJg/BHgYEVu9IdCVeH7hB6+c9kRqUWD7IH3e6jgvpS35G/Z5WTjsJ9Pv40dLvmjHdjDsF+me94vzKwCd2HAbYF2zUWD7gE2Jgua1ffgb9nkp5M5+Fd033917JyJipS2AiIiP3u/diy1XAbZxJArYkiioT9uGv2GfF8P+XO+8+e5eN2KNAIiI+Oj93v1Y8YmAOogCtiUKqtWG/X7DPi8pDvvpx/Buc0hvR87u/iPWD4BO1LQVsKlcoiDCWx2nShRsJsfhb9jnxbDfygvDP2LNAIjIIwLmpXbYcJ7PP0ifpw/Ol8PwN+zzYthX6qXhH7FBAEylth2wLlHAtqZRUPoqQYrD39vl5iW1YT+7X5/hsJ93+Oa7e/cW/cLGARBxthpwNzIOgVmigG1Mtw5KWiVIZfi7u89HysO+4cN5VevG6fDvLvsNWwXAVNtCYJYoYFMlBMGzx08bed3pwHd3nzbDvhGHcbrk373oN1YSALMmjwt+N1oYA7NSPmwoCtLUtiCo81E/Az99hn2jDiMili31L1N5AMyarAx0ooAgiBAFrCfnINj18J/u4Rv4aUpt2E8P50UUMewjTpf3P4gV7/SX2WkALDJZIZhq7I2F6iIKWFUuhwp39XG+R0+e2cNPzOwn3qU27FtwOG8V3Tgd9BFbDvtFag+AZWbCoPWrBdMoiEjvXIEoSMN0dSC1GKjy0J+7/LQY9o07nP5g3aX8TSUTAIvMbCFEtHy1IOXDhqKgWSnFwLaH/gz9NCz8LPuGFTTsu7HDu/p1JB0Ay5SyWiAKmNdkDGyz73/05Jmh35DUhn2Jh/Mi6rurX0eWAbDI3GpBa8NAFDB16/XbtR0g3GTpv9/rxfHnR/b0a2TYN6Ybk7v6FAf9Mq0JgGVKOHSY8kcoi4Ld279xPW598c5OQ2CdpX93+/Uw7BszvatvdPm+Cq0PgEVKWS1I9QkEUbAbuwqBVU/9G/y7Y9g3ohsZ3tWvo8gAWKaE1QJR0H5Vh8BFd/8Gf7VSG/YFHM7rRiKH8uomAC5QwmqBKGinKkLgvLv/fq8Xn3/8eOPvjWHfgKQP5dVNAGyo7Y8opnrYUBSs79brtzd+amDZ3f/nnzxyuG8DKb2DXsuHfTcKvatfhwCoWJsfURQF+dq/cT1e/60vr/U1i+7+3fWvLpVh37KPtl3EXf2GBEAN2rxaIAry8vrXf2PlLYH5u3/Df7kUh30LD+d1w119pQRAg9q6WiAK0rZKBMzf/Vvyf86wr4W7+hoIgMS0ebUgxcOGrw2+FxERD/tvx43f/E7DV1OfiyJg9l3/Sh7+hv3OdcNdfWMEQCbaulogCppzXgRMl/9LesQvlWHf4o+2dVefGAGQsbauFoiC+nztG2+89HPT5f827/mnNuxbdjivG+7qsyAAWqiNqwWpfYRyW84TLHo6YBoAn/7844auqlqpPGvf0mHvrj5jAqAQbXyXw9QOG06jILdVgvmtgGePn2a99D+9uzfsK9ea98DnlAAoWBvf5TClKMglCOZXAZ49fprN3f/07r6ppfyWPmPfjZa/Bz6nBAAvadtqQSpRMA2CFLcMpqsAo+EwPvvlp8ne/Tc58Ft6Et9dfcEEACtp24HDpj9CObUYmL5dcL/Xj1/+3583fTkvuPar92of+C0c9t1wV88cAcBW2nbgsIknEFKJga99440kAmB6l1/XHn4Lh72DeaxEAFC5tq0W1BkFrw2+19iZga994414/MnDePzrR7W/dl1Dv2WH87rhcTu2IACoRdsOHO46Ct66fTN+/Ivv1xoCt16/HaPBKJ589nltr7nL5f22Dnt39VRFANCoNm0h7OK9Ct66fTN+ceW/V/K9LnLr9dtx9PhZLW/7+/RnH8bg4L9W9v1aNuwdzKMWAoDktGkLoaonEK4e/ZedrwbceeN34uFP/nGnr/H0Zx/Gv/qN97a642/RsO+GJXwaJADIQpu2EDaNgl1HwK4DYN27/pYdzuuGJXwSIwDIWlu2EFaNgl1GwC4D4KLh37JhbwmfLAgAWqctWwhPjl8+YFjnmYAqPfr03y/8+duvjHNfxjfsyZYAoAi5RsGiCHht8L3G3zNgHdd+9d7Cx/syG/7dsIRPywgAipXLuYL5CMhtFWDR3X/iw78bhj0FEAAwJ8VzBcOIePTseQTcfvV/Nncxa5oNgL3L4zi4ntTp/W4Y9hRKAMAKUomCo9HpIcEcA+Dg+rjpA37262GGAIANNRkF+0/+KJ699p/qfMmNnPz6R/Hbr/8gfnlc+8cLG/ZwAQEAFWoiCvaf/FFERBJBcPLrH8UXLv3N6Y9v/o+6XrYbp8v4hj2sQQDAjs1EQW1PH0yjYN42kTA73Ge9+qW/i3959ouNv++aumHPHiohAKBmM08fJHPIMGGW8mFHBAA0TBC84DDC3T3UQQBAQj56vzdu+hoa1H3z3b13mr4IKMWyAMj/3bghT6UOQMMfEiEAoAGTfe7SBmE3nu/1Aw2zBQANmpwLuBvtPxPgzh8a4gwAJGzyCGE2H160hm5EHDrZD80RAJCBSQi04SmBw/BIHyRBAEBmmnhjoS10w7v0QZIEAGQuoY81nj3IZ+BD4gQAFGAuErZluEMLnBsAAEBZvA8AABRIAABAgQQAABRIAABAgQQAABRIAABAgQQAABRIAABAgQQAABRIAABAgQQAABRIAABAgQQAABRIAABAgQQAABRIAABAgQQAABRIAABAgf4/CmXZsajx8w8AAAAASUVORK5CYII=") no-repeat 100%/100%;
      }
      .guide-show-button .text {
        position: absolute;
        left: 50%;
        top: 44px;
        transform: translate(-50%, 0);
        display: inline-block;
        font-size: 12px;
        pointer-events: none;
        background-color: transparent;
        user-select: none;
        color:#000;
        word-break: keep-all;
      }
      .guide-show-button .arrow {
        position: absolute;
        left: 50%;
        top: 4px;
        background: url("data:image/png;base64,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") no-repeat 100% / 100%;
        width: calc(89px* 0.3);
        height: calc(137px* 0.3);
        transform: translate(-50%, 0) rotate(0deg);
        display: block;
        transition: all 0.2s ease;
      }
      .guide-show-button:hover {
        animation: poyo 0.6s ease 0s 1 normal running none;
      }
      .guide-show-button:active {
        animation: push 0.6s;
      }
      body.state-sp .guide-iframe {
        height: calc(100vh - 42px);
      }
      body.state-sp .sumo3d-iframe {
        height: calc(100vh - 42px);
      }
      body.state-sp .guide-show-button {
        bottom: 2px;
        left: 2px;
        width: calc(512px * 0.1);
        height: calc(512px * 0.1);
      }
      body.state-sp .text {
        top: 29px;
        font-size: 10px;
      }
      body.state-sp .arrow {
        width: calc(89px* 0.2);
        height: calc(137px* 0.2);
        top: 2px;
      }
      body.state-guide-show .guide-iframe {
        top: 0vh;
      }
      body.state-guide-show .guide-show-button .arrow {
        transform: translate(-50%, 0) rotate(180deg);
      }
      @keyframes poyo {
        from, to {
          transform: none;
        }
        10% {
          transform: scale(1.2);
        }
        40% {
          transform: scale(0.9);
        }
        60% {
          transform: scale(1.04);
        }
        80% {
          transform: scale(0.98);
        }
      }
      @keyframes push {
        from, to {
          transform: none;
        }
        10% {
          transform: scale(0.8);
        }
        40% {
          transform: scale(1.1);
        }
        60% {
          transform: scale(0.96);
        }
        80% {
          transform: scale(1.02);
        }
      }
      </style>
    `;
    document.body.insertAdjacentHTML('beforeend', guideCode);

    var guideShowBtn = document.querySelector(".guide-show-button");
    var body = document.body;

    guideShowBtn.addEventListener("click", function() {
      body.classList.toggle("state-guide-show");
      var text = body.classList.contains("state-guide-show") ? "HIDE" : "GUIDE";
      guideShowBtn.querySelector(".text").textContent = text;
    });
  }
}

// https://www.3dpea.com/en/convert/GLB-to-GLB-compressed-with-DRACO を見やすく
function insert3dpeaReDesignCode() {
  
  var cssCode = `
  <style>
  /* -------------------------------------------------------------------------------- */
  /*	CSS Reset
  /* -------------------------------------------------------------------------------- */
  @import url("https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;500;700;900&display=swap");
  * {
    font-family: "M PLUS Rounded 1c", sans-serif !important;
    font-weight: bold !important;
  }

  .head_module_h5,
  .convert_tips_1,
  .convert_format_tips,
  .advertisement_block,
  #input_format,
  .popular_tools,
  #file_format_introduce,
  .advertisements,
  .advertisements + div,
  .grow-me-root,
  #grow-me-root,
  .page_comment_module,
  .head_module {
    display: none;
  }

  .format_select.targetFormat_select {
    background: #fff;
  }

  .upload_content {
    border: none;
  }

  .upload_file_btn {
    border: 5px solid #3ba1ff;
    animation: colorAnimation 2s infinite;
  }

  .upload_file_btn::after {
    background: transparent;
  }

  .FQ_content + div,
  .FQ_content + div + div {
    display: none;
  }

  @keyframes colorAnimation {
    0% {
      background-color: blue;
      box-shadow: 0 0 10px rgba(0, 0, 255, 0.5);
    }
    50% {
      background-color: navy;
      box-shadow: 0 0 10px rgba(0, 0, 128, 0.5);
    }
    100% {
      background-color: blue;
      box-shadow: 0 0 10px rgba(0, 0, 255, 0.5);
    }
  }
  
  .download_model {
    animation: colorAnimation 2s infinite;
  }

  .back {
    background: #f00;
  }
  </style>
  `;
  
  document.body.insertAdjacentHTML('beforeend', cssCode);
  
  var intervalId = setInterval(function() {
    var advertisements = document.querySelectorAll('.advertisements');
    if (advertisements.length > 0) {
    
      
      document.querySelector(".convert_tips").innerHTML = "Compressing GLB Model with DRACO";


      clearInterval(intervalId);
    }
  }, 200);
}

var url = window.location.href;

// コンテンツ読み込み前に実行
if (url.includes('3dpea.com')) {
  insert3dpeaReDesignCode();
}

// コンテンツが読み込まれた後に実行
window.addEventListener('load', function() {
  insertGuideCode();
});
