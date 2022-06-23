#!/usr/bin/env node
import { execSync } from 'child_process'
console.log(`Analyze [${process.cwd()}]`)
execSync("yarn dlx source-map-explorer 'build/static/js/*.js'", { stdio: 'inherit' })
