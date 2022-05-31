import styles from '../components/layout.module.css'
import styled from 'styled-components'
import utilStyles from '../styles/utils.module.css'
import { pc, sp, tab } from '../utils/media';
import React, { useState } from 'react'

// アプリ情報一覧
const appsInfos = [
    
    { id: 'DDApp',
      name: 'Fake Tr●llo',
      work: 'チーム開発（４人）',
      type: 'React + Spring Boot',
      time: '5ヶ月',
      explanation: 'Tr●lloをモデルとしたD&D(ドラッグ＆ドロップ)で操作可能なToDoアプリ',
      difficulty: 'はじめてのReact、基本的なCRUD操作',
      comment: 'モーダル表示/非表示の切り替え、チュートリアルGif、入力値のCRUD操作'
    },

    { id: 'Blackjack', 
      name: 'SPA Black Jack',
      work: '個人開発', 
      type: 'React + Java Script', 
      time: '3ヶ月', 
      explanation: 'SPAで遊べるBlack Jack' ,
      difficulty: 'componentのライフサイクルへの意識',
      comment: '全て：新人PGの登竜門として作成しました。外部APIの利用・非同期通信など、たくさんのことを学びました。'
    },

    { id: 'NextCovidCharts', 
      name: 'Next Covid Charts',
      work: 'チーム開発（2人）', 
      type: 'Next.js + Java Script', 
      time: '5ヶ月', 
      explanation: 'コロナに関する様々なデータを取得できるアプリ', 
      difficulty: '型意識',
      comment: 'ローディング画面、JSONデータに紐づくチャートの表示（ライブラリ使用）'
    },

    { id: 'EnglishConversation', 
      name: 'KaTROPA ENGLISH HP',
      work: '個人開発', 
      type: 'HTML + CSS + JS ', 
      time: '４ヶ月', 
      explanation: 'お世話になっている英会話教室のために、シンプルなHPを作成しました。' ,
      difficulty: 'メール操作：APIを利用した',
      comment: '全て：情報発信・新規顧客獲得の機会として、提案・提供まで一貫して行いました。社内報の執筆もし、濃い経験となりました。'
    },

    { id: 'Portfolio', 
      name: 'Portfolio',
      work: '個人開発', 
      type: 'Next.js + Type Script',
      time: '3ヶ月', 
      explanation: 'このポートフォリオです',
      difficulty: 'event系の操作全般',
      comment: '全て：自分自身の技術＋知識の情報発信の場が欲しいと思い作成に至りました。型定義に翻弄されました。'
    },

    { id: 'java', 
      name: 'java',
      work: '個人開発', 
      type: 'java',
      time: '3ヶ月', 
      explanation: '考え中',
      difficulty: '考え中',
      comment: '全て：'
  }
]

// 上記アプリ情報一覧からIDに紐づいたアプリデータを取得する
export const findAppInfo = (idProp) => appsInfos.find(function(appsInfo: {
        id: string
        name: string
        work: string
        type: string
        time: string
        explanation: string
        difficulty: string
        comment: string
    }): string | undefined {
        if(appsInfo.id === idProp) {
            return appsInfo.id
        }
    }
)




