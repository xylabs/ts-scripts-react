#!/usr/bin/env node
import { execSync } from 'child_process'
console.log(`Sitemap [${process.cwd()}]`)
execSync('yarn dlx ts-node-script ./scripts/sitemap.ts', { stdio: 'inherit' })
