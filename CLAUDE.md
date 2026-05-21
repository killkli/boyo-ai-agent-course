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

## Granular Commit 規範

本專案所有進度變更**必須**以 granular commit 方式提交。每次完成一個邏輯單元的工作後，立即建立一個獨立的 commit。

### 分組原則
- **一個 commit 只做一件事**：修正一個錯字、新增一個檔案、更新一個功能各為獨立 commit
- **依邏輯單元分組**：同性質的檔案可合併為一個 commit（如「新增課程補充教材」包含多個 DOCX）
- **不同類型的變更分開提交**：文件修正、新增檔案、設定變更各自獨立
- **commit message 需清楚描述變更內容**：說明「做了什麼」而非「修改檔案」

### 禁止行為
- 禁止一次 `git add .` 或 `git add -A` 提交所有變更
- 禁止將無關的變更混在同一個 commit 中
- 禁止使用無意義的 commit message（如「update」「fix」「wip」）

### Commit 順序建議
1. 設定檔變更（.gitignore、CLAUDE.md 等）
2. 文件修正（錯字、URL、時間等小修正）
3. 新增內容檔案（教案、教材、輸出文件等）
4. 工具與建構腳本
