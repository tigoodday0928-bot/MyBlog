---
title: 關於我 About ME
description: 關於這個部落格和作者的一切
date: 2026-05-06
lastmod: 2026-05-06
draft: false
toc: false
slug: about
type: page
bodyClass: about-page
menu:
    main:
        weight: -90
        params:
            icon: user
---

<div class="about-hero about-reveal">
    <div class="about-hero__card" id="about-hero-card">
        <img src="/img/banner.png" alt="Banner">
        <div class="about-hero__shine"></div>
        <div class="about-hero__plate">
            <div class="about-hero__name">Life with everything</div>
            <div class="about-hero__tagline">記錄生命中的每一個美好瞬間・旅遊・美食・電玩</div>
        </div>
    </div>
</div>

<div class="about-intro about-reveal">
    <div class="about-title">👋 Hi，我是 Hazwle</div>
    <div class="about-text">這個部落格記錄著我的日常生活——旅遊景點、美食體驗、電玩心得，以及各種我喜歡的事物。</div>
    <div class="about-text">這裡有去過的地方、吃過的店，也有遊戲裡的精彩瞬間和看完電影後的碎碎念，都是想留給未來的自己回味的片段與紀錄。</div>
    <div class="about-text">希望這裡的內容能讓你感到有趣，或是找到共鳴 🎨</div>
    <div class="about-links">
        <a href="/categories/遊玩景點/">📍 遊玩景點</a>
        <a href="/categories/美食紀錄/">🍜 美食紀錄</a>
        <a href="/categories/電玩精華/">🎮 電玩精華</a>
        <a href="/categories/自創內容/">✏️ 自創內容</a>
        <a href="/categories/影劇心得/">🎬 影劇心得</a>
    </div>
    <div class="about-facts">
        <div class="about-fact"><div class="about-fact__k">📍 常駐地</div><div class="about-fact__v">燕雲十六聲</div></div>
        <div class="about-fact"><div class="about-fact__k">🎮 最近在玩</div><div class="about-fact__v">APEX、特戰英豪</div></div>
        <div class="about-fact"><div class="about-fact__k">📚 最近在看</div><div class="about-fact__v">光陰之外</div></div>
        <div class="about-fact"><div class="about-fact__k">🍜 最愛的食物</div><div class="about-fact__v">火鍋</div></div>
    </div>
</div>

<div class="about-gacha about-reveal" id="about-gacha">
    <div class="about-gacha__head">
        <div class="about-gacha__title">🎴 抽抽看，認識我</div>
        <div class="about-gacha__count">已收集 <b id="gacha-count">0</b> / 5</div>
    </div>
    <div class="about-gacha__grid">
        <button type="button" class="gacha-card" data-rarity="SSR">
            <span class="gacha-card__inner">
                <span class="gacha-card__face gacha-card__back">？</span>
                <span class="gacha-card__face gacha-card__front">
                    <span class="gacha-card__rarity"></span>
                    <span class="gacha-card__emoji">🎮</span>
                    <span class="gacha-card__label">重度抽卡遊戲成癮者</span>
                </span>
            </span>
        </button>
        <button type="button" class="gacha-card" data-rarity="SSR">
            <span class="gacha-card__inner">
                <span class="gacha-card__face gacha-card__back">？</span>
                <span class="gacha-card__face gacha-card__front">
                    <span class="gacha-card__rarity"></span>
                    <span class="gacha-card__emoji">🎲</span>
                    <span class="gacha-card__label">具備高度賭徒精神</span>
                </span>
            </span>
        </button>
        <button type="button" class="gacha-card" data-rarity="SR">
            <span class="gacha-card__inner">
                <span class="gacha-card__face gacha-card__back">？</span>
                <span class="gacha-card__face gacha-card__front">
                    <span class="gacha-card__rarity"></span>
                    <span class="gacha-card__emoji">📖</span>
                    <span class="gacha-card__label">喜好閱讀、觀賞戲劇電影</span>
                </span>
            </span>
        </button>
        <button type="button" class="gacha-card" data-rarity="SSR">
            <span class="gacha-card__inner">
                <span class="gacha-card__face gacha-card__back">？</span>
                <span class="gacha-card__face gacha-card__front">
                    <span class="gacha-card__rarity"></span>
                    <span class="gacha-card__emoji">👾</span>
                    <span class="gacha-card__label">閒暇時與朋友玩各種遊戲</span>
                </span>
            </span>
        </button>
        <button type="button" class="gacha-card" data-rarity="R">
            <span class="gacha-card__inner">
                <span class="gacha-card__face gacha-card__back">？</span>
                <span class="gacha-card__face gacha-card__front">
                    <span class="gacha-card__rarity"></span>
                    <span class="gacha-card__emoji">🎬</span>
                    <span class="gacha-card__label">偶爾剪剪遊玩影片</span>
                </span>
            </span>
        </button>
    </div>
    <div class="about-gacha__actions">
        <button type="button" id="gacha-draw" class="gacha-btn">🎲 抽一張</button>
        <button type="button" id="gacha-reset" class="gacha-btn gacha-btn--ghost">↺ 重置</button>
    </div>
    <div class="about-gacha__msg" id="gacha-msg"></div>
</div>

<div class="about-title about-reveal">📸 旅遊 &amp; 遊戲時光</div>

{{< photo-wall >}}

<div class="about-title about-reveal">✉️ 聯絡我</div>

<div class="about-mail about-reveal">
    <div class="about-text">有任何問題、合作邀請，或只是想打聲招呼，都歡迎填寫下方表單！</div>
    <form action="https://formspree.io/f/xpqbrjaw" method="POST" style="max-width: 500px; margin: 20px auto; display: flex; flex-direction: column; gap: 16px;">
        <input 
            type="email" 
            name="email" 
            placeholder="你的 Email" 
            required
            style="padding: 12px 16px; border-radius: 10px; border: 1px solid rgba(150,123,182,0.3); font-size: 1.2rem; outline: none;">
        <textarea 
            name="message" 
            placeholder="想說什麼呢？" 
            rows="5" 
            required
            style="padding: 12px 16px; border-radius: 10px; border: 1px solid rgba(150,123,182,0.3); font-size: 1.2rem; outline: none; resize: vertical;"></textarea>
        <button 
            type="submit"
            style="padding: 15px; background: #967BB6; color: #fff; border: none; border-radius: 13px; font-size: 1.3rem; font-weight: bold; cursor: pointer;">
            送出 ✉️
        </button>
    </form>
</div>
