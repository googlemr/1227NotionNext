/* eslint-disable react/no-unknown-property */
/**
 * Apple-like polish (only takes effect when this theme is active)
 * 注意：
 * 1) 这里是 styled-jsx 模板字符串，CSS 注释只能用 /* *\/，不要用 //
 * 2) 不要把任何终端命令粘进这个文件
 */
const Style = () => {
  return (
    <style jsx global>{`
      /* ===== Tokens ===== */
      :root{
        --bg:#f5f5f7;
        --bg2:#ffffff;
        --card:rgba(255,255,255,.78);
        --card2:rgba(255,255,255,.92);
        --text:rgba(0,0,0,.88);
        --muted:rgba(0,0,0,.56);
        --border:rgba(0,0,0,.10);
        --brand:#0071e3;
        --radius:18px;
        --shadow:0 1px 1px rgba(0,0,0,.04),0 6px 20px rgba(0,0,0,.06);
        --shadow2:0 2px 10px rgba(0,0,0,.10),0 24px 80px rgba(0,0,0,.18);
        --ease:cubic-bezier(.22,1,.36,1);
        --maxw:1120px;
      }
      .dark{
        --bg:#0b0b0f;
        --bg2:#121216;
        --card:rgba(18,18,22,.72);
        --card2:rgba(18,18,22,.86);
        --text:rgba(255,255,255,.90);
        --muted:rgba(255,255,255,.58);
        --border:rgba(255,255,255,.12);
        --brand:#2997ff;
        --shadow:0 1px 1px rgba(0,0,0,.22),0 10px 30px rgba(0,0,0,.35);
        --shadow2:0 2px 10px rgba(0,0,0,.35),0 24px 80px rgba(0,0,0,.55);
      }

      /* ===== Base ===== */
      html{
        scroll-behavior:smooth;
        text-rendering:optimizeLegibility;
        -webkit-font-smoothing:antialiased;
        -moz-osx-font-smoothing:grayscale;
      }

      body{
        background:
          radial-gradient(1200px 500px at 50% -120px, rgba(0,113,227,.10), transparent 55%),
          var(--bg);
        color:var(--text);
        font-family:-apple-system,BlinkMacSystemFont,"SF Pro Text","SF Pro Display","Helvetica Neue",
          Helvetica,Arial,"PingFang SC","Hiragino Sans GB","Microsoft YaHei",sans-serif;
        letter-spacing:-.01em;
      }

      a{ color:var(--brand); text-decoration:none; transition:opacity 160ms var(--ease); }
      a:hover{ opacity:.85; }
      ::selection{ background:rgba(0,113,227,.18); }

      /* ===== Theme root ===== */
      #theme-matery{
        max-width:var(--maxw);
        margin:0 auto;
        color:var(--text);
      }

      /* 让 Tailwind 的灰底更“苹果”一点（你 index.js 里写了 bg-hexo-background-gray） */
      #theme-matery{
        background:transparent;
      }

      /* ===== Typography ===== */
      h1,h2,h3{ letter-spacing:-.02em; }
      p,li{ line-height:1.78; }
      small,.text-muted{ color:var(--muted); }

      /* ===== Header cover polish (如果命中 Matery 头图) ===== */
      #theme-matery .header-cover{
        border-radius:calc(var(--radius) + 8px);
        overflow:hidden;
        box-shadow:var(--shadow2);
      }
      #theme-matery .header-cover::before{
        content:'';
        position:absolute;
        inset:0;
        background:linear-gradient(
          to bottom,
          rgba(0,0,0,.35) 0%,
          rgba(0,0,0,.18) 18%,
          rgba(0,0,0,.02) 42%,
          rgba(0,0,0,.18) 78%,
          rgba(0,0,0,.38) 100%
        );
        pointer-events:none;
      }

      /* ===== Glass cards + micro interaction ===== */
      .card,.post,article,.post-item,.blog-item,.index-card{
        background:var(--card);
        border:1px solid var(--border);
        border-radius:var(--radius);
        box-shadow:var(--shadow);
        backdrop-filter:saturate(180%) blur(18px);
        -webkit-backdrop-filter:saturate(180%) blur(18px);
        transition:
          transform 220ms var(--ease),
          box-shadow 220ms var(--ease),
          border-color 220ms var(--ease),
          background 220ms var(--ease);
      }
      .card:hover,.post:hover,article:hover,.post-item:hover,.blog-item:hover,.index-card:hover{
        transform:translateY(-4px);
        box-shadow:var(--shadow2);
        border-color:rgba(0,113,227,.22);
        background:var(--card2);
      }
      img,video{ border-radius:calc(var(--radius) - 6px); }

      /* ===== Buttons (pill + subtle) ===== */
      button,.btn,.button,a.button{
        border-radius:999px;
        border:1px solid rgba(0,0,0,.10);
        background:rgba(255,255,255,.70);
        color:var(--text);
        backdrop-filter:saturate(180%) blur(16px);
        -webkit-backdrop-filter:saturate(180%) blur(16px);
        transition:transform 160ms var(--ease), box-shadow 160ms var(--ease), background 160ms var(--ease);
      }
      .dark button,.dark .btn,.dark .button,.dark a.button{
        border:1px solid rgba(255,255,255,.14);
        background:rgba(18,18,22,.65);
      }
      button:hover,.btn:hover,.button:hover,a.button:hover{
        transform:translateY(-1px);
        box-shadow:0 10px 30px rgba(0,0,0,.12);
      }

      /* ===== Nav / Header glass (通用选择器，命中就变高级，不命中也不会破坏) ===== */
      #theme-matery header,
      #theme-matery .header,
      #theme-matery nav,
      #theme-matery .navbar{
        background:rgba(245,245,247,.72);
        border-bottom:1px solid rgba(0,0,0,.08);
        backdrop-filter:saturate(180%) blur(18px);
        -webkit-backdrop-filter:saturate(180%) blur(18px);
      }
      .dark #theme-matery header,
      .dark #theme-matery .header,
      .dark #theme-matery nav,
      .dark #theme-matery .navbar{
        background:rgba(18,18,22,.70);
        border-bottom:1px solid rgba(255,255,255,.10);
      }

      /* ===== Search highlight (你 index.js 用 replaceSearchResult 插入 span) ===== */
      #theme-matery .replace span{
        border-bottom:1px dashed rgba(0,113,227,.45);
        color:var(--brand);
      }

      /* ===== Scrollbar (subtle) ===== */
      ::-webkit-scrollbar{ width:10px; height:10px; }
      ::-webkit-scrollbar-track{ background:transparent; }
      ::-webkit-scrollbar-thumb{
        background-color:rgba(0,0,0,.22);
        border-radius:999px;
        border:3px solid transparent;
        background-clip:content-box;
      }
      .dark ::-webkit-scrollbar-thumb{ background-color:rgba(255,255,255,.22); }
      *{ scrollbar-width:thin; scrollbar-color:rgba(0,0,0,.25) transparent; }
      .dark *{ scrollbar-color:rgba(255,255,255,.25) transparent; }

      /* ===== Reduce motion ===== */
      @media (prefers-reduced-motion: reduce){
        *{ transition:none !important; animation:none !important; scroll-behavior:auto !important; }
      }
      /* ===== Apple frosted nav (for Header.js) ===== */
#theme-matery .apple-nav{
  background: rgba(245,245,247,0.72);
  border-bottom: 1px solid rgba(0,0,0,0.08);
  backdrop-filter: saturate(180%) blur(18px);
  -webkit-backdrop-filter: saturate(180%) blur(18px);
  box-shadow: 0 1px 0 rgba(0,0,0,0.04);
}

.dark #theme-matery .apple-nav{
  background: rgba(18,18,22,0.70);
  border-bottom: 1px solid rgba(255,255,255,0.10);
  box-shadow: 0 1px 0 rgba(255,255,255,0.06);
}

/* 首页顶部大图时更“通透” */
#theme-matery .apple-nav.apple-nav--transparent{
  background: rgba(245,245,247,0.20);
  border-bottom-color: rgba(0,0,0,0.06);
  box-shadow: none;
}

.dark #theme-matery .apple-nav.apple-nav--transparent{
  background: rgba(18,18,22,0.22);
  border-bottom-color: rgba(255,255,255,0.08);
  box-shadow: none;
}

/* 滚动后更“实”、更清晰 */
#theme-matery .apple-nav.apple-nav--solid{
  background: rgba(245,245,247,0.78);
}

.dark #theme-matery .apple-nav.apple-nav--solid{
  background: rgba(18,18,22,0.78);
}

    `}</style>
  )
}

export { Style };
