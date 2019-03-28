# Portfolio【WIP】

これは僕のポートフォリオです。

## 技術スタック

### front

- React (TypeScript)
- Redux (redux-saga)
- express (front のホスティング + rewrite)

### API

- golang
- echo
- gorm
- goose
- MVC (Clean は諦めて revert した)

### インフラ

- docker
- nginx (サーバー自体は一個でパスでリバースプロキシ)
- mysql
- Cicle CI (予定)

## 機能

- 自己紹介の静的サイト
- お問い合わせページ
- 質問箱のクローン（回答するのは俺だけ）
- 質問の OGP を作成するマイクロサービス？バッチサーバー？（未実装）
- 管理画面

## ディレクトリ構成

### `/front`

#### `app`

- 各アプリケーションの js ファイルの単位ごとにコンポーネントを作成
- index と admin のみ
- store の作成と routing

#### `/bff`

- BFF（ってほどでもない）のサーバーや Dockerfile など
- build された成果物もここに入る

#### `/components`

- 共通のコンポーネントが入ってる
- parts とそれを組み合わせた blocks で構成（アトミックより 1 レイヤー減らした）
- styled component
- 基本的に stateless のつもり（予定）

#### `/pages`

- 各ページごとのコンポーネント
- 出来るだけロジックは container に書いてるつもり

#### `/redux`

- ducks パターンで実装
- types が浮いてるどうしよう

### `/server`

`server.go`が実行ファイル。routing を切り出したい。

#### `/controller`, `/model`

- 普通

#### `/database`

- 環境変数とか yml とかでよしなに切り分けたい

#### `/types`

- response とかで構造体を変えたりしててどうなんやろの気持ち

#### `/utils`

- 便利関数たち
- 現状 slack 通知だけだからも少し他のところも抽象化したい
- secret.go に token とか保管してるが他の方法にした方が良さそう

### `/db`

- db 永続化用の volume
- goose 用の yml と`migrations`

### `/nginx`

- リバースプロキシ用
- `default.conf`を上書きして使ってる
- https は nginx で対応したい
