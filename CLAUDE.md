# Project Instructions — Agent Tutor

## 語言規範

本專案所有文件、文章、對話輸出一律以**台灣繁體中文**為優先：

- 所有文章、教案、教材、教學指引內容以繁體中文撰寫
- 專業術語保留原文（如 Agent、Harness、Model），其餘以中文為主
- 標點符號使用全形中文標點（「」、，、。、！、？）
- 用語遵循台灣慣用詞（如「程式」非「程序」、「網路」非「網絡」、「資料」非「數據」）
- 禁止使用簡體中文慣用語（如「質量」「信息」「視頻」「軟件」）
- 與使用者互動時以繁體中文回應

## 文章寫作 Hook

所有 `docs/` 目錄下的 Markdown 文章在寫作完成後，**必須**執行一次 `humanizer-zh` 技能進行審查。

### 適用範圍
- `docs/lesson-plan/*.md` — 教案
- `docs/online-materials/*.md` — 線上教材
- `docs/teaching-notes/*.md` — 教學指引
- `docs/*.md` — 其他課程文件

### 流程
1. 完成文章寫作（Write/Edit）
2. 讀取 `.omc/skills/humanizer-zh/SKILL.md` 的審查規則
3. 按照技能流程逐一檢查文章中的 AI 模式
4. 修正發現的問題並提出改寫版本
5. 產出品質評分（/50）

### Hook 機制
- `.claude/settings.json` 設定了 `PostToolUse` hook
- 每當 `docs/*.md` 檔案被 Write 或 Edit，hook 會自動注入提醒
- 收到提醒後，立即執行 humanizer-zh 審查，不可跳過
