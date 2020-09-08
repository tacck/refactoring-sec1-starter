# リファクタリング 第 2 版 第 1 章 開始用セット

## 環境

|                     |         |
| :------------------ | :------ |
| Viscual Studio Code | 1.48.2  |
| Node.js             | v12.4.0 |
| yarn                | 1.22.4  |
| Docker for Mac      | 2.3.0.4 |

**その他**: Viscual Studio Code の拡張として [Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) がインストール済みの状態。

## 手順

### リポジトリをクローンして Viscual Studio Code で開く

```
$ git clone https://github.com/tacck/refactoring-sec1-starter.git
$ code refactoring-sec1-starter
```

### Viscual Studio Code で環境を開く

1. 左ペインの "リモート エクスプローラー" をクリック
2. "Open Folder in Container..." をクリック
3. ファイルダイアログの右下の "Open" をクリック

### Viscual Studio Code で環境を開く (Dev Container)

1. メニューの "ターミナル" から "新しいターミナル" をクリック
2. 下に表示されたターミナルで下記実行

```
$ yarn install
```

3. 左下の "Dev Container" をクリック
4. "Remote-Containers: Rebuild Container" をクリック
5. 再度 Viscual Studio Code が開いたら完了
