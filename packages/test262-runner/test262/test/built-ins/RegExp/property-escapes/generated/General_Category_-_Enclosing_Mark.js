// Copyright 2019 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `General_Category=Enclosing_Mark`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v12.1.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x001ABE
  ],
  ranges: [
    [0x000488, 0x000489],
    [0x0020DD, 0x0020E0],
    [0x0020E2, 0x0020E4],
    [0x00A670, 0x00A672]
  ]
});
testPropertyEscapes(
  /^\p{General_Category=Enclosing_Mark}+$/u,
  matchSymbols,
  "\\p{General_Category=Enclosing_Mark}"
);
testPropertyEscapes(
  /^\p{General_Category=Me}+$/u,
  matchSymbols,
  "\\p{General_Category=Me}"
);
testPropertyEscapes(
  /^\p{gc=Enclosing_Mark}+$/u,
  matchSymbols,
  "\\p{gc=Enclosing_Mark}"
);
testPropertyEscapes(
  /^\p{gc=Me}+$/u,
  matchSymbols,
  "\\p{gc=Me}"
);
testPropertyEscapes(
  /^\p{Enclosing_Mark}+$/u,
  matchSymbols,
  "\\p{Enclosing_Mark}"
);
testPropertyEscapes(
  /^\p{Me}+$/u,
  matchSymbols,
  "\\p{Me}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x0020E1
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x000487],
    [0x00048A, 0x001ABD],
    [0x001ABF, 0x0020DC],
    [0x0020E5, 0x00A66F],
    [0x00A673, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{General_Category=Enclosing_Mark}+$/u,
  nonMatchSymbols,
  "\\P{General_Category=Enclosing_Mark}"
);
testPropertyEscapes(
  /^\P{General_Category=Me}+$/u,
  nonMatchSymbols,
  "\\P{General_Category=Me}"
);
testPropertyEscapes(
  /^\P{gc=Enclosing_Mark}+$/u,
  nonMatchSymbols,
  "\\P{gc=Enclosing_Mark}"
);
testPropertyEscapes(
  /^\P{gc=Me}+$/u,
  nonMatchSymbols,
  "\\P{gc=Me}"
);
testPropertyEscapes(
  /^\P{Enclosing_Mark}+$/u,
  nonMatchSymbols,
  "\\P{Enclosing_Mark}"
);
testPropertyEscapes(
  /^\P{Me}+$/u,
  nonMatchSymbols,
  "\\P{Me}"
);