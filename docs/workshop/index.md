# Hermes Agent 全天實作工作坊文件索引

這裡整理全天實作工作坊的主要文件。若你是第一次進來，先看「從哪裡開始」，再依角色往下找。

## 從哪裡開始

- **要看對外版課表**：讀 [handouts/standalone-schedule.md](./handouts/standalone-schedule.md)
- **要寄送或列印 DOCX**：使用 [../../output/workshop/16-全天實作工作坊-獨立課表.docx](../../output/workshop/16-全天實作工作坊-獨立課表.docx)
- **要掌握全天節奏與完整設計**：讀 [guides/schedule.md](./guides/schedule.md)
- **要備課或帶班**：讀 [guides/instructor-guide.md](./guides/instructor-guide.md)

## 核心文件

- [guides/schedule.md](./guides/schedule.md) — 全天工作坊的完整課表、學習目標與評量方式
- [handouts/standalone-schedule.md](./handouts/standalone-schedule.md) — 對外版獨立課表，適合提案、寄送與列印
- [guides/instructor-guide.md](./guides/instructor-guide.md) — 講師備課、巡場、時間控管與 Demo 建議
- [scripts/generate-standalone-schedule-docx.js](./scripts/generate-standalone-schedule-docx.js) — 獨立課表 DOCX 生成腳本

## Handouts

- [handouts/student-schedule.md](./handouts/student-schedule.md) — 學員當天可直接使用的課表與筆記頁
- [handouts/prep-checklist.md](./handouts/prep-checklist.md) — 工作坊版課前準備清單
- [handouts/hermes-quick-ref.md](./handouts/hermes-quick-ref.md) — 當天最常用的 Hermes 指令卡
- [handouts/workshop-scenarios.md](./handouts/workshop-scenarios.md) — 下午場景挑戰卡與 Demo 重點
- [handouts/feedback-form.md](./handouts/feedback-form.md) — 工作坊專用回饋表

## 六個 Lab

- [labs/lab-01-hermes-setup-and-basics.md](./labs/lab-01-hermes-setup-and-basics.md) — 安裝 Hermes 並完成第一個任務
- [labs/lab-02-tools-deep-dive.md](./labs/lab-02-tools-deep-dive.md) — 工具啟用、風險邊界與多工具串接
- [labs/lab-03-automation-and-learning-loop.md](./labs/lab-03-automation-and-learning-loop.md) — 自動化流程、排程與自學習迴圈
- [labs/lab-04-office-scenarios-prototype.md](./labs/lab-04-office-scenarios-prototype.md) — 場景原型實作，從需求走到第一版方案
- [labs/lab-05-office-scenarios-iteration.md](./labs/lab-05-office-scenarios-iteration.md) — 迭代、優化、驗證與 Demo 準備
- [labs/lab-06-cross-scenario-challenge.md](./labs/lab-06-cross-scenario-challenge.md) — 跨場景整合挑戰與成果收斂

## 建議使用順序

### 對外溝通

1. [handouts/standalone-schedule.md](./handouts/standalone-schedule.md)
2. [../../output/workshop/16-全天實作工作坊-獨立課表.docx](../../output/workshop/16-全天實作工作坊-獨立課表.docx)

### 內部排課與調整

1. [guides/schedule.md](./guides/schedule.md)
2. [labs/lab-01-hermes-setup-and-basics.md](./labs/lab-01-hermes-setup-and-basics.md) ～ [labs/lab-06-cross-scenario-challenge.md](./labs/lab-06-cross-scenario-challenge.md)
3. [guides/instructor-guide.md](./guides/instructor-guide.md)

### 維護 DOCX

1. 編輯 [handouts/standalone-schedule.md](./handouts/standalone-schedule.md)
2. 視需要同步調整 [scripts/generate-standalone-schedule-docx.js](./scripts/generate-standalone-schedule-docx.js)
3. 重新輸出 `output/workshop/16-全天實作工作坊-獨立課表.docx`
