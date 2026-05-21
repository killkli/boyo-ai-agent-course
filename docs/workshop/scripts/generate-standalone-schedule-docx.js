const fs = require('fs');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, WidthType, BorderStyle, ShadingType, VerticalAlign,
  HeadingLevel, PageBreak, Footer, PageNumber, LevelFormat
} = require('docx');

const out = '/Users/johnchen/AICoding/2026-7-agent-tutor/output/workshop/16-全天實作工作坊-獨立課表.docx';
const blue = '1F3A5F';
const teal = '2F7E7B';
const amber = 'D98E04';
const line = 'D9DEE5';
const soft = 'F7F5F0';
const pale = 'EEF3F6';
const border = { style: BorderStyle.SINGLE, size: 1, color: line };
const cellBorders = { top: border, bottom: border, left: border, right: border };

const p = (text, opts = {}) => new Paragraph({
  spacing: opts.spacing || { after: 120 },
  alignment: opts.alignment,
  heading: opts.heading,
  children: (opts.children || [new TextRun({ text, bold: opts.bold, color: opts.color, size: opts.size, font: 'Arial' })]),
});

const bullet = (text) => new Paragraph({
  numbering: { reference: 'bullet', level: 0 },
  spacing: { after: 60 },
  children: [new TextRun({ text, font: 'Arial', size: 22 })],
});

const infoBox = (title, items) => new Table({
  columnWidths: [9360],
  margins: { top: 80, bottom: 80, left: 140, right: 140 },
  rows: [
    new TableRow({ children: [new TableCell({
      borders: cellBorders,
      width: { size: 9360, type: WidthType.DXA },
      shading: { fill: pale, type: ShadingType.CLEAR },
      children: [
        new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: title, bold: true, color: teal, size: 24, font: 'Arial' })] }),
        ...items.map((item) => bullet(item)),
      ],
    })] }),
  ],
});

const makeScheduleTable = (rows) => new Table({
  columnWidths: [1180, 900, 3450, 1250, 2580],
  margins: { top: 80, bottom: 80, left: 120, right: 120 },
  rows: [
    new TableRow({
      tableHeader: true,
      children: ['時段', '時長', '單元', '形式', '產出／重點'].map((h, i) => new TableCell({
        borders: cellBorders,
        width: { size: [1180, 900, 3450, 1250, 2580][i], type: WidthType.DXA },
        shading: { fill: blue, type: ShadingType.CLEAR },
        verticalAlign: VerticalAlign.CENTER,
        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: h, bold: true, color: 'FFFFFF', size: 21, font: 'Arial' })] })],
      }))
    }),
    ...rows.map((r) => {
      const isBreak = r[2] === '休息' || r[2] === '午餐';
      const fill = isBreak ? soft : 'FFFFFF';
      return new TableRow({ children: r.map((c, i) => new TableCell({
        borders: cellBorders,
        width: { size: [1180, 900, 3450, 1250, 2580][i], type: WidthType.DXA },
        shading: { fill, type: ShadingType.CLEAR },
        verticalAlign: VerticalAlign.CENTER,
        children: [new Paragraph({
          spacing: { before: 60, after: 60 },
          alignment: i === 0 || i === 1 || i === 3 ? AlignmentType.CENTER : AlignmentType.LEFT,
          children: [new TextRun({ text: c, bold: isBreak, color: isBreak ? amber : '000000', size: 20, font: 'Arial' })],
        })],
      }))});
    })
  ]
});

