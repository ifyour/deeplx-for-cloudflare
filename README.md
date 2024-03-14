Deploy DeepLX on Cloudflare.

## Usage

<img src="https://images.mingming.dev/file/5c021ad0cd84494272c35.png" width="700">

```bash
curl --location 'https://deeplx.mingming.dev/translate' \
--header 'Content-Type: application/json' \
--data '{
    "text": "免费，无限量翻译 API",
    "source_lang": "zh",
    "target_lang": "en"
}'
```

Development

```
npm i && npm run dev
```

Deploy

```
npm run deploy
```

<details>

<summary>Another way to deploy</summary>

<img src="https://images.mingming.dev/file/532238359bbb52bc1e4f1.png" width=600>

Open the [Cloudflare dashboard](https://dash.cloudflare.com/), select `Workers & Pages` -> `Create Application` -> `Create Worker` -> `Deploy` -> `Edit Code`, and paste [/dist/index.js](https://github.com/ifyour/deeplx-for-cloudflare/blob/main/dist/index.js) code, then click `Save and Deploy`.

</details>
