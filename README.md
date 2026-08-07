# vrc-profile

VRChat用の自己紹介プロフィールページです。ステータスやフレンド申請の可否、OK/NGなことなどをまとめて公開できます。

## 使用技術

- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Bun](https://bun.sh/) (パッケージマネージャ / ランタイム)

## セットアップ

```bash
bun install
```

## 開発

```bash
bun run dev
```

## その他コマンド

```bash
bun run build    # 本番ビルド
bun run preview  # ビルド結果のプレビュー
bun run lint     # ESLint
```

## デプロイ

`master`ブランチへのpushをトリガーに、GitHub Actionsで自動的にGitHub Pagesへデプロイされます（`.github/workflows`参照）。

## ライセンス

Copyright (c) midorin-Linux
