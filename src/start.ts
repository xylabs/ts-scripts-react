#!/usr/bin/env node
import { execSync } from 'child_process'
console.log(`Start [${process.cwd()}]`)
execSync('yarn dlx react-scripts start', { stdio: 'inherit' })
