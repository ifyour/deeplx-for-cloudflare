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

Open the [Cloudflare dashboard](https://dash.cloudflare.com/), select `Workers & Pages` -> `Create Application` -> `Create Worker` -> `Deploy` -> `Edit Code`, and paste [/dist/index.js](https://raw.githubusercontent.com/ifyour/deeplx-for-cloudflare/main/dist/index.js) code, then click `Save and Deploy`.

</details>
