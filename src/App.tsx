// Copyright (c) midorin-Linux
import bgImg from "./assets/background.png"
import { VrcState } from "./components/status.tsx"
import { BoundariesPropCard } from "./components/boundaries.tsx"

function App() {
  return (
    <>
      <main className="relative min-h-screen w-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={bgImg}
            alt="background"
            className="h-full w-full object-cover"
          />
        </div>
        <p className="absolute bottom-2 left-2 text-xs text-white/60">
          ワールド: ParusuPblx / キャラクター: AOあお堂
        </p>
        <div className="absolute top-8 right-8 w-240 max-w-[90vw] rounded-lg bg-black/30 p-6 text-white backdrop-blur-sm">
          <div>
            <div className="flex flex-row items-end gap-4">
              <h2 className="text-4xl font-medium">やぁーさ</h2>
              <h3 className="text-2xl font-light">Desktop勢</h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/80">
              VRCをしているタルコフ市民です。
              <br />
              ワールド巡りだったり雑談、フレンドをホラワにつれていくのが好きです！
              気軽に話しかけてください!
            </p>
          </div>

          <div className="mt-2 flex flex-wrap gap-2">
            {["ワールド探索", "雑談厨", "写真撮影"].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/15 px-3 py-1 text-xs text-white/90"
              >
                #{tag}
              </span>
            ))}
          </div>

          <hr className="my-4 border-t border-gray-400" />

          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl font-light">ステータス</h3>
              <div className="mt-2 ml-2 flex flex-col gap-1.5">
                <VrcState color={"blue"} comment={"むしろ来てくれ"} />
                <VrcState color={"green"} comment={"いつでも招待良いよ～"} />
                <VrcState color={"yellow"} comment={"作業中。ちょいまち"} />
                <VrcState color={"red"} comment={"俺に構わないでくれ"} />
              </div>
            </div>

            <div className="border-l border-gray-400 pl-6">
              <h3 className="text-2xl font-light">フレンド申請</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/80">
                まーじで誰でもどうぞ
                <br />
                むしろフレンド増やしたいので少しでも気になったらぜひ！
              </p>
            </div>
          </div>

          <hr className="my-4 border-t border-gray-400" />

          <div>
            <h3 className="text-2xl font-light">Okなこと、NGなこと</h3>
            <div className="mt-2 grid grid-cols-3 gap-2">
              <BoundariesPropCard action={"触る"} degree={1} />
              <BoundariesPropCard action={"近距離"} degree={2} />
              <BoundariesPropCard action={"お砂糖"} degree={3} />
              <BoundariesPropCard action={"武器"} degree={1} />
              <BoundariesPropCard action={"暴言/暴力"} degree={1} />
              <BoundariesPropCard action={"下ネタ"} degree={1} />
            </div>
          </div>

          <hr className="my-4 border-t border-gray-400" />

          {/*<div>*/}
          {/*  <h3 className="mb-1 text-xs font-semibold tracking-wider text-white/60 uppercase">*/}
          {/*    使用アバター*/}
          {/*  </h3>*/}
          {/*  <p className="text-sm text-white/80">HIBIKI - Sample</p>*/}
          {/*</div>*/}

          <div>
            <h3 className="mb-2 text-xs font-semibold tracking-wider text-white/60 uppercase">
              Learn more about me
            </h3>
            <ul className="flex flex-col gap-1 text-sm">
              <li>
                <a
                  href="https://www.wayokan.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 underline decoration-white/30 underline-offset-2 transition-colors hover:text-white"
                >
                  https://www.wayokan.com/
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>

      {/*サムネイル用*/}
      {/*<main className="relative min-h-screen w-screen overflow-hidden">*/}
      {/*  <div className="absolute inset-0">*/}
      {/*    <img*/}
      {/*      src={bgImg}*/}
      {/*      alt="background"*/}
      {/*      className="h-full w-full object-cover"*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*  <p className="absolute bottom-2 left-2 text-xs text-white/60">*/}
      {/*    ワールド: ParusuPblx / キャラクター: AOあお堂*/}
      {/*  </p>*/}
      {/*  <div className="absolute top-8 right-8 w-240 max-w-[90vw] rounded-lg bg-black/30 p-6 text-white backdrop-blur-sm mt-24">*/}
      {/*    <div>*/}
      {/*      <div className="flex flex-row items-end gap-4 justify-center">*/}
      {/*        <h2 className="text-[156px] font-medium">やぁーさ<br />VRC自己紹介</h2>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</main>*/}
    </>
  )
}

export default App
