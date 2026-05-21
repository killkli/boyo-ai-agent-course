# Hermes Agent 全天實作工作坊文件索引

這裡整理全天實作工作坊的主要文件。若你是第一次進來，先看「從哪裡開始」，再依角色往下找。

## 從哪裡開始

- **要看對外版課表**：讀 [standalone-schedule.md](./standalone-schedule.md)
- **要寄送或列印 DOCX**：使用 [../../output/16-全天實作工作坊-獨立課表.docx](../../output/16-全天實作工作坊-獨立課表.docx)
- **要掌握全天節奏與完整設計**：讀 [schedule.md](./schedule.md)
- **要備課或帶班**：讀 [instructor-guide.md](./instructor-guide.md)

## 核心文件

- [schedule.md](./schedule.md) — 全天工作坊的完整課表、學習目標與評量方式
- [standalone-schedule.md](./standalone-schedule.md) — 對外版獨立課表，適合提案、寄送與列印
- [instructor-guide.md](./instructor-guide.md) — 講師備課、巡場、時間控管與 Demo 建議
- [generate-standalone-schedule-docx.js](./generate-standalone-schedule-docx.js) — 獨立課表 DOCX 生成腳本

## 六個 Lab

- [lab-01-hermes-setup-and-basics.md](./lab-01-hermes-setup-and-basics.md) — 安裝 Hermes 並完成第一個任務
- [lab-02-tools-deep-dive.md](./lab-02-tools-deep-dive.md) — 工具啟用、風險邊界與多工具串接
- [lab-03-automation-and-learning-loop.md](./lab-03-automation-and-learning-loop.md) — 自動化流程、排程與自學習迴圈
- [lab-04-office-scenarios-prototype.md](./lab-04-office-scenarios-prototype.md) — 場景原型實作，從需求走到第一版方案
- [lab-05-office-scenarios-iteration.md](./lab-05-office-scenarios-iteration.md) — 迭代、優化、驗證與 Demo 準備
- [lab-06-cross-scenario-challenge.md](./lab-06-cross-scenario-challenge.md) — 跨場景整合挑戰與成果收斂

## 建議使用順序

### 對外溝通

1. [standalone-schedule.md](./standalone-schedule.md)
2. [../../output/16-全天實作工作坊-獨立課表.docx](../../output/16-全天實作工作坊-獨立課表.docx)

### 內部排課與調整

1. [schedule.md](./schedule.md)
2. [lab-01-hermes-setup-and-basics.md](./lab-01-hermes-setup-and-basics.md) ～ [lab-06-cross-scenario-challenge.md](./lab-06-cross-scenario-challenge.md)
3. [instructor-guide.md](./instructor-guide.md)

### 維護 DOCX

1. 編輯 [standalone-schedule.md](./standalone-schedule.md)
2. 視需要同步調整 [generate-standalone-schedule-docx.js](./generate-standalone-schedule-docx.js)
3. 重新輸出 `output/16-全天實作工作坊-獨立課表.docx`
