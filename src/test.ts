#!/usr/bin/env node
import { execSync } from 'child_process'
console.log(`Test [${process.cwd()}]`)
execSync('yarn dlx react-scripts test', { stdio: 'inherit' })