const doc = new Document({
  numbering: {
    config: [{
      reference: 'bullet',
      levels: [{ level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 480, hanging: 240 } } } }]
    }]
  },
  styles: {
    default: { document: { run: { font: 'Arial', size: 22 } } },
    paragraphStyles: [
      { id: 'Title', name: 'Title', basedOn: 'Normal', run: { size: 40, bold: true, color: blue, font: 'Arial' }, paragraph: { spacing: { before: 200, after: 120 }, alignment: AlignmentType.CENTER } },
      { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 28, bold: true, color: blue, font: 'Arial' }, paragraph: { spacing: { before: 220, after: 140 }, outlineLevel: 0 } },
      { id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 24, bold: true, color: teal, font: 'Arial' }, paragraph: { spacing: { before: 180, after: 100 }, outlineLevel: 1 } },
    ]
  },
  sections: [{
    properties: { page: { margin: { top: 1080, right: 1080, bottom: 1080, left: 1080 } } },
    footers: {
      default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Hermes Agent 全天實作工作坊　', color: '666666', size: 18 }), new TextRun({ children: [PageNumber.CURRENT] }), new TextRun({ text: ' / ' }), new TextRun({ children: [PageNumber.TOTAL_PAGES] })] })] })
    },
    children: [
      new Paragraph({ spacing: { before: 800, after: 180 }, alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Hermes Agent', bold: true, color: blue, size: 30, font: 'Arial' })] }),
      new Paragraph({ heading: HeadingLevel.TITLE, children: [new TextRun({ text: '全天實作工作坊 — 獨立課表', font: 'Arial' })] }),
      new Paragraph({ spacing: { after: 220 }, alignment: AlignmentType.CENTER, children: [new TextRun({ text: '6 小時教學時間｜Hands-on 實作｜分組操作與成果展示', color: teal, size: 22, font: 'Arial' })] }),
      infoBox('工作坊特色', ['上午建立 Hermes 操作與工具能力，下午進入真實辦公室場景實戰', '從安裝、工作流設計、原型迭代到成果展示，一天完成完整體驗', '適合作為企業內訓、工作坊提案或學員版課表附件']),
      infoBox('基本資訊', ['適合對象：已具備基礎 AI Agent 概念的在職人士', '建議人數：16–24 人，4 組進行', '設備需求：筆電、終端機、網路與 API Key']),
      new Paragraph({ children: [new PageBreak()] }),
      p('工作坊概覽', { heading: HeadingLevel.HEADING_1 }),
      p('', { children: [new TextRun({ text: '這份文件是對外版課表，重點放在時段安排、單元重點與學員產出。', font: 'Arial', size: 22 })] }),
      makeScheduleTable([
        ['09:00–09:25', '25 分鐘', '歡迎、課程說明與環境確認', '講授 + 實作', '完成分組與設備檢查'],
        ['09:25–10:10', '45 分鐘', 'Lab 1：Hermes 安裝與基礎操作', 'Hands-on', '完成安裝、執行第一個任務'],
        ['10:10–10:20', '10 分鐘', '休息', '—', '—'],
        ['10:20–11:10', '50 分鐘', 'Lab 2：工具系統深度探索', 'Hands-on', '學會工具啟用與多工具串接'],
        ['11:10–11:20', '10 分鐘', '休息', '—', '—'],
        ['11:20–12:10', '50 分鐘', 'Lab 3：自動化流程與自學習迴圈', 'Hands-on', '建立可重複執行的工作流'],
        ['12:10–13:10', '60 分鐘', '午餐', '—', '—'],
      ]),
      p('', { children: [new TextRun({ text: '上午場小計：教學 170 分鐘', bold: true, color: amber, size: 22, font: 'Arial' })] }),
      makeScheduleTable([
        ['13:10–14:10', '60 分鐘', 'Lab 4：辦公室場景實作（一）— 從需求到原型', 'Hands-on', '完成第一版可運作原型'],
        ['14:10–14:20', '10 分鐘', '休息', '—', '—'],
        ['14:20–15:10', '50 分鐘', 'Lab 5：辦公室場景實作（二）— 迭代與優化', 'Hands-on', '完成進階功能與邊界處理'],
        ['15:10–15:20', '10 分鐘', '休息', '—', '—'],
        ['15:20–16:00', '40 分鐘', 'Lab 6：分組挑戰賽 — 跨場景整合', 'Hands-on', '完成整合構想或原型'],
        ['16:00–16:10', '10 分鐘', '休息', '—', '—'],
        ['16:10–16:50', '40 分鐘', '成果展示、同儕互評與課程總結', 'Demo + 討論', '每組完成展示與回饋'],
      ]),
      p('', { children: [new TextRun({ text: '下午場小計：教學 190 分鐘', bold: true, color: amber, size: 22, font: 'Arial' })] }),
      p('學員將完成的成果', { heading: HeadingLevel.HEADING_1 }),
      bullet('完成 Hermes Agent 安裝與基本設定'),
      bullet('執行第一個實作任務，理解 Agent 的基本操作節奏'),
      bullet('啟用搜尋、檔案與排程工具，建立一個可重複執行的工作流'),
      bullet('在真實辦公室場景中完成一版 Agent 原型並進行優化'),
      bullet('完成分組展示與跨場景整合挑戰'),
      p('下午場四個場景', { heading: HeadingLevel.HEADING_1 }),
      new Table({
        columnWidths: [900, 2600, 5860],
        margins: { top: 80, bottom: 80, left: 120, right: 120 },
        rows: [
          new TableRow({ children: ['場景', '主題', '核心練習'].map((h, i) => new TableCell({ borders: cellBorders, width: { size: [900, 2600, 5860][i], type: WidthType.DXA }, shading: { fill: teal, type: ShadingType.CLEAR }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: h, bold: true, color: 'FFFFFF', size: 21, font: 'Arial' })] })] })) }),
          ...[
            ['A', '每日報表彙整', '摘要、整併、異常標記'],
            ['B', '會議記錄整理與待辦追蹤', '結構化整理、待辦萃取'],
            ['C', '客戶來信分類與回覆建議', '分類、優先級、回覆重點'],
            ['D', '專案進度監控與異常提醒', '比對分析、風險標記'],
          ].map((r) => new TableRow({ children: r.map((c, i) => new TableCell({ borders: cellBorders, width: { size: [900, 2600, 5860][i], type: WidthType.DXA }, children: [new Paragraph({ alignment: i === 0 ? AlignmentType.CENTER : AlignmentType.LEFT, children: [new TextRun({ text: c, size: 20, font: 'Arial' })] })] })) }))
        ]
      }),
      p('執行條件與準備', { heading: HeadingLevel.HEADING_1 }),
      infoBox('學員課前準備', ['可正常使用終端機', '預先申請可用的 API Key', '自備筆電與充電設備', '若公司網路有限制，建議自備手機熱點']),
      infoBox('講師與現場準備', ['準備備用 API Key 與場景資料包', '確認網路、投影與電源配置', '備妥安裝失敗時的備援操作方案']),
      p('時間統計', { heading: HeadingLevel.HEADING_1 }),
      new Table({
        columnWidths: [4680, 4680],
        margins: { top: 80, bottom: 80, left: 120, right: 120 },
        rows: [
          ['類別', '時長'],
          ['教學時間', '360 分鐘（6 小時）'],
          ['休息時間', '50 分鐘'],
          ['午餐時間', '60 分鐘'],
          ['全天總計', '約 7 小時 50 分鐘'],
        ].map((r, idx) => new TableRow({ children: r.map((c, i) => new TableCell({ borders: cellBorders, width: { size: 4680, type: WidthType.DXA }, shading: { fill: idx === 0 ? blue : (idx === 4 ? soft : 'FFFFFF'), type: ShadingType.CLEAR }, children: [new Paragraph({ alignment: i === 1 ? AlignmentType.CENTER : AlignmentType.LEFT, children: [new TextRun({ text: c, bold: idx === 0 || idx === 4, color: idx === 0 ? 'FFFFFF' : (idx === 4 ? amber : '000000'), size: 21, font: 'Arial' })] })] })) }))
      }),
    ],
  }],
});

Packer.toBuffer(doc).then((buffer) => fs.writeFileSync(out, buffer));