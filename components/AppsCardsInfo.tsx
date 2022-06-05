import styles from '../components/layout.module.css'
import styled from 'styled-components'
import utilStyles from '../styles/utils.module.css'
import { pc, sp, tab } from '../utils/media';
import React, { useState } from 'react'

// アプリ情報一覧
const appsInfos = [
    
    { id: 'DDApp',
      name: 'Fake Tr●llo',
      work: 'チーム（４人）',
      type: 'React + Spring Boot',
      time: '5ヶ月',
      link: 'http://faketrello.herokuapp.com/login',
      gif: 'images/AppInfoGif/Trello.gif',
      explanation: 'D&D(ドラッグ＆ドロップ)ToDoアプリ',
      difficulty: 'React自体への理解、基本的なCRUD操作',
      comment: 'モーダル表示/非表示の切り替え、チュートリアルGif、入力値のCRUD操作。Tr●lloをモデルに基本的なCRUD操作を学びました。'
    },

    { id: 'Blackjack', 
      name: 'SPA Black Jack',
      work: '個人', 
      type: 'React + JS', 
      time: '3ヶ月',
      link: 'https://black-jack-spa.vercel.app',
      gif: 'images/AppInfoGif/BJ.gif',
      explanation: 'SPAで遊べるBlack Jack' ,
      difficulty: 'componentライフサイクルへの意識',
      comment: '全て：新人PGの登竜門として作成しました。外部APIの利用・非同期通信など、たくさんのことを学びました。つくりはかなり荒いですが許してください、いつか直します。'
    },

    { id: 'NextCovidCharts', 
      name: 'Next Covid Charts',
      work: 'チーム（2人）', 
      type: 'Next.js + JS', 
      time: '5ヶ月', 
      link: 'http://localhost:3000/',
      gif: 'images/AppInfoGif/NCC.gif',
      explanation: 'コロナ関連データ取得アプリ', 
      difficulty: '型意識',
      comment: 'ローディング画面、JSONデータに紐づくチャートの表示（ライブラリ使用）'
    },

    { id: 'EnglishConversation', 
      name: 'KaTROPA ENGLISH TODAY HP',
      work: '個人', 
      type: 'HTML + CSS + JS ', 
      time: '４ヶ月',
      link: 'https://katropa-english-today.netlify.app/index.html', 
      gif: 'images/AppInfoGif/KET.png',
      explanation: '英会話教室のHP' ,
      difficulty: 'クライアントとの調整、メール機能（APIで対応）',
      comment: '全て：お世話になっている英会話教室のために作成。情報発信・新規顧客獲得の機会として、提案・提供まで一貫して行いました。実際に申し込み可能なので、興味がある方は是非申し込んでみてください。'
    },

    { id: 'Portfolio', 
      name: 'Portfolio',
      work: '個人', 
      type: 'Next.js + Type Script',
      time: '3ヶ月', 
      link: 'https://portfolio-by-simon.vercel.app',
      gif: 'images/AppInfoGif/PF.png',
      explanation: 'このポートフォリオです',
      difficulty: 'event系の操作全般',
      comment: '全て：自分自身の技術＋知識の情報発信の場が欲しいと思い作成に至りました。型定義に翻弄されました。'
    },

    { id: 'java', 
      name: '検討中',
      work: '個人', 
      type: '多分Java',
      time: '3ヶ月', 
      link: 'まだないです',
      gif: 'images/Construction.png',
      explanation: '考え中',
      difficulty: 'いろいろ苦労しそう',
      comment: '全て'
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




