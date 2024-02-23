Deploy DeepLX on Cloudflare.

## Usage

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

<img src="https://images.mingming.dev/file/82d34d2cf7669707d0725.png" width=600>

Open the [Cloudflare dashboard](https://dash.cloudflare.com/), select `Workers & Pages` -> `Create Application` -> `Create Worker` -> `Deploy` -> `Edit Code`, and paste [/dist/index.js](https://github.com/ifyour/deeplx-for-cloudflare/blob/main/dist/index.js) code, then click `Save and Deploy`.

</details>
