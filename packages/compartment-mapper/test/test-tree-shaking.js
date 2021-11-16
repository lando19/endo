import 'ses';
import test from 'ava';
import fs from 'fs';
import crypto from 'crypto';
import { mark } from '../src/tree-shaking.js';
import { search } from '../src/search.js';
import { compartmentMapForNodeModules } from '../src/node-modules.js';
import { makeNodeReadPowers } from '../src/node-powers.js';
import { makeImportHookMaker } from '../src/import-hook.js';
import { parserForLanguage } from '../src/import.js';
import { link } from '../src/link.js';
import { renameCompartments, translateCompartmentMap, renameSources } from '../src/archive.js';

const readPowers = makeNodeReadPowers(fs, crypto);
const { read } = readPowers;

const moduleLocation = new URL('fixtures-tree-shaking/node_modules/app/index.js', import.meta.url);

test('tree shaking', async t => {
  const { packageLocation, moduleSpecifier } = await search(read, moduleLocation);
  const compartmentMap = await compartmentMapForNodeModules(readPowers, packageLocation, new Set(), undefined, moduleSpecifier);
  const sources = {};
  const makeImportHook = makeImportHookMaker(read, packageLocation, sources, compartmentMap.compartments);
  const { compartment } = await link(compartmentMap, { makeImportHook, parserForLanguage });
  await compartment.load(moduleSpecifier);
  // console.log(JSON.stringify(compartmentMap, null, 2));
  const renames = renameCompartments(compartmentMap.compartments);
  const translatedCompartmentMap = translateCompartmentMap(compartmentMap, sources, renames);
  // console.log(JSON.stringify(translatedCompartmentMap, null, 2));
  const renamedSources = renameSources(sources, renames);
  console.log(JSON.stringify(translatedCompartmentMap, null, 2));
  t.pass();
});
