---
title: "Hermes Agent 全天實作工作坊 — 快速指令參考卡"
order: 4
---

# Hermes Agent 全天實作工作坊 — 快速指令參考卡

> 這張卡片提供工作坊當天最常用的指令與排錯入口，卡住時先回來看這裡。

---

## 安裝與設定

| 指令 | 用途 |
|------|------|
| `curl -fsSL https://hermes-agent.nousresearch.com/install.sh \| bash` | 安裝 Hermes Agent |
| `hermes --version` | 確認安裝版本 |
| `hermes setup` | 互動式初始設定（選模型、輸入 API Key） |
| `hermes config show` | 顯示目前設定 |

---

## 基本操作

| 指令 | 用途 |
|------|------|
| `hermes chat` | 啟動互動對話模式 |
| `hermes run "<任務描述>"` | 單次執行任務（不進入對話） |
| `hermes history` | 查看對話歷史記錄 |

### 對話模式內操作

| 輸入 | 效果 |
|------|------|
| 直接打字 | 與 Agent 對話 |
| `/help` | 顯示可用指令 |
| `/exit` 或 `Ctrl+C` | 離開對話模式 |

---

## 工具管理

| 指令 | 用途 |
|------|------|
| `hermes tools list` | 列出所有可用與已啟用的工具 |
| `hermes tools enable <工具名>` | 啟用指定工具 |
| `hermes tools disable <工具名>` | 停用指定工具 |
| `hermes tools info <工具名>` | 查看工具的詳細資訊與風險等級 |

### 常用工具一覽

| 工具名 | 功能 | 風險等級 |
|--------|------|----------|
| `file_read` | 讀取檔案內容 | 低 |
| `file_write` | 寫入或建立檔案 | 中 |
| `web_search` | 搜尋網頁內容 | 低 |
| `scheduler` | 排程定時執行任務 | 中 |

---

## 技能系統

| 指令 | 用途 |
|------|------|
| `hermes skills list` | 列出已學到的技能 |
| `hermes skills show <技能名>` | 查看技能的詳細內容 |

> Agent 會從成功經驗中自動累積技能，不需要手動新增。

---

## API Key 設定

在終端機中設定環境變數（擇一即可）：

```bash
# OpenAI
export OPENAI_API_KEY="sk-..."

# Anthropic
export ANTHROPIC_API_KEY="sk-ant-..."

# Google
export GOOGLE_API_KEY="AI..."
```

設定後重新啟動 Hermes 即可生效。

---

## 常見問題速查

| 問題 | 解法 |
|------|------|
| `hermes: command not found` | 關閉終端機重新開啟，或執行 `source ~/.bashrc` |
| `Permission denied` | 加 `sudo` 重新執行安裝指令 |
| API 回應錯誤 | 確認 API Key 是否正確：`echo $OPENAI_API_KEY` |
| macOS 安全性阻擋 | 系統偏好設定 > 安全性與隱私 > 允許執行 |
| 網路逾時 | 確認 VPN 是否干擾，嘗試關閉或切換手機熱點 |

---

## 工作坊指令範例

### 場景 A：課輔中心週報彙整

```
請讀取 ~/workshop-scenario-a/puli-center.txt、zhudong-center.txt、xinpu-center.txt，
將三個課輔中心的週進度彙整成統一格式，
標記學童特殊狀況與缺漏資料，
存到 ~/workshop-scenario-a/weekly-report.md
```

### 場景 B：教學會議記錄

```
請讀取 ~/workshop-scenario-b/meeting-raw.txt，
整理出格式化的教學研討會議記錄和行動項目清單，
包含學童個案追蹤，
存到 ~/workshop-scenario-b/meeting-notes.md
```

### 場景 C：學童家長來信

```
請讀取 ~/workshop-scenario-c/letter-01.txt、letter-02.txt、letter-03.txt，
對每封信分類（課程詢問、學童狀況反映、家長求助、資源申請、感謝回饋）、
判斷優先級並提供回覆建議，
存到 ~/workshop-scenario-c/classification.md
```

### 場景 D：課輔計畫監控

```
請讀取 ~/workshop-scenario-d/plan-summer.txt、plan-digital.txt、plan-early-intervention.txt，
分析三個課輔計畫的進度健康度，
標記異常和風險，
存到 ~/workshop-scenario-d/status-report.md
```

---

## 核心架構速記

```
Agent（智能體）  ← 你最終使用的 AI 助手
 └─ Harness（控管）← 安全、權限、狀態管理
     └─ Model（模型）← AI 的「大腦」
```

一句話：**模型提供智慧，Harness 提供控制，Agent 提供服務。**
