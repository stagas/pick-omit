<h1>
pick-omit <a href="https://npmjs.org/package/pick-omit"><img src="https://img.shields.io/badge/npm-v2.0.1-F00.svg?colorA=000"/></a> <a href="src"><img src="https://img.shields.io/badge/loc-18-FFF.svg?colorA=000"/></a> <a href="https://cdn.jsdelivr.net/npm/pick-omit@2.0.1/dist/pick-omit.min.js"><img src="https://img.shields.io/badge/brotli-208b-333.svg?colorA=000"/></a> <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-F0B.svg?colorA=000"/></a>
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

<p>  <details id="ObjectFilterFn$1" title="TypeAlias" ><summary><span><a href="#ObjectFilterFn$1">#</a></span>  <code><strong>ObjectFilterFn</strong></code>    </summary>  <a href="src/pick-omit.ts#L3">src/pick-omit.ts#L3</a>  <ul><p><details id="__type$2" title="Function" ><summary><span><a href="#__type$2">#</a></span>  <em>(entry)</em>    </summary>    <ul>    <p>    <details id="entry$4" title="Parameter" ><summary><span><a href="#entry$4">#</a></span>  <code><strong>entry</strong></code>    </summary>    <ul><p>[  string, unknown  ]</p>        </ul></details>  <p><strong></strong><em>(entry)</em>  &nbsp;=&gt;  <ul>boolean</ul></p></p>    </ul></details></p>        </ul></details><details id="filter$5" title="Function" ><summary><span><a href="#filter$5">#</a></span>  <code><strong>filter</strong></code><em>(obj, fn)</em>     &ndash; Filter object with filter function <code>fn</code>.</summary>  <a href="src/pick-omit.ts#L12">src/pick-omit.ts#L12</a>  <ul>    <p>    <details id="obj$8" title="Parameter" ><summary><span><a href="#obj$8">#</a></span>  <code><strong>obj</strong></code>     &ndash; Object to filter.</summary>    <ul><p><a href="#T$7">T</a></p>        </ul></details><details id="fn$9" title="Parameter" ><summary><span><a href="#fn$9">#</a></span>  <code><strong>fn</strong></code>     &ndash; Filter function receiving [key, value].</summary>    <ul><p><a href="#ObjectFilterFn$1">ObjectFilterFn</a></p>        </ul></details>  <p><strong>filter</strong>&lt;<span>T</span>&gt;<em>(obj, fn)</em>  &nbsp;=&gt;  <ul><span>Partial</span>&lt;<a href="#T$7">T</a>&gt;</ul></p></p>    </ul></details><details id="nonNull$10" title="Function" ><summary><span><a href="#nonNull$10">#</a></span>  <code><strong>nonNull</strong></code><em>(obj)</em>     &ndash; Filter out nullish values from object.</summary>  <a href="src/pick-omit.ts#L23">src/pick-omit.ts#L23</a>  <ul>    <p>    <details id="obj$13" title="Parameter" ><summary><span><a href="#obj$13">#</a></span>  <code><strong>obj</strong></code>     &ndash; Object to filter.</summary>    <ul><p><a href="#T$12">T</a></p>        </ul></details>  <p><strong>nonNull</strong>&lt;<span>T</span>&gt;<em>(obj)</em>  &nbsp;=&gt;  <ul><span>Pick</span>&lt;<a href="#T$12">T</a>, keyof     <span>NonNull</span>&lt;<a href="#T$12">T</a>&gt;&gt;</ul></p></p>    </ul></details><details id="omit$20" title="Function" ><summary><span><a href="#omit$20">#</a></span>  <code><strong>omit</strong></code><em>(obj, props)</em>     &ndash; Create a new object with certain properties omitted.</summary>  <a href="src/pick-omit.ts#L46">src/pick-omit.ts#L46</a>  <ul>    <p>    <details id="obj$24" title="Parameter" ><summary><span><a href="#obj$24">#</a></span>  <code><strong>obj</strong></code>     &ndash; Object to omit from.</summary>    <ul><p><a href="#T$22">T</a></p>        </ul></details><details id="props$25" title="Parameter" ><summary><span><a href="#props$25">#</a></span>  <code><strong>props</strong></code>     &ndash; Properties to omit.</summary>    <ul><p><a href="#K$23">K</a></p>        </ul></details>  <p><strong>omit</strong>&lt;<span>T</span>, <span>K</span>&gt;<em>(obj, props)</em>  &nbsp;=&gt;  <ul><span>Omit</span>&lt;<a href="#T$22">T</a>, <a href="#K$23">K</a> extends readonly     <span>U</span>  [] ? <span>U</span> : never&gt;</ul></p></p>    </ul></details><details id="pick$14" title="Function" ><summary><span><a href="#pick$14">#</a></span>  <code><strong>pick</strong></code><em>(obj, props)</em>     &ndash; Pick properties from an object into a new object.</summary>  <a href="src/pick-omit.ts#L33">src/pick-omit.ts#L33</a>  <ul>    <p>    <details id="obj$18" title="Parameter" ><summary><span><a href="#obj$18">#</a></span>  <code><strong>obj</strong></code>     &ndash; Object to pick from.</summary>    <ul><p><a href="#T$16">T</a></p>        </ul></details><details id="props$19" title="Parameter" ><summary><span><a href="#props$19">#</a></span>  <code><strong>props</strong></code>     &ndash; Properties to pick.</summary>    <ul><p><a href="#K$17">K</a></p>        </ul></details>  <p><strong>pick</strong>&lt;<span>T</span>, <span>K</span>&gt;<em>(obj, props)</em>  &nbsp;=&gt;  <ul><span>Pick</span>&lt;<a href="#T$16">T</a>, <a href="#K$17">K</a> extends readonly     <span>U</span>  [] ? <span>U</span> : never&gt;</ul></p></p>    </ul></details></p>

## Credits

- [everyday-types](https://npmjs.org/package/everyday-types) by [stagas](https://github.com/stagas) &ndash; Everyday utility types

## Contributing

[Fork](https://github.com/stagas/pick-omit/fork) or [edit](https://github.dev/stagas/pick-omit) and submit a PR.

All contributions are welcome!

## License

<a href="LICENSE">MIT</a> &copy; 2022 [stagas](https://github.com/stagas)
