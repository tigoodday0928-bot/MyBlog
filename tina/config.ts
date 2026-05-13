import { defineConfig } from "tinacms";

const branch = "main";

export default defineConfig({
  branch,
  clientId: "ca5ad85b-8a6e-444b-b7ba-eb350d992022",
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "content/posts",
      publicFolder: "",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        // 這裡設定格式，確保相容 Hugo 的 index.md 結構
        format: "md", 
        fields: [
          {
            type: "string",
            name: "title",
            label: "標題",
            isTitle: true,
            required: true,
          },
          {
            type: "image",
            name: "image",
            label: "文章封面圖",
            description: "對應 Hugo Stack 主題的封面圖片",
          },
          {
            type: "datetime",
            name: "date",
            label: "發布日期",
            required: true,
          },
          {
            type: "string",
            name: "categories",
            label: "分類",
            list: true,
          },
          {
            type: "string",
            name: "tags",
            label: "標籤",
            list: true,
          },
          {
            type: "boolean",
            name: "draft",
            label: "草稿狀態",
          },
          {
            type: "rich-text",
            name: "body",
            label: "內容正文",
            isBody: true,
            // 這裡最重要：註冊 Shortcodes，解決反斜線和無法解析的問題
            templates: [
              {
                name: "figure",
                label: "帶說明圖片 (Figure)",
                fields: [
                  { name: "src", label: "圖片路徑", type: "image" },
                  { name: "title", label: "圖片標題", type: "string" },
                  { name: "caption", label: "說明文字", type: "string" },
                ],
              },
              {
                name: "masonry",
                label: "不規則照片牆",
                fields: [
                   { name: "children", label: "內容", type: "rich-text" }
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});