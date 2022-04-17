<h1>
pick-omit <a href="https://npmjs.org/package/pick-omit"><img src="https://img.shields.io/badge/npm-v1.0.0-F00.svg?colorA=000"/></a> <a href="src"><img src="https://img.shields.io/badge/loc-13-FFF.svg?colorA=000"/></a> <a href="https://cdn.jsdelivr.net/npm/pick-omit@1.0.0/dist/pick-omit.min.js"><img src="https://img.shields.io/badge/brotli-144b-333.svg?colorA=000"/></a> <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-F0B.svg?colorA=000"/></a>
</h1>

<p></p>

The two missing object methods we always need.

<h4>
<table><tr><td title="Triple click to select and copy paste">
<code>npm i pick-omit </code>
</td><td title="Triple click to select and copy paste">
<code>pnpm add pick-omit </code>
</td><td title="Triple click to select and copy paste">
<code>yarn add pick-omit</code>
</td></tr></table>
</h4>

## API

<p>  <details id="Key$1" title="TypeAlias" ><summary><span><a href="#Key$1">#</a></span>  <code><strong>Key</strong></code>    </summary>  <a href="src/pick-omit.ts#L1">src/pick-omit.ts#L1</a>  <ul><p>string | number | symbol</p>        </ul></details><details id="ObjectFromList$2" title="TypeAlias" ><summary><span><a href="#ObjectFromList$2">#</a></span>  <code><strong>ObjectFromList</strong></code>    </summary>  <a href="src/pick-omit.ts#L4">src/pick-omit.ts#L4</a>  <ul><p>[K   in   <a href="#T$3">T</a> extends <span>ReadonlyArray</span>&lt;inferred&gt; ? <span>U</span> : never  ]:  <a href="#V$4">V</a></p>        </ul></details><details id="omit$11" title="Function" ><summary><span><a href="#omit$11">#</a></span>  <code><strong>omit</strong></code><em>(obj, props)</em>     &ndash; Create a new object with certain properties omitted.</summary>  <a href="src/pick-omit.ts#L25">src/pick-omit.ts#L25</a>  <ul>    <p>    <details id="obj$15" title="Parameter" ><summary><span><a href="#obj$15">#</a></span>  <code><strong>obj</strong></code>     &ndash; Object to omit from.</summary>    <ul><p><a href="#T$13">T</a></p>        </ul></details><details id="props$16" title="Parameter" ><summary><span><a href="#props$16">#</a></span>  <code><strong>props</strong></code>     &ndash; Properties to omit.</summary>    <ul><p><a href="#K$14">K</a></p>        </ul></details>  <p><strong>omit</strong>&lt;<span>T</span>, <span>K</span>&gt;<em>(obj, props)</em>  &nbsp;=&gt;  <ul><span>Omit</span>&lt;<a href="#T$13">T</a>, <a href="#K$14">K</a> extends readonly     <span>U</span>  [] ? <span>U</span> : never&gt;</ul></p></p>    </ul></details><details id="pick$5" title="Function" ><summary><span><a href="#pick$5">#</a></span>  <code><strong>pick</strong></code><em>(obj, props)</em>     &ndash; Pick properties from an object into a new object.</summary>  <a href="src/pick-omit.ts#L15">src/pick-omit.ts#L15</a>  <ul>    <p>    <details id="obj$9" title="Parameter" ><summary><span><a href="#obj$9">#</a></span>  <code><strong>obj</strong></code>     &ndash; Object to pick from.</summary>    <ul><p><a href="#T$7">T</a></p>        </ul></details><details id="props$10" title="Parameter" ><summary><span><a href="#props$10">#</a></span>  <code><strong>props</strong></code>     &ndash; Properties to pick.</summary>    <ul><p><a href="#K$8">K</a></p>        </ul></details>  <p><strong>pick</strong>&lt;<span>T</span>, <span>K</span>&gt;<em>(obj, props)</em>  &nbsp;=&gt;  <ul><span>Pick</span>&lt;<a href="#T$7">T</a>, <a href="#K$8">K</a> extends readonly     <span>U</span>  [] ? <span>U</span> : never&gt;</ul></p></p>    </ul></details></p>

## Contributing

[Fork](https://github.com/stagas/pick-omit/fork) or [edit](https://github.dev/stagas/pick-omit) and submit a PR.

All contributions are welcome!

## License

<a href="LICENSE">MIT</a> &copy; 2022 [stagas](https://github.com/stagas)
