#!/usr/bin/env node
import { execSync } from 'child_process'
console.log(`Start [${process.cwd()}]`)
execSync('yarn react-scripts start', { stdio: 'inherit' })
