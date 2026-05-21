---
title: "Hermes Agent 全天實作工作坊 — 課前準備清單"
order: 3
---

# Hermes Agent 全天實作工作坊 — 課前準備清單

這份清單只保留工作坊當天會直接用到的準備項目。

## 必帶設備

- 筆記型電腦
- 充電器
- 可正常使用的終端機
- 可連網環境
- 至少一組可用的 AI 平台 API Key

## 上課前請先確認

- [ ] 筆電可正常開機與連上網路
- [ ] 終端機可正常開啟
- [ ] 已能使用瀏覽器登入 AI 平台
- [ ] 已準備 OpenAI、Anthropic 或 Google 其中一組 API Key
- [ ] 若使用公司筆電，已確認不會被 VPN 或防火牆擋住 API 連線
- [ ] 若公司網路有限制，已準備手機熱點

## 建議但非必要

- 先安裝 Python 3.11+
- 先安裝 VS Code 或慣用編輯器
- 若想節省現場時間，可先試跑 Hermes 安裝指令

```bash
curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash
hermes --version
```

## 最容易卡住的地方

- API Key 沒有額度
- 公司網路擋住外部 API
- Windows 環境沒有可用的終端機
- 筆電沒有安裝權限

## 當天現場處理原則

- 安裝失敗時先保留錯誤訊息
- 優先確保可以完成 Lab 1，不在細節上卡太久
- 若本機環境真的受限，先跟組員共用示範流程，再回頭排除個人問題
